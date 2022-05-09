import { combineReducers } from "redux";
import userReducer from "./userReducer";
import offerReducer from "./offerReducer";
const rootReducer = combineReducers({ userReducer, offerReducer });
export default rootReducer;
