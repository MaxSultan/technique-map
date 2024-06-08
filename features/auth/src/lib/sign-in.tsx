import React from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button, EmailIcon, KeyIcon } from '@technique-map/design-system';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SignInSignUpLink } from './sign-in-sign-up-link';

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
  height: min-content;

  &:focus-within {
    border-radius: 8px;
    outline: 1px solid blue;
  }

  & > input {
    background-color: transparent;
    border: 2px solid white;
    border-radius: 8px 0 0 8px;
    padding: 8px 16px 8px 16px;
    color: white;
    caret-color: white;
    font-size: 1em;

    &:focus {
      outline: none;
    }
  }

  & > svg {
    padding-left: 8px;
    padding-right: 8px;
    border: 2px solid white;
    border-radius: 0 8px 8px 0;
    height: 90%;
    border-left: none;
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
        <SignInSignUpLink />
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

        <Button
          type="submit"
          text="Sign In"
        />
      </form>
    </div>
  );
})`
  --form-padding: 16px;
  height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
  color: white;
  display: grid;
  place-items: center;

  & > form {
    display: grid;
    justify-content: center;
    align-content: space-between;
    gap: 8px;
    border: 1px solid white;
    padding: var(--form-padding);
    border-radius: 24px;
    aspect-ratio: 1;
    box-shadow: 0px 10px 15px var(--blue900);
  }
`;
