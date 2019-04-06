import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import NotFoundScreen from "../screens/NotFoundScreen"
// import HomeScreen from "../screens/HomeScreen"
// import EnquiryScreen from "../screens/EnquiryScreen"

const NotFoundScreen = lazy(() => import('../screens/NotFoundScreen'));
const HomeScreen = lazy(() => import('../screens/HomeScreen'));
const AboutScreen = lazy(() => import('../screens/AboutScreen'));
const EnquiryScreen = lazy(() => import('../screens/EnquiryScreen'));

const allRoutes = [
  {
    path: '/',
    component: HomeScreen,
    routes: [
      {
        path: '/home/AboutScreen',
        component: AboutScreen
      }
    ]
  },
  {
    path: '/EnquiryScreen',
    component: EnquiryScreen
  },
  {
    path: '*',
    component: NotFoundScreen
  }
];

const routeForRender = [];

const collectRoutes = routes => {
  routes.forEach(route => {
    const { routes } = route;
    routeForRender.push(route);
    if (routes) collectRoutes(routes);
  });
};

const renderRoutes = routes =>
  routes.map(({ path, exact = true, component = () => <NotFoundScreen /> }, i) => (
    <Route key={i} path={path} exact={exact} component={component} />
  ));

collectRoutes(allRoutes);

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{renderRoutes(routeForRender)}</Switch>
    </Suspense>
  );
};
