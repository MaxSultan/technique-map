import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

export const NavBar = styled(({ className }) => (
  <>
    <nav className={className}>
      <ul>
        <li>
          <NavLink to="/practice_plans">Practice Plans</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
))`
  border-bottom: 1px groove var(--blue100);
  background-color: var(--blue100);
  padding: 16px;

  & a {
    color: white;
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
  }
`;
