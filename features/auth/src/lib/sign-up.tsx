import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ToastContext, ToastContextType } from '@technique-map/design-system';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../src/app/firebase';

export const SignUpPage = styled(({ className }) => {
  const { addToast, removeToast } = useContext(
    ToastContext
  ) as ToastContextType;

  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData.get('password') !== formData.get('passwordConfirmation')) {
      addToast({
        variant: 'success',
        message: 'Password and Password confirmation do not match',
        onClose: () =>
          removeToast('Password and Password confirmation do not match'),
      });
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      formData.get('email') as string,
      formData.get('password') as string
    )
      .then((user) => {
        setDoc(doc(db, 'users', user.user.uid), {
          email: formData.get('email'),
        });
      })
      .then(() => {
        navigate('/');
      });
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
        <label htmlFor="passwordConfirmation">
          Password Confirmation:
          <input
            id="passwordConfirmation"
            type="password"
            name="passwordConfirmation"
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
