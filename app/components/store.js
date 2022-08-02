import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux";

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
const store = makeStore();
export default store;
