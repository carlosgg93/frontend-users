import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        initializeNotes: (notes, action) => {
          return [...action.payload]
        },
        newNote: (notes, action) => {
          return [...notes, action.payload];
        },
        toggleImportanceOf: (notes, action) => {
          const id = action.payload
          const noteToChange = notes.find(n => n.id === id)
          const changedNote = {
            ...noteToChange,
            important: !noteToChange.important
          }
          return notes.map((note) => {
            return note.id !== id ? note : changedNote
          })
        }

    },
});

export const { newNote, toggleImportanceOf, initializeNotes } = notesSlice.actions;
export default notesSlice.reducer;