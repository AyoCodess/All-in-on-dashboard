import React from 'react';

function TaskInternal({ tasks, setTasks }) {
  const people = [
    {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    // More people...
  ];
  const activityItems = [
    {
      id: 1,
      person: people[0],
      project: 'Workcation',
      commit: '2d89f0c8',
      environment: 'production',
      time: '1h',
    },
    // More items...
  ];

  return (
    <>
      <div>
        <div className='mt-1 relative flex items-center'>
          <input
            autocomplete='off'
            type='text'
            className=' h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
          />
          <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
            <kbd className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
              Done
            </kbd>
          </div>
        </div>
      </div>

      <div className='max-w-xl mx-auto'>
        <ul role='list' className='divide-y divide-gray-200'>
          {activityItems.map((activityItem) => (
            <li key={activityItem.id} className='py-4'>
              <div className='flex space-x-3'>
                <img
                  className='h-6 w-6 rounded-full'
                  src={activityItem.person.imageUrl}
                  alt=''
                />
                <div className='flex-1 space-y-1'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-medium'>
                      {activityItem.person.name}
                    </h3>
                    <p className='text-sm text-gray-500'>{activityItem.time}</p>
                  </div>
                  <p className='text-sm text-gray-500'>
                    Deployed {activityItem.project} ({activityItem.commit} in
                    master) to {activityItem.environment}
                  </p>
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
