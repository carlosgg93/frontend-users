import Input from './Input';

const CreateNoteForm = ({ onSubmit, onChangeTitle, onChangeContent, noteTitle, noteContent }) => (
  <form onSubmit={onSubmit}>
    <Input onChange={onChangeTitle} text="Input Title" placeholder="Title" value={noteTitle} />
    <br />
    <Input onChange={onChangeContent} text="Input Content" placeholder="Content" value={noteContent} />
    <br />
    <button type="submit">Create</button>
  </form>
);

export default CreateNoteForm;
