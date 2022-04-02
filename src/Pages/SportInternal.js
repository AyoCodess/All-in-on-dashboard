import React from 'react';
import { Link } from 'react-router-dom';

function SportInternal() {
  return (
    <>
      <div className='max-w-xl mx-auto mt-4'>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <div className='flex justify-between items-center mt-4 mb-2'>
              <div className='text-2xl '>Add Task</div>
              <Link
                type='button'
                to='/'
                className='border h-10 border-gray-200 rounded-sm shadow p-1'>
                Back
              </Link>
            </div>
            <div className='flex flex-col mt-2 sm:flex-row items-center gap-1 w-2/3 mb-4 border border-gray-200 p-2 rounded-md shadow'>
              <div className='flex flex-wrap gap-2 '>
                <input
                  //   value={taskTitle}
                  //   onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder='Task Title'
                  autoComplete='off'
                  type='text'
                  className=' h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>
            <button
              onClick={() => {
                // setTasks((prev) => {
                //   return [
                //     {
                //       id: Date.now().valueOf(),
                //       title: taskTitle,
                //       task: taskDescription,
                //       status: false,
                //     },
                //     ...prev,
                //   ];
                // });
                // setTaskTitle('');
                // setTaskDescription('');
              }}
              className='border h-10 border-gray-200 rounded-sm shadow p-1'>
              Create Task
            </button>
          </div>
        </div>
        <ul className='divide-y divide-gray-200 mt-6'>
          {/* {tasks.map((task, i) => (
            <li key={task.id} className='py-4'>
              <div className='flex space-x-3'>
                {task.status}
                <div className='flex flex-col gap-1 w-full '>
                  {task.id === selectedTask && (
                    <>
                      <div>
                        <div className='mt-1 flex items-center justify-between'>
                          <div className='flex flex-col sm:items-center sm:flex-row gap-2'></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}

export default SportInternal;
