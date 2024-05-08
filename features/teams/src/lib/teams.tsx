import styled from 'styled-components';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { db } from '../../../../src/app/firebase';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext, UserContextType } from '@technique-map/auth';
import {
  Button,
  FormModal,
  ToastContext,
  ToastContextType,
} from '@technique-map/design-system';
import { Link } from 'react-router-dom';
import { TeamType } from './types';
import { Tag } from './tag';

export interface TeamsProps {
  className?: string;
}

const STATE_ABBREVIATIONS = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

const teamsRef = collection(db, 'teams');

const getAllTeams = () =>
  getDocs(teamsRef).then((snapShot) => {
    const newData = snapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });

const getMyTeams = (userId: string) => {
  const q = query(teamsRef, where('userIds', 'array-contains', userId));

  return getDocs(q).then((snapShot) => {
    const newData = snapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });
};

const TeamsList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
`;

const TeamListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: white 1px solid;

  &:hover {
    background-color: var(--blue900);
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`;

const Count = styled.div`
  background-color: aliceblue;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  font-size: 8px;
  filter: drop-shadow(2px 4px 4px black);
`;

const CountText = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`;

const Buttons = styled.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`;

export const TeamsIndex = styled(({ className }: TeamsProps) => {
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [myTeams, setMyTeams] = useState<TeamType[]>([]);

  const user = useContext(UserContext) as unknown as UserContextType;

  const { addToast, removeToast } = useContext(
    ToastContext
  ) as ToastContextType;

  const createTeamModalRef = useRef();
  const searchTeamsModalRef = useRef();

  const showCreateTeamForm = () => {
    if (createTeamModalRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      createTeamModalRef.current.showModal();
    }
  };

  const hideCreateTeamForm = () => {
    if (createTeamModalRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      createTeamModalRef.current.close();
    }
  };

  const showTeamsSearch = () => {
    if (searchTeamsModalRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      searchTeamsModalRef.current.showModal();
    }
  };

  const hideTeamsSearch = () => {
    if (searchTeamsModalRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      searchTeamsModalRef.current.close();
    }
  };

  const handleCreateTeamSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newTeam = {
      name: formData.get('teamName') as string,
      state: formData.get('stateLocation') as string,
      joinRequests: [],
      userIds: [user.uid],
      users: [{ role: 'admin', uid: user.uid }],
    } as unknown as TeamType;

    addDoc(teamsRef, newTeam).then((team) => {
      setMyTeams((prev) => [...prev, { ...newTeam, id: team.id }]);
      hideCreateTeamForm();
    });
  };

  const handleTeamJoinRequestSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const currentTeam = teams.find(
      (team) => team.id === formData.get('teamToJoin')
    );
    if (currentTeam) {
      const currentUserExistingJoinRequestForTeam =
        currentTeam.joinRequests.find((req) => req.uid === user.uid);
      if (currentUserExistingJoinRequestForTeam) {
        addToast({
          variant: 'success',
          message: 'You have an existing request to join this team',
          onClose: () =>
            removeToast('You have an existing request to join this team'),
        });
        return;
      }
    }

    updateDoc(doc(db, 'teams', formData.get('teamToJoin') as string), {
      joinRequests: arrayUnion({
        userEmail: user.email,
        uid: user.uid,
        role: formData.get('requestedRole'),
      }),
    }).then(() => {
      hideTeamsSearch();
      addToast({
        variant: 'success',
        message: 'Request Successfully Submitted',
        onClose: () => removeToast('Request Successfully Submitted'),
      });
    });
  };

  useEffect(() => {
    getAllTeams().then((teams) => setTeams(teams as TeamType[]));
    if (user?.uid) {
      getMyTeams(user.uid).then((myTeams) => setMyTeams(myTeams as TeamType[]));
    }
  }, [user]);

  return (
    <main className={className}>
      <h1>My Teams</h1>
      <TeamsList>
        {myTeams.map((team) => (
          <Link
            to={`${team.id}`}
            key={team.id}
          >
            <TeamListItem>
              <span>
                {team.name} ({team.state})
              </span>
              <CountText>
                Users <Count>{team.users.length}</Count>
              </CountText>
              <CountText>
                <span>Join Requests</span>{' '}
                <Count>{team.joinRequests.length}</Count>
              </CountText>
              {team.users.find(
                (u) => u.uid === user.uid && u.role === 'admin'
              ) ? (
                <Tag $color="white">Admin</Tag>
              ) : (
                <span></span>
              )}
            </TeamListItem>
          </Link>
        ))}
      </TeamsList>
      <Buttons>
        <Button
          text="Request to Join a Team"
          onClick={showTeamsSearch}
        />
        <Button
          text="Create a Team"
          onClick={showCreateTeamForm}
        />
      </Buttons>
      <FormModal
        passedRef={createTeamModalRef}
        onClose={hideCreateTeamForm}
      >
        <form onSubmit={handleCreateTeamSubmit}>
          <label htmlFor="teamName">
            <span>Team Name:</span>
            <input
              name="teamName"
              type="text"
              id="teamName"
            />
          </label>
          <label htmlFor="stateLocation">
            <span>State:</span>
            <select
              name="stateLocation"
              id="stateLocation"
            >
              {STATE_ABBREVIATIONS.map((state) => (
                <option
                  value={state}
                  key={state}
                >
                  {state}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Create</button>
        </form>
      </FormModal>
      <FormModal
        passedRef={searchTeamsModalRef}
        onClose={hideTeamsSearch}
      >
        <form onSubmit={handleTeamJoinRequestSubmit}>
          <label htmlFor="teamToJoin">
            <span>Team:</span>
            <select
              name="teamToJoin"
              id="teamToJoin"
            >
              {teams
                .filter((team) => !team.userIds.includes(user.uid))
                .map((team) => (
                  <option
                    value={team.id}
                    key={team.id}
                  >
                    {team.name} ({team.state})
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="requestedRole">
            <span>Requested Role:</span>
            <select
              name="requestedRole"
              id="requestedRole"
            >
              {['admin', 'base+', 'base'].map((role) => (
                <option
                  value={role}
                  key={role}
                >
                  {role}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Send Request to Join</button>
        </form>
      </FormModal>
    </main>
  );
})`
  height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 16px;

  & a {
    color: currentColor;
  }

  & > h1 {
    margin: 0;
  }

  & > ${FormModal} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`;
