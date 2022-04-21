import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};
export const homePage = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    clearName: (state) => {
      state.name = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearName, updateName } = homePage.actions;

export default homePage.reducer;
