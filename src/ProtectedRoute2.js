import ProtectedRoute from './ProtectedRoute';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute2 = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  console.log({ isAuthenticated });

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to='/' />;
  }
};

export default ProtectedRoute2;
