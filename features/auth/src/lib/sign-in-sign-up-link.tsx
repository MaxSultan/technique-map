import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormLink = styled(({ className, children, to }) => {
  const location = useLocation();
  const isCurrentLink = location.pathname === to;

  return (
    <Link
      to={to}
      className={className}
      style={
        {
          '--link-background-color': isCurrentLink ? 'var(--blue900)' : 'white',
          '--link-color': isCurrentLink ? 'white' : 'var(--blue900)',
        } as React.CSSProperties
      }
    >
      {children}
    </Link>
  );
})`
  display: inline-block;
  color: var(--link-color);
  border: 2px solid var(--blue900);
  padding: 8px 32px;
  background-color: var(--link-background-color);

  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }

  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;

export const SignInSignUpLink = styled(({ className }) => {
  return (
    <div className={className}>
      <FormLink to="/sign_in">Sign In</FormLink>
      <FormLink to="/sign_up">Sign Up</FormLink>
    </div>
  );
})`
  display: flex;
`;
