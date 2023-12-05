import React, { useState, useEffect, useRef } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'
import Button from './components/form/Button.js'
import {setToken} from './services/notes.js'
import Toggable from './components/common/Toggable.js'

const App = () => {

  const [user, setUser] = useState(null)
  const toggableRef = useRef()

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if(user != null && user !== "null"){
      const userLogged = JSON.parse(user)
      setUser(userLogged)
      setToken(userLogged.token)
    }else{
      setUser(null)
    }
  }, [])

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
              <Button type="button" text="Logout" handleClick={handleLogout}/>  
            </Toggable>
            <NotesView handleShowLoginButton={handleShowLoginButton} />
          </>
      }
    </div>
  )
}

export default App