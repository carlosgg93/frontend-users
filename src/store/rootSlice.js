import { combineReducers } from 'redux';

import noteReducer from './noteSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  notes: noteReducer,
  user: userReducer,
});

export default rootReducer;
