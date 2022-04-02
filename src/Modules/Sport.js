import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import file from '../csv/file.csv';

const results = Papa.parse(file);

console.log(results.data);

export default function Sport({}) {
  return (
    <>
      {/* {latest.map((task) => {
        return (
          <div key={task.id}>
            <div className='mt-1 relative flex  items-center justify-between'>
              <h3 className='p-1  '>{task.title}</h3>

              <div className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
                {task.status && <p className='text-green-500'>Done</p>}
                {!task.status && <p className='text-yellow-500'> Open</p>}
              </div>
            </div>
          </div>
        );
      })} */}
      <Link
        className='border border-gray-200 rounded-md shadow p-2 mt-2'
        type='button'
        to='/sports'>
        View More
      </Link>
    </>
  );
}
