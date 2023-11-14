import React, { useState, useEffect } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'

const App = () => {

  const [userLogged, setUserLogger] = useState(false)

  const handleChangeUserLogged = () => {
    setUserLogger(!userLogged)
  }

  return (
    <div>
      {!userLogged ? 
        <LoginView handleChangeUserLogged={handleChangeUserLogged} />
        : <NotesView />
      }
    </div>
  )
}

export default App