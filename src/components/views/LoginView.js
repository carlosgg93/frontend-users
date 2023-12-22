import React, { useState } from 'react';
import Title from '../common/Title';
import LoginForm from '../form/LoginForm';
import { login } from '../../services/login';

function LoginView({ handleLogin }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickLogin = async (event) => {
    event.preventDefault();
    const user = await login({ userName, password });
    if (user) {
      handleLogin(user);
    }
    setUserName('');
    setPassword('');
  };

  return (
    <div>
      <Title text="Login" />
      <LoginForm
        onSubmit={handleClickLogin}
        onChangeUserName={handleChangeUserName}
        onChangePassword={handleChangePassword}
        userName={userName}
        pwd={password}
      />
    </div>
  );
}

export default LoginView;
