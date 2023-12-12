// import { useState } from 'react'
import Button from './form/Button'

import { useDispatch } from 'react-redux'
import {setPage} from '../reducers/pageReducer.js'

const HeaderMenu = () =>{
  // const [pageSelected, setPageSelected] = useState(0)
  const dispatch = useDispatch()

  const handleChangeOptionSelected = (page) =>{
    dispatch(setPage(page))
  }
  
  return (
    <>
      <Button type="button" text="Notes List" handleClick={(e) => handleChangeOptionSelected(0)}/>  
      <Button type="button" text="Create Note" handleClick={(e) => handleChangeOptionSelected(1)}/>  

    </>
  )
}

export default HeaderMenu