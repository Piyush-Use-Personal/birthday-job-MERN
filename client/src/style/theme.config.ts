/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from 'styled-components';

export const themeContext = {
  primary: '#ffffff',
  primaryText: '#465a61',
  secondaryText: '#3166f5',
  secondary: '#f0f0f0',
  ternaryText: '#f0f0f0',
  ternary: '#aebbc2',
  fade: '#f0f0f0',
  fadeText: '#010101',
  dangerText: '#ff0e0e',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    font-family: Inter !important;
    font-weight: 400;
    font-style: normal;
    height: 100vh;
    transition: all 0.50s linear;
  }
  input, textarea, button {font-family: inherit}
  `;
