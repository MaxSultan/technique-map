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
  findMoves,
  aggregateMovesByPosition,
} from '@technique-map/map-items';
import { Button, Details, EditIcon } from '@technique-map/design-system';
import styled from 'styled-components';
import { PracticePlanType } from './practice-plans';

const DetailsList = styled.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`;

const MovesList = styled.ul`
  list-style: none;
`;

const q = (currentPracticePlanId: string) =>
  query(
    collection(db, 'practice_plan'),
    where(documentId(), '==', currentPracticePlanId)
  );

const getPracticePlanData = (currentPracticePlanId: string) =>
  getDocs(q(currentPracticePlanId)).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const [plan] = newData;
    return plan;
  });

const getMovesData = () =>
  getDocs(collection(db, 'moves')).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });

const dayMonthYearFromUnixTime = (unixTime: number | string) =>
  new Date(Number(unixTime) * 1000).toLocaleDateString();

export const PracticePlan = styled(({ className }) => {
  const [practicePlan, setPracticePlan] = useState<PracticePlanType>({
    date: { seconds: '', milliseconds: '' },
    moves: [],
    id: '',
  });
  const [moves, setMoves] = useState<MoveType[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPracticePlanId = location.pathname.split('/').at(-1) ?? '';

  useEffect(() => {
    getMovesData().then((data) => setMoves(data as MoveType[]));
    getPracticePlanData(currentPracticePlanId).then((data) =>
      setPracticePlan(data as unknown as PracticePlanType)
    );
  }, [currentPracticePlanId]);

  const editPracticePlan = (id: string) => {
    navigate(`edit`);
  };

  return (
    <main className={className}>
      <h1>{dayMonthYearFromUnixTime(practicePlan.date.seconds)}</h1>
      {Object.entries(
        aggregateMovesByPosition(findMoves(moves, practicePlan.moves))
      ).map(([key, value]) => (
        <>
          <h2>{key}</h2>
          <DetailsList key={key}>
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
                    <MovesList>
                      {position?.moves.map((move) => (
                        <li key={`${position.name}-${move.name}`}>
                          {move.name}
                        </li>
                      ))}
                    </MovesList>
                  </Details>
                </li>
              )
            )}
          </DetailsList>
        </>
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
  background: var(--gray100);
  padding: 32px;
  color: var(--gray900);
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${Button} {
    align-self: start;
  }

  & ${Details} {
    background-color: var(--blue500);
  }
`;
