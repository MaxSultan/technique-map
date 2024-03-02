import { useLocation, useNavigate } from 'react-router-dom';
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from 'firebase/firestore';
import { db } from '../../../../src/app/firebase';
import { useEffect, useState } from 'react';
import {
  MoveType,
  PlanType,
  findMoves,
  aggregateMovesByPosition,
} from '@technique-map/map-items';
import { Button, Details } from '@technique-map/design-system';
import styled from 'styled-components';

const EditIcon = styled(({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="16"
    viewBox="0 0 14 16"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
      fill="currentColor"
    />
  </svg>
))``;

const DetailsList = styled.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`;

export const PracticePlan = styled(({ className }) => {
  const [practicePlan, setPracticePlan] = useState<PlanType>({
    date: new Date(),
    moves: [],
  });
  const [moves, setMoves] = useState<MoveType[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPracticePlanId = location.pathname.split('/').at(-1) ?? '';

  const q = query(
    collection(db, 'practice_plan'),
    where(documentId(), '==', currentPracticePlanId)
  );

  const getMovesData = () =>
    getDocs(collection(db, 'moves')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMoves(newData as MoveType[]);
    });

  const getPracticePlanData = () =>
    getDocs(q).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const [plan] = newData;
      setPracticePlan(plan as unknown as PlanType);
    });

  useEffect(() => {
    // TODO: this may not be necessary
    getMovesData().then(() => {
      getPracticePlanData();
    });
  }, []);

  const editPracticePlan = (id: string) => {
    navigate(`/practice_plans/edit/${id}`);
  };

  return (
    <main className={className}>
      {Object.entries(
        aggregateMovesByPosition(findMoves(moves, practicePlan.moves))
      ).map(([key, value]) => (
        <DetailsList key={key}>
          <h2>{key}</h2>
          {value.map(
            (position: {
              name: string;
              moves: Pick<MoveType, 'id' | 'name'>[];
            }) => (
              <li key={position.name}>
                <Details
                  title={position.name}
                  open
                >
                  <ul>
                    {position?.moves.map((move) => (
                      <li key={`${position.name}-${move.name}`}>{move.name}</li>
                    ))}
                  </ul>
                </Details>
              </li>
            )
          )}
        </DetailsList>
      ))}
      <Button
        onClick={() => editPracticePlan(currentPracticePlanId)}
        text="Edit Practice Plan"
        Icon={EditIcon}
        $level="caution"
      />
    </main>
  );
})`
  min-height: 100%;
  background-color: var(--secondary);
  padding: 32px;
  color: white;
`;
