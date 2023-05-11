import { configureStore } from "@reduxjs/toolkit";
import dashboard from "src/store/slices";

export default configureStore({
  reducer: {
    dashboard
  },
});
