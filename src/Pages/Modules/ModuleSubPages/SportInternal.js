import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../components/Modal';
import FeaturedSportEvent from '../ModalComponents/FeaturedSportEvent';
import StandardBtn from '../../../components/StandardBtn';

function SportInternal({
  sportData,
  setSelectedTeam,
  selectedTeam,
  setSportEvent,
  setOpen,
  open,
  sportEvent,
}) {
  const [openTeams, setOpenTeams] = useState(false);
  const modalContent = (
    <div>{sportEvent && <FeaturedSportEvent sportEvent={sportEvent} />}</div>
  );

  //  - created unique team list
  const gettingTeams = sportData.map((team) => team.homeTeam);
  const uniqueTeams = [...new Set(gettingTeams)];
  const teams = uniqueTeams.filter((team) => team !== undefined);

  const teamList = (
    <ul className='mt-4'>
      {teams.map((team, i) => (
        <li className='text-left mt-1 '>
          {i + 1}) {team}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        content={modalContent}
        title={'Match Headline'}
      />
      <Modal
        open={openTeams}
        setOpen={setOpenTeams}
        content={teamList}
        title={'All searchable teams'}
      />
      <div className='max-w-xl mx-auto mt-4'>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <div className='flex justify-between items-center mt-4 mb-2'>
              <div className='flex gap-2 flex-col'>
                <h2 className='text-2xl '>Search for a team...</h2>
                <p className='text-lg '>
                  Get the match scores for every match this season.
                </p>
              </div>
              <StandardBtn to={'/'} text={'Back'} />
            </div>
            <div className='flex flex-col mt-6 sm:flex-row items-center gap-1 w-2/3 mb-4 border border-gray-200 p-2 rounded-md shadow'>
              <div className='flex  flex-wrap gap-2 w-full  '>
                <div className='flex flex-col sm:flex-row gap-4 '>
                  <input
                    onChange={(e) => {
                      setSelectedTeam(e.target.value.toLowerCase());
                    }}
                    placeholder='Search for a team'
                    autoComplete='off'
                    type='text'
                    className=' h-10 p-2 border-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
                  />
                  <div
                    onClick={() => setOpenTeams(true)}
                    className='w-60 text-center border border-gray-200 shadow rounded-md p-1'>
                    View Teams list
                  </div>
                </div>

                {sportData.map((event, i) => {
                  if (selectedTeam === event.homeTeam) {
                    return (
                      <>
                        {selectedTeam && (
                          <div
                            key={i}
                            className='mt-4 flex flex-wrap gap-2 items-end  '>
                            <div className='font-bold '>{event.date}</div>
                            <div className='flex flex-wrap gap-1 w-60'>
                              <div>
                                {selectedTeam} vs {event.awayTeam}
                              </div>

                              <div>
                                {event.goalsFor} - {event.goalsAgainst}
                              </div>

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
                                // - updates dashboard featured event headline and opens modal with headline
                                setSportEvent(event);
                                setOpen(true);
                              }}
                              className=' cursor-pointer hover:text-slate-400 p-1 border border-gray-200 rounded-md shadow'>
                              More Info
                            </div>

                            <hr className='w-full border border-gray-200 mx-auto my-2'></hr>
                          </div>
                        )}
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SportInternal;
