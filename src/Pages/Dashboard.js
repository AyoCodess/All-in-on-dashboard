import Weather from '../Modules/Weather';
import News from '../Modules/News';
import Sport from '../Modules/Sport';
import Tasks from '../Modules/Tasks';
import Clothes from '../Modules/Clothes';
import Photos from '../Modules/Photos';

const modules = [
  {
    name: 'Weather',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    module: <Weather />,
  },
  {
    name: 'News',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    module: <News />,
  },
  {
    name: 'Sport',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    module: <Sport />,
  },
  {
    name: 'Phots',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    module: <Photos />,
  },
  {
    name: 'Tasks',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    module: <Tasks />,
  },
  {
    name: 'Clothes',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    module: <Clothes />,
  },
];

export default function Dashboard({ user }) {
  return (
    <div className='bg-white'>
      <div className='mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Have a wonderful day, {user.name}
            </h2>
            <p className='text-xl text-gray-500'>
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
              ultricies donec risus sodales. Tempus quis et.
            </p>
          </div>
          <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
            {modules.map((module) => (
              <li key={module.name}>
                <div className='space-y-2'>
                  <div className='text-xl sm:text-2xl leading-6 font-medium space-y-1 mb-4 p-2 border border-gray-200 rounded-md shadow'>
                    <h3>{module.name}</h3>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='p-2 border border-gray-200 rounded-md shadow'>
                    {' '}
                    {module.module}
                  </div>
                  <div className='aspect-w-3 aspect-h-2'>
                    {/* <img
                      className='object-cover shadow-lg rounded-lg'
                      src={person.imageUrl}
                      alt=''
                    /> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
