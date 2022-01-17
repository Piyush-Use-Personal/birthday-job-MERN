import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutingComponent from './routes';
import { GlobalStyles, themeContext } from './style/theme.config';

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
