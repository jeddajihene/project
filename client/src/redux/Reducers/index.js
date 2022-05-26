import { combineReducers } from "redux";
import userReducer from "./userReducer";
import offerReducer from "./offerReducer";
import servicesCardsReducer from "./servicesCardsReducer";
import profileReducer from "./profileReducer";
import galleryReducer from "./galleryReducer";
import contactUsReducer from "./contactUsReducer";
import commentReducer from "./commentReducer";
const rootReducer = combineReducers({
  userReducer,
  offerReducer,
  servicesCardsReducer,
  profileReducer,
  galleryReducer,
  contactUsReducer,
  commentReducer
});
export default rootReducer;
