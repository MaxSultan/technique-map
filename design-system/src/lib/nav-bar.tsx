import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserContext } from '../../../src/app/app';
import { getAuth } from 'firebase/auth';

export const NavBar = styled(({ className }) => {
  const user = useContext(UserContext);

  return (
    <>
      <nav className={className}>
        <ul>
          {user ? (
            <>
              <li>
                <NavLink to="/practice_plans">Practice Plans</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create</NavLink>
              </li>

              <li>{user.email}</li>
              <li>
                <button onClick={() => getAuth().signOut()}>Sign out</button>
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
  padding: 16px;
  color: white;

  & a {
    color: currentcolor;
  }

  & > ul {
    list-style: none;
    display: flex;
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

    & > li:nth-of-type(3) {
      margin-left: auto;
    }
  }
`;
