import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
  pageSelected: 0
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
        setPageSelected: (pageSelected, action) => {
          return pageSelected = action.payload;
        }
    },
});

export const { newNote, initializeNotes, setPageSelected } = notesSlice.actions;
export default notesSlice.reducer;