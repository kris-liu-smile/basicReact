import * as React from 'react';
import { useState } from 'react';
import { routesProps } from './config';
import { Switch, Route, Redirect } from 'react-router-dom';
import K6Router from '../../component/K6Router';
import './index.scss';
import B3RouteComponent from './B3RouteComponent'

interface Props {
  routesList: routesProps;
}
const LayoutMain = (props: Props) => {
  console.log(props);
  const { routesList } = props;
  console.log('进入main')
  return (
    <div className="layout-main-contain">
      <Switch>
        {routesList.children.map((item) => {
          const { path, component } = item;
          return (
            // <React.Fragment key={path}>
            //   <K6Router exact path={path} component={component} />
            // </React.Fragment>
            // <Route
            //   key={path}
            //   path={path}
            //   render={(props) => (
            //     <B3RouteComponent
            //       {...props}
            //       component={component}
            //     />
            //   )}
            //   exact
            // />
            <Route  exact path={path} component={component} />
          );
        })}
        <Redirect to="/redux/class" from="/redux" exact />
      </Switch>
    </div>
  );
};

export default LayoutMain;
