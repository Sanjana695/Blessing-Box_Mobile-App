import { combineReducers } from "redux";
import detailsReducer from "./ngo/detailsReducer";

const rootReducer = combineReducers({
  detailsReducer,
});

export default rootReducer;
