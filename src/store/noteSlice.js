import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllNotes, addNote, deleteNote } from '../services/notes';

const initialState = {
  loading: false,
  noteList: [],
  error: '',
};

export const getAllNotesAsync = createAsyncThunk('notes/getAllNotes', async () => {
  const response = await getAllNotes();
  return response;
});

export const addNoteAsync = createAsyncThunk('notes/addNote', async (note) => {
  const response = await addNote(note);
  return response;
});

export const deleteNoteAsync = createAsyncThunk('notes/deleteNote', async (noteId) => {
  const response = await deleteNote(noteId);
  return response;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNotesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.noteList = action.payload;
      })
      .addCase(getAllNotesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noteList = [];
      })
      .addCase(addNoteAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNoteAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.noteList.push(action.payload);
      })
      .addCase(addNoteAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteNoteAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNoteAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.noteList = state.noteList.filter((note) => note.id !== action.payload);
      })
      .addCase(deleteNoteAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { newNote, getNotes, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
