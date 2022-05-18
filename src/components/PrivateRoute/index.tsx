import React, { useEffect } from 'react';
import { RouteProps } from 'react-router';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authUser } from '../../store/reducers/actionCreators';

type TPrivateRoute = RouteProps & {
  redirectTo: string;
};

const PrivateRoute: React.FC<TPrivateRoute> = ({ ...props }) => {
  const { user } = useAppSelector((state) => state.user);
  const auth = user.id;
  return auth ? <Outlet /> : <Navigate to={props.redirectTo} />;
};

export default PrivateRoute;
