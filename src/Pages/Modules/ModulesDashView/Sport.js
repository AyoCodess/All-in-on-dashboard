import { Link } from 'react-router-dom';
import FeaturedSportEvent from '../ModalComponents/FeaturedSportEvent';

export default function Sport({ sportEvent }) {
  console.log({ sportEvent });
  return (
    <>
      {!sportEvent && (
        <>
          <p>Check the italian football league's current season results. </p>
        </>
      )}

      {sportEvent && <FeaturedSportEvent sportEvent={sportEvent} />}
      <Link
        className='border border-gray-200 rounded-md font-bold text-lg  shadow p-2 mt-2'
        type='button'
        to='/sports'>
        View Results
      </Link>
    </>
  );
}
