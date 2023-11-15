import React, { useState, useEffect } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'

const App = () => {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('token')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setToken(user)
    }
  }, [])

  const handleChangeUser = (user) => {
    setToken(user.token)
    window.localStorage.setItem('token', JSON.stringify(user.token))
  }


  return (
    <div>
      {!token ? 
        <LoginView handleChangeUser = {handleChangeUser} />
        : <NotesView />
      }
    </div>
  )
}

export default App