import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import swal from "sweetalert";

export const setUser = createAction("SET_USER");

export const signUpUser = createAsyncThunk("SIGNUPUSER", async (body) => {
  const response = await fetch("http://localhost:5001/auth/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    swal("Oops! ", "Something went wrong.", "error");
    // throw new Error(`HTTP error! status: ${response.status}`);
  }

  swal(
    "Congratulations!",
    "Your account has been successfully created ",
    "success"
  );
  
  return await response.json();
});

export const effectLogin = createAsyncThunk("PERSISTENCIA", async (body) => {
  const response = await fetch("http://localhost:5001/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    swal(
      "Oops! Something went wrong!",
      "You have entered an invalid username or password",
      "error"
    );
    // throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  localStorage.setItem("email", data.user.email);
  localStorage.setItem("userName", data.user.userName);
  localStorage.setItem("_id", data.user._id);
  localStorage.setItem("token", data.token);
  return data;
  // return JSON.parse(localStorage.getItem("user"));
});

export const updateUser = createAsyncThunk("UPDATE_USER", async (body) => {
  const response = await fetch("http://localhost:5001/auth/completeRegister", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    swal("Oops! ", "Something went wrong.", "error");
    // throw new Error(`HTTP error! status: ${response.status}`);
  }

  swal(
    "Congratulations!",
    "Your account has been UPDATED!",
    "success"
  );
  
  return await response.json();
});

export const getUserId = createAsyncThunk("GET_USER", async (body) => {
  try {
    const user = await fetch("http://localhost:5001/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return user.json;
  } catch {
    console.log("Error");
  }
});

const userReducer = createReducer(
  {},
  {
    
    [setUser]: (state, action) => action.payload,
    [getUserId.fulfilled]: (state, action) => action.payload,
    [signUpUser.fulfilled]: (state, action) => action.payload,
    [effectLogin.fulfilled]: (state, action) => action.payload,
    [updateUser.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;
