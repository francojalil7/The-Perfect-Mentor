import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewUsers = createAsyncThunk(
  "GET_NEW_USERS",
  async () => {
    try {
      const newUsers = await axios.get(
        `${process.env.REACT_APP_BACKEND_URI}`
      );
      let data = newUsers.data;
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
