import LayoutHeader from './Header';
import LayoutAside from './Aside';
import LayoutMain from './Main';
import './index.scss';
import { routes, routesProps } from './config';

const Layout = () => {
  const childRoutes: routesProps =
    routes.filter(
      (item) => item.name === window.location.hash.split('/')[1]
    )[0] || routes[0];

  return (
    <div className="layout-contain">
      <LayoutHeader />
      <div className="layout-main">
        <LayoutAside routesList={childRoutes} />
        <LayoutMain routesList={childRoutes} />
      </div>
    </div>
  );
};

export default Layout;
