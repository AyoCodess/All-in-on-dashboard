import React from 'react';
import LoginButton from '../components/Login/LoginButton';
import LogoutButton from '../components/Login/LogoutButton';
import UserProfile from '../components/Login/UserProfile';

function LandingPage({ user, loginType, logout }) {
  return (
    <>
      <div className='flex items-center justify-between mt-5'>
        {!user && <LoginButton loginType={loginType} />}
        {user && <LogoutButton logout={logout} />}
        {!user && <div className='text-2xl'>Welcome</div>}
        {user && <div className='text-2xl'>{`Welcome ${user.name}`}</div>}
      </div>
    </>
  );
}

export default LandingPage;
