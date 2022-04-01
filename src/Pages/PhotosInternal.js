import React from 'react';
import { Link } from 'react-router-dom';

function PhotosInternal({
  fileArray,
  file,
  setFile,
  setSelectedPhoto,
  deletePhoto,
}) {
  return (
    <>
      <div className='bg-white'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 '>
          <div>
            <div className='mt-5 flex justify-between items-center'>
              {' '}
              <div>Internal</div>
              <Link
                className='border border-gray-200 p-2 shadow rounded-md'
                to='/'>
                Back
              </Link>
            </div>

            <div className='space-y-12'>
              <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
                <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                  Your Photo Gallery
                </h2>
                <p className='text-xl text-gray-500'>
                  Saving your best moments
                </p>
              </div>

              <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
                {fileArray.map((file) => (
                  <li key={file.id}>
                    <div className='space-y-4'>
                      <div className='aspect-w-3 aspect-h-2'>
                        <img
                          className='object-cover shadow-lg rounded-lg'
                          src={file.source}
                          alt={file.name}
                        />
                      </div>

                      <div className='space-y-2'>
                        <div className='text-lg leading-6 font-medium space-y-1'>
                          <h3>{file.name}</h3>
                          <button
                            className='border border-gray-200 p-2 rounded-md shadow'
                            type='button'
                            onClick={() => {
                              deletePhoto(file);
                            }}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                className='border border-gray-200 p-2 shadow rounded-md'
                onClick={() => {
                  setFile();
                }}>
                Click to Upload
              </button>
            </div>
          </div>
        </div>

        {fileArray === 0 && (
          <>
            <button
              className='border border-gray-200 p-2 shadow rounded-md'
              onClick={() => {
                setFile();
              }}>
              Click to Upload
            </button>
            <div>Upload images to you gallery</div>
          </>
        )}
      </div>
    </>
  );
}

export default PhotosInternal;
