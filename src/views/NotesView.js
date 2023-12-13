import React, {useState, useEffect} from 'react'
import Title from '../components/common/Title.js'
import Input from '../components/form/Input.js'
import NotesList from '../components/notes/NotesList.js'
import CreateNoteForm from '../components/form/CreateNoteForm.js'
import { getAllNotes, addNote, deleteNote} from '../services/notes.js'
import { useDispatch, useSelector } from 'react-redux'
import { setNotes, newNote } from '../reducers/noteReducer.js'

const NotesView = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)
  const pageSelected = useSelector(state => state.page)
  
  const [ noteTitle, setNoteTitle ] = useState('')
  const [ noteContent, setNoteContent] = useState('')
  const [ filteredNotes, setFilteredNotes ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    getAllNotes()
      .then((response) => {
        dispatch(setNotes(response))
        setFilteredNotes(response)
      })
    },[dispatch]);

  const handleChangeFilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
    setFilteredNotes(notes.filter((note) => {
      return note.title.toLowerCase().includes(event.target.value.toLowerCase())
    }))
  }

  const handleClickDelete = (event) => {
    event.preventDefault()
    if(window.confirm(`Delete "${event.target.value}" note?`)){ 
      deleteNote(event.target.id)
      .then((response) => {
        getAllNotes()
          .then((response) => {
            dispatch(setNotes(response))
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
    dispatch(newNote(noteCreated))

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
      {pageSelected === 0 &&
        <>
          <Title text={'Notes List'} />
          <Input onChange={handleChangeFilter} text={'Filter shown with'} value={filter} /><br/>
          <NotesList 
            handleDelete={handleClickDelete}
            notes={filteredNotes}
          />
        </>
      }
      {pageSelected === 1 &&
        <>
          <Title text={'Create Note'} />
          <CreateNoteForm 
            onSubmit={handleSubmitCreateNote} 
            onChangeTitle={handleChangeTitle} 
            onChangeContent={handleChangeContent}
            noteTitle={noteTitle} 
            noteContent={noteContent}
          />
        </>
      }
    </div>
  )
}

export default NotesView