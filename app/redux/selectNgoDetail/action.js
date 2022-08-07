import { SET_NGO_DATA } from "./types";

export const setNGOData = (data) => {
  return {
    type: SET_NGO_DATA,
    payload: data,
  };
};
