import React from 'react';

function LoginButton({ loginType }) {
  return (
    <button
      type='button'
      onClick={() => loginType()}
      className='text-xl font-bold p-2 border border-gray-200 rounded-md shadow w-48'>
      Login or Signup
    </button>
  );
}

export default LoginButton;
