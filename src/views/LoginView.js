import React, { useState, useEffect } from 'react'
import Title from '../components/common/Title.js'
import LoginForm from '../components/form/LoginForm.js'
import { getAllUsers, addUser, deleteUser, updateUser } from '../services/users.js'

const LoginView = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('login')
  }

  return(
    <div>
      <Title text={'Login'} />
      <LoginForm onSubmit={handleSubmit} onChangeUserName={handleChangeUserName} onChangePassword={handleChangePassword} userName={userName} pwd={password} />
    </div>
  )
}

export default LoginView;