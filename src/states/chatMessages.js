import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChatMessages = createAsyncThunk(
  "GET_CHAT_MESSAGES",
  async () => {
    try {
      const chatMessages = await axios.get(
        `https://the-perfect-mentor-backend.vercel.app/chat`
      );

      let data = chatMessages.data;
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const chatMessagesReducer = createReducer([], {
  [getChatMessages.fulfilled]: (state, action) => action.payload,
});

export default chatMessagesReducer;