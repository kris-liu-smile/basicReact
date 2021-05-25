import { FC } from 'react';
import { routesProps } from './config';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface RouteProps {
  routesList: routesProps;
}
const LayoutAside: FC<RouteComponentProps & RouteProps> = (props) => {
  const { routesList } = props;
  const { history } = props;

  const gotoPage = (path: string) => {
    if (history.location.pathname !== path) history.push(path);
  };
  return (
    <div className="layout-aside-contain">
      {routesList.children &&
        routesList.children.map((item: any) => {
          return (
            <p
              className={
                history.location.pathname === item.path ? 'layout-aside-actived' : ''
              }
              onClick={() => gotoPage(item.path)}
              key={item.title}
            >
              {item.title}
            </p>
          );
        })}
    </div>
  );
};

export default withRouter(LayoutAside);
