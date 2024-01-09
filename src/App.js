import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import LoginView from './components/views/LoginView';
import HomeView from './components/views/HomeView';
import NotesView from './components/views/NotesView';
import Header from './components/header/Header';

import { setUserAsync } from './store/userReducer';
import { isLogged } from './utils/localStorage';

const App = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (!isAuthenticated) {
      const logged = isLogged();
      if (logged) {
        dispatch(setUserAsync(logged));
        navigation('/');
      } else {
        navigation('/login');
      }
    } else {
      navigation(location.pathname === '/login' ? '/' : location.pathname);
    }
  }, [navigation, dispatch, isLogged, isAuthenticated]);

  return (
    <>
      {isAuthenticated
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
