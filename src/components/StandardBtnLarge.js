import React from 'react';
import { Link } from 'react-router-dom';

function StandardBtnLarge({ text, to, onClick, customStyles }) {
  return (
    <Link
      type='button'
      onClick={onClick}
      to={to}
      className={`border border-gray-200 rounded-md shadow font-bold text-lg p-2 mt-2 ${customStyles} `}>
      {text}
    </Link>
  );
}

export default StandardBtnLarge;
