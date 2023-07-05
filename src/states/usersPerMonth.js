import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersPerMonth = createAsyncThunk(
  "GET_USERS_MONTH",
  async () => {
    try {
      const usersPerMonth = await axios.get(
        `${process.env.REACT_APP_BACKEND_URI}/user/singPerMounth`
      );
      let data = usersPerMonth.data;
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const usersPerMonthReducer = createReducer([], {
  [getUsersPerMonth.fulfilled]: (state, action) => action.payload,
});

export default usersPerMonthReducer;
