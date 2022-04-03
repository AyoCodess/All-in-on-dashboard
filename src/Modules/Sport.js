import { Link } from 'react-router-dom';

export default function Sport({ sportEvent }) {
  console.log({ sportEvent });
  return (
    <>
      {!sportEvent && (
        <>
          <p>Check the italian football league's current season results. </p>
        </>
      )}

      {sportEvent && (
        <>
          {sportEvent.result === 'Win' && (
            <>
              <p className='text-xl'>
                <span className='font-bold text-gray-500 text-xl '>
                  Featured Event: &nbsp;
                </span>
                {`${sportEvent.homeTeam} won they beat ${sportEvent.awayTeam} and scored ${sportEvent.goalsFor}.`}
              </p>
            </>
          )}
          {sportEvent.result === 'Lost' && (
            <>
              <p className='text-xl'>
                <span className='font-bold text-gray-500   text-xl'>
                  Featured Event: &nbsp;
                </span>
                {`${sportEvent.homeTeam} didn't do to well, they lost against ${sportEvent.awayTeam} and conceded ${sportEvent.goalsAgainst}.`}
              </p>
            </>
          )}
          {sportEvent.result === 'Draw' && (
            <>
              <p className='text-xl'>
                <span className='font-bold text-gray-500 text-xl'>
                  Featured Event:&nbsp;
                </span>
                {`${sportEvent.homeTeam} had a good game and drew ${sportEvent.goalsFor} - ${sportEvent.goalsAgainst} with ${sportEvent.awayTeam}.`}
              </p>
            </>
          )}
        </>
      )}
      <Link
        className='border border-gray-200 rounded-md font-bold text-lg  shadow p-2 mt-2'
        type='button'
        to='/sports'>
        View Results
      </Link>
    </>
  );
}
