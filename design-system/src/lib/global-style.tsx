import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    --blue100: #3F4366; 
    --primary: #353859;
    --secondary: #3B3B71;
    --tertiary: #373456;
    --blue900: #29284C;
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
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    padding:0;
    margin:0
  }

  input {
    font-size: 1em;
  }


`;
