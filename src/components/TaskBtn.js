import React from 'react';

function StandardBtn({ text, onClick, customStyles }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`shadow mt-5 h-8 w-32 text-center items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400 ${customStyles} `}>
      {text}
    </button>
  );
}

export default StandardBtn;
