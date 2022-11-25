import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
//   email: "",
//   password: "",
  token: "",
  loading: false,
  error: "",
};

export const signUpUser = createAsyncThunk("SIGNUPUSER", async (body) => {
  console.log("body en signUpUser", body);
  // const res = await fetch("////", {
  //     method:"post",
  //     headers:{
  //         'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(body)
  // })
  // return await res.json();
  // const res =  JSON.stringify(body)
  // console.log("RES", res)
  return body;
});

export const loginUser = createAsyncThunk("LOGINUSER", async (body) => {
    console.log("body en loginUser", body);
    // const res = await fetch("////", {
    //     method:"post",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify(body)
    // })
    // return await res.json();
    // const res =  JSON.stringify(body)
    // console.log("RES", res)
    return body;
  });



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

addToken: (state, action) => {
    state.token = localStorage.getItem('token')
},
addUser: (state, action) => {
    state.email = localStorage.getItem('email')
},
logout: (state, action) => {
    state.token = null;
    localStorage.clear()
}

  },
  extraReducers: {
    //***** SIGN UP ******* */
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (
      state,
      { payload: { error, msg, username, email, password} }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        // state.username = username;
        // state.email = email;
        // state.password = password;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },


     //***** LOGIN ******* */
     [loginUser.pending]: (state, action) => {
        state.loading = true;
      },
      [loginUser.fulfilled]: (
        state,
        { payload: { error, msg, token, email} }
      ) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
          state.token = token;
          state.email = email;
        //   state.password = password;

          localStorage.setItem('email', email)

          localStorage.setItem('token', token)
        }
      },
      [loginUser.rejected]: (state, action) => {
        state.loading = true;
      },

  },
});


export const {addToken,addUser,logout} = userSlice.actions;
export default userSlice.reducer;
