import { configureStore } from "@reduxjs/toolkit";
import addTo from "./addTo";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    addTo: addTo,
    user: userSlice,
  },
});

export default store;
