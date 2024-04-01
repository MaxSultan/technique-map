import './firebase';
import { GlobalStyle, PanelProvider, ToastProvider, ToastDisplay } from '@technique-map/design-system';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { NavBar } from '@technique-map/design-system';
import { PracticePlan, PracticePlans } from '@technique-map/practice-plans';
import { Map } from '@technique-map/map-items';
import styled from 'styled-components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<NavBar />}
    >
      <Route
        path="create"
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
  ),
  {
    basename: '/technique-map/',
  }
);

export const App = styled(({className}) => (
    <div className={className}>
    <ToastProvider>
      <PanelProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
      </PanelProvider>
    </ToastProvider>
    </div>
  )
)`
height: 100%;

& > ${ToastDisplay} {
  position: fixed;
  bottom: 16px;
  right: 50%;
  transform: translateX(50%);
}

@media screen and (width > 850px) {
  & > ${ToastDisplay} {
    right: 32px;
    transform: translateX(0%);
  }
}
`

export default App;
