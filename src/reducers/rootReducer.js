import { combineReducers } from 'redux'

import noteReducer from './noteReducer.js'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  notes: noteReducer,
})

export default rootReducer