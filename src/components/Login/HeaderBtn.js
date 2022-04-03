import React from 'react';
import { Link } from 'react-router-dom';

function HeaderBtn({ onClick, text, to }) {
  return (
    <Link
      type='button'
      onClick={onClick}
      to={to}
      className='text-center text-xl font-bold p-2 border border-gray-200 rounded-md shadow w-48'>
      {text}
    </Link>
  );
}

export default HeaderBtn;
