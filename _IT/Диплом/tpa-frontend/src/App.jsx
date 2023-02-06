import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import {Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const App=()=>{

  return(
    <div>
      <HashRouter>
      <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
