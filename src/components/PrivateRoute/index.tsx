import React from 'react';
import { RouteProps } from 'react-router';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

type TPrivateRoute = RouteProps & {
  redirectTo: string;
};

const PrivateRoute: React.FC<TPrivateRoute> = ({ ...props }) => {
  const { loading, user } = useAppSelector((state) => state.user);
  const auth = user.id;
  return loading ? <Outlet /> : auth ? <Outlet /> : <Navigate to={props.redirectTo} />;
};

export default PrivateRoute;
