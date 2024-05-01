import styled from 'styled-components';
import { addDoc, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../../../src/app/firebase';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '@technique-map/auth';
import { CloseIcon, Details, ToastContext, ToastContextType } from '@technique-map/design-system';
import { Link } from 'react-router-dom';

/**
 *
 * We have authentication with a team system implemented
 * The concept of my team (team I have permission on) exists
 *
 * still need:
 * a way to separate other views in the app (practice plans, practice plan, create, update) by team
 * a way to view and change team member permissions
 * create team member join request action
 * accept team member join request action
 * create team action
 *
 */

/* eslint-disable-next-line */
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

const FormModal = styled(({ passedRef, className, children, onClose }) => {
  return (
    <dialog
      ref={passedRef}
      className={className}
    >
      <button
        onClick={onClose}
        formNoValidate
      >
        <CloseIcon />
      </button>
      {children}
    </dialog>
  );
})`
  border: none;
  border-radius: 16px;
  --shadow-color: var(--blue900);
  filter: drop-shadow(1px 2px 8px var(--shadow-color));
  position: relative;
  overflow: visible;

  & > button:has(> svg) {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transform: translate(50%, -50%);
    aspect-ratio: 1/1;
  }
`;

export const TeamsIndex = styled(({ className }: TeamsProps) => {
  const [teams, setTeams] = useState([]);
  const [myTeams, setMyTeams] = useState([]);
  const user = useContext(UserContext);
  const { addToast, removeToast } = useContext(ToastContext) as ToastContextType;
  const createTeamModalRef = useRef();
  const searchTeamsModalRef = useRef();

  const showCreateTeamForm = () => {
    createTeamModalRef.current.showModal();
  };

  const hideCreateTeamForm = () => {
    createTeamModalRef.current.close();
  };

  const showTeamsSearch = () => {
    searchTeamsModalRef.current.showModal();
  };

  const hideTeamsSearch = () => {
    searchTeamsModalRef.current.close();
  };

  const handleCreateTeamSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newTeam = {
      name: formData.get('teamName'),
      state: formData.get('stateLocation'),
      joinRequests: [],
      userIds: [user.uid],
      users: [{ role: 'admin', uid: user.uid }],
    }

    addDoc(teamsRef, newTeam).then((team) => {
      console.log(team)
      setMyTeams(prev => [...prev, {...newTeam, id: team.id}])
      hideCreateTeamForm();
    });
  };

  const handleTeamJoinRequestSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    updateDoc(doc(db, "teams", formData.get('teamToJoin')), {
      joinRequests: arrayUnion({ userEmail: user.email, uid: user.uid, role: formData.get('requestedRole')})
    }).then(() => {
      hideTeamsSearch();
      addToast({
        variant: 'success',
        message: 'Request Successfully Submitted',
        onClose: () => removeToast('Request Successfully Submitted'),
      });
    })
  }

  useEffect(() => {
    if (user?.uid) {
      getAllTeams().then(setTeams);
      getMyTeams(user.uid).then(setMyTeams);
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
            >
              {JSON.stringify(team)}
              {/* TODO: Map users with roles to user emails in DB */}
              {team.users.map((user) => (
                <div>{JSON.stringify(user)}</div>
              ))}
            </Details>
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
  background-color: var(--blue100);
  color: white;

  & a {
    color: currentColor;
  }

  & > ul {
    list-style: none;
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
