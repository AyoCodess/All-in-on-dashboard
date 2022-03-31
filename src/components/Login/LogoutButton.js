import React from 'react';

function LogoutButton({ logout }) {
  return (
    <button
      type='button'
      onClick={() => logout({ returnTo: window.location.origin })}
      className='text-lg ml-3 sm:ml-6 md:ml-8 p-2 border border-gray-200 shadow rounded-md  w-32'>
      Logout
    </button>
  );
}

export default LogoutButton;
