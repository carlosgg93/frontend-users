import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import LoginView from './components/views/LoginView';
import HomeView from './components/views/HomeView';
import NotesView from './components/views/NotesView';
import Header from './components/header/Header';

import { getToken } from './utils/localStorage';

const App = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    const token = getToken();
    if (token != null) {
      if (location.pathname === '/login') {
        navigation('/');
      }
    } else {
      navigation('/login');
    }
  }, [navigation, location.pathname]);

  return (
    <>
      {isLogged
        ? <Header /> : null}

      <Routes>
        <Route
          path="/notes"
          element={
            <NotesView />
        }
        />
        <Route
          path="/login"
          element={
            <LoginView />
        }
        />
        <Route
          path="/"
          element={
            <HomeView />
        }
        />
      </Routes>
    </>
  );
};

export default App;
