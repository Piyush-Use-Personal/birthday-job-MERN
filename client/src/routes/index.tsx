import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../pages/home';
import ROUTES from './names';

const RoutingComponent: React.FC = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path={ROUTES.HOME_PAGE}
        render={() => <Home /> }
      />
    </Switch>
  );
};

export default withRouter(RoutingComponent);
