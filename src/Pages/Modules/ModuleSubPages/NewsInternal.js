import React from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import StandardBtn from '../../../components/StandardBtn';

function NewsInternal({ newsData, newsError }) {
  return (
    <>
      {newsError && (
        <div className='flex flex-col  items-center gap-5 justify-center h-[100vh]'>
          <p>Something went wrong, please try again later</p>
          <StandardBtn to={'/'} text={'Back'} />
        </div>
      )}
      {!newsData && !newsError && (
        <div className='flex flex-col  items-center gap-5 justify-center h-[100vh]'>
          Loading News
        </div>
      )}
      {newsData && (
        <>
          <div className='bg-white overflow-hidden'>
            <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 '>
              <div className='hidden  bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
              <div className='mx-auto text-base max-w-prose '>
                <div>
                  <div>
                    <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
                      Breaking News
                    </h2>
                    <StandardBtn text={'Back'} to={'/'} />
                  </div>
                  <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                    {newsData[0].title}
                  </h3>
                </div>
              </div>
              <div className='mt-8 '>
                <div className='relative '>
                  <svg
                    className='hidden  absolute top-0 right-0 -mt-20 -mr-20'
                    width={404}
                    height={384}
                    fill='none'
                    viewBox='0 0 404 384'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                    />
                  </svg>
                  <div className='relative text-base mx-auto max-w-prose '>
                    <figure>
                      <div className='aspect-w-12 aspect-h-7 '>
                        <img
                          className='rounded-lg shadow-lg object-cover object-center'
                          src={newsData[0].image}
                          alt={newsData[0].title}
                          width={1184}
                          height={1376}
                        />
                      </div>
                      <figcaption className='mt-3 flex text-sm text-gray-500'>
                        <CameraIcon
                          className='flex-none w-5 h-5 text-gray-400'
                          aria-hidden='true'
                        />
                        <span className='ml-2'>{newsData[0].source.name}</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className='mt-8 '>
                  <div className='text-base max-w-prose mx-auto '>
                    <p className='text-lg text-gray-500'>
                      {newsData[0].description}
                    </p>
                  </div>
                  <div className='mt-5 prose prose-indigo text-gray-500 mx-auto '>
                    <p>{newsData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewsInternal;
