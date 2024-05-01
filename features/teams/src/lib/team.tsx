import styled from 'styled-components';
import { db } from '../../../../src/app/firebase';
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useRef, useState } from 'react';
import { CloseIcon, Loader, PageLoader } from '@technique-map/design-system';
import { UserContext } from '@technique-map/auth';
import { Link } from 'react-router-dom';

const ShowFor = ({ roles, team, children }) => {
  const user = useContext(UserContext);
  const userPermission = team.users.find((u) => u.uid === user?.uid);
  return userPermission && roles.includes(userPermission.role)
    ? children
    : null;
};

const UserRoleItem = ({ uid, role, team, setTeam }) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const user = useContext(UserContext);
  const updateRoleRef = useRef();

  const findUserEmail = async (uid) => {
    return await getDoc(doc(db, 'users', uid)).then((querySnapshot) => {
      const newData = {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };

      return newData.email;
    });
  };

  useEffect(() => {
    findUserEmail(uid).then(setUserEmail);
  }, [uid]);

  const handleRemoveUserFromTeam = () => {
    updateDoc(doc(db, "teams", team.id), {
      users: arrayRemove({uid: uid, role: role}),
      userIds: arrayRemove(uid)
    })
    setTeam(prev => ({
      ...prev,
      users: prev.users.filter(item => item.uid !== uid),
      userIds: prev.userIds.filter(item => item !== uid),
    }))
  }

  const showUpdateRoleForm = () => {
    updateRoleRef.current.showModal();
  }

  const handleRoleUpdateSubmit = (event: React.SyntheticEvent<HTMLFormElement>
    ) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      updateDoc(doc(db, "teams", team.id), {
        users: arrayRemove({uid: uid, role: role}),
      })

      updateDoc(doc(db, "teams", team.id), {
        users: arrayUnion({uid: uid, role: formData.get('newRole')}),
      })
      setTeam(prev => {
        const updatedUser = prev.users.find(i => i.uid === uid)
        updatedUser.role = formData.get('newRole');

        return {
          ...prev,
          users: [...prev.users.filter(item => item.uid !== uid), updatedUser],
        }
      })
      updateRoleRef.current.close();
  }

  return (
    <li>
      {userEmail}: {role} 
      <ShowFor roles={['admin']} team={team}>
        <button onClick={showUpdateRoleForm}>Update Role</button> 
        {uid !== user.uid && <button onClick={handleRemoveUserFromTeam}>Remove User</button>}
        <dialog ref={updateRoleRef}>
          <button onClick={() => updateRoleRef.current.close()}><CloseIcon/></button>
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
        </dialog> 
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
  return getDocs(query(collection(db, 'moves'), where('teamId', '==', teamId))).then((querySnapshot) => {
    const movesData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return movesData;
  })
}

const getTeamPracticePlans = (teamId: string) => {
  return getDocs(query(collection(db, 'practice_plan'), where('teamId', '==', teamId))).then((querySnapshot) => {
    const practicePlanData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return practicePlanData;
  })
}

export const Team = styled(({ className }) => {
  const [team, setTeam] = useState();
  const [moves, setMoves] = useState([]);
  const [practicePlans, setPracticePlans] = useState([]);

  const user = useContext(UserContext);

  const { id: teamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTeamData(teamId).then(setTeam);
    getTeamMoves(teamId).then(setMoves)
    getTeamPracticePlans(teamId).then(setPracticePlans)
  }, [teamId]);

  // TODO: if team userIds doesn't contain user.uid redirect
  useEffect(() => {
    if (user && team && !team.userIds.includes(user.uid)){
      navigate('/')
    }
  }, [team, user])

  const handleAcceptJoinRequest = (request) => {
    updateDoc(doc(db, "teams", teamId), {
      joinRequests: arrayRemove(request),
      users: arrayUnion({uid: request.uid, role: request.role}),
      userIds: arrayUnion(request.uid)
    })
    setTeam((prev) => ({
      ...prev, 
      joinRequests: prev.joinRequests.filter(req => req.uid !== request.uid),
      users: [...prev.users, {uid: request.uid, role: request.role}],
      userIds: [...prev.userIds, request.uid]
    }))
  }

  const handleDenyJoinRequest = (request) => {
    updateDoc(doc(db, "teams", teamId), {
      joinRequests: arrayRemove(request),
    })
    setTeam((prev) => ({
      ...prev, 
      joinRequests: prev.joinRequests.filter(req => req.uid !== request.uid),
    }))
  }

  const dayMonthYearFromUnixTime = (unixTime: number | string) =>
      new Date(Number(unixTime) * 1000).toLocaleDateString();

  return (
    <div className={className}>
      {team ? (
        <main>
          <h1>
            {team.name} ({team.state})
          </h1>

          <h2>Practice Plans</h2>
          <ul>
            {practicePlans.map(plan => <Link to={`practice_plans/${plan.id}`}>
              <li>{dayMonthYearFromUnixTime(plan.date.seconds)}</li>
            </Link>
            )}
          </ul>
          <button onClick={() => navigate('practice_plans/create')}>Add Practice Plan</button>

          <h2>Moves</h2>
          <ul>
            {moves.map(move => <li>{JSON.stringify(move)}</li>)}
          </ul>

          <ShowFor
            roles={['admin', 'base+']}
            team={team}
          >
            <section>
              <h2>Team Users</h2>
              <ul>
                {team.users.map((user) => (
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
              {team.joinRequests.map((request) => (
                <li>
                  {request.userEmail} {request.role} <button onClick={() => handleAcceptJoinRequest(request)}>Accept</button>{' '}
                  <button onClick={() => handleDenyJoinRequest(request)}>Decline</button>
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
  width: 100%;
  background-color: var(--blue100);
  color: white;
  padding: 64px;

  & > h1 {
    margin: 0;
  }

  & a {
    color:white;
  }
`;
