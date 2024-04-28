import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = styled(({ className }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    createUserWithEmailAndPassword(
      auth,
      formData.get('email') as string,
      formData.get('password') as string
    );
    navigate('/');
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email:
          <input
            id="email"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
            Password:
          <input
            id="password"
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
})`
    height: 100%;
    background-color: var(--blue100);
    display: grid;
    place-items: center;
    color: white;

    & > form {
        display: grid;
        justify-content: center;
        gap: 8px;
        border: 1px solid white;
        padding: 64px;
        border-radius: 16px;

        & > label {
            display: grid;
            gap: 4px;
        }
    
        & > button {
          border-radius: 20em;
          background-color: transparent;
          border-color: var(--affirmative);
          color: var(--affirmative);
        }
      }
`;
