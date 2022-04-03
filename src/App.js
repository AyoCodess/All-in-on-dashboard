import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import raw from 'raw.macro';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useFileUpload } from 'use-file-upload';

import LandingPage from './Pages/LandingPage';
import AppContainer from './components/AppContainer';
import { Routes, Route } from 'react-router-dom';
import NewsInternal from './Pages/NewsInternal';
import axios from 'axios';
import Loader from './components/Loader';
import PhotosInternal from './Pages/PhotosInternal';
import TaskInternal from './Pages/TaskInternal';
import SportInternal from './Pages/SportInternal';
import NewsInternal2 from './Pages/NewsInternal2';

function App() {
  const API_BASE = 'http://localhost:3001';

  // - modal
  const [open, setOpen] = useState(false);

  const [newsData, setNewsData] = useState();
  const [newsError, setNewsError] = useState();

  // - NEWS RSS

  const RSS_URL = `https://news.un.org/feed/subscribe/en/news/all/rss.xml`;

  // - tags are not closed invalid syntax http://feeds.bbci.co.uk/news/rss.xml

  const [html, setHTML] = useState();

  const fetchRSS = async () => {
    try {
      const response = await axios.get(RSS_URL);

      const data = new window.DOMParser().parseFromString(
        response.data,
        'text/xml'
      );

      const items = data.querySelectorAll('item');

      let html = ``;

      console.log(items);

      items.forEach((el) => {
        html += `
        <article class="flex flex-col gap-1 ">
          <h2>
            <a  class="hover:text-gray-500" href="${
              el.querySelector('link').innerHTML
            }" target="_blank" rel="noopener">
              ${el.querySelector('title').innerHTML}
            </a>
          </h2>
            <hr class='w-full border border-gray-200 mx-auto my-2'/>
        </article>
      `;
      });

      setHTML(html);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRSS();
  }, []);

  // - NEWS
  const newsApiCall = async () => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?&country=gb&language=en&max=1&token=a27f532d3ec421ef7722073709f54ba4`
      );

      const data = response.data.articles;

      setNewsData(data);
      setNewsError(false);
    } catch (err) {
      setNewsError(true);
      console.error(err);
    }
  };

  useEffect(() => {
    newsApiCall();
  }, []);

  // -  PHOTOS

  const [fileArray, setFileArray] = useState([]);
  const [file, setFile] = useFileUpload();

  // - adding ID number to each photo
  const addID = () => {
    if (file) {
      setFileArray((prev) => {
        return [...prev, { id: Date.now().valueOf(), ...file }];
      });
    } else {
      console.error('file does not exist');
    }
  };

  useEffect(() => {
    if (file) {
      addID();
    }
  }, [file]);

  const deletePhoto = (file) => {
    const newFileArray = fileArray.filter((photo) => photo.id !== file.id);
    setFileArray(newFileArray);
  };

  // - TASKS

  const [onInput, setOnInput] = useState(false);
  const [selectedTask, setSelectedTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState();
  const [taskDescription, setTaskDescription] = useState();

  //   useEffect(() => {
  //     getTasks();
  //   }, []);

  //   const getTasks = async () => {
  //     try {
  //       const response = await fetch(API_BASE + '/all-tasks');
  //       const data = await response.json();

  //       setTasks(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const InitialTask = [
    {
      id: 1,
      title: 'Create your first task',
      task: 'Think about creating tasks',
      status: false,
    },
  ];
  const [tasks, setTasks] = useState(InitialTask);

  // - SPORT

  const [sportData, setSportData] = useState();
  const [selectedTeam, setSelectedTeam] = useState();
  const [sportEvent, setSportEvent] = useState();

  // . create-react-app does allow for importing the raw contents of a file
  const rawFile = raw('../src/csv/file.csv');

  // - csv to array
  const rawResults = Papa.parse(rawFile, {
    header: true,
    skipEmptyLines: true,
  });

  const results = rawResults.data;

  const newResults = results.map((item) => {
    return {
      date: item.Date,
      homeTeam: item.HomeTeam?.toLowerCase(),
      awayTeam: item.AwayTeam?.toLowerCase(),
      result:
        item.FTHG > item.FTAG
          ? 'Win'
          : item.FTHG === item.FTAG
          ? 'Draw'
          : 'Lost',
      goalsFor: item.FTHG,
      goalsAgainst: item.FTAG,
    };
  });

  useEffect(() => {
    if (newResults) {
      setSportData(newResults);
    }
  }, []);

  // - APP
  const { loginWithPopup, logout, user, isLoading, error, isAuthenticated } =
    useAuth0();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  if (error) {
    <div>Please try again or contact us at ayo@ayoadesanya.com</div>;
  }

  return (
    <>
      <AppContainer>
        <Routes>
          <Route
            path='*'
            element={
              <LandingPage
                loginType={loginWithPopup}
                user={user}
                newsData={newsData}
                newsError={newsError}
                logout={logout}
                file={file}
                fileArray={fileArray}
                tasks={tasks}
                setTasks={setTasks}
                sportEvent={sportEvent}
              />
            }
          />

          {isAuthenticated && (
            <>
              <Route
                path='/news'
                element={
                  <NewsInternal newsData={newsData} newsError={newsError} />
                }
              />
              <Route path='/news-rss' element={<NewsInternal2 html={html} />} />
              <Route
                path='/photos'
                element={
                  <PhotosInternal
                    file={file}
                    fileArray={fileArray}
                    setFile={setFile}
                    deletePhoto={deletePhoto}
                  />
                }
              />
              <Route
                path='/all-tasks'
                element={
                  <TaskInternal
                    tasks={tasks}
                    setTasks={setTasks}
                    onInput={onInput}
                    setOnInput={setOnInput}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                    taskTitle={taskTitle}
                    setTaskTitle={setTaskTitle}
                    taskDescription={taskDescription}
                    setTaskDescription={setTaskDescription}
                  />
                }
              />
              <Route
                path='/sports'
                element={
                  <SportInternal
                    sportData={sportData}
                    setSportData={setSportData}
                    selectedTeam={selectedTeam}
                    setSelectedTeam={setSelectedTeam}
                    setSportEvent={setSportEvent}
                    sportEvent={sportEvent}
                    setOpen={setOpen}
                    open={open}
                  />
                }
              />
            </>
          )}
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
