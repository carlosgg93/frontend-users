
import {Link} from 'react-router-dom';

const HeaderMenu = () =>{
  
  return (
    <>
      <Link to={'/notes'}> Notes </Link>  
      <Link to={'/'} > Create Note </Link>
    </>
  )
}

export default HeaderMenu