import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/notes">Notes</Link>
            </NavLink>
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
