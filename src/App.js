import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { initUser, logOutUser } from './store/userReducer';
import { setToken } from './services/notes';

import LoginView from './components/views/LoginView';
import HomeView from './components/views/HomeView';
import NotesView from './components/views/NotesView';
import Header from './components/header/Header';

const App = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const usr = window.localStorage.getItem('user');
    let userLogged = null;
    if (usr != null && usr !== 'null') {
      userLogged = JSON.parse(usr);
      // setUser(userLogged)
      setToken(userLogged.token);
      if (location.pathname === '/login') {
        navigation('/');
      }
    } else {
      navigation('/login');
    }

    dispatch(initUser(userLogged));
  }, [dispatch, navigation, location.pathname]);

  const handleLogin = (usr) => {
    dispatch(initUser(usr));
    setToken(usr.token);
    window.localStorage.setItem('user', JSON.stringify(usr));
    navigation('/');
  };

  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.removeItem('user');
    setToken(null);
    dispatch(logOutUser());
    navigation('/login');
  };

  return (
    <>
      {user !== null
        ? <Header handleLogout={handleLogout} /> : null}

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
            <LoginView handleLogin={handleLogin} />
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
