import { combineReducers } from 'redux'
import todoslist from './todoslist';
 
const rootReducer = combineReducers({
  todoslist,
})

export default rootReducer