import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../src/app/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@technique-map/design-system';

const Title = styled.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`;

const DeleteButton = styled.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
`;

type PracticePlanType = {
  id: string;
  date: { seconds: string; milliseconds: string };
};
export const PracticePlans = styled(({ className }: { className?: string }) => {
  const [practicePlans, setPracticePlans] = useState<PracticePlanType[]>([]);
  const navigate = useNavigate();

  const handleAddPracticePlan = () => {
    navigate('/create');
  };

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

  const deletePracticePlan = async (id: string) => {
    await deleteDoc(doc(db, 'practice_plan', id));
    setPracticePlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  return (
    <main className={className}>
      {new Date().toLocaleDateString()}
      <Title>
        <h1>Practice plans</h1>
        <Button
          onClick={handleAddPracticePlan}
          text="Add Practice Plan"
        />
      </Title>
      <ul>
        {practicePlans.map((plan) => (
          <li key={plan.id}>
            <Link to={`/practice_plans/${plan.id}`}>
              {new Date(Number(plan.date.seconds) * 1000).toLocaleDateString()}
            </Link>
            <DeleteButton onClick={() => deletePracticePlan(plan.id)}>
              Delete Practice Plan
            </DeleteButton>
          </li>
        ))}
      </ul>
    </main>
  );
})`
  padding: 16px 15% 16px 15%;
  background-color: var(--primary);
  color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;

  & a {
    color: white;
  }

  & > ul {
    display: grid;
    grid-auto-flow: row;
    gap: 4px;

    & > li {
      list-style: none;
      padding: 16px;
      background-color: var(--secondary);
      display: flex;
      justify-content: space-between;
    }
  }
`;
