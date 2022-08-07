const intialState = {};

const detailsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_NGO_INFO":
      // console.log("action", action.payload);
      const updatedState = {
        ...state,
        orphange: action.payload.orphange,
        food: action.payload.food,
        education: action.payload.education,
      };
      // console.log("In redux state is", updatedState);
      return updatedState;
    default:
      return state;
  }
};
export default detailsReducer;
