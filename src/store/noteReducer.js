import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllNotes, addNote, deleteNote } from '../services/notes';

const initialState = {
  loading: false,
  notes: [],
  error: '',
};

export const fetchAllNotes = createAsyncThunk('notes/getNotes', async () => {
  const response = await getAllNotes();
  return response;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  // reducers: {
  //   getNotes: (notes, action) => [...action.payload],
  //   newNote: (notes, action) => {
  //     notes.push(action.payload);
  //   },
  //   removeNote: (notes, action) => {
  //     notes.filter((note) => note.id !== action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { newNote, getNotes, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
