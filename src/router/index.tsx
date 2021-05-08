import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import K6Router from '../component/K6Router';
import HomePage from '../pages/homePage/index';
import ReduxLayout from '../pages/redux';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();

const BasicRoute = (props: any) => {

  return <Router>
    <Switch>
        <K6Router exact path="/" component={HomePage} />
        <K6Router exact path="/redux" component={ReduxLayout} />
        <Redirect exact to="/" from="/" />
      </Switch>
  </Router>;
};

export default BasicRoute;
