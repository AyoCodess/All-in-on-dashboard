import React from 'react';
import LoginButton from '../components/Login/LoginButton';
import LogoutButton from '../components/Login/LogoutButton';
import UserProfile from '../components/Login/UserProfile';
import Dashboard from './Dashboard';

function LandingPage({
  user,
  loginType,
  logout,
  isAuthenticated,
  newsData,
  newsError,
}) {
  return (
    <>
      {!user && (
        <>
          <div className='flex flex-col sm:flex-row justify-center gap-5 md:gap-16 sm:items-center p-2 h-[100vh]'>
            <div>
              <div className=' text-5xl sm:text-6xl'>
                Welcome to your dashboard
              </div>
              <p className='text-lg mt-1'>Are you ready to stay productive?</p>
              <div className='mt-3'>
                <LoginButton loginType={loginType} />
              </div>
            </div>

            <img
              className='object-cover h-60 w-96 rounded-md shadow-md'
              src='https://i.imgur.com/kA0tEOy.jpg'
              alt='landing page'
            />
          </div>
        </>
      )}
    </>
  );
}

export default LandingPage;
