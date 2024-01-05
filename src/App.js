import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

// import { setToken } from './services/notes';

import LoginView from './components/views/LoginView';
import HomeView from './components/views/HomeView';
import NotesView from './components/views/NotesView';
import Header from './components/header/Header';

const App = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const isLogged = useSelector((state) => state.user.isLogged);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    let userLogged = null;
    const usr = window.localStorage.getItem('user');
    if (usr != null && usr !== 'null') {
      userLogged = JSON.parse(usr);
      // setUser(userLogged)
      // setToken(userLogged.token);
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
