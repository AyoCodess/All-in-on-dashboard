import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-hrphul7f.us.auth0.com'
    clientId='lQMc065mlbkwHRhLyZDGNzaf43J5yRWM'
    redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
