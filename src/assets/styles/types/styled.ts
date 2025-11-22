import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    backgroundColor: string;
    secondaryColor: string;
    secondaryColorHover: string;
    aliceBlue: string;
    white: string;
    black: string;
    grey: string;
    darkGrey: string;
    linearGradient: string;
    transparent: string;
  }
}
