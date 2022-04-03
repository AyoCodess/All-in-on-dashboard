import React from 'react';
import parse from 'html-react-parser';
import StandardBtn from '../../../components/StandardBtn';

function NewsInternalRSS({ html }) {
  return (
    <>
      {html && (
        <>
          <div className='max-w-3xl mx-auto px-2'>
            <div className='flex items-center justify-between '>
              <div className='w-full'>
                <div className='flex justify-between items-center mt-4 mb-2'>
                  <div className='text-2xl mt-16 '>Latest News</div>
                  <StandardBtn text={'Back'} to={'/'} />
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

export default NewsInternalRSS;
