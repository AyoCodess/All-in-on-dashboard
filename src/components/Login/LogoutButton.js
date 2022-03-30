import React from 'react';

function LogoutButton({ logout }) {
  return (
    <button
      type='button'
      onClick={() => logout({ returnTo: window.location.origin })}
      className='text-lg p-2 border border-gray-200 shadown'>
      Logout
    </button>
  );
}

export default LogoutButton;
