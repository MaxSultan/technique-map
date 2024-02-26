import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
// @ts-ignore next-line
import { db } from '../../../../src/app/firebase';

/* eslint-disable-next-line */
export interface PracticePlansProps {}

const StyledPracticePlans = styled.div`
  color: pink;
`;
type PracticePlanType = {
  id: string;
  date: string;
};
export function PracticePlans(props: PracticePlansProps) {
  const [practicePlans, setPracticePlans] = useState<PracticePlanType[]>([]);

  const getData = () =>
    getDocs(collection(db, 'practice_plan')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPracticePlans(newData as PracticePlanType[]);
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledPracticePlans>
      <h1>Welcome to PracticePlans!</h1>
      {practicePlans.map((i) => i.id)}
    </StyledPracticePlans>
  );
}
