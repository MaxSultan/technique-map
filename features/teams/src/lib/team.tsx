import styled from 'styled-components';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { db } from '../../../../src/app/firebase';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  FormModal,
  Loader,
  PageLoader,
  ToastContext,
  ToastContextType,
} from '@technique-map/design-system';
import { UserContext, UserContextType } from '@technique-map/auth';
import { Link } from 'react-router-dom';
import { MoveType } from '@technique-map/map-items';
import type {
  RolesEnum,
  TeamRequestType,
  TeamType,
  TeamUserType,
} from './types';
import { Tag } from './tag';
import { PracticePlanType } from '@technique-map/practice-plans';

// #region UserRoles

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
  className?: string;
};

const ShowFor = ({ roles, team, children }: ShowForTypes) => {
  const user = useContext(UserContext) as unknown as UserContextType;
  const userPermission = team.users.find((u) => u.uid === user?.uid);
  return userPermission && roles.includes(userPermission.role)
    ? children
    : null;
};

const UserRoleItem = styled(
  ({ uid, role, team, setTeam, className }: UserRoleItemType) => {
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
          users: [
            ...prev.users.filter((item) => item.uid !== uid),
            updatedUser,
          ],
        };
      });

      if (updateRoleRef.current) {
        hideRoleUpdateModal();
      }
    };

    return (
      <li className={className}>
        <span>{userEmail}</span>
        <Tag>{role}</Tag>
        <ShowFor
          roles={['admin']}
          team={team}
        >
          <Button
            onClick={showUpdateRoleForm}
            text="Update Role"
          />
          {uid !== user.uid && (
            <Button
              $level="caution"
              onClick={handleRemoveUserFromTeam}
              text="Remove User"
            />
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
              <Button
                text="Update Role"
                type="submit"
              />
            </form>
          </FormModal>
        </ShowFor>
      </li>
    );
  }
)`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid white;

  @media screen and (width < 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, max-content);
    border: 1px solid white;
    border-radius: 8px;

    ${Tag} {
      justify-self: center;
    }
  }
`;

// #endregion UserRoles

// #region DataFetchers

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

// #endregion DataFetchers

// #region Moves

const MovesSection = styled.section`
  display: grid;
  gap: 16px;
`;

const MovesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`;

const mapLevelToColor = (
  level: 'jv' | 'varsity' | 'state qualifier' | 'state placer'
) => {
  if (level === 'jv') return 'hsl(30, 61%, 50%)';
  if (level === 'varsity') return 'silver';
  if (level === 'state qualifier') return 'gold';
  if (level === 'state placer') return 'hsl(40, 5%, 89%)';
  return 'white';
};

const MoveItem = styled(({ className, move }) => {
  return (
    <li className={className}>
      <div>
        <h3>{move.name}</h3>
        <span>
          {move.area} - {move.position}
        </span>
        <Tag $color={mapLevelToColor(move.level)}>{move.level}</Tag>
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

// #endregion Moves

// #region numberTiles

const NumberTileTitle = styled.span`
  font-size: 1.5em;
`;

const NumberTileValue = styled.span`
  font-size: 2em;
`;

const NumberTile = styled(({ className, title, subtext, value }) => {
  return (
    <output className={className}>
      <NumberTileTitle>{title}</NumberTileTitle>
      <p>{subtext}</p>
      <NumberTileValue>{value}</NumberTileValue>
    </output>
  );
})`
  background-color: var(--blue900);
  display: grid;
  justify-items: center;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
`;

const NumberTileLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  @media screen and (width >= 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
  }

  & > ${NumberTile} {
    width: auto;
  }
`;

const UsersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const AdminSectionLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 850px) {
    grid-auto-flow: column;
  }
`;
// #endregion numberTiles

// #region Admin

const AdminSubSection = styled.section`
  display: grid;
  gap: 8px;
`;

const TeamJoinRequestList = styled.ul`
  list-style: none;
`;

const TeamJoinRequestListItem = styled.li`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const AdminSection = styled(({ className, team, setTeam, teamId }) => {
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

  if (!team) return null;

  return (
    <div className={className}>
      <h2>Admin</h2>
      <AdminSectionLayout>
        <ShowFor
          roles={['admin', 'base+']}
          team={team}
        >
          <AdminSubSection>
            <h3>Team Users</h3>
            <UsersList>
              {team.users.map((user: TeamUserType) => (
                <UserRoleItem
                  team={team}
                  setTeam={setTeam}
                  uid={user.uid}
                  role={user.role}
                />
              ))}
            </UsersList>
          </AdminSubSection>

          <AdminSubSection>
            <h3>Open Join Requests:</h3>
            <TeamJoinRequestList>
              {team.joinRequests.map((request: TeamRequestType) => (
                <TeamJoinRequestListItem>
                  <span>
                    {request.userEmail} {request.role}
                  </span>
                  <Button
                    onClick={() => handleAcceptJoinRequest(request)}
                    text="Accept"
                  />
                  <Button
                    $level="caution"
                    onClick={() => handleDenyJoinRequest(request)}
                    text="Decline"
                  />
                </TeamJoinRequestListItem>
              ))}
            </TeamJoinRequestList>
          </AdminSubSection>
        </ShowFor>
      </AdminSectionLayout>
    </div>
  );
})`
  display: grid;
  gap: 16px;
`;

