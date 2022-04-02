import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

function SportInternal({
  sportData,
  setSelectedTeam,
  selectedTeam,
  setSportEvent,
  setOpen,
  open,
  sportEvent,
}) {
  const modalContent = (
    <div>
      {sportEvent && (
        <>
          {sportEvent.result === 'Win' && (
            <>
              <p className='text-xl'>
                <span className='font-bold text-xl '>Latest Event:&nbsp;</span>
                {` ${sportEvent.homeTeam} won they beat ${sportEvent.awayTeam} and scored ${sportEvent.goalsFor}.`}
              </p>
            </>
          )}
          {sportEvent.result === 'Lost' && (
            <>
              <p className='text-xl'>
                <span className='font-bold text-xl'>Latest Event:&nbsp;</span>
                {`${sportEvent.homeTeam} didn't do to well, they lost against ${sportEvent.awayTeam} and conceded ${sportEvent.goalsAgainst}.`}
              </p>
            </>
          )}
          {sportEvent.result === 'Draw' && (
            <>
              <p className='text-xl'>
                <span className='font-bold text-xl'>Latest Event:&nbsp;</span>
                {`${sportEvent.homeTeam} had a good game and drew ${sportEvent.goalsFor} - ${sportEvent.goalsAgainst} with ${sportEvent.awayTeam}.`}
              </p>
            </>
          )}
        </>
      )}
    </div>
  );

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        content={modalContent}
        title={'Match Headline'}
      />
      <div className='max-w-xl mx-auto mt-4'>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <div className='flex justify-between items-center mt-4 mb-2'>
              <div className='flex gap-2 flex-col'>
                <h2 className='text-2xl '>Search for a team</h2>
                <p className='text-lg '>
                  Get the match scores for every match this season.
                </p>
              </div>
              <Link
                type='button'
                to='/'
                className='border h-10 border-gray-200 rounded-sm shadow p-1'>
                Back
              </Link>
            </div>
            <div className='flex flex-col mt-6 sm:flex-row items-center gap-1 w-2/3 mb-4 border border-gray-200 p-2 rounded-md shadow'>
              <div className='flex flex-wrap gap-2 '>
                <input
                  onChange={(e) => {
                    setSelectedTeam(e.target.value.toLowerCase());
                  }}
                  placeholder='Search for a team'
                  autoComplete='off'
                  type='text'
                  className=' h-10 p-2 border-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
                />

                <>
                  {sportData.map((event, i) => {
                    if (selectedTeam === event.homeTeam) {
                      return (
                        <div
                          key={i}
                          className='mt-4 flex flex-wrap gap-2 items-end  '>
                          <div className='font-bold '>{event.date}</div>
                          <div className='flex flex-wrap gap-1 w-60'>
                            <div className=''>
                              {selectedTeam} vs {event.awayTeam}
                            </div>
                            <div>{`${event.goalsFor} - ${event.goalsAgainst}`}</div>
                            {event.result === 'Win' && (
                              <div className='text-green-500 px-2'>
                                {event.result}
                              </div>
                            )}
                            {event.result === 'Lost' && (
                              <div className='text-red-500 px-2'>
                                {event.result}
                              </div>
                            )}
                            {event.result === 'Draw' && (
                              <div className='text-blue-500 px-2'>
                                {event.result}
                              </div>
                            )}
                          </div>
                          <div
                            onClick={() => {
                              console.log({ event });
                              setSportEvent(event);
                              setOpen(true);
                            }}
                            className=' cursor-pointer hover:text-slate-400 p-1 border border-gray-200 rounded-md shadow'>
                            More Info{' '}
                          </div>

                          <hr className='w-full border border-gray-200 mx-auto my-2'></hr>
                        </div>
                      );
                    }
                  })}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SportInternal;
