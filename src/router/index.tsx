import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import K6Router from '../component/K6Router';
import HomePage from '../pages/homePage/index';
import HookLayout from '../pages/hook'
import ReduxLayout from '../pages/redux';

const BasicRoute = (props: any) => {

  return <Router>
    <Switch>
        <K6Router exact path="/" component={HomePage} />
        <K6Router path="/redux" component={ReduxLayout} />
        <K6Router path="/hook" component={HookLayout} />
        <Redirect to="/" />
      </Switch>
  </Router>;
};

export default BasicRoute;
