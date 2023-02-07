import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTotalUsers = createAsyncThunk(
  "GET_TOTAL_USERS",
  async () => {
    try {
      const totalUsers = await axios.get(
        `http://localhost:5001/user/totalUsers`
      );
      let data = totalUsers.data;
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const totalUsersReducer = createReducer({}, {
  [getTotalUsers.fulfilled]: (state, action) => action.payload,
});

export default totalUsersReducer;
