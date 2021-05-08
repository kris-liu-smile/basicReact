import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { routesProps } from './config';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

interface RouteProps {
  routesList: routesProps;
}
const LayoutAside: FC<RouteComponentProps & RouteProps> = (props) => {
  const { routesList } = props;

  const gotoPage = (path: string) => {
    const { history } = props;
    // history.push(path);
    console.log(history, path)
    if (history.location.pathname !== path) history.push(path)
  };
  return (
    <div className="layout-aside-contain">
      {routesList.children &&
        routesList.children.map((item: any) => {
          return (
            // <p onClick={() => gotoPage(item.path)} key={item.title}>
            //   {item.title}
            // </p>
            <Link key={item.title} to={item.path}>{item.title}</Link>
          );
        })}
    </div>
  );
};

export default withRouter(LayoutAside);
