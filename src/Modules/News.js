import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function News({ newsData, newsError }) {
  return (
    <>
      {newsData && (
        <>
          <div className='text-xl'>{newsData[0].title}</div>
          <div>
            <img
              src={newsData[0].image}
              alt={newsData[0].title}
              className='object-cover h-48 w-96 rounded-md mt-2'
            />
          </div>
          <div className='flex gap-2'>
            <Link
              type='button'
              to='/news'
              className='p-2 border border-gray-200 shadow font-bold text-lg rounded-md mt-2'>
              Read More{' '}
            </Link>
            <Link
              type='button'
              to='/news-rss'
              className='p-2 border border-gray-200 shadow font-bold text-lg rounded-md mt-2'>
              News RSS
            </Link>
          </div>
        </>
      )}

      {!newsData && !newsError && (
        <>
          <div className='text-center'>Loading News...</div>
        </>
      )}

      {newsError && (
        <p className='text-center'>
          {' '}
          Something went wrong, please try again later
        </p>
      )}
    </>
  );
}

export default News;
