
const Note = ({id, title, content, handleClick}) => {
  return (
    <a href onClick={handleClick}>{title}</a>
  )
  
}

export default Note