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
  border-bottom: 1px groove var(--secondary);
  background-color: var(--primary);
  padding: 16px;

  & a {
    color: white;
  }

  & > ul {
    list-style: none;
    display: flex;
    gap: 32px;
    padding: 0;
    margin: 0;
  }
`;
