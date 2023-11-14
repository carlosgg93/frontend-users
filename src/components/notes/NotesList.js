import Button from '../form/Button.js'
import Note from './Note.js'

const NotesList = ({notes, handleDelete}) => {
  
  return (
    <div>
      {notes.map(note =>
        <div key={note.id}>
          <Note user={note} />
          <Button id={note.id} handleClick={handleDelete} value={note.title} text={'delete'} />
        </div>
      )}
    </div>
  )
}

export default NotesList