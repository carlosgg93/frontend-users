import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (notes, action) => {
          return [...action.payload]
        },
        newNote: (notes, action) => {
          return [...notes, action.payload];
        },
        filterNotesBy: (notes, action) => {
          return notes.filter(note => note.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
});

export const { newNote, setNotes, filterNotesBy } = notesSlice.actions;
export default notesSlice.reducer;