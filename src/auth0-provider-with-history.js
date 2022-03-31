import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const domain = 'dev-hrphul7f.us.auth0.com';
  const clientId = 'lQMc065mlbkwHRhLyZDGNzaf43J5yRWM';

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
};
