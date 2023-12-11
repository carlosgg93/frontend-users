import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (user, action) => {
          return user = action.payload;
        }
    },
});

export const { initUser } = userSlice.actions;
export default userSlice.reducer;