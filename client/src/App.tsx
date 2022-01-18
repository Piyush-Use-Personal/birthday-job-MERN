import React from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, themeContext } from './style/theme.config';
import { DEFAULT_AXIOS_URL } from './constant/env';
import Home from './pages/home';

axios.defaults.baseURL = DEFAULT_AXIOS_URL;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeContext}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
