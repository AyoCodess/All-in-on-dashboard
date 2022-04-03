import React from 'react';

function FeaturedSportEvent({ sportEvent }) {
  return (
    <div>
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
    </div>
  );
}

export default FeaturedSportEvent;
