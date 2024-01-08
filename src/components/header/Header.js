import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUserAsync } from '../../store/userReducer';

import Button from '../form/Button';
import Toggable from '../common/Toggable';
import NavBar from './Navbar';

const Header = () => {
  const toggableRef = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    // window.localStorage.removeItem('user');
    dispatch(logOutUserAsync());
    navigation('/login');
  };

  return (
    <>
      <Button handleClick={handleLogout} text="Logout" />
      <br />
      <br />
      <Toggable ref={toggableRef}>
        <NavBar />
      </Toggable>
    </>
  );
};

export default Header;
