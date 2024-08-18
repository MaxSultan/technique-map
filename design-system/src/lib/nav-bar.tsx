import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { getAuth } from 'firebase/auth';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserContext } from '@technique-map/auth';
import { Button } from './button';
import { PanelContext, PanelContextType, PanelProvider } from './panel';

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

const ThinButton = styled(Button)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  --shadow-color: hsl(236deg 22% 21%);
  box-shadow: 0px 0.8px 0.8px hsl(from var(--shadow-color) h s l / 0.65),
    0px 1.3px 1.2px -1.9px hsl(from var(--shadow-color) h s l / 0.5),
    0px 3.6px 3.4px -3.7px hsl(from var(--shadow-color) h s l / 0.36);
`;

const OverflowEmail = styled.li`
  text-overflow: ellipsis;
  overflow: hidden;
  flex-basis: 0px;
  min-width: 75px;
  flex-grow: 1;
  text-align: end;
`;

const NavigationPanelContent = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>
      </ul>
    </div>
  );
};

const NavigationPanelButton = styled(({ className }) => {
  const { showPanel, setPanelContent, setPanelTitle } = useContext(
    PanelContext
  ) as PanelContextType;

  const handleButtonClick = () => {
    setPanelTitle('Navigation Menu');
    setPanelContent(() => <NavigationPanelContent />);
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
  background-color: var(--gray200);
  border: none;
  border-radius: 8px;
  padding: 8px;
  display: grid;
  place-items: center;
  --shadow-color: hsl(236deg 22% 21%);
  box-shadow: 0px 0.8px 0.8px hsl(from var(--shadow-color) h s l / 0.65),
    0px 1.3px 1.2px -1.9px hsl(from var(--shadow-color) h s l / 0.5),
    0px 3.6px 3.4px -3.7px hsl(from var(--shadow-color) h s l / 0.36);

  &:active {
    box-shadow: none;
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
                <NavigationPanelButton />
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
