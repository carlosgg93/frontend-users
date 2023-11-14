import React, {useState, useEffect} from 'react'
import Title from '../components/common/Title.js'
import Input from '../components/form/Input.js'
import NotesList from '../components/notes/NotesList.js'
import { getAllNotes, addNote, deleteNote, updateNote } from '../services/notes.js'

const NotesView = () => {
  
  const [ notes, setNotes ] = useState([]) 
  const [ noteTitle, setNoteTitle ] = useState('')
  const [ noteBody, setNoteBody] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    getAllNotes()
      .then((response) => {
        setNotes(response)
      })
    }
  , []);

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
    setNotes(notes.filter((note) => {
      return note.title.includes(filter)
    }))
  }

  const handleClickDelete = (event) => {
    event.preventDefault()
    if(window.confirm(`Delete ${event.target.value}?`)){ 
      deleteNote(event.target.id)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

   return (
     <div>
       <Title text={'Notes List'} />
      <Input onChange={handleChangeFilter} text={'Filter shown with'} value={filter} /><br/>
      <NotesList handleDelete={handleClickDelete} notes={notes} />
     </div>
   )
}

export default NotesView