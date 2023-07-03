import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUsersFilter = createAction("SET_USERS_FILTER");

export const getUsersFilter = createAsyncThunk(
  "GET_USERS_FILTER",
  async ({ filter, value }) => {
    try {
      const filteredUsers = await axios.get(
        `https://the-perfect-mentor-backend.vercel.app/user/filtered/${filter}/${value}`
      );
      let data = filteredUsers.data;
      return data;
    } catch (err) {
      console.log("Error", err);
    }
  }
);

const usersFilterReducer = createReducer([], {
  [setUsersFilter]: (state, action) => action.payload,
  [getUsersFilter.fulfilled]: (state, action) => action.payload,
});

export default usersFilterReducer;
