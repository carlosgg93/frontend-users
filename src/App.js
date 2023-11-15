import React, { useState, useEffect } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'

const App = () => {

  const [user, setUser] = useState(null)

  const handleChangeUser = (user) => {
    setUser(user)
  }

  return (
    <div>
      {!user ? 
        <LoginView handleChangeUser = {handleChangeUser} />
        : <NotesView user = {user}/>
      }
    </div>
  )
}

export default App