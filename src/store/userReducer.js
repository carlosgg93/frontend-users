import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loginUser from '../services/login';
import registerUser from '../services/register';

const initialState = {
  loading: false,
  isLogged: false,
  user: '',
  token: '',
  response: null,
  error: '',
};

export const loginUserAsync = createAsyncThunk('user/loginUser', async (user) => {
  const response = await loginUser(user);
  return response;
});

export const logOutUserAsync = createAsyncThunk('user/logOutUser', async () => {
  // const response = await logOutUser();
  // return response;
});

export const registerUserAsync = createAsyncThunk('user/registerUser', async (user) => {
  const response = await registerUser(user);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = true;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
      })
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
