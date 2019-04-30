import { combineReducers } from "redux";
import todoslist from "./todoslist";
import toolslist from "./toolslist";

const rootReducer = combineReducers({
  todoslist,
  toolslist
});

export default rootReducer;
