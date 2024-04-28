import React from 'react';
import { EmailIcon, KeyIcon } from '@technique-map/design-system';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IconInput = styled(({ Icon, className, ...rest }) => {
  return (
    <div className={className}>
      <input {...rest}></input>
      <Icon />
    </div>
  );
})`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  & > input {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 8px 0 0 8px;
    padding: 8px 16px 8px 16px;
    color: white;
    caret-color: white;
  }
  & > svg {
    padding-left: 8px;
    padding-right: 8px;
    border: 1px solid white;
    border-radius: 0 8px 8px 0;
    height: 95%;
  }
`;

export const SignInPage = styled(({ className }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      formData.get('email') as string,
      formData.get('password') as string
    );
    navigate('/');
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <IconInput
          Icon={EmailIcon}
          id="email"
          type="email"
          name="email"
        />
        <IconInput
          Icon={KeyIcon}
          id="password"
          type="password"
          name="password"
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
})`
  height: 100%;
  background-color: var(--blue100);
  color: white;
  display: grid;
  place-items: center;

  & > form {
    display: grid;
    justify-content: center;
    gap: 8px;
    border: 1px solid white;
    padding: 64px;
    border-radius: 16px;

    & > button {
      border-radius: 20em;
      background-color: transparent;
      border-color: var(--affirmative);
      color: var(--affirmative);
    }
  }
`;
