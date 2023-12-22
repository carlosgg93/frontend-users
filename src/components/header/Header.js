
import { useRef } from 'react'

import Button from '../form/Button.js'
import Toggable from '../common/Toggable.js'
import NavBar from './NavBar.js'

const Header = ({handleLogout}) =>{

  const toggableRef = useRef()

  return (
    <>
      <Button handleClick={handleLogout} text={'Logout'} /><br/><br/>
      <Toggable ref={toggableRef}>
        <NavBar />
      </Toggable>  
    </>
  )
}

export default Header