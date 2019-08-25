import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import AdminRoute from 'app/routes/admin';
import { PRELOAD_DURATION } from 'app/variables';
import { triggerPreload } from 'components/Loading';

const NotFoundScreen = lazy(() => import('screens/NotFoundScreen'));
const HomeScreen = lazy(() => import('screens/HomeScreen'));
const AboutScreen = lazy(() => import('screens/AboutScreen'));
const EnquiryScreen = lazy(() => import('screens/EnquiryScreen'));
const LoginScreen = lazy(() => import('screens/LoginScreen'));

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
    admin: true,
    path: '/EnquiryScreen',
    component: EnquiryScreen
  },
  {
    path: '/login',
    component: LoginScreen
  },
  {
    path: '*',
    component: NotFoundScreen
  }
];

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: PRELOAD_DURATION * 1000,
    transition: {
      duration: 1000,
    },
    // beforeChildren: true
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    }
  }
});

const renderRoutes = routes => {
  const dataRoutes = routes.map(
    (
      {
        path,
        exact = true,
        component: Component = () => <NotFoundScreen />,
        admin = false
      },
      i
    ) => {
      // console.debug('map route', i, path);
      return (
        <Route
          key={`route-${i}`}
          path={path}
          exact={exact}
          render={(props) => {
            if (admin) return <AdminRoute {...props} component={Component} />;
            return <Component {...props} />;
          }}
        />
      );
    }
  );
  return dataRoutes;
};

const routeForRender = [];
const collectRoutes = routes => {
  routes.forEach(route => {
    const { routes } = route;
    routeForRender.push(route);
    if (routes) collectRoutes(routes);
  });
};
collectRoutes(allRoutes);

export default ({ location }) => {
  console.debug('routing render', location);
  useEffect(() => {
    console.debug('routing useEffect enter');
    const delayTriggerPreload = setTimeout(() => {
      triggerPreload({ pageName: location.pathname, pageStatus: 'enter' });
    }, PRELOAD_DURATION * 1000);
    return () => {
      console.debug('routing useEffect exit');
      clearTimeout(delayTriggerPreload);
      triggerPreload({ pageName: location.pathname, pageStatus: 'exit' });
    };
  }, [location]);
  return (
    <Suspense fallback={<div />}>
      <PoseGroup>
        <RouteContainer key={`route-container-${location.key}`}>
          <Switch className="switch-wrapper">
            {renderRoutes(routeForRender)}
          </Switch>
        </RouteContainer>
      </PoseGroup>
    </Suspense>
  );
};
