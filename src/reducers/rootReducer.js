import { combineReducers } from 'redux'

import noteReducer from './noteReducer.js'
import userReducer from './userReducer.js'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  notes: noteReducer,
  user: userReducer,
})

export default rootReducer