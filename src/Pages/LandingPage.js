import React from 'react';
import LoginButton from '../components/Login/LoginButton';
import Dashboard from './Dashboard';
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage({
  user,
  loginType,
  logout,
  newsData,
  newsError,
  file,
  fileArray,
  tasks,
  setTasks,
  sportEvent,
}) {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <>
          <div className='flex flex-col sm:flex-row justify-center gap-5 md:gap-16 sm:items-center p-2 h-[100vh]'>
            <div>
              <div className=' text-5xl sm:text-6xl'>
                Welcome to your dashboard
              </div>
              <p className='text-3xl mt-2'>Are you ready to stay productive?</p>
              <div className='mt-5 '>
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

      <div className='flex  gap-5 justify-between '>
        {isAuthenticated && (
          <Dashboard
            user={user}
            newsData={newsData}
            newsError={newsError}
            logout={logout}
            file={file}
            fileArray={fileArray}
            tasks={tasks}
            setTasks={setTasks}
            sportEvent={sportEvent}
          />
        )}
      </div>
    </>
  );
}

export default LandingPage;
