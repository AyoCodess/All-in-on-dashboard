import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/LoginButton';
import LogoutButton from './components/Login/LogoutButton';
import UserProfile from './components/Login/UserProfile';
import LandingPage from './Pages/LandingPage';
import AppContainer from './components/AppContainer';

function App() {
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
        <LandingPage loginType={loginWithPopup} logout={logout} user={user} />
        {isAuthenticated && <UserProfile user={user} />}
      </AppContainer>
    </>
  );
}

export default App;
