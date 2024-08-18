import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    /* --blue100: #3F4366;  */
    --primary: #353859;
    --secondary: #3B3B71;
    --tertiary: #373456;
    /* --blue900: #29284C; */
    --highlight: #B842A8;

    --affirmative: #33C27D;
    --caution: #EA6F3E;

    --orange: #F86543;
    --yellow: #E39506;

    // 10 color pallet

    --1:#1C1837;
    --2: #2C2C4E;
    --3:#3D3C60;
    --4:#2E314F;
    --5:#454766;
    --6:#565874;
    --7:#656781;
    --8:#73758C;
    --9:#808296;
    --10:#8C8DA0;

    // 3 color pallet
    --purple100: #CDC7E6;
    --purple200: #B4ABD9;
    --purple300: #9A8ECC;
    --purple400: #8072C0;
    --purple500: #6756B3;
    --purple600: #55469B;
    --purple700: #46397F;
    --purple800: #362C63;
    --purple900: #261F47;
    --purple950: #0F0C1C;

    --blue100: #9ea0bd;
    --blue200: #8688ac;
    --blue300: #6d709c;
    --blue400: #5b5e86;
    --blue500: #454766;
    --blue600: #3A3C55;
    --blue700: #292B3D;
    --blue800: #212231;
    --blue900: #181925;
    --blue950: #181925;

    --gray100: #E9E9ED;
    --gray200: #D2D3DA;
    --gray300: #BCBCC8;
    --gray400: #A5A6B6;
    --gray500: #8C8DA0;
    --gray600: #787A91;
    --gray700: #65667B;
    --gray800: #535465;
    --gray900: #40414F;
    --gray950: #2E2E38;
    
    --orange100: #f5d8cc;
    --orange200: #eebdaa;
    --orange300: #e7a388;
    --orange400: #cb572a;
    --orange500: #D66538;
    --orange600: #cb572a;
    --orange700: #a94923;
    --orange800: #873a1c;
    --orange900: #662c15;
    --orange950: #441d0e;

  --shadow-color: hsl(240deg 4% 50%);

  --shadow-elevation-low:
    0px 0.8px 0.8px hsl(from var(--shadow-color) h s l / 0.65),
    0px 1.3px 1.2px -1.9px hsl(from var(--shadow-color) h s l / 0.5),
    0px 3.6px 3.4px -3.7px hsl(from var(--shadow-color) h s l / 0.36);

  --shadow-elevation-medium:
    0px 0.8px 0.8px hsl(from var(--shadow-color) h s l / 0.68),
    0px 2.2px 2.1px -1.2px hsl(from var(--shadow-color) h s l / 0.57),
    0px 6.7px 6.3px -2.5px hsl(from var(--shadow-color) h s l / 0.45),
    0px 18.2px 17.1px -3.7px hsl(from var(--shadow-color) h s l / 0.34);
    
  --shadow-elevation-high:
    0px 0.8px 0.8px hsl(from var(--shadow-color) h s l / 0.63),
    0px 3.4px 3.2px -0.5px hsl(from var(--shadow-color) h s l / 0.58),
    0px 7px 6.6px -1.1px hsl(from var(--shadow-color) h s l / 0.53),
    0px 13.3px 12.5px -1.6px hsl(from var(--shadow-color) h s l / 0.47),
    -0.1px 24.1px 22.6px -2.1px hsl(from var(--shadow-color) h s l / 0.42),
    -0.1px 41.2px 38.6px -2.7px hsl(from var(--shadow-color) h s l / 0.37),
    -0.2px 66.3px 62.2px -3.2px hsl(from var(--shadow-color) h s l / 0.32),
    -0.2px 101.2px 94.9px -3.7px hsl(from var(--shadow-color) h s l / 0.26);

  --serif-font-family: ;
  --sans-serif-font-family: 'Rubik', sans-serif;
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
