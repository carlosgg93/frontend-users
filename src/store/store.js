import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/rootReducer.js";

const state = {
  notes : [],
}

const store = configureStore({ 
  reducer: rootReducer, 
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: state,
  enhancers: [],
});

export default store;