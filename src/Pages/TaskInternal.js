import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TaskInternal({
  tasks,
  setTasks,
  onInput,
  setOnInput,
  setSelectedTask,
  selectedTask,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
}) {
  console.log({ selectedTask });

  return (
    <>
      <div className='max-w-xl mx-auto'>
        <Link
          type='button'
          to='/'
          className='border border-gray-200 rounded-sm shadow p-1'>
          Back
        </Link>
        <ul className='divide-y divide-gray-200'>
          {tasks.map((task, i) => (
            <li key={task.id} className='py-4'>
              <div className='flex space-x-3'>
                {/* <img
                  className='h-6 w-6 rounded-full'
                  src={task.person.imageUrl}
                  alt=''
                /> */}
                {task.status}
                <div className='flex flex-col gap-1 w-full '>
                  <div
                    onClick={() => {
                      // setOnInput(true);
                      console.log('clicked');
                      setSelectedTask(task.id);
                    }}
                    className='flex justify-between'>
                    <div className='flex-col gap-1'>
                      <h3 className='text-sm font-medium'>{task.title}</h3>
                      <p className='text-sm text-gray-500'>{task.task}</p>
                    </div>
                    {task.status && <p className='text-green-500'>Done</p>}
                    {!task.status && <p className='text-yellow-500'> Open</p>}
                  </div>
                  {task.id === selectedTask && (
                    <>
                      <div>
                        <div className='mt-1 flex items-center justify-between'>
                          <div className='flex flex-col items-center gap-1 w-2/3'>
                            <input
                              onChange={(e) => setTaskTitle(e.target.value)}
                              placeholder='Change task title'
                              autoComplete='off'
                              type='text'
                              className=' h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
                            />
                            <input
                              onChange={(e) =>
                                setTaskDescription(e.target.value)
                              }
                              placeholder='Change task description'
                              autoComplete='off'
                              type='text'
                              className=' h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
                            />
                          </div>
                          <div className='flex flex-col sm:items-center sm:flex-row gap-2'>
                            <button
                              onClick={() => {
                                setTasks((prev) =>
                                  prev.map((t) =>
                                    t.id === task.id
                                      ? {
                                          ...t,
                                          status: !t.status,
                                        }
                                      : t
                                  )
                                );
                                console.log(tasks);
                              }}
                              type='button'
                              className=' mt-5  h-8 w-32 text-center  items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
                              Change Status&nbsp;
                            </button>
                            <button
                              onClick={() => {
                                setTasks((prev) =>
                                  prev.map((t) =>
                                    t.id === task.id
                                      ? {
                                          ...t,
                                          title: taskTitle
                                            ? taskTitle
                                            : t.title,
                                          task: taskDescription
                                            ? taskDescription
                                            : t.task,
                                        }
                                      : t
                                  )
                                );

                                setSelectedTask('');
                              }}
                              type='button'
                              className=' mt-5  h-8 items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
                              Finished
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskInternal;
