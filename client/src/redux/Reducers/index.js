import { combineReducers } from "redux";
import userReducer from "./userReducer";
import offerReducer from "./offerReducer";
import servicesCardsReducer from "./servicesCardsReducer";
import profileReducer from "./profileReducer";
import galleryReducer from "./galleryReducer";
import contactUsReducer from "./contactUsReducer";
const rootReducer = combineReducers({
  userReducer,
  offerReducer,
  servicesCardsReducer,
  profileReducer,
  galleryReducer,
  contactUsReducer
});
export default rootReducer;
