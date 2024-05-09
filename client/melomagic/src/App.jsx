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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element={<WelcomePage />}>
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/choose-story">
          <ChooseStoryPage />
        </Route>
        <Route path="/choose-genre">
          <ChooseGenrePage />
        </Route>
        <Route path="/waiting">
          <WaitingPage />
        </Route>
        <Route path="/songs">
          <SongsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
