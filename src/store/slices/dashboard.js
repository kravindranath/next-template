import { createSlice } from "@reduxjs/toolkit";
import { dashboardSuccessAction } from "src/store/actions/dashboard";

const initialState = {
  isLoading: false,
  location: {},
  timestamp: new Date().toISOString(),
};
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    init(state, action) {
      state.timestamp = action.payload?.timestamp;
    },
    error(state, action) {
      state.error = action.payload.error;
    },
    clear(state, action) {
      state.location = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(dashboardSuccessAction.fulfilled, (state, action) => {
      // Add user to the state array
      state.location = action.payload;
      state.isLoading = false;
    });
    builder.addCase(dashboardSuccessAction.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
  },
});

export const { init, success, error, clear } = dashboardSlice.actions;

export default dashboardSlice.reducer;
