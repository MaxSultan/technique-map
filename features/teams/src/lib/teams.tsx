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
  Details,
  FormModal,
  ToastContext,
  ToastContextType,
} from '@technique-map/design-system';
import { Link } from 'react-router-dom';
import { TeamType } from './types';

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
      console.log(team);
      setMyTeams((prev) => [...prev, { ...newTeam, id: team.id }]);
      hideCreateTeamForm();
    });
  };

  const handleTeamJoinRequestSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // TODO: stop users from adding Join requests multiple times

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
      <ul>
        {myTeams.map((team) => (
          <li key={team.id}>
            <Details
              title={
                <Link to={`${team.id}`}>
                  {team.name} ({team.state})
                </Link>
              }
            ></Details>
          </li>
        ))}
      </ul>
      <button onClick={showTeamsSearch}>Request to Join a Team</button>
      <button onClick={showCreateTeamForm}>Create a Team</button>
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
              {teams.map((team) => (
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

  & a {
    color: currentColor;
  }

  & > ul {
    list-style: none;
    margin: 0;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;
    gap: 8px;
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
