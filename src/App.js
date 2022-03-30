import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/LoginButton';
import LogoutButton from './components/Login/LogoutButton';
import UserProfile from './components/Login/UserProfile';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <>
      <LoginButton loginWithRedirect={loginWithRedirect} />
      <LogoutButton logout={logout} />
      {!user && <div className='text-2xl'>Welcome, please login</div>}
      {user && <div className='text-2xl'>{`Welcome ${user.name}`}</div>}

      {isAuthenticated && <UserProfile user={user} />}
    </>
  );
}

export default App;
