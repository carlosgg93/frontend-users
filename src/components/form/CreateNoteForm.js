import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateNoteForm = ({ onSubmit, onChangeTitle, onChangeContent, noteTitle, noteContent }) => (
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="title">Input Title</Label>
      <Input type="text" onChange={onChangeTitle} value={noteTitle} placeholder="Title" />
    </FormGroup>
    <FormGroup>
      <Label for="title">Input Title</Label>
      <Input type="text" onChange={onChangeContent} value={noteContent} placeholder="Content" />
    </FormGroup>
    <Button>Create</Button>
  </Form>
);

export default CreateNoteForm;
