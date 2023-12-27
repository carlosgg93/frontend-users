import { useRef } from 'react';

import Button from '../form/Button';
import Toggable from '../common/Toggable';
import NavBar from './Navbar';

const Header = ({ handleLogout }) => {
  const toggableRef = useRef();

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
