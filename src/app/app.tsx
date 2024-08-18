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
import { Home } from '@technique-map/home';

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<NavBar />}
    >
      <Route
        path="/"
        element={<Home />}
      />
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

  & > ${Panel} {
    background-color: var(--blue500);
    color: var(--gray100);
    & a {
      color: currentColor;
    }
  }

  & > ${ToastDisplay} {
    --toast-position: 0%;
    position: fixed;
    bottom: 16px;
    right: var(--toast-position);
    width: 100%;
  }

  @media screen and (width > 850px) {
    & > ${ToastDisplay} {
      --toast-position: 32px;
      right: var(--toast-position);
    }
  }
`;

export default App;
