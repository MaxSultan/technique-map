import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { getAuth } from 'firebase/auth';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserContext } from '@technique-map/auth';
import { Button } from './button';

const ThinButton = styled(Button)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`;

export const NavBar = styled(({ className }) => {
  const user = useContext(UserContext) as unknown as { email: string };

  return (
    <>
      <nav className={className}>
        <ul>
          {user ? (
            <>
              <li>
                <NavLink to="/teams">Teams</NavLink>
              </li>

              <li>{user.email}</li>
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
    </>
  );
})`
  border-bottom: 1px groove var(--blue100);
  background-color: var(--blue100);
  padding: 16px 8px;
  color: white;

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
      padding-right: 16px;
      border-right: 1px groove rgba(255, 255, 255, 0.25);
    }

    & > li {
      padding-left: 16px;
      padding-right: 16px;
    }

    & > li:nth-of-type(2) {
      margin-left: auto;
    }
  }
`;
