import Button from '../form/Button';
import Note from './Note';

const NotesList = ({ notes, handleDelete, handleClick }) => (
  <div>
    {notes && notes.length > 0 && notes.map((note) => (
      <div key={note.id}>
        <Note id={note.id} title={note.title} content={note.content} handleClick={handleClick} />
        &nbsp;
        <Button id={note.id} handleClick={handleDelete} value={note.title} text="delete" />
      </div>
    ))}
  </div>
);

export default NotesList;
