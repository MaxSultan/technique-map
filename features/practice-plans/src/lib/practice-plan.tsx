import { useLocation, useNavigate } from 'react-router-dom';
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from 'firebase/firestore';
import { db } from '@technique-map/firebase';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  MoveType,
  PlanType,
  findMoves,
  aggregateMovesByPosition,
} from '@technique-map/map-items';
import { Button, Details, EditIcon } from '@technique-map/design-system';
import styled from 'styled-components';

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
    id: '',
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
    getMovesData();
    getPracticePlanData();
  }, []);

  const editPracticePlan = (id: string) => {
    navigate(`edit`);
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
  background: linear-gradient(var(--blue100), var(--blue900));
  padding: 32px;
  color: white;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${Button} {
    align-self: start;
  }

  & ${Details} {
    background-color: var(--secondary);
  }
`;
