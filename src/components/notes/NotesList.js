import Button from '../form/Button.js'
import Note from './Note.js'

const NotesList = ({notes, handleDelete, handleClick}) => {
  
  return (
    <div>
      {notes && notes.map(note =>
        <div key={note.id}>
          <Note id={note.id} title={note.title} content={note.content} handleClick={handleClick} />&nbsp;
          <Button id={note.id} handleClick={handleDelete} value={note.title} text={'delete'} />
        </div>
      )}
    </div>
  )
}


export default NotesList