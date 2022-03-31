import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './protected';

import LandingPage from './Pages/LandingPage';
import AppContainer from './components/AppContainer';
import { Routes, Route } from 'react-router-dom';
import NewsInternal from './Pages/NewsInternal';
import Dashboard from './Pages/Dashboard';
import axios from 'axios';

function App() {
  const [newsData, setNewsData] = useState();
  const [newsError, setNewsError] = useState();

  const newsApiCall = async () => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?&country=gb&language=en&max=1&token=a27f532d3ec421ef7722073709f54ba4`
      );

      const data = response.data.articles;

      setNewsData(data);
      setNewsError(false);
    } catch (err) {
      setNewsError(true);
      console.error(err);
    }
  };

  useEffect(() => {
    newsApiCall();
  }, []);

  const {
    loginWithRedirect,
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    isLoading,
    error,
  } = useAuth0();

  if (error) {
    <div>Please try again or contact us at ayo@ayoadesanya.com</div>;
  }

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <>
      <AppContainer>
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage
                loginType={loginWithPopup}
                logout={logout}
                user={user}
                isAuthenticated={isAuthenticated}
                newsData={newsData}
                newsError={newsError}
              />
            }
          />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute
                component={
                  <Dashboard
                    user={user}
                    newsData={newsData}
                    newsError={newsError}
                    isAuthenticated={isAuthenticated}
                    logout={logout}
                  />
                }
              />
            }
          />
          <Route
            path='/news'
            element={
              <ProtectedRoute
                component={
                  <NewsInternal newsData={newsData} newsError={newsError} />
                }
              />
            }
          />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
