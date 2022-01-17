import React from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutingComponent from './routes';
import { GlobalStyles, themeContext } from './style/theme.config';
import { DEFAULT_AXIOS_URL } from './constant/env';

axios.defaults.baseURL = DEFAULT_AXIOS_URL;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeContext}>
      <GlobalStyles />
      <Router>
        <RoutingComponent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
