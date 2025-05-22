import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store';

const PrivateRoute = ({ redirectTo = '/login' }) => {
  const { isAuthenticated } = useAuthStore();
  
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute; 