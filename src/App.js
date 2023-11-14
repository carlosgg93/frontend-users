import React, { useState, useEffect } from 'react'
import LoginView from './views/LoginView.js'
import NotesView from './views/NotesView.js'

const App = () => {

  const [login, setLogin] = useState(true)

  return (
    <div>
      {!login ? 
        <LoginView /> 
        : 
        <NotesView />
      }
    </div>
  )
}

export default App