import { createSlice } from "@reduxjs/toolkit";
import { dashboardSuccessAction } from 'src/store/actions/dashboard';

const initialState = {
  data: {},
};
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    init (state, action){
      state.data = action.payload?.createdAt;
    },
    success (state, action){
      console.log('action =>', action.payload)
      state.data = action.payload?.data
    },
    error (state, action){
      state.error = action.payload.error
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(dashboardSuccessAction.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = action.payload
    })
  },
});

export const { init, success, error } = dashboardSlice.actions;

export default dashboardSlice.reducer;
