import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignInPage from './components/SignInPage';
import RegisterPage from './components/RegisterPage';
import ChooseStoryPage from './components/ChooseStoryPage';
import ChooseGenrePage from './components/ChooseGenrePage';
import WaitingPage from './components/WaitingPage';
import SongsPage from './components/SongsPage';
import ProfilePage from './components/ProfilePage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/choosestory" element={<ChooseStoryPage />} />
        <Route path="/choosegenre" element={<ChooseGenrePage />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
