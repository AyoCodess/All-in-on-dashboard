import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const clientId = window._env_.process;
  const domain = window._env_.process.env.REACT_APP_DOMAIN;
  const audience = window._env_.process.env.REACT_APP_AUDIENCE;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
