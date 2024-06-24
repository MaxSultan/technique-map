import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { db } from '@technique-map/firebase';
import styled from 'styled-components';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserContext, UserContextType } from '@technique-map/auth';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.main`
  min-height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
  color: white;

  & a {
    color: currentColor;
  }
`;

const getTeamData = (userId: string) =>
  getDocs(
    query(collection(db, 'teams'), where('teamIds', 'array-contains', userId))
  ).then((snapshotData) => {
    snapshotData.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  });

export function Home(props: HomeProps) {
  const user = useContext(UserContext) as unknown as UserContextType;

  useEffect(() => {
    if (user?.uid) {
      getTeamData(user.uid);
    }
  }, [user]);

  const hasNoTeams = true;
  return (
    <StyledHome>
      <h1>Welcome to Home!</h1>
      {hasNoTeams && <Link to="/teams">Go To Teams</Link>}
    </StyledHome>
  );
}

export default Home;
