import { combineReducers } from "redux";
import detailsReducer from "./ngo/detailsReducer";
import ngoDetailReducer from "./selectNgoDetail/ngoDetailReducer";
import loginReducer from "./donor/loginReducer";
import userReducer from "./donor/userReducer";
import projectReducer from "./projects/projectReducer";
const rootReducer = combineReducers({
  detailsReducer,
  ngoDetailReducer,
  loginReducer,
  userReducer,
  projectReducer,
});

export default rootReducer;
