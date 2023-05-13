import { configureStore } from "@reduxjs/toolkit";
import dashboard from "src/store/slices/dashboard";

export default configureStore({
  reducer: {
    dashboard,
  },
});
