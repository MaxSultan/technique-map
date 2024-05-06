import './firebase';
import {
  GlobalStyle,
  PanelProvider,
  ToastProvider,
  ToastDisplay,
  Panel,
} from '@technique-map/design-system';
import { SignInPage, SignUpPage, UserProvider } from '@technique-map/auth';
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createHashRouter,
} from 'react-router-dom';
import { NavBar } from '@technique-map/design-system';
import { PracticePlan } from '@technique-map/practice-plans';
import { Map } from '@technique-map/map-items';
import styled from 'styled-components';
import { Team, TeamsIndex } from '@technique-map/teams';

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<NavBar />}
    >
      <Route
        path="teams/:id/practice_plans/create"
        element={<Map />}
      />
      <Route
        path="teams/:id/practice_plans/:practice_plan_id"
        element={<PracticePlan />}
      />
      <Route
        path="/teams"
        element={<TeamsIndex />}
      />
      <Route
        path="/teams/:id"
        element={<Team />}
      />
      <Route
        path="teams/:id/practice_plans/:practice_plan_id/edit"
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
