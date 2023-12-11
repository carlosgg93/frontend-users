import { useState } from 'react'
import Button from './form/Button'

const HeaderMenu = () =>{
  const [pageSelected, setPageSelected] = useState(0)

  const handleChangeOptionSelected = (page) =>{
    setPageSelected(page)
  }
  
  return (
    <>
      <Button type="button" text="Notes List" handleClick={(e) => handleChangeOptionSelected(0)}/>  
      <Button type="button" text="Create Note" handleClick={(e) => handleChangeOptionSelected(1)}/>  

    </>
  )
}

export default HeaderMenu