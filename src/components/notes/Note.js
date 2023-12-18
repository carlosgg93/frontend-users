import {Link} from 'react-router-dom';

const Note = ({id, title, content}) => {
  return (
    <Link to={`/notes/${id}`}>{title}</Link>
  )
  
}

export default Note