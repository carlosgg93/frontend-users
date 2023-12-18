import { useRef } from 'react'
import NotesView from './NotesView.js'
import Toggable from '../components/common/Toggable.js'
import HeaderMenu from '../components/HeaderMenu.js'
import Button from '../components/form/Button.js'
import { useSelector } from 'react-redux'

const HomeView = ({handleLogout}) => {
  const toggableRef = useRef()
  const user = useSelector(state => state.user)

  return (
    <>
      <Button handleClick={handleLogout} text={'Logout'} /><br/><br/>
      <Toggable ref={toggableRef}>
        <HeaderMenu />
      </Toggable>
      <NotesView />
    </>
  )
}

export default HomeView