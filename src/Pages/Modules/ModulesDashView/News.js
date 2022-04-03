import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import StandardBtnLarge from '../../../components/StandardBtnLarge';

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
            <StandardBtnLarge text={' Read More'} to={'/news'} />
            <StandardBtnLarge text={'News RSS'} to={'/news-rss'} />
          </div>
        </>
      )}

      {!newsData && !newsError && (
        <>
          <div className='text-center'>Loading News...</div>
        </>
      )}

      {newsError && (
        <>
          <p className='text-center'>
            {' '}
            Something went wrong, please try again later. You can view you RSS
            feed only.
          </p>

          <StandardBtnLarge text={'News RSS'} to={'/news-rss'} />
        </>
      )}
    </>
  );
}

export default News;
