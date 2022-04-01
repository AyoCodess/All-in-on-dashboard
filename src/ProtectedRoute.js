import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from './Loader';

const ProtectedRoute = ({ component, ...args }) => {
  const Cp = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });
  return <Cp {...args} />;
};

export default ProtectedRoute;
