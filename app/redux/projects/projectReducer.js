const intialState = {};
import { SET_PROJECT_INFO } from "./types";

const projectReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PROJECT_INFO:
      // return { ...state, projectData: action.payload };
      return (state = action.payload);
    default:
      return state;
  }
};
export default projectReducer;
