import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loginUser from '../services/login';
import registerUser from '../services/register';

import { setToken, removeToken, setUSer, removeUser, getUser } from '../utils/localStorage';

const initialState = {
  loading: false,
  isLogged: false,
  response: null,
  error: '',
};

export const loginUserAsync = createAsyncThunk('user/loginUser', async (user) => {
  if (getUser() !== null) {
    return getUser();
  }
  const response = await loginUser(user);
  return response;
});

export const setUserAsync = createAsyncThunk('user/setUser', async (user) => user);

export const logOutUserAsync = createAsyncThunk('user/logOutUser', async () => {
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
        setToken(action.payload.token);
        setUSer(action.payload);
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
      })
      .addCase(setUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = true;
        setToken(action.payload.token);
        setUSer(action.payload);
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
      })
      .addCase(logOutUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOutUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = false;
        removeToken();
        removeUser();
      })
      .addCase(logOutUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
