import { useLocation } from 'react-router-dom';
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

export const PracticePlan = () => {
  const [practicePlan, setPracticePlan] = useState<PlanType>({date: new Date(), moves: []});
  const [moves, setMoves] = useState<MoveType[]>([]);
  const location = useLocation();

  console.log(location.pathname.split('/').at(-1));
  const q = query(
    collection(db, 'practice_plan'),
    where(documentId(), '==', location.pathname.split('/').at(-1))
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
      console.log(newData);
    });

  useEffect(() => {
    getMovesData().then(() => {
      getPracticePlanData();
    });
  }, []);

  return (
    <div>{JSON.stringify(aggregateMovesByPosition(findMoves(moves, practicePlan?.moves ?? [])))}</div>
  );
};
