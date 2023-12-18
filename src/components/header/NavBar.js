
import {Link} from 'react-router-dom';

const NavBar = () =>{
  
  return (
    <>
      <Link to={'/'} > Home </Link>
      <Link to={'/notes'}> Notes </Link>  
    </>
  )
}

export default NavBar