import React, { useState, useEffect } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'
import Button from './components/form/Button.js'
import {setToken} from './services/notes.js'

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if(user){
      const userLogged = JSON.parse(user)
      setUser(userLogged)
      setToken(userLogged.token)
    }else{
      setUser(null)
    }
  }, [])

  const handleChangeToken = (user) => {
    setUser(user)
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
            <Button type="button" text="Logout" handleClick={handleLogout}/>  
            <NotesView />
          </>
      }
    </div>
  )
}

export default App