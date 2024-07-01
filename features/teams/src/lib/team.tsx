import styled from 'styled-components';
import { db } from '@technique-map/firebase';
import {
  addDoc,
  and,
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
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Button,
  DoughnutChart,
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
  GoalType,
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
  setTeam: Dispatch<SetStateAction<TeamType>>;
  className?: string;
};

const ThinButton = styled(Button)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`;

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
    const updateRoleRef = useRef<HTMLDialogElement>();

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
      setTeam((prev) => ({
        ...prev,
        users: prev.users.filter((item) => item.uid !== uid),
        userIds: prev.userIds.filter((item) => item !== uid),
      }));
    };

    const showUpdateRoleForm = () => {
      if (updateRoleRef.current) {
        updateRoleRef.current.showModal();
      }
    };

    const hideRoleUpdateModal = () => {
      if (updateRoleRef.current) {
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

      // @ts-expect-error -- prev is the same type
      setTeam((prev) => {
        const updatedUser = prev.users.find((i) => i.uid === uid);

        if (!updatedUser) {
          alert('could not find user!');
          return;
        }

        updatedUser.role = formData.get('newRole') as RolesEnum;

        return {
          ...prev,
          users: [
            ...prev.users.filter((item) => item.uid !== uid),
            updatedUser,
          ].filter((i) => i),
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
          <ThinButton
            onClick={showUpdateRoleForm}
            text="Update Role"
          />
          {uid !== user.uid && (
            <OutlineCautionButton
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
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid white;

  @media screen and (width < 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content);
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

const MOVE_LEVELS = ['jv', 'varsity', 'state qualifier', 'state placer'];

const MOVE_AREAS = ['neutral', 'top', 'bottom'];

const MovesSection = styled(({ className, moves, setMoves, teamId, team }) => {
  const addMoveModalFormRef = useRef<HTMLDialogElement>();

  const showAddMoveModalForm = () => {
    if (addMoveModalFormRef.current) {
      addMoveModalFormRef.current.showModal();
    }
  };

  const hideAddMoveModalForm = () => {
    if (addMoveModalFormRef.current) {
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

    addDoc(collection(db, 'moves'), newMove).then((move) => {
      setMoves((prev: MoveType[]) => [...prev, { ...newMove, id: move.id }]);
    });

    hideAddMoveModalForm();
  };
  return (
    <section className={className}>
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
                {MOVE_AREAS.map((area) => (
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
                {MOVE_LEVELS.map((level) => (
                  <option
                    value={level}
                    key={level}
                  >
                    {level}
                  </option>
                ))}
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
    </section>
  );
})`
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

const mapLevelToAbbreviation = (
  level: 'jv' | 'varsity' | 'state qualifier' | 'state placer'
) => {
  if (level === 'jv') return 'JV';
  if (level === 'varsity') return 'V';
  if (level === 'state qualifier') return 'SQ';
  if (level === 'state placer') return 'SP';
  return '';
};

