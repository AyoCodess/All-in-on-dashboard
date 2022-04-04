import StandardBtnLarge from '../../../components/StandardBtnLarge';
import TaskStatus from '../../../components/TaskStatus';

export default function Tasks({ tasks, setTasks }) {
  let latest = [];

  if (tasks) {
    latest = tasks.slice(0, 3);
  }

  return (
    <>
      {latest.map((task) => {
        return (
          <div key={task._id}>
            <div className='mt-1 relative flex  items-center justify-between text-xl'>
              <h3 className='p-1  '>{task.title}</h3>

              <div className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
                <TaskStatus item={task} />
              </div>
            </div>
          </div>
        );
      })}
      <StandardBtnLarge
        text={
          <div>
            {tasks.length > 0 && 'View All'}
            {tasks.length === 0 && 'Add you first task!'}
          </div>
        }
        to={'/all-tasks'}
      />
    </>
  );
}
