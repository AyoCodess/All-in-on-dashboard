import React from 'react';

function ModuleContainer({ modules }) {
  return (
    <ul className='space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 '>
      {modules.map((module) => (
        <li key={module.name}>
          <div className='space-y-2'>
            <div className='text-xl sm:text-2xl bg-black text-white leading-6 font-medium space-y-1 mb-4 p-2 border border-gray-200 rounded-md shadow'>
              <h3>{module.name}</h3>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='p-2 border border-gray-200 rounded-md shadow'>
              {module.module}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ModuleContainer;
