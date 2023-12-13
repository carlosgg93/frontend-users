import { createSlice } from '@reduxjs/toolkit'

const initialState = {

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
        }
    },
});

export const { newNote, setNotes } = notesSlice.actions;
export default notesSlice.reducer;