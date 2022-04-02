import Weather from '../Modules/Weather';
import News from '../Modules/News';
import Sport from '../Modules/Sport';
import Tasks from '../Modules/Tasks';
import Clothes from '../Modules/Clothes';
import Photos from '../Modules/Photos';
import LogoutButton from '../components/Login/LogoutButton';

function Dashboard({
  user,
  newsData,
  newsError,
  logout,
  file,
  fileArray,
  tasks,
  setTasks,
  sportEvent,
}) {
  const modules = [
    {
      name: 'Todays Weather',
      module: <Weather />,
    },
    {
      name: 'Latest News',
      module: <News newsData={newsData} newsError={newsError} />,
    },
    {
      name: 'Football Headlines',
      module: <Sport sportEvent={sportEvent} />,
    },
    {
      name: 'Your Photos',
      module: <Photos file={file} fileArray={fileArray} />,
    },
    {
      name: 'Latest Tasks',
      module: <Tasks tasks={tasks} setTasks={setTasks} />,
    },
    {
      name: 'What you wore this year',
      module: <Clothes />,
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <div className='mx-auto py-6 px-4 max-w-max sm:px-6 '>
          <div className='space-y-12'>
            <div className='space-y-5 sm:space-y-4  xl:max-w-none'>
              <div className='flex items-center gap-5 justify-end mt-6'>
                {user && <LogoutButton logout={logout} />}
              </div>

              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Have a wonderful day, &nbsp;{user.name}
              </h2>
              <p className='text-xl text-gray-500'>
                Almost everything you need in one place...
              </p>
            </div>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 '>
              {modules.map((module) => (
                <li key={module.name}>
                  <div className='space-y-2'>
                    <div className='text-xl sm:text-2xl bg-black text-white leading-6 font-medium space-y-1 mb-4 p-2 border border-gray-200 rounded-md shadow'>
                      <h3>{module.name}</h3>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='p-2 border border-gray-200 rounded-md shadow'>
                      {module.module}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
