import { createSlice } from "@reduxjs/toolkit";

const addTo = createSlice({
  name: "addTo",
  initialState: {
    list: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.list.push(action.payload);
    },
    removeFrom: (state, action) => {
      state.list = state.list.filter((item) => item !== action.payload);
    },
  },
});

export const { addToDo, removeFrom } = addTo.actions;
export default addTo.reducer;
