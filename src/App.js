import React, { useState, useEffect } from 'react'
import LoginView from './components/views/LoginView.js'
import NotesView from './components/views/NotesView.js'

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