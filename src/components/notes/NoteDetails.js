import React from 'react';
import { useParams } from 'react-router-dom';

const NoteDetails = ({ notes }) => {
  const { idNoteSelected } = useParams();

  const note = notes.find((n) => n.id === idNoteSelected);

  return (
    <div>
      {note ? (
        <>
          <h1> Note {note.id} Details</h1>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </>
      ) : <h1> Note not found </h1>}
    </div>
  );
};

export default NoteDetails;
