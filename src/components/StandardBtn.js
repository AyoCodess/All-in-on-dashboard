import React from 'react';
import { Link } from 'react-router-dom';

function StandardBtn({ text, to, onClick, customStyles }) {
  //. if you edit this button make sure you copy the same styles to StandardBtn.js
  return (
    <Link
      type='button'
      onClick={onClick}
      to={to}
      className={`border h-10 border-gray-200 rounded-sm shadow p-1 ${customStyles} `}>
      {text}
    </Link>
  );
}

export default StandardBtn;
