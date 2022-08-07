import { IS_LOGIN, SET_DONOR_INFO, IS_LOGOUT } from "./types";
export const isLogin = () => {
  return {
    type: IS_LOGIN,
  };
};

export const isLogout = () => {
  return {
    type: IS_LOGOUT,
  };
};

export const setUserInfo = (userData) => {
  return {
    type: SET_DONOR_INFO,
    payload: userData,
  };
};
