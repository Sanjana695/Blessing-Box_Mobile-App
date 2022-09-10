import { combineReducers } from "redux";
import detailsReducer from "./ngo/detailsReducer";
import ngoDetailReducer from "./selectNgoDetail/ngoDetailReducer";
import loginReducer from "./donor/loginReducer";
import userReducer from "./donor/userReducer";
const rootReducer = combineReducers({
  detailsReducer,
  ngoDetailReducer,
  loginReducer,
  userReducer,
});

export default rootReducer;
