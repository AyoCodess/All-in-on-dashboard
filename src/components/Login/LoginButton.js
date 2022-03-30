import React from 'react';

function LoginButton({ loginWithRedirect }) {
  return (
    <button
      type='button'
      onClick={() => loginWithRedirect()}
      className='text-lg p-2 border border-gray-200 shadow'>
      Login
    </button>
  );
}

export default LoginButton;
