import styled from 'styled-components';
import { SVGCircle } from './svg-circle';
import {
  PanelContext,
  PanelItem,
  PanelContextType,
} from '@technique-map/design-system';
import { MoveType } from './map';
import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@technique-map/firebase';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PracticePlanType } from '@technique-map/practice-plans';
import { useParams } from 'react-router';

type ContentMapProps = {
  area: 'top' | 'bottom' | 'neutral';
  addToPracticePlan: (id: string) => void;
  content: string[];
  className?: string;
  moves: MoveType[];
};

const ReviewUrgencyIndicator = styled.div<{ $reviewUrgency: number }>`
  background-color: ${({ $reviewUrgency }) =>
    $reviewUrgency < 2
      ? 'var(--affirmative)'
      : $reviewUrgency < 7
      ? 'var(--caution)'
      : 'red'};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`;

type MoveSelectButtonPropTypes = {
  area: string;
  position: string;
  addToPracticePlan: (id: string) => void;
  practicePlans: PracticePlanType[];
  className?: string;
  move: { name: string; id: string };
};

const MoveSelectButton = styled(
  ({
    area,
    position,
    move,
    addToPracticePlan,
    practicePlans,
    className,
  }: MoveSelectButtonPropTypes) => {
    const calculateLastReviewed = (moveId: string) => {
      const plan = practicePlans.find((plan) => plan.moves.includes(moveId));
      return plan
        ? new Date(Number(plan.date.seconds) * 1000).toLocaleDateString()
        : 'Not Reviewed';
    };

    const lastReviewed = calculateLastReviewed(move.id);

    const calculateDaysSinceLastReview = (dateOfLastReview: string) => {
      if (dateOfLastReview === 'Not Reviewed') return Infinity;
      return Math.floor(
        (Date.parse(new Date().toLocaleDateString()) -
          Date.parse(dateOfLastReview)) /
          86400000
      );
    };

    return (
      <PanelItem
        className={className}
        key={`${area}-${position}-${move.name}`}
        addToPracticePlan={() => addToPracticePlan(move.id)}
      >
        <span>{move.name}</span>
        <span>Last Review: {lastReviewed}</span>
        <ReviewUrgencyIndicator
          $reviewUrgency={calculateDaysSinceLastReview(lastReviewed)}
        >
          {calculateDaysSinceLastReview(lastReviewed)}
        </ReviewUrgencyIndicator>
      </PanelItem>
    );
  }
)`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${ReviewUrgencyIndicator} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;

export const ContentMap = styled(
  ({ className, content, addToPracticePlan, area, moves }: ContentMapProps) => {
    const { showPanel, setPanelContent, setPanelTitle } = useContext(
      PanelContext
    ) as PanelContextType;
    const [practicePlans, setPracticePlans] = useState<PracticePlanType[]>([]);

    const { id: teamId = '' } = useParams();

    const getPracticePlanData = (teamId: string) => {
      return getDocs(
        query(collection(db, 'practice_plan'), where('teamId', '==', teamId))
      )
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            .sort(
              (a, b) =>
                Number((b as PracticePlanType).date.seconds) -
                Number((a as PracticePlanType).date.seconds)
            );
          setPracticePlans(newData as PracticePlanType[]);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };

    useEffect(() => {
      getPracticePlanData(teamId);
    }, []);

    const circleRadius = 50;
    const marginTop = 70;

    const mapIndexToRelativeXCoord = (index: number): string => {
      const center = '50%';
      const left = '25%';
      const right = '75%';

      if (index % 3 === 1 || index === 0) return center;
      else if (index % 6 === 2 || index % 6 === 3) return left;
      else return right;
    };

    const displayPanelContent = (content: () => JSX.Element) => {
      setPanelContent(content as unknown as any);
      showPanel();
    };

    return (
      <svg
        height={Math.max(110 * (content.length + 2), window.innerHeight - 52)}
        width="100%"
        className={className}
      >
        {content.map((position: string, index: number) => (
          <g key={position}>
            <line
              x1={mapIndexToRelativeXCoord(index)}
              y1={marginTop + index * 110}
              x2={mapIndexToRelativeXCoord(index + 1)}
              y2={marginTop + (index + 1) * 110}
            ></line>
            <SVGCircle
              r={circleRadius}
              y={marginTop + index * 110}
              x={mapIndexToRelativeXCoord(index)}
              onClick={() => {
                setPanelTitle(position);
                displayPanelContent(() => (
                  <>
                    {moves
                      .filter((i) => i.area === area && i.position === position)
                      .map((move) => (
                        <MoveSelectButton
                          key={move.id}
                          position={position}
                          area={area}
                          move={move}
                          addToPracticePlan={addToPracticePlan}
                          practicePlans={practicePlans}
                        />
                      ))}
                  </>
                ));
              }}
              text={position}
            />
          </g>
        ))}
      </svg>
    );
  }
)`
  min-height: 100%;
  background: var(--gray100);

  & > g > line {
    stroke: var(--orange);
  }
`;
