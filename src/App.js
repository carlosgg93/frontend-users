import React, { useEffect } from 'react'
import LoginView from './views/LoginView.js'
import HomeView from './views/HomeView.js'
import {setToken} from './services/notes.js'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { initUser, logOutUser } from './reducers/userReducer.js'

const App = () => {

  const dispatch = useDispatch()
  const navigation = useNavigate()

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    let userLogged = null;
    if(user != null && user !== "null"){
      userLogged = JSON.parse(user);
      // setUser(userLogged)
      setToken(userLogged.token)
      navigation('/')
    }else{
      navigation('/login')
    }
    dispatch(initUser(userLogged))
  }, [dispatch, navigation ])

  // const handleShowLoginButton = () =>{
  //   toggableRef.current.handleChangeVisibility()
  // }

  const handleLogin = (user) => {
    dispatch(initUser(user))
    setToken(user.token)
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('user')
    setToken(null)
    dispatch(logOutUser())
  }
  
  return (
    <Routes>
      <Route path='/login'  element={
        <LoginView handleLogin = {handleLogin} />
      } />
      <Route path='/' element={
        <HomeView handleLogout={handleLogout} />
      } />
    </Routes>
  )
}

export default App