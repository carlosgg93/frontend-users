import { forwardRef, useImperativeHandle, useState } from 'react'
import Button from '../form/Button'

const Toggable = forwardRef(({children}, ref) =>{
  const [visible, setVisible] = useState(true)

  const handleChangeVisibility = () =>{
    setVisible(!visible)
  }

  useImperativeHandle(ref, () =>{
    return{
      handleChangeVisibility
    }
  })
  
  return (
    <>
      <Button type='button' text='show' handleClick={handleChangeVisibility} />

      {visible && children}
    </>
  )
})

export default Toggable