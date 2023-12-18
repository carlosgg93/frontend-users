import React from "react";
import { useParams } from "react-router-dom";

export const NoteDetails = ({notes}) => {
  const {idNoteSelected} = useParams()

  const note = notes.find(note => note.id === idNoteSelected)

  return (
    
    <div>
      {note ? 
      <>
        <h1> Note {note.id} Details </h1>
        <h2> {note.title} </h2>
        <p> {note.content} </p>
      </> 
      : <h1> Note not found </h1>}
    </div>
  )
}

export default NoteDetails