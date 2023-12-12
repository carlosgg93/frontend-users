import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer.js";

const state = {
  notes : [],
  user: null,
  page: 0
}

const store = configureStore({ 
  reducer: rootReducer, 
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: state,
});

export default store;