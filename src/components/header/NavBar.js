import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { logOutUserAsync } from '../../store/userSlice';
import Title from '../common/Title';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = (event) => {
    event.preventDefault();
    // window.localStorage.removeItem('user');
    dispatch(logOutUserAsync());
    navigation('/login');
  };

  return (
    <Navbar expand="md">
      <NavbarBrand href="/"> <Title text="Notes List" /></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/notes">Notes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
