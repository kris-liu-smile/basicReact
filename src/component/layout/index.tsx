import * as React from 'react';
import { useState, useEffect } from 'react';
import LayoutHeader from './Header';
import LayoutAside from './Aside';
import LayoutMain from './Main';
import './index.scss';
import { routes, routesProps } from './config';
import {
  withRouter,
  RouteComponentProps,
  Link,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import K6Router from '../../component/K6Router';
import ReduxHook from '../../pages/redux/reduxHook';

const Layout = () => {
  const childRoutes: routesProps =
    routes.filter(
      (item) => item.name === window.location.hash.split('/')[1]
    )[0] || routes[0];

  console.log(childRoutes, 'childRoutes');
  return (
    <div>
      <LayoutHeader />
      <div className="layout-main">
        {/* <LayoutAside routesList={childRoutes} />
        <LayoutMain routesList={childRoutes} /> */}
        <div className="layout-aside-contain">
          {childRoutes.children &&
            childRoutes.children.map((item: any) => {
              return (
                // <p onClick={() => gotoPage(item.path)} key={item.title}>
                //   {item.title}
                // </p>
                <Link key={item.title} to={item.path}>
                  {item.title}
                </Link>
              );
            })}
        </div>
        <div className="layout-main-contain">
          <Switch>
            {childRoutes.children.map((item) => {
              console.log(item);
              const { path, component } = item;
              return (
                  <Route exact path={path}>
                    <ReduxHook />
                  </Route>
              );
            })}
            <Redirect to="/redux/class" from="/redux" exact />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Layout;
