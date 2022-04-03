import React from 'react';
import StandardBtn from '../../../components/StandardBtn';
import StandardBtnOnClick from '../../../components/StandardBtnOnClick';

function PhotosInternal({ fileArray, setFile, deletePhoto }) {
  return (
    <>
      <div className='bg-white'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 '>
          <div>
            <div className='mt-5 flex justify-end items-center'>
              <StandardBtn to={'/'} text={'Back'} />
            </div>

            <div className='space-y-12'>
              <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
                <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                  Your Photo Gallery
                </h2>
                <p className='text-xl text-gray-500'>
                  Saving your best moments
                </p>

                <StandardBtnOnClick
                  text={'Click to Upload'}
                  onClick={() => {
                    setFile();
                  }}
                />
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
                          <StandardBtnOnClick
                            text={'Delete'}
                            onClick={() => {
                              deletePhoto(file);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotosInternal;
