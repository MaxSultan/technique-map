import './firebase';
import { getAuth } from 'firebase/auth';
import {
  GlobalStyle,
  PanelProvider,
  ToastProvider,
  ToastDisplay,
  Panel,
} from '@technique-map/design-system';
import { SignInPage, SignUpPage } from '@technique-map/auth';
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createHashRouter,
} from 'react-router-dom';
import { NavBar } from '@technique-map/design-system';
import { PracticePlan, PracticePlans } from '@technique-map/practice-plans';
import { Map } from '@technique-map/map-items';
import styled from 'styled-components';
import { createContext, useState } from 'react';

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<NavBar />}
    >
      <Route
        path="/create"
        element={<Map />}
      />
      <Route
        path="/practice_plans"
        element={<PracticePlans />}
      />
      <Route
        path="/practice_plans/:id"
        element={<PracticePlan />}
      />
      <Route
        path="/"
        element={<PracticePlans />}
      />
      <Route
        path="/practice_plans/edit/:id"
        element={<Map />}
      />
      <Route
        path="/sign_in"
        element={<SignInPage />}
      />
      <Route
        path="/sign_up"
        element={<SignUpPage />}
      />
    </Route>
  )
);

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  if (!user && window.location.pathname !== '/technique-map/#/sign_in') {
    window.location.href = '/technique-map/#/sign_in';
  }

  getAuth().onAuthStateChanged((user) => {
    console.log(user);
    setUser(user);
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const App = styled(({ className }) => {
  return (
    <div className={className}>
      <UserProvider>
        <ToastProvider>
          <PanelProvider>
            <RouterProvider router={router} />
            <GlobalStyle />
          </PanelProvider>
        </ToastProvider>
      </UserProvider>
    </div>
  );
})`
  height: 100%;

  & > ${ToastDisplay} {
    position: fixed;
    bottom: 16px;
    right: 50%;
    transform: translateX(50%);
  }

  & > ${Panel} {
    background: linear-gradient(var(--blue100), var(--blue900));
  }

  @media screen and (width > 850px) {
    & > ${ToastDisplay} {
      right: 32px;
      transform: translateX(0%);
    }
  }
`;

export default App;
