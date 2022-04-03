import React from 'react';

function StandardInput({ onChange, placeholder, value }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete='off'
      type='text'
      className=' h-10 p-2 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
    />
  );
}

export default StandardInput;
