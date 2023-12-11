import React, { useState, useEffect, useRef } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'
import {setToken} from './services/notes.js'
import Toggable from './components/common/Toggable.js'
import HeaderMenu from './components/HeaderMenu.js'

import { useDispatch, useSelector } from 'react-redux'
import { initUser } from './reducers/userReducer.js'
import {setPageSelected} from './reducers/noteReducer.js'

const App = () => {

  const [user, setUser] = useState(null)
  const [pageSelected, setPageSelected] = useState(0)
  const toggableRef = useRef()
  const dispatch = useDispatch()
  
  const storeUser = useSelector(state => state.user)
  const storePageSelected = useSelector(state => state.pageSelected)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    let userLogged = null;
    if(user != null && user !== "null"){
      userLogged = JSON.parse(user);
      // setUser(userLogged)
      setToken(userLogged.token)
    }
    dispatch(initUser(userLogged))
  }, [])

  useEffect(() => {
    setUser(storeUser)
    setPageSelected(storePageSelected)
  }, [storeUser, storePageSelected])

  const handleShowLoginButton = () =>{
    toggableRef.current.handleChangeVisibility()
  }

  const handleChangeToken = (user) => {
    setUser(user)
    setToken(user.token)
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }
  
  return (
    <div>
      {!user ? 
          <LoginView handleChangeToken = {handleChangeToken} />
        : <>
            <Toggable ref={toggableRef}>
              <HeaderMenu />
              <button type='button' onClick={handleLogout}>Logout</button>
            </Toggable>
            <NotesView pageSelected= {pageSelected} />

          </>
      }
    </div>
  )
}

export default App