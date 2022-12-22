import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersPerMonth = createAsyncThunk(
  "GET_USERS_MONTH",
  async () => {
    try {
      const usersPerMonth = await axios.get(
        `http://localhost:5001/user/singPerMounth`
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
