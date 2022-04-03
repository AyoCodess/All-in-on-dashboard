import React from 'react';

function TaskStatus({ item }) {
  return (
    <div>
      {item.status && <p className='text-green-500'>Done</p>}
      {!item.status && <p className='text-red-500'> New</p>}
    </div>
  );
}

export default TaskStatus;
