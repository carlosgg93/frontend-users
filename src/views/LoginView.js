import React, { useState } from 'react'
import Title from '../components/common/Title.js'
import LoginForm from '../components/form/LoginForm.js'
import {login} from '../services/login.js'

const LoginView = ({ handleChangeToken }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async(event) => {
    event.preventDefault()
    const user = await login({userName, password})
    if(user){
      handleChangeToken(user)
    }
    setUserName('')
    setPassword('')
    
  }

  return(
    <div>
      <Title text={'Login'} />
      <LoginForm 
        onSubmit={handleLogin} 
        onChangeUserName={handleChangeUserName}
        onChangePassword={handleChangePassword}
        userName={userName}
        pwd={password} 
      />
    </div>
  )
}

export default LoginView;