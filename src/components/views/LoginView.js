import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Title from '../common/Title';
import LoginForm from '../form/LoginForm';
import { loginUserAsync } from '../../store/userSlice';

const LoginView = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = {
      username: userName,
      password,
    };

    dispatch(loginUserAsync(user));
    navigation('/');

    setUserName('');
    setPassword('');
  };

  return (
    <div className="container">
      <Title text="Login" />
      <LoginForm
        onSubmit={handleLogin}
        onChangeUserName={handleChangeUserName}
        onChangePassword={handleChangePassword}
        userName={userName}
        pwd={password}
      />
    </div>
  );
};

export default LoginView;
