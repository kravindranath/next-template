import store from "src/store";

export const getDashboardData = () => {
  const state = store.getState();

  return state?.dashboard;
};
