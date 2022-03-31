import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import Loader from './Loader';

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component {...args} />;
};

export default ProtectedRoute;