// #endregion Admin

// #region PracticePlans

const Category = styled.div`
  background-color: var(--blue900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 8px;
  padding: 8px;
  z-index: 1;
`;

const PracticePlanCategory = styled.div`
  &:not(:last-of-type) {
    border-bottom: 2px solid var(--blue900);
  }
  position: relative;
`;

const PracticePlanListItem = styled.li`
  padding: 8px 16px;
  display: grid;
  align-items: center;
  gap: 16px;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 1fr;

  @media screen and (width >= 650px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const PracticePlanList = styled(
  ({ className, practicePlans, setPracticePlans }) => {
    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const { addToast, removeToast } = useContext(
      ToastContext
    ) as ToastContextType;

    const dayMonthYearFromUnixTime = (unixTime: number | string) =>
      new Date(Number(unixTime) * 1000).toLocaleDateString();

    const getDateMonthFromPracticePlans = (plans: PracticePlanType[]) =>
      plans
        .map((plan) => ({
          time: dayMonthYearFromUnixTime(plan.date.seconds),
          id: plan.id,
        }))
        .reduce((acc, val) => {
          const [month, _, year] = val.time.split('/');
          const monthYear = `${MONTHS[Number(month) - 1]}, ${year}`;
          return {
            ...acc,
            [monthYear]: [
              ...(String(monthYear) in acc ? acc[String(monthYear)] : []),
              val,
            ],
          };
        }, {} as Record<string, { id: string; time: string }[]>);

    const deletePracticePlan = async (id: string) => {
      await deleteDoc(doc(db, 'practice_plan', id));
      setPracticePlans((prev: PracticePlanType[]) =>
        prev.filter((plan) => plan.id !== id)
      );
      addToast({
        variant: 'success',
        message: 'Practice Plan Successfully Deleted',
        onClose: () => removeToast('Practice Plan Successfully Deleted'),
      });
    };

    return (
      <ul className={className}>
        {Object.entries(getDateMonthFromPracticePlans(practicePlans)).map(
          ([category, plans]) => (
            <PracticePlanCategory key={category}>
              <Category>{category}</Category>
              {plans.map((plan) => (
                <PracticePlanListItem>
                  <Link
                    to={`practice_plans/${plan.id}`}
                    key={plan.id}
                  >
                    {plan.time}
                  </Link>
                  <Button
                    text="Delete Practice Plan"
                    $level="caution"
                    onClick={() => deletePracticePlan(plan.id)}
                  />
                </PracticePlanListItem>
              ))}
            </PracticePlanCategory>
          )
        )}
      </ul>
    );
  }
)`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid var(--blue900);
`;

const PracticePlanSection = styled(
  ({ className, practicePlans, setPracticePlans }) => {
    const navigate = useNavigate();

    return (
      <section className={className}>
        <h2>Practice Plans</h2>
        <PracticePlanList
          practicePlans={practicePlans}
          setPracticePlans={setPracticePlans}
        />
        <Button
          text="Add Practice Plan"
          onClick={() => navigate('practice_plans/create')}
        />
      </section>
    );
  }
)`
  display: grid;
  gap: 16px;
`;
// #endregion PracticePlans

// #region Team

const MainContent = styled.main`
  display: grid;
  gap: 32px;
`;

const HeaderContent = styled.div`
  display: grid;
  gap: 16px;
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
        <MainContent>
          <HeaderContent>
            <h1>
              {team.name} ({team.state})
            </h1>
            <NumberTileLayout>
              <NumberTile
                title="Season"
                value="Nov 2024 - Feb 2025"
              />
              <NumberTile
                title="Practice Plans"
                subtext="Number of practice plans team leaders have created"
                value={practicePlans.length}
              />
              <NumberTile
                title="Moves"
                value={moves.length}
              />
            </NumberTileLayout>
          </HeaderContent>
          <PracticePlanSection
            practicePlans={practicePlans}
            setPracticePlans={setPracticePlans}
          />
          <MovesSection>
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
              <Button
                onClick={showAddMoveModalForm}
                text="Add Move"
              />
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
                  <Button
                    text="Add Move"
                    type="submit"
                  />
                </form>
              </FormModal>
            </ShowFor>
          </MovesSection>
          <AdminSection
            setTeam={setTeam}
            team={team}
            teamId={teamId}
          />
        </MainContent>
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
  padding: 8px;

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

// #endregion Team
