import React from 'react';

function StandardBtn({ text, onClick, customStyles }) {
  //. if you edit this button make sure you copy the same styles to StandardBtnOnClick.js
  return (
    <button
      type='button'
      onClick={onClick}
      className={`border h-10 border-gray-200 rounded-sm shadow p-1 ${customStyles}`}>
      {text}
    </button>
  );
}

export default StandardBtn;
