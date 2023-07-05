import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChatContacts = createAsyncThunk(
  "GET_CHAT_CONTACTS",
  async () => {
    try {
      const chatContacts = await axios.get(
        `${process.env.REACT_APP_BACKEND_URI}`
      );

      let data = chatContacts.data;
      return data;
    } catch {
      console.log("Error");
    }
  }
);

const chatContactsReducer = createReducer([], {
  [getChatContacts.fulfilled]: (state, action) => action.payload,
});

export default chatContactsReducer;