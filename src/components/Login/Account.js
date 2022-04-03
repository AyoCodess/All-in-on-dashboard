import React from 'react';
import StandardBtn from '../StandardBtn';

function Account({ user }) {
  return (
    <div>
      <div className='bg-gray-900 h-[100vh] flex sm:justify-center sm:items-center'>
        <div className='mx-auto mt-10 sm:mt-0  px-4 w-full sm:w-2/3 sm:px-6  '>
          <div className='space-y-12 '>
            <div className='space-y-5 sm:space-y-4 w-full '>
              <div className='flex justify-between'>
                <h2 className='text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
                  Welcome
                </h2>
                <StandardBtn
                  text={'Back'}
                  to={'/'}
                  customStyles={'text-white w-16 text-center'}
                />
              </div>
              <p className='text-xl text-gray-300'>
                More about you coming soon...
              </p>
            </div>
            <section className='space-y-4 '>
              <p
                key={user.name}
                className=' w-full py-10 px-6 bg-gray-800 text-center rounded-lg  '>
                <div className='space-y-6'>
                  <img
                    className='mx-auto h-40 w-40 rounded-full '
                    src={user.picture}
                    alt=''
                  />
                  <div className='space-y-2  '>
                    <div className='font-medium text-lg leading-6 space-y-1'>
                      <h3 className='text-white'>{user.name}</h3>
                      <p className='text-indigo-400'>{user.email}</p>
                    </div>
                  </div>
                </div>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
