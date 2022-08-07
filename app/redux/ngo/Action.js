import { SET_NGO_INFO } from "./types";

export const setNGOsInfo = (userdata) => {
  return {
    type: SET_NGO_INFO,

    payload: userdata,
  };
};
