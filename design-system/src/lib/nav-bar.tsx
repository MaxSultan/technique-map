import { SyntheticEvent, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserContext } from '@technique-map/auth';
import { Button } from './button';
import { PanelContext, PanelContextType, PanelProvider } from './panel';
import {
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
import { db } from '@technique-map/firebase';
import { TeamType } from '@technique-map/types';
import { FormModal } from './form-modal';
import { TrashIcon } from './icons/trash-icon';

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8.75 5.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5M5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
      />
    </svg>
  );
};

const StarIcon = styled(({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      fill="currentColor"
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m.252-12.932a.476.476 0 0 0-.682.195l-1.2 2.432l-2.684.39a.477.477 0 0 0-.266.816l1.944 1.892l-.46 2.674a.479.479 0 0 0 .694.504L8 10.709l2.4 1.261a.478.478 0 0 0 .694-.504l-.458-2.673L12.578 6.9a.479.479 0 0 0-.265-.815l-2.685-.39l-1.2-2.432a.473.473 0 0 0-.176-.195"
    />
  </svg>
))``;

const PeopleIcon = styled(({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      fill="currentColor"
      d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.508 5.508 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05A3.493 3.493 0 0 1 2 5.5M11 4a3.001 3.001 0 0 1 2.22 5.018a5.01 5.01 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.752.752 0 0 1-.549-.514a3.507 3.507 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4m-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5"
    />
  </svg>
))``;

const ThinButton = styled(Button)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`;

const OverflowEmail = styled.li`
  text-overflow: ellipsis;
  overflow: hidden;
  flex-basis: 0px;
  min-width: 75px;
  flex-grow: 1;
  text-align: end;
`;

const Form = styled.form`
  display: grid;
  gap: 8px;
  padding: 16px;
`;

const getMyTeams = (userId: string): Promise<void | abbreviatedTeamType[]> =>
  getDocs(
    query(collection(db, 'teams'), where('userIds', 'array-contains', userId))
  )
    .then((snapShot) => {
      const newData = snapShot.docs.map((doc) => {
        const documentData = doc.data();
        return {
          name: documentData.name,
          state: documentData.state,
          id: doc.id,
        };
      });
      return newData;
    })
    .catch((err) => console.log(err));

type abbreviatedTeamType = Pick<TeamType, 'name' | 'state' | 'id'>;

const addFavoriteTeamToUser = (userId: string, teamId: string) => {
  const userRef = doc(db, 'users', userId);
  updateDoc(userRef, {
    favoriteTeams: arrayUnion(teamId),
  });
};

const removeFavoriteTeamFromUser = (userId: string, teamId: string) => {
  const userRef = doc(db, 'users', userId);
  updateDoc(userRef, {
    favoriteTeams: arrayRemove(teamId),
  });
};

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationListItem = styled.li``;

const FavoriteTeamsHeading = styled.h2`
  font-size: 1em;
  font-weight: 500;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 8px;
  align-items: center;
`;

type ExtendedUserDataType = {
  uid?: string;
  email?: string;
  favoriteTeams?: string[];
};

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  display: inline-grid;
  place-content: center;
  place-items: normal;
  cursor: pointer;
`;

const DeleteIcon = styled(TrashIcon)`
  stroke: red;
`;

const NavigationPanelContent = styled(({ user, className }) => {
  const addFavoriteTeamsModalRef = useRef();
  const [favoritableTeams, setFavoritableTeams] = useState<
    abbreviatedTeamType[]
  >([]);
  const [extendedUserData, setExtendedUserData] =
    useState<ExtendedUserDataType>({});

  console.log(favoritableTeams);

  useEffect(() => {
    if (!user.uid) return;
    getMyTeams(user.uid).then((teams) =>
      setFavoritableTeams(teams as abbreviatedTeamType[])
    );
    getExtendedUserData(user.uid).then(setExtendedUserData);
  }, [user.uid]);

  const makeBackgroundInert = () => {
    document.body.inert = true;
  };

  const makeBackgroundInteractive = () => {
    document.body.inert = false;
  };

  const hideFavoriteTeamsModal = () => {
    // @ts-expect-error:next-line -- close exists on modal dialog
    addFavoriteTeamsModalRef?.current?.close();
    makeBackgroundInteractive();
  };

  const showFavoriteTeamsModal = () => {
    // @ts-expect-error:next-line -- showModal exists on modal dialog
    addFavoriteTeamsModalRef?.current?.showModal();
    makeBackgroundInert();
  };

  const handleAddFavoriteTeam =
    (userId: string) => (e: SyntheticEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget);
      preventDefault(e);
      addFavoriteTeamToUser(userId, formData.get('favoriteTeam') as string);
      hideFavoriteTeamsModal();
      setExtendedUserData((prev) => ({
        ...prev,
        favoriteTeams: [
          ...(prev.favoriteTeams ? prev.favoriteTeams : []),
          formData.get('favoriteTeam') as string,
        ],
      }));
    };

  const handleRemoveFavoriteTeam = (
    userId: string,
    teamId: string | undefined
  ) => {
    if (!teamId) return;
    // TODO: handle no userID or Team Id error
    removeFavoriteTeamFromUser(userId, teamId);
    setExtendedUserData((prev) => ({
      ...prev,
      favoriteTeams: prev?.favoriteTeams
        ? prev?.favoriteTeams.filter((i) => i !== teamId)
        : [],
    }));
  };

  const preventDefault = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const getExtendedUserData = (userUid: string) =>
    getDoc(doc(db, 'users', userUid)).then((doc) => ({
      ...doc.data(),
      uid: doc.id,
    }));

  const favoriteTeams = (ids: string[]) =>
    ids.map((id) => favoritableTeams.find((team) => team.id === id || false));

  return (
    <div className={className}>
      <NavigationList>
        <NavigationListItem>
          <NavLink to="/teams">
            <PeopleIcon /> Teams
          </NavLink>
        </NavigationListItem>
      </NavigationList>
      <FavoriteTeamsHeading>
        <StarIcon /> Favorite Teams
      </FavoriteTeamsHeading>
      {extendedUserData?.favoriteTeams?.length &&
      extendedUserData?.favoriteTeams?.length > 0 ? (
        <NavigationList>
          {/* eslint-disable-next-line eqeqeq */}
          {favoriteTeams(extendedUserData?.favoriteTeams)
            .filter((i) => i)
            .map((team) => (
              <NavigationListItem>
                <Link to={`/teams/${team?.id}`}>
                  {team?.name} ({team?.state})
                </Link>{' '}
                <DeleteButton
                  onClick={() => handleRemoveFavoriteTeam(user.uid, team?.id)}
                >
                  <DeleteIcon />
                </DeleteButton>
              </NavigationListItem>
            ))}
        </NavigationList>
      ) : (
        <p>No Favorite Teams</p>
      )}
      <Button
        text="Favorite a Team"
        onClick={showFavoriteTeamsModal}
      />
      <FormModal
        passedRef={addFavoriteTeamsModalRef}
        onClose={hideFavoriteTeamsModal}
      >
        <Form onSubmit={handleAddFavoriteTeam(user.uid)}>
          <label htmlFor="favoriteTeam">Teams:</label>
          <select
            name="favoriteTeam"
            id="favoriteTeam"
            onClick={preventDefault}
          >
            {favoritableTeams
              .filter(
                (team) => !extendedUserData.favoriteTeams?.includes(team.id)
              )
              .map((team) => (
                <option
                  value={team.id}
                  key={team.id}
                >
                  {team.name} ({team.state})
                </option>
              ))}
          </select>
          <Button
            text="Add Favorite"
            type="submit"
          />
        </Form>
      </FormModal>
    </div>
  );
})`
  display: grid;
  gap: 16px;
`;

const NavigationPanelButton = styled(({ className, user }) => {
  const { showPanel, setPanelContent, setPanelTitle } = useContext(
    PanelContext
  ) as PanelContextType;

  const handleButtonClick = () => {
    setPanelTitle('Navigation Menu');
    setPanelContent(() => <NavigationPanelContent user={user} />);
    showPanel();
  };

  return (
    <button
      onClick={handleButtonClick}
      className={className}
    >
      <MenuIcon />
    </button>
  );
})`
  background-color: var(--blue400);
  border: none;
  border-radius: 8px;
  padding: 8px;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-elevation-low);

  &:active {
    box-shadow: none;
  }

  & > svg {
    stroke: white;
    color: white;
  }
`;

export const NavBar = styled(({ className }) => {
  const user = useContext(UserContext) as unknown as { email: string };

  return (
    <PanelProvider>
      <nav className={className}>
        <ul>
          {user ? (
            <>
              <li>
                <NavigationPanelButton user={user} />
              </li>
              <OverflowEmail>{user.email}</OverflowEmail>
              <li>
                <ThinButton
                  text="Sign out"
                  onClick={() => getAuth().signOut()}
                />
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/sign_in">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/sign_up">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </PanelProvider>
  );
})`
  background-color: var(--blue500);
  padding: 16px 8px;
  color: white;
  position: relative;
  box-shadow: var(--shadow-elevation-medium);

  & a {
    color: currentcolor;
  }

  & > ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;

    & > li:not(:last-of-type) {
      padding-right: 8px;
      border-right: 1px groove rgba(255, 255, 255, 0.25);
    }

    & > li {
      padding-left: 8px;
      padding-right: 8px;
    }

    & > li:nth-of-type(2) {
      margin-left: auto;
    }
  }
`;
