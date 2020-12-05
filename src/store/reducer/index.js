
import { combineReducers } from "redux";
import employReducer from "./Employ";

export default combineReducers({
  allEmpData:employReducer,
});