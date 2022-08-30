import { SET_PROJECT_INFO } from "./types";
export const setProjectsInfo = (data) => {
  return {
    type: SET_PROJECT_INFO,

    payload: data,
  };
};
