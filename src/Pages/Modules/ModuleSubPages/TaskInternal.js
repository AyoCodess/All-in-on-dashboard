import React, { useEffect, useState } from 'react';
import Modal from '../../../components/Modal';
import StandardBtn from '../../../components/StandardBtn';
import StandardBtnOnClick from '../../../components/StandardBtnOnClick';
import StandardInput from '../../../components/StandardInput';
import TaskBtn from '../../../components/TaskBtn';

import TaskStatus from '../../../components/TaskStatus';

function TaskInternal({
  tasks,
  setTasks,
  setSelectedTask,
  selectedTask,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  API_BASE,
}) {
  console.log({ selectedTask });

  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    setTaskTitle('');
    setTaskDescription('');
    setSelectedTask('');
  }, [tasks]);

  const createTaskHandler = async () => {
    //. BACKEND IMPLEMENTATION
    if (taskTitle.trim().length > 0 && taskDescription.length > 0) {
      try {
        const data = await fetch(API_BASE + '/task/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: taskTitle,
            task: taskDescription,
          }),
        });

        const response = await data.json();

        setTasks([response, ...tasks]);
      } catch (err) {
        console.log(err);
      }
    } else {
      setIsInvalid(true);
    }

    //. FRONT-END ONLY IMPLEMENTATION.
    //     if (taskTitle.trim().length > 0 && taskDescription.length > 0) {
    //       setTasks((prev) => {
    //         return [
    //           {
    //             id: Date.now().valueOf(),
    //             title: taskTitle,
    //             task: taskDescription,
    //             status: false,
    //           },
    //           ...prev,
    //         ];
    //       });
    //     } else {
    //       setIsInvalid(true);
    //     }
  };

  const updateTaskHandler = (item) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === item.id
          ? {
              ...t,
              title: taskTitle ? taskTitle : t.title,
              task: taskDescription ? taskDescription : t.task,
            }
          : t
      )
    );
  };

  const updateStatusTaskHandler = (item) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === item.id
          ? {
              ...t,
              status: !t.status,
            }
          : t
      )
    );
  };

  const deleteTaskHandler = (item) => {
    setTasks((prev) => prev.filter((t) => t.id !== item.id));
  };

  return (
    <>
      <Modal
        title={'error'}
        content={'You have not entered any information in one or both fields.'}
        open={isInvalid}
        setOpen={setIsInvalid}
      />
      <div className='max-w-xl mx-auto mt-4'>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <div className='flex justify-between items-center mt-4 mb-2'>
              <div className='text-2xl '>Add Task</div>

              <StandardBtn text={'Back'} to={'/'} />
            </div>
            <div className='flex flex-col mt-10 sm:flex-row items-center gap-1 w-full mb-4 border border-gray-200 p-2 rounded-md shadow'>
              <div className='flex flex-wrap gap-2 '>
                <StandardInput
                  value={taskTitle}
                  placeholder={'Task Title'}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
                <StandardInput
                  value={taskDescription}
                  placeholder={'Task description'}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </div>
            </div>
            <StandardBtnOnClick
              text={'Create Task'}
              onClick={createTaskHandler}
            />
          </div>
        </div>
        <ul className='divide-y divide-gray-200 mt-6'>
          {tasks.map((item, i) => (
            <li key={item.id} className='py-4'>
              <div className='flex space-x-3'>
                {item.status}
                <div className='flex flex-col gap-1 w-full '>
                  <div
                    onClick={() => {
                      setSelectedTask(item.id);
                    }}
                    className='flex justify-between'>
                    <div className='flex-col gap-1'>
                      <h3 className='text-sm font-medium'>{item.title}</h3>
                      <p className='text-sm text-gray-500'>{item.task}</p>
                    </div>
                    <TaskStatus item={item} />
                  </div>
                  {item.id === selectedTask && (
                    <>
                      z
                      <div>
                        <div className='mt-1 flex items-center justify-between'>
                          <div className='flex flex-col items-center gap-1 w-2/3'>
                            <StandardInput
                              placeholder='Change task title'
                              onChange={(e) => setTaskTitle(e.target.value)}
                            />

                            <StandardInput
                              placeholder='Change task description'
                              onChange={(e) =>
                                setTaskDescription(e.target.value)
                              }
                            />
                          </div>
                          <div className='flex flex-col sm:items-center sm:flex-row gap-2'>
                            <TaskBtn
                              text={'Change Status'}
                              onClick={() => updateStatusTaskHandler(item)}
                            />
                            <TaskBtn
                              text={'Delete'}
                              customStyles={'max-w-max'}
                              onClick={() => deleteTaskHandler(item)}
                            />
                            <TaskBtn
                              text={'Update'}
                              customStyles={'max-w-max'}
                              onClick={() => updateTaskHandler(item)}
                            />
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
