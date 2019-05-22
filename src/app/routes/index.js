import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

// import NotFoundScreen from "../screens/NotFoundScreen"
// import HomeScreen from "../screens/HomeScreen"
// import EnquiryScreen from "../screens/EnquiryScreen"

const NotFoundScreen = lazy(() => import('~/screens/NotFoundScreen'));
const HomeScreen = lazy(() => import('~/screens/HomeScreen'));
const AboutScreen = lazy(() => import('~/screens/AboutScreen'));
const EnquiryScreen = lazy(() => import('~/screens/EnquiryScreen'));

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

const slide = val => spring(val, {
  stiffness: 80,
  damping: 16
});

const pageTransitions = {
  atEnter: {
    opacity: 0
  },
  atLeave: {
    opacity: slide(0)
  },
  atActive: {
    opacity: slide(1)
  }
};

const topBarTransitions = {
  atEnter: {
    offset: -100
  },
  atLeave: {
    offset: slide(-150)
  },
  atActive: {
    offset: slide(0)
  }
};

const mapStylesPage = styles => ({
  opacity: styles.opacity
});

const collectRoutes = routes => {
  routes.forEach(route => {
    const { routes } = route;
    routeForRender.push(route);
    if (routes) collectRoutes(routes);
  });
};

const renderRoutes = routes =>
  routes.map(
    ({ path, exact = true, component = () => <NotFoundScreen /> }, i) => (
      <Route
        key={i}
        atEnter={topBarTransitions.atEnter}
        atLeave={topBarTransitions.atLeave}
        atActive={topBarTransitions.atActive}
        mapStyles={styles => ({
          transform: `translateY(${styles.offset}%)`
        })}
        path={path}
        exact={exact}
        component={component}
      />
    )
  );

collectRoutes(allRoutes);

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatedSwitch
        atEnter={pageTransitions.atEnter}
        atLeave={pageTransitions.atLeave}
        atActive={pageTransitions.atActive}
        mapStyles={mapStylesPage}
        className="switch-wrapper"
      >
        {renderRoutes(routeForRender)}
      </AnimatedSwitch>
    </Suspense>
  );
};
