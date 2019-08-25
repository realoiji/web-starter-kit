import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import includes from 'lodash/includes';
// import PropTypes from 'prop-types';

import { useAuth } from 'context/authenticated';

const AdminRoute = (props) => {
  console.log('AdminRoute', props);
  const { user } = useAuth();
  // if (userLoaded) return <div>Checking User</div>;
  if (!user) {
    if (props.location.pathname !== '/login') {
      props.history.push('/login');
    //   return (
    //     <>
    //       <Redirect
    //         push
    //         to="/login"
    //         // to={{
    //         //   pathname: '/login',
    //         //   state: { from: props.location }
    //         // }}
    //       />
    //       <Route {...props} />
    //     </>
        
    //   );
    }
    return <Route {...props} />;
  }
  // Not Admin
  if (!includes(user.roles, 'admin')) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        You are not admin, please contact admin
      </div>
    );
  }
  // Everything ok
  return <props.component {...props} />;
};

export default withRouter(AdminRoute);
