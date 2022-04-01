import { Link } from 'react-router-dom';

export default function Tasks({ tasks, setTasks }) {
  console.log({ tasks });
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          
          
          <div className='mt-1 relative flex items-center'>
           
           
            <div className=' h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md' /> 
            
            
            <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
              
              
              <div className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
                {task.status && 'Done'}
                {!task.status && 'Open'}
              </div>



            </div>
          </div>
        </div>
      ))}

      <Link
        className='border border-gray-200 rounded-md shadow p-2 mt-2'
        type='button'
        to='/all-tasks'>
        View All
      </Link>
    </>
  );
}
