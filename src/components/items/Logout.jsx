import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';

const Logout = ({ redirectTo = '/login' }) => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate(redirectTo);
  }, [logout, navigate, redirectTo]);

  return (
    <div className="text-center py-5">
      <p>Logging out...</p>
    </div>
  );
};

export default Logout; 