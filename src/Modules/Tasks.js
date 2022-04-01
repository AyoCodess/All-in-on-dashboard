import { Link } from 'react-router-dom';

export default function Tasks({ tasks, setTasks }) {
  console.log({ tasks });

  let latest = [];

  if (tasks) {
    latest = tasks.slice(0, 3);
  }

  return (
    <>
      {latest.map((task) => {
        console.log(task);
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
      })}
      <Link
        className='border border-gray-200 rounded-md shadow p-2 mt-2'
        type='button'
        to='/all-tasks'>
        View All
      </Link>
    </>
  );
}
