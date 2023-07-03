import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMentorsUsers = createAsyncThunk(
  "GET_MENTORS_USERS",
  async () => {
    try {
      const mentorsUsers = await axios.get(
        `https://the-perfect-mentor-backend.vercel.app/user/users/mentors`
      );
      let data = mentorsUsers.data;
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const mentorsUsersReducer = createReducer([], {
  [getMentorsUsers.fulfilled]: (state, action) => action.payload,
});

export default mentorsUsersReducer;


