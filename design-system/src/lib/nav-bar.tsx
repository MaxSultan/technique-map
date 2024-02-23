import styled from 'styled-components';
import {
  NavLink,
  Outlet
} from 'react-router-dom';

export const NavBar = styled(({className}) => (
    <>
    <nav className={className}>
      <ul>
        <li><NavLink to="/">Practice Plans</NavLink></li>
        <li><NavLink to="/create">Create</NavLink></li>
      </ul>
    </nav>
    <Outlet />
    </>
  ))`
  & > ul {
    list-style: none;
    display: flex;
    gap: 32px;
  }
  `;