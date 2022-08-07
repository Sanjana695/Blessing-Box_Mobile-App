const intialState = {};
import { SET_NGO_DATA } from "../selectNgoDetail/types";

const ngoDetailReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_NGO_DATA:
      console.log("action", action.payload);
      const updatedState = {
        ...state,
        ngoData: action.payload,
      };
      console.log("In redux state is data", updatedState);
      return updatedState;
    default:
      return state;
  }
};
export default ngoDetailReducer;
