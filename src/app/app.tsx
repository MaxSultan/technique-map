import './firebase';
import {
  GlobalStyle,
  PanelProvider,
  ToastProvider,
  ToastDisplay,
  Panel,
} from '@technique-map/design-system';
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
    </Route>
  )
);

export const App = styled(({ className }) => (
  <div className={className}>
    <ToastProvider>
      <PanelProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
      </PanelProvider>
    </ToastProvider>
  </div>
))`
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
