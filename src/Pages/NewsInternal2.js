import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function NewsInternal2({ html }) {
  //   console.log(html);
  return (
    <>
      {html && (
        <>
          <div className='max-w-3xl mx-auto px-2'>
            <div className='flex items-center justify-between '>
              <div className='w-full'>
                <div className='flex justify-between items-center mt-4 mb-2'>
                  <div className='text-2xl mt-16 '>Latest News</div>
                  <Link
                    type='button'
                    to='/'
                    className='border h-10 border-gray-200 rounded-sm shadow p-1'>
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <ul>{parse(html)}</ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewsInternal2;
