import { FC } from 'react';

import {
  withRouter,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

const Krouter: FC<RouteComponentProps & RouteProps> = (props) => {
  return <Route {...props} />;
};

export default withRouter(Krouter);
