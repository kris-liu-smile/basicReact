import { routesProps } from './config';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';
import B3RouteComponent from './B3RouteComponent'

interface Props {
  routesList: routesProps;
}
const LayoutMain = (props: Props) => {
  const { routesList } = props;
  return (
    <div className="layout-main-contain">
      <Switch>
        {routesList.children.map((item) => {
          const { path, component } = item;
          return (
            <Route
              key={path}
              path={path}
              exact
              render={(props) => (
                <B3RouteComponent
                  {...props}
                  component={component}
                />
              )}
            />
          );
        })}
        <Redirect to={routesList.children[0].path} />
      </Switch>
    </div>
  );
};

export default LayoutMain;
