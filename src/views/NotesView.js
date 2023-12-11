import React, {useState, useEffect} from 'react'
import Title from '../components/common/Title.js'
import Input from '../components/form/Input.js'
import NotesList from '../components/notes/NotesList.js'
import CreateNoteForm from '../components/form/CreateNoteForm.js'
import { getAllNotes, addNote, deleteNote} from '../services/notes.js'
import { useDispatch, useSelector } from 'react-redux'
import { initializeNotes } from '../reducers/noteReducer.js'


const NotesView = ({handleShowLoginButton}) => {

  const dispatch = useDispatch()
  const storeNotes = useSelector(state => state.notes)
  
  const [ notes, setNotes ] = useState([]) 
  const [ noteTitle, setNoteTitle ] = useState('')
  const [ noteContent, setNoteContent] = useState('')
  const [ filter, setFilter ] = useState('')

  console.log("render NotesView")

  useEffect(() => {
    getAllNotes()
      .then((response) => {
        dispatch(initializeNotes(response))
      })
    },[dispatch]);
  
  useEffect(() => {
    setNotes(storeNotes)
  }, [storeNotes])

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
    setNotes(notes.filter((note) => {
      return note.title.includes(filter)
    }))
  }

  const handleClickDelete = (event) => {
    event.preventDefault()
    if(window.confirm(`Delete "${event.target.value}" note?`)){ 
      deleteNote(event.target.id)
      .then((response) => {
        getAllNotes()
          .then((response) => {
            setNotes(response)
          })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  const handleSubmitCreateNote = async (event) => {
    event.preventDefault()
    const note = {
      title: noteTitle,
      content: noteContent
    }

    const noteCreated = await addNote(note)
    setNotes(notes.concat(noteCreated))

    setNoteTitle('')
    setNoteContent('')
  }
  
  const handleChangeTitle = (event) => {
    event.preventDefault()
    setNoteTitle(event.target.value)
  }
  
  const handleChangeContent = (event) => {
    event.preventDefault()
    setNoteContent(event.target.value)
  }

  return (
    <div>
      <Title text={'Notes List'} />
      <Input onChange={handleChangeFilter} text={'Filter shown with'} value={filter} /><br/>
      <NotesList 
        handleDelete={handleClickDelete}
        notes={notes}
      />
      <Title text={'Create Note'} />
      <CreateNoteForm 
        onSubmit={handleSubmitCreateNote} 
        onChangeTitle={handleChangeTitle} 
        onChangeContent={handleChangeContent}
        handleShowLoginButton={handleShowLoginButton}
        noteTitle={noteTitle} 
        noteContent={noteContent}
      />
    </div>
  )
}

export default NotesView