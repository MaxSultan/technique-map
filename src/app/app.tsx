import './firebase';
import { createGlobalStyle } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { NavBar } from '@technique-map/design-system';
import { PracticePlans } from '@technique-map/practice-plans';

import Map from './map';

const GlobalStyle = createGlobalStyle`
 :root {
  --primary: #353859;
  --secondary: #3B3B71;
  --tertiary: #373456;
  --highlight: #B842A8;

  --affirmative: #33C27D;
  --caution: #EA6F3E;

  --orange: #F86543;
  --yellow: #E39506;
}

html,body {
  min-height: 100%;
  padding: 0;
  margin: 0;
}

dialog:focus {
  outline: none;
}

 * {
  font-family: 'Lobster Two', sans-serif;
 }
`;

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
        path="/"
        element={<PracticePlans />}
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
