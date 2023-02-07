import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";


export const setUsersFilter = createAction("SET_USERS_FILTER");

export const getUsersFilter = createAsyncThunk(
  "GET_USERS_FILTER",
  async ({filter, value}) => {
    try {
     const filteredUsers = await axios.get(`http://localhost:5001/user/filtered/${filter}/${value}`)
     let data = filteredUsers.data;
     return data;

    } catch {
      console.log("Error");
    }
  }
);


const usersFilterReducer = createReducer([], {
  [setUsersFilter]: (state, action) => action.payload,
  [getUsersFilter.fulfilled]: (state, action) => action.payload,
});

export default usersFilterReducer;