const MoveItem = styled(({ className, move }) => {
  return (
    <li className={className}>
      <div>
        <h3>{move.name}</h3>
        <span>
          {move.area} - {move.position}
        </span>
        <Tag $color={mapLevelToColor(move.level)}>
          {mapLevelToAbbreviation(move.level)}
        </Tag>
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
  box-shadow: 2px 2px 8px hsl(0deg 0% 1.55% / 50%);
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
  display: grid;
  gap: 8px;
`;

const AdminSectionLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
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
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  border: 1px solid white;
  border-radius: 8px;
  padding: 8px;

  @media screen and (width > 650px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border: none;
  }
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
                  <span>{request.userEmail}</span>
                  <span>{request.role}</span>
                  <Button
                    onClick={() => handleAcceptJoinRequest(request)}
                    text="Accept"
                  />
                  <OutlineCautionButton
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

const OutlineCautionButton = styled(Button)`
  background: transparent;
  color: var(--caution);
  border: 2px solid var(--caution);
  padding: 8px;
  white-space: nowrap;

  &:hover {
    background-color: var(--blue900);
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
                  <OutlineCautionButton
                    $level="caution"
                    text="Delete Practice Plan"
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

// #region goals

const GoalsTable = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  overflow: clip;
`;

const GoalsTableRow = styled.tr``;

const GoalsTableCell = styled.td`
  padding: 4px 16px;
  text-align: center;
`;

type GoalsRowType = {
  className?: string;
  goal: GoalType;
  teamId: string;
  moves: MoveType[];
  practicePlans: PracticePlanType[];
};

const GoalsRow = styled(
  ({ className, goal, teamId, moves, practicePlans }: GoalsRowType) => {
    const [applicablePracticePlans, setCurrentApplicablePracticePlans] =
      useState<number>();

    useEffect(() => {
      calculateCurrentPercentage(goal.moveId, teamId).then((plans) =>
        setCurrentApplicablePracticePlans(plans)
      );
    }, [goal.moveId, teamId]);

    const calculateCurrentPercentage = async (moveId: string, teamId: string) =>
      await getDocs(
        query(
          collection(db, 'practice_plan'),
          and(
            where('teamId', '==', teamId),
            where('moves', 'array-contains', moveId)
            // TODO: add start date and end date queries
          )
        )
      ).then((querySnapshot) => querySnapshot.docs.length);

    const currentMove = moves.find((move) => move.id === goal.moveId) || {
      name: '',
      area: '',
      position: '',
    };

    return (
      <GoalsTableRow className={className}>
        <GoalsTableCell>{currentMove.name}</GoalsTableCell>
        <GoalsTableCell>{currentMove.area}</GoalsTableCell>
        <GoalsTableCell>{currentMove.position}</GoalsTableCell>
        <GoalsTableCell>{String(goal.startDate)}</GoalsTableCell>
        <GoalsTableCell>{String(goal.endDate)}</GoalsTableCell>
        <GoalsTableCell>
          {Math.round(goal.practicePlanPercentage * 100)}%
        </GoalsTableCell>
        <GoalsTableCell>
          {Math.round(
            (Number(applicablePracticePlans) / practicePlans.length) * 100
          )}
          %
        </GoalsTableCell>
      </GoalsTableRow>
    );
  }
)`
  &:nth-of-type(odd) {
    background-color: hsla(255, 10%, 50%, 0.5);
    backdrop-filter: blur(3px);
  }
`;

const GoalTableScroll = styled.div`
  min-width: 0;
  overflow: auto;

  & > ${GoalsTable} {
    min-width: 100%;
  }
`;

const GoalsTableHead = styled.thead`
  & > ${GoalsTableRow} {
    background-color: var(--blue900);
  }
`;

type GoalsSectionType = {
  className?: string;
  team: TeamType;
  setTeam: Dispatch<SetStateAction<TeamType>>;
  moves: MoveType[];
  practicePlans: PracticePlanType[];
};

const GoalsSection = styled(
  ({ className, team, setTeam, moves, practicePlans }: GoalsSectionType) => {
    const [percentageOfPractices, setPercentageOfPractices] = useState(0.5);
    const addGoalRef = useRef<HTMLDialogElement>();

    const showAddGoalModalForm = () => {
      if (addGoalRef.current) {
        addGoalRef.current.showModal();
      }
    };

    const hideAddGoalModalForm = () => {
      if (addGoalRef.current) {
        addGoalRef.current.close();
      }
    };

    const handleAddGoalSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      if (
        !formData.get('endDate') &&
        formData.get('startDate') &&
        !formData.get('move')
      ) {
        alert('Please enter all fields');
        return;
      }

      if (
        Number(new Date(formData.get('endDate') as string)) -
          Number(new Date(formData.get('startDate') as string)) <
        0
      ) {
        alert('Start date cannot be after end date');
        return;
      }

      const newGoal = {
        moveId: formData.get('move'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        practicePlanPercentage: percentageOfPractices,
      };

      updateDoc(doc(db, 'teams', team.id), {
        goals: arrayUnion(newGoal),
      });

      //@ts-expect-error -- prev is the same type
      setTeam((prev: TeamType) => ({
        ...prev,
        goals: [...prev.goals, newGoal],
      }));

      hideAddGoalModalForm();
    };

    return (
      <section className={className}>
        <h2>Goals</h2>
        <GoalTableScroll>
          <GoalsTable>
            <GoalsTableHead>
              <GoalsTableRow>
                <GoalsTableCell>Name</GoalsTableCell>
                <GoalsTableCell>Area</GoalsTableCell>
                <GoalsTableCell>Position</GoalsTableCell>
                <GoalsTableCell>Start</GoalsTableCell>
                <GoalsTableCell>End</GoalsTableCell>
                <GoalsTableCell>Goal Percentage</GoalsTableCell>
                <GoalsTableCell>Current Percentage</GoalsTableCell>
              </GoalsTableRow>
            </GoalsTableHead>
            <tbody>
              {team.goals.map((goal) => (
                <GoalsRow
                  goal={goal}
                  teamId={team.id}
                  moves={moves}
                  practicePlans={practicePlans}
                />
              ))}
            </tbody>
          </GoalsTable>
        </GoalTableScroll>
        <Button
          text="Add Goal"
          onClick={showAddGoalModalForm}
        />
        <FormModal
          passedRef={addGoalRef}
          onClose={hideAddGoalModalForm}
        >
          <form onSubmit={handleAddGoalSubmit}>
            <h2>Add a Goal</h2>
            <label htmlFor="move">
              <span>Move:</span>
              <select
                name="move"
                id="move"
              >
                {moves.map(({ id, name, area, position }) => (
                  <option
                    key={id}
                    value={id}
                  >
                    {name} - {area} - {position}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="startDate">
              <span>Start Date:</span>
              <input
                type="date"
                name="startDate"
                id="startDate"
              />
            </label>
            <label htmlFor="endDate">
              <span>End Date:</span>
              <input
                type="date"
                name="endDate"
                id="endDate"
              />
            </label>
            <label htmlFor="practicePlanPercentage">
              <span>Percentage of Practices</span>
              <output>{Math.round(percentageOfPractices * 100)}</output>
              <input
                type="range"
                max="1"
                min="0"
                step=".01"
                value={percentageOfPractices}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPercentageOfPractices(Number(e.target.value))
                }
              ></input>
            </label>

            <Button
              text="Add Goal"
              type="submit"
            />
          </form>
        </FormModal>
      </section>
    );
  }
)`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  gap: 16px;
`;

// #endregion goals

// #region overviewCharts

type OverviewChartsTypes = {
  className?: string;
  practicePlans: PracticePlanType[];
  moves: MoveType[];
};

const OverviewCharts = styled(
  ({ className, practicePlans, moves }: OverviewChartsTypes) => {
    const moveCountAggregation = Object.entries(
      practicePlans
        .flatMap((i) => i.moves)
        .reduce(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          (acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }),
          {}
        )
    ).map(([key, value]) => ({
      ...(moves.find((i) => i.id === key) ?? {}),
      value,
    }));

    const positionCountAggregation = Object.entries(
      moveCountAggregation.reduce(
        (acc, val) => ({
          ...acc,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          [val.position]: acc[val.position]
            ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              acc[val.position] + val.value
            : val.value,
        }),
        {}
      )
    ).map(([position, value]) => ({ name: position, value }));

    const areaCountAggregation = Object.entries(
      moveCountAggregation.reduce(
        (acc, val) => ({
          ...acc,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          [val.area]: acc[val.area] ? acc[val.area] + val.value : val.value,
        }),
        {}
      )
    ).map(([area, value]) => ({ name: area, value }));

    return (
      <section className={className}>
        <DoughnutChart
          data={moveCountAggregation as { name: string; value: number }[]}
          width={500}
          height={500}
        />
        <DoughnutChart
          data={positionCountAggregation as { name: string; value: number }[]}
          width={500}
          height={500}
        />
        <DoughnutChart
          data={areaCountAggregation as { name: string; value: number }[]}
          width={500}
          height={500}
        />
      </section>
    );
  }
)`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

  @media screen and (width >= 850px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    justify-content: unset;
  }
`;

// #endregion overviewCharts

// #region Team

const MainContent = styled.main`
  display: grid;
  gap: 64px;
  max-width: 90%;

  @media screen and (width > 550px) {
    max-width: 80%;
  }
`;

const HeaderContent = styled.div`
  padding-top: 64px;
  display: grid;
  gap: 16px;
`;

const Divider = styled.hr`
  color: white;
`;

export const Team = styled(({ className }) => {
  const [team, setTeam] = useState<any>();
  const [moves, setMoves] = useState<any>([]);
  const [practicePlans, setPracticePlans] = useState<any>([]);
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
                title="Goals"
                value={team.goals?.length ?? 0}
              />
              <NumberTile
                title="Practice Plans"
                subtext="practice plans in the current season"
                value={practicePlans.length}
              />
              <NumberTile
                title="Moves"
                value={moves.length}
              />
            </NumberTileLayout>
          </HeaderContent>
          <Divider />
          <OverviewCharts
            practicePlans={practicePlans}
            moves={moves}
          />
          <Divider />
          <GoalsSection
            team={team}
            setTeam={setTeam}
            moves={moves}
            practicePlans={practicePlans}
          />
          <Divider />
          <PracticePlanSection
            practicePlans={practicePlans}
            setPracticePlans={setPracticePlans}
          />
          <Divider />
          <MovesSection
            team={team}
            teamId={teamId}
            setMoves={setMoves}
            moves={moves}
          />
          <Divider />
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
  background: linear-gradient(var(--blue500), var(--blue900));
  color: white;
  padding: 8px;
  display: flex;
  justify-content: center;

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
