import styled from 'styled-components';
import { SVGCircle } from './svg-circle';
import { PanelContext, PanelItem, PanelContextType } from '@technique-map/design-system';
import { MoveType } from './map';
import { ReactNode, useContext } from 'react';

type ContentMapProps = {
  area: 'top' | 'bottom' | 'neutral';
  addToPracticePlan: (id: string) => void;
  content: string[];
  className?: string;
  moves: MoveType[];
};

export const ContentMap = styled(
  ({
    className,
    content,
    addToPracticePlan,
    area,
    moves,
  }: ContentMapProps) => {
    const {showPanel, setPanelContent, setPanelTitle} = useContext(PanelContext) as PanelContextType;
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
    }

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
                        <PanelItem
                          key={`${area}-${position}-${move.name}`}
                          addToPracticePlan={() => addToPracticePlan(move.id)}
                        >
                          {move.name}
                        </PanelItem>
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
  background-color: var(--primary);

  & > g > line {
    stroke: var(--orange);
  }
`;
