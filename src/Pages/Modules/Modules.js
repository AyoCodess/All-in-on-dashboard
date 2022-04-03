import Weather from './ModulesDashView/Weather';
import News from './ModulesDashView/News';
import Sport from './ModulesDashView/Sport';
import Tasks from './ModulesDashView/Tasks';
import Clothes from './ModulesDashView/Clothes';
import Photos from './ModulesDashView/Photos';
import LogoutButton from '../../components/Login/LogoutButton';
import ModuleContainer from './ModalComponents/ModuleContainer';

function Modules({
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
                Have a wonderful day, &nbsp;{user.name}.
              </h2>
              <p className='text-xl text-gray-500'>
                Almost everything you need in one place...
              </p>
            </div>
            <ModuleContainer modules={modules} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modules;
