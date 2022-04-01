import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useFileUpload } from 'use-file-upload';

import LandingPage from './Pages/LandingPage';
import AppContainer from './components/AppContainer';
import { Routes, Route } from 'react-router-dom';
import NewsInternal from './Pages/NewsInternal';
import axios from 'axios';
import { Loader } from './components/loader';
import PhotosInternal from './Pages/PhotosInternal';
import TaskInternal from './Pages/TaskInternal';

function App() {
  const [newsData, setNewsData] = useState();
  const [newsError, setNewsError] = useState();

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

  const InitialTask = [
    {
      id: 1,
      title: 'Create your first task',
      task: 'Think about creating tasks',
      status: true,
    },
    {
      id: 2,
      title: 'Create your first task',
      task: 'Think about creating tasks',
      status: false,
    },
    {
      id: 3,
      title: 'Create your first task',
      task: 'Think about creating tasks',
      status: false,
    },
  ];
  const [tasks, setTasks] = useState(InitialTask);

  // - APP
  const { loginWithPopup, logout, user, isAuthenticated, isLoading, error } =
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
            path='/'
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
              />
            }
          />
          <Route
            path='/news'
            element={<NewsInternal newsData={newsData} newsError={newsError} />}
          />
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
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
