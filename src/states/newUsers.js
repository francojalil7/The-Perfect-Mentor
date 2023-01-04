import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewUsers = createAsyncThunk(
  "GET_NEW_USERS",
  async () => {
    try {
      const newUsers = await axios.get(
        `http://localhost:5001/user/newUsers`
      );
      let data = newUsers.data;
      console.log("data new users", data)
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const newUsersReducer = createReducer({}, {
  [getNewUsers.fulfilled]: (state, action) => action.payload,
});

export default newUsersReducer;
