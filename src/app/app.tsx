import styled, {createGlobalStyle} from 'styled-components';

import Map from './map';

const GlobalStyle = createGlobalStyle`
 :root {
  --primary: #353859;
  --secondary: #3B3B71;
  --highlight: #B842A8;
}

html,body {
  min-height: 100%;
}

dialog:focus {
  outline: none;
}
`;

export function App() {
  return (
    <>
    <GlobalStyle/>
      <Map />
    </>
  );
}

export default App;
