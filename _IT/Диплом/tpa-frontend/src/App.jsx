import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import {Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PersonalPlansPage from './pages/PersonalPlansPage/PersonalPlansPage';
import PlanCreation1Page from './pages/PersonalPlansPage/PlanCreation1Page';
import PlanCreation2Page from './pages/PersonalPlansPage/PlanCreation2Page';
import PlanCreation3Page from './pages/PersonalPlansPage/PlanCreation3Page';
import PlanCreation4Page from './pages/PersonalPlansPage/PlanCreation4Page';
import TouristDestinationsPage from './pages/TouristDestinationsPage/TouristDestinationPage';
import DefaultPlansPage from './pages/PersonalPlansPage/DefaultPlansPage';
import PlanPage from './pages/PersonalPlansPage/PlanPage';

const App=()=>{

  return(
    <div>
      <HashRouter>
      <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/personalPlans' element={<PersonalPlansPage />} />
          <Route path='/planCreation/1' element={<PlanCreation1Page />} />
          <Route path='/planCreation/2' element={<PlanCreation2Page />} />
          <Route path='/planCreation/3' element={<PlanCreation3Page />} />
          <Route path='/planCreation/4' element={<PlanCreation4Page />} />
          <Route path='/touristDestinations' element={<TouristDestinationsPage />} />
          <Route path='/defaultPlans' element={<DefaultPlansPage />} />
          <Route path='/plan' element={<PlanPage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
