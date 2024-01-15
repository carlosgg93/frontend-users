import { useRef } from 'react';

import Toggable from '../common/Toggable';
import NavBar from './NavBar';

const Header = () => {
  const toggableRef = useRef();

  return (
    <Toggable ref={toggableRef}>
      <NavBar />
    </Toggable>
  );
};

export default Header;
