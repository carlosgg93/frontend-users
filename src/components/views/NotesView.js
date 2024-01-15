import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getAllNotes, addNote, deleteNote} from '../../services/notes.js'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { getAllNotesAsync, addNoteAsync, deleteNoteAsync } from '../../store/noteSlice';

import NotesList from '../notes/NotesList';
import NoteDetails from '../notes/NoteDetails';
import CreateNoteForm from '../form/CreateNoteForm';
import Button from '../form/Button';

const NotesView = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.noteList);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filter, setFilter] = useState('');
  const [optionSelected, setOptionSelected] = useState('list');

  // ComponentDidMount
  useEffect(() => {
    if (notes.length === 0) {
      dispatch(getAllNotesAsync());
    }
  }, [dispatch, notes]);

  // ComponentWillReceiveProps
  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleChangeFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    setFilteredNotes(notes.filter((note) => note.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleClickDelete = (event) => {
    event.preventDefault();
    if (window.confirm(`Delete "${event.target.value}" note?`)) {
      dispatch(deleteNoteAsync(event.target.id));
    }
  };

  const handleSubmitCreateNote = async (event) => {
    event.preventDefault();
    const note = {
      title: noteTitle,
      content: noteContent,
    };

    dispatch(addNoteAsync(note));

    setNoteTitle('');
    setNoteContent('');
    setOptionSelected('list');
  };

  const handleChangeTitle = (event) => {
    event.preventDefault();
    setNoteTitle(event.target.value);
  };

  const handleChangeContent = (event) => {
    event.preventDefault();
    setNoteContent(event.target.value);
  };

  return (
    <div className="container">
      {optionSelected === 'list' && (
        <>
          <Button handleClick={() => setOptionSelected('create')} text="Create Note" />
          <br />
          <br />
          <Form>
            <FormGroup>
              <Label for="title">Filter showns with</Label>
              <Input type="text" onChange={handleChangeFilter} value={filter} placeholder="Filter" />
            </FormGroup>
          </Form>

          <NotesList
            handleDelete={handleClickDelete}
            handleClick={() => setOptionSelected('details')}
            notes={filteredNotes}
          />
        </>
      )}
      {optionSelected === 'create' && (
        <>
          <Button handleClick={() => setOptionSelected('list')} text="Notes List" />
          <br />
          <br />
          <CreateNoteForm
            onSubmit={handleSubmitCreateNote}
            onChangeTitle={handleChangeTitle}
            onChangeContent={handleChangeContent}
            noteTitle={noteTitle}
            noteContent={noteContent}
          />
        </>
      )}
      {optionSelected === 'details' && (
        <>
          <Button handleClick={() => setOptionSelected('list')} text="Go Back" />
          <br />
          <br />
          <NoteDetails notes={notes} />
        </>
      )}
    </div>
  );
};

export default NotesView;
