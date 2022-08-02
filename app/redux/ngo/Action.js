import { SET_NGO_INFO, SET_FOOD_INFO, SET_EDUCATION_INFO } from "./types";

export const setNGOsInfo = (userdata) => {
  return {
    type: SET_NGO_INFO,
    payload: userdata,
  };
};
