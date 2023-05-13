import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const DASHBOARD_INIT = "dashboard/init";
const DASHBOARD_SUCCESS = "dashboard/success";
const DASHBOARD_ERROR = "dashboard/error";

export const dashboardInitAction = createAction(
  DASHBOARD_INIT,
  function prepare() {
    return {
      payload: {
        timestamp: new Date().toISOString(),
      },
    };
  }
);

export const dashboardSuccessAction = createAsyncThunk(
  DASHBOARD_SUCCESS,
  async (text) => {
    const data = await fetch("/v1/ip/country.json").then((res) => {
      return res?.json();
    });
    return data;
  }
);

export const dashboardErrorAction = createAction(
  DASHBOARD_ERROR,
  function prepare(text) {
    return {
      payload: {
        data: text,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    };
  }
);
