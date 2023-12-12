import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (page, action) => {
          return page = action.payload;
        }
    },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;