import React from 'react';
import { Navigate, RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

export const SecureRoute: React.FC<RouteProps> = ({ element, ...rest }) => {
  const isValid = true;

  return isValid ? <Route {...rest} element={element} /> : <Navigate to="/login" replace />;
};
