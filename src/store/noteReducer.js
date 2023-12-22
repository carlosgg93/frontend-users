import { createSlice } from '@reduxjs/toolkit'
import { getAllNotes, addNote, deleteNote} from '../services/notes';

const initialState = []

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        getNotes: (notes, action) => {
          notes = action.payload;
        },
        newNote: (notes, action) => {
          notes.push(action.payload);
        },
        removeNote: (notes, action) => {
          notes = notes.filter(note => note.id !== action.payload);
        }
    },
});

export const { newNote, getNotes, removeNote } = notesSlice.actions;
export default notesSlice.reducer;