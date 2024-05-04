import styled from 'styled-components';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { db } from '../../../../src/app/firebase';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router';
import {
  LegacyRef,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FormModal, Loader, PageLoader } from '@technique-map/design-system';
import { UserContext, UserContextType } from '@technique-map/auth';
import { Link } from 'react-router-dom';
import { MoveType } from '@technique-map/map-items';
import type {
  RolesEnum,
  TeamRequestType,
  TeamType,
  TeamUserType,
} from './types';

type ShowForTypes = {
  roles: RolesEnum[];
  team: TeamType;
  children: ReactNode | ReactNode[];
};

type UserRoleItemType = {
  uid: string;
  role: RolesEnum;
  team: TeamType;
  setTeam: (arg0: any) => void;
};

const ShowFor = ({ roles, team, children }: ShowForTypes) => {
  const user = useContext(UserContext) as unknown as UserContextType;
  const userPermission = team.users.find((u) => u.uid === user?.uid);
  return userPermission && roles.includes(userPermission.role)
    ? children
    : null;
};

const UserRoleItem = ({ uid, role, team, setTeam }: UserRoleItemType) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const user = useContext(UserContext) as unknown as UserContextType;
  const updateRoleRef = useRef();

  const findUserEmail = async (uid: string) => {
    return await getDoc(doc(db, 'users', uid)).then((querySnapshot) => {
      const newData = {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      } as { email: string; id: string };

      return newData.email;
    });
  };

  useEffect(() => {
    findUserEmail(uid).then(setUserEmail);
  }, [uid]);

  const handleRemoveUserFromTeam = () => {
    updateDoc(doc(db, 'teams', team.id), {
      users: arrayRemove({ uid: uid, role: role }),
      userIds: arrayRemove(uid),
    });
    setTeam((prev: TeamType) => ({
      ...prev,
      users: prev.users.filter((item) => item.uid !== uid),
      userIds: prev.userIds.filter((item) => item !== uid),
    }));
  };

  const showUpdateRoleForm = () => {
    if (updateRoleRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      updateRoleRef.current.showModal();
    }
  };

  const hideRoleUpdateModal = () => {
    if (updateRoleRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      updateRoleRef.current.close();
    }
  };

  const handleRoleUpdateSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    updateDoc(doc(db, 'teams', team.id), {
      users: arrayRemove({ uid: uid, role: role }),
    });

    updateDoc(doc(db, 'teams', team.id), {
      users: arrayUnion({ uid: uid, role: formData.get('newRole') }),
    });
    setTeam((prev: TeamType) => {
      const updatedUser = prev.users.find((i) => i.uid === uid);
      if (updatedUser) {
        updatedUser.role = formData.get('newRole') as RolesEnum;
      }

      return {
        ...prev,
        users: [...prev.users.filter((item) => item.uid !== uid), updatedUser],
      };
    });

    if (updateRoleRef.current) {
      hideRoleUpdateModal();
    }
  };

  return (
    <li>
      {userEmail}: {role}
      <ShowFor
        roles={['admin']}
        team={team}
      >
        <button onClick={showUpdateRoleForm}>Update Role</button>
        {uid !== user.uid && (
          <button onClick={handleRemoveUserFromTeam}>Remove User</button>
        )}
        <FormModal
          passedRef={updateRoleRef}
          onClose={hideRoleUpdateModal}
        >
          <form onSubmit={handleRoleUpdateSubmit}>
            <label htmlFor="newRole">
              <span>New Role:</span>
              <select
                name="newRole"
                id="newRole"
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
            <button type="submit">Update Role</button>
          </form>
        </FormModal>
      </ShowFor>
    </li>
  );
};

const getTeamData = (teamId: string) => {
  return getDoc(doc(db, 'teams', teamId)).then((querySnapshot) => {
    const newData = {
      ...querySnapshot.data(),
      id: querySnapshot.id,
    };
    return newData;
  });
};

const getTeamMoves = (teamId: string) => {
  return getDocs(
    query(collection(db, 'moves'), where('teamId', '==', teamId))
  ).then((querySnapshot) => {
    const movesData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return movesData;
  });
};

const getTeamPracticePlans = (teamId: string) => {
  return getDocs(
    query(collection(db, 'practice_plan'), where('teamId', '==', teamId))
  ).then((querySnapshot) => {
    const practicePlanData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return practicePlanData;
  });
};

const MovesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`;

const Tag = styled.div<{
  level: 'jv' | 'varsity' | 'state qualifier' | 'state placer';
}>`
  color: ${({ level }) => {
    if (level === 'jv') return 'hsl(30, 61%, 50%)';
    if (level === 'varsity') return 'silver';
    if (level === 'state qualifier') return 'gold';
    if (level === 'state placer') return 'hsl(40, 5%, 89%)';
  }};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`;

const MoveItem = styled(({ className, move }) => {
  return (
    <li className={className}>
      <div>
        <h3>{move.name}</h3>
        <span>
          {move.area} - {move.position}
        </span>
        <Tag level={move.level}>{move.level}</Tag>
      </div>
    </li>
  );
})`
  & > div {
    display: grid;
    gap: 4px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 8px;

    h3 {
      margin: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;

export const Team = styled(({ className }) => {
  const [team, setTeam] = useState<any>();
  const [moves, setMoves] = useState<any>([]);
  const [practicePlans, setPracticePlans] = useState<any>([]);
  const addMoveModalFormRef = useRef();

  const user = useContext(UserContext) as unknown as UserContextType;

  const { id: teamId = '' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (teamId) {
      getTeamData(teamId).then(setTeam);
      getTeamMoves(teamId).then(setMoves);
      getTeamPracticePlans(teamId).then(setPracticePlans);
    }
  }, [teamId]);

  useEffect(() => {
    if (user && team && !team.userIds.includes(user.uid)) {
      navigate('/');
    }
  }, [navigate, team, user]);

  const handleAcceptJoinRequest = (request: {
    uid: string;
    role: RolesEnum;
  }) => {
    updateDoc(doc(db, 'teams', teamId), {
      joinRequests: arrayRemove(request),
      users: arrayUnion({ uid: request.uid, role: request.role }),
      userIds: arrayUnion(request.uid),
    });
    setTeam((prev: TeamType) => ({
      ...prev,
      joinRequests: prev.joinRequests.filter((req) => req.uid !== request.uid),
      users: [...prev.users, { uid: request.uid, role: request.role }],
      userIds: [...prev.userIds, request.uid],
    }));
  };

  const handleDenyJoinRequest = (request: TeamRequestType) => {
    updateDoc(doc(db, 'teams', teamId), {
      joinRequests: arrayRemove(request),
    });
    setTeam((prev: TeamType) => ({
      ...prev,
      joinRequests: prev.joinRequests.filter((req) => req.uid !== request.uid),
    }));
  };

  const dayMonthYearFromUnixTime = (unixTime: number | string) =>
    new Date(Number(unixTime) * 1000).toLocaleDateString();

  const showAddMoveModalForm = () => {
    if (addMoveModalFormRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      addMoveModalFormRef.current.showModal();
    }
  };

  const hideAddMoveModalForm = () => {
    if (addMoveModalFormRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      addMoveModalFormRef.current.close();
    }
  };

  const handleAddMoveSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newMove = {
      area: formData.get('area'),
      level: formData.get('level'),
      name: formData.get('name'),
      position: formData.get('position'),
      teamId: teamId,
    };

    addDoc(collection(db, 'moves'), newMove);

    setMoves((prev: MoveType[]) => [...prev, newMove]);

    hideAddMoveModalForm();
  };

  return (
    <div className={className}>
      {team ? (
        <main>
          <h1>
            {team.name} ({team.state})
          </h1>

          <h2>Practice Plans</h2>
          <ul>
            {practicePlans.map(
              (plan: { id: string; date: { seconds: number } }) => (
                <Link to={`practice_plans/${plan.id}`}>
                  <li>{dayMonthYearFromUnixTime(plan.date.seconds)}</li>
                </Link>
              )
            )}
          </ul>
          <button onClick={() => navigate('practice_plans/create')}>
            Add Practice Plan
          </button>

          <h2>Moves</h2>
          <MovesList>
            {moves.map((move: MoveType) => (
              <MoveItem move={move} />
            ))}
          </MovesList>
          <ShowFor
            roles={['admin', 'base+']}
            team={team}
          >
            <button onClick={showAddMoveModalForm}>Add Move</button>
            <FormModal
              passedRef={addMoveModalFormRef}
              onClose={hideAddMoveModalForm}
            >
              <form onSubmit={handleAddMoveSubmit}>
                <label htmlFor="name">
                  <span>Move name:</span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                  />
                </label>
                <label htmlFor="area">
                  <span>Move Area:</span>
                  <select
                    name="area"
                    id="area"
                  >
                    {['neutral', 'top', 'bottom'].map((area) => (
                      <option
                        value={area}
                        key={area}
                      >
                        {area}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="level">
                  <span>Move Level:</span>
                  <select
                    name="level"
                    id="level"
                  >
                    {['jv', 'varsity', 'state qualifier', 'state placer'].map(
                      (area) => (
                        <option
                          value={area}
                          key={area}
                        >
                          {area}
                        </option>
                      )
                    )}
                  </select>
                </label>
                <label htmlFor="position">
                  <span>Move Position:</span>
                  <input
                    type="text"
                    name="position"
                    id="position"
                  />
                </label>
                <button type="submit">Add Move</button>
              </form>
            </FormModal>
          </ShowFor>

          <ShowFor
            roles={['admin', 'base+']}
            team={team}
          >
            <section>
              <h2>Team Users</h2>
              <ul>
                {team.users.map((user: TeamUserType) => (
                  <UserRoleItem
                    team={team}
                    setTeam={setTeam}
                    uid={user.uid}
                    role={user.role}
                  />
                ))}
              </ul>
            </section>
          </ShowFor>

          <ShowFor
            roles={['admin', 'base+']}
            team={team}
          >
            <h2>Open Join Requests:</h2>
            <ul>
              {team.joinRequests.map((request: TeamRequestType) => (
                <li>
                  {request.userEmail} {request.role}{' '}
                  <button onClick={() => handleAcceptJoinRequest(request)}>
                    Accept
                  </button>{' '}
                  <button onClick={() => handleDenyJoinRequest(request)}>
                    Decline
                  </button>
                </li>
              ))}
            </ul>
          </ShowFor>
        </main>
      ) : (
        <PageLoader>
          <Loader />
        </PageLoader>
      )}
    </div>
  );
})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  padding: 64px;

  & > h1 {
    margin: 0;
  }

  & a {
    color: white;
  }

  & ${FormModal} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`;
