import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUser: (user, action) => action.payload,
    logOutUser: (user, action) => null,
  },
});

export const { initUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
