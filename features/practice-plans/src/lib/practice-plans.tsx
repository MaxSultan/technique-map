import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
// @ts-ignore next-line
import { db } from '../../../../src/app/firebase';
import { Link } from 'react-router-dom';

const StyledPracticePlans = styled.div``;
type PracticePlanType = {
  id: string;
  date: { seconds: string; milliseconds: string };
};
export function PracticePlans() {
  const [practicePlans, setPracticePlans] = useState<PracticePlanType[]>([]);

  const getData = () =>
    getDocs(collection(db, 'practice_plan')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPracticePlans(newData as PracticePlanType[]);
      console.log(newData);
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledPracticePlans>
      <h1>Welcome to PracticePlans!</h1>
      <ul>
        {practicePlans.map((i) => (
          <li>
            <Link to={`/practice_plans/${i.id}`}>
              {new Date(i.date.seconds).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </StyledPracticePlans>
  );
}
