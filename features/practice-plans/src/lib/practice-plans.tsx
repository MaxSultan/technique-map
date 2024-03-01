import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../src/app/firebase';
import { Link } from 'react-router-dom';

const StyledPracticePlans = styled.div``;

const DeleteButton = styled.button`
  background-color: var(--caution);
  border: none;
`

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

  const deletePracticePlan = async(id:string) => {
    await deleteDoc(doc(db, "practice_plan", id));
    setPracticePlans((prev) => prev.filter(plan => plan.id !== id))
  }

  return (
    <StyledPracticePlans>
      <h1>Welcome to PracticePlans!</h1>
      <ul>
        {practicePlans.map((plan) => (
          <li>
            <Link to={`/practice_plans/${plan.id}`}>
              {new Date(Number(plan.date.seconds) * 1000).toLocaleDateString()}
            </Link>
            <DeleteButton onClick={() => deletePracticePlan(plan.id)}>Delete Practice Plan</DeleteButton>
          </li>
        ))}
      </ul>
    </StyledPracticePlans>
  );
}
