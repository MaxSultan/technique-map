import './firebase';
import { GlobalStyle } from '@technique-map/design-system';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { NavBar } from '@technique-map/design-system';
import { PracticePlan, PracticePlans } from '@technique-map/practice-plans';
import { Map } from '@technique-map/map-items';

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

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
