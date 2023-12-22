import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getAllNotes, addNote, deleteNote} from '../../services/notes.js'
import { getNotes, newNote, removeNote } from '../../store/noteReducer';

import Title from '../common/Title';
import NotesList from '../notes/NotesList';
import NoteDetails from '../notes/NoteDetails';
import CreateNoteForm from '../form/CreateNoteForm';
import Input from '../form/Input';
import Button from '../form/Button';

const NotesView = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filter, setFilter] = useState('');
  const [optionSelected, setOptionSelected] = useState('list');

  // ComponentDidMount
  useEffect(() => {
    if (notes.length === 0) {
      dispatch(getNotes());
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
      dispatch(removeNote(event.target.id));
    }
  };

  const handleSubmitCreateNote = async (event) => {
    event.preventDefault();
    const note = {
      title: noteTitle,
      content: noteContent,
    };

    dispatch(newNote(note));

    setNoteTitle('');
    setNoteContent('');
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
    <>
      {optionSelected === 'list'
        ? (
          <>
            <Title text="Notes List" />
            <Button handleClick={() => setOptionSelected('create')} text="Create Note" />
            <br />
            <br />
            <Input onChange={handleChangeFilter} text="Filter shown with" value={filter} />
            <br />
            <NotesList
              handleDelete={handleClickDelete}
              handleClick={() => setOptionSelected('details')}
              notes={filteredNotes}
            />
          </>
        ) : optionSelected === 'create'
          ? (
            <>
              <Title text="Create Note" />
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
          ) : (
            <>
              <Title text="Note Details" />
              <Button handleClick={() => setOptionSelected('list')} text="Go Back" />
              <br />
              <br />
              <NoteDetails notes={notes} />
            </>
          )}
    </>
  );
};

export default NotesView;
