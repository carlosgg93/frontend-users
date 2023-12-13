import React, { useEffect, useRef } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'
import {setToken} from './services/notes.js'
import Toggable from './components/common/Toggable.js'
import HeaderMenu from './components/HeaderMenu.js'
import { BrowserRouter } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { initUser, logOutUser } from './reducers/userReducer.js'

const App = () => {

  const toggableRef = useRef()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    let userLogged = null;
    if(user != null && user !== "null"){
      userLogged = JSON.parse(user);
      // setUser(userLogged)
      setToken(userLogged.token)
    }
    dispatch(initUser(userLogged))
  }, [dispatch])


  // const handleShowLoginButton = () =>{
  //   toggableRef.current.handleChangeVisibility()
  // }

  const handleChangeToken = (user) => {
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
    <div>
      {!user ? 
          <LoginView handleChangeToken = {handleChangeToken} />
        : <BrowserRouter>
            <Toggable ref={toggableRef}>
              <HeaderMenu />
              <button type='button' onClick={handleLogout}>Logout</button>
            </Toggable>
            <NotesView />

          </BrowserRouter>
      }
    </div>
  )
}

export default App