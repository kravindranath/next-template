// SomeFile.js
import store from "src/store";

export const getDashboardData = () => {
  const state = store.getState();

  console.log("stat =>", state?.dashboard);

  return state?.dashboard;
};
