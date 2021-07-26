import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuth } from '../auth/Authcontext';
import AppHeadder from './AppHeadder';

export default function PrivateRoute({ children, ...rest }: RouteProps) {
  let { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <>
            <AppHeadder />
            {children}
          </>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
