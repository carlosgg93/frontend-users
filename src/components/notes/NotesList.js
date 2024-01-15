import { Table } from 'reactstrap';
import Note from './Note';
import Button from '../form/Button';

const NotesList = ({ notes, handleDelete, handleClick }) => (
  <Table striped hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {notes && notes.length > 0 && notes.map((note) => (
        <tr key={note.id}>
          <td aria-label="note">
            <Note id={note.id} title={note.title} content={note.content} handleClick={handleClick} />
          </td>
          <td aria-label="actions">
            <Button id={note.id} handleClick={handleDelete} value={note.title} text="delete" />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default NotesList;
