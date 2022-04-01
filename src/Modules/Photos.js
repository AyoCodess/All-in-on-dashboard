import React from 'react';
import { Link } from 'react-router-dom';

function Photos({ fileArray }) {
  console.log({ fileArray });

  const latest = fileArray.slice(0, 6);

  return (
    <>
      {fileArray.length > 0 && (
        <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
          {latest.map((file) => (
            <li key={file.id}>
              <div className='space-y-4'>
                <div className='aspect-w-3 aspect-h-2'>
                  <img
                    className='object-cover shadow-lg rounded-lg'
                    src={file.source}
                    alt={file.name}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {fileArray.length === 0 && (
        <div>
          <Link
            className='border border-gray-200 p-2 shadow rounded-md mt-2'
            type='button'
            to='/photos'>
            Upload your first Photo!
          </Link>
        </div>
      )}
      {fileArray.length > 0 && (
        <div>
          <Link
            className='border border-gray-200 p-2 shadow rounded-md mt-2'
            type='button'
            to='/photos'>
            View Photos
          </Link>
        </div>
      )}
    </>
  );
}

export default Photos;
