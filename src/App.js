import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

import { initUser, logOutUser } from './store/userReducer.js'
import {setToken} from './services/notes.js'

import LoginView from './components/views/LoginView.js'
import HomeView from './components/views/HomeView.js'
import NotesView from './components/views/NotesView.js'
import Header from './components/header/Header.js'


const App = () => {

  const dispatch = useDispatch()
  const navigation = useNavigate()
  const location = useLocation()

  const user = useSelector(state => state.user)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    let userLogged = null;
    if(user != null && user !== "null"){
      userLogged = JSON.parse(user);
      // setUser(userLogged)
      setToken(userLogged.token)
      if(location.pathname === '/login'){
        navigation('/')
      }
    }else{
      navigation('/login')
    }

    dispatch(initUser(userLogged))
  }, [dispatch, navigation, location.pathname ])

  const handleLogin = (user) => {
    dispatch(initUser(user))
    setToken(user.token)
    window.localStorage.setItem('user', JSON.stringify(user))
    navigation('/')
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('user')
    setToken(null)
    dispatch(logOutUser())
    navigation('/login')
  }
  
  return (
    <> 
      {user !== null ? 
        <Header handleLogout={handleLogout}/>:null
      }
      
      <Routes>
        <Route path='/notes' element={
          <NotesView />
        } />
        <Route path='/login'  element={
          <LoginView handleLogin={handleLogin} />
        } />
        <Route path='/' element={
          <HomeView />
        } />
      </Routes>
    </>
  )
}

export default App