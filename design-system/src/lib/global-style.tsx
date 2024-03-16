import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
  height: 100%;
  padding: 0;
  margin: 0;
}

#root {
  height: 100%;
}

dialog:focus {
  outline: none;
}

 * {
  font-family: 'Lobster Two', sans-serif;
 }
`;
