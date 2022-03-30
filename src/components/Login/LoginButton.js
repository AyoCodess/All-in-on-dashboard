import React from 'react';

function LoginButton({ loginType }) {
  return (
    <button
      type='button'
      onClick={() => loginType()}
      className='text-lg p-2 border border-gray-200 shadow'>
      Login
    </button>
  );
}

export default LoginButton;
