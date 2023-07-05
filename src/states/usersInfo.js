import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersInfo = createAsyncThunk(
  "GET_USERS_INFO",
  async () => {
    try {
      const usersInfo = await axios.get(
        `${process.env.REACT_APP_BACKEND_URI}/user/users`
      );
      let data = usersInfo.data;
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const usersInfoReducer = createReducer([], {
  [getUsersInfo.fulfilled]: (state, action) => action.payload,
});

export default usersInfoReducer;
