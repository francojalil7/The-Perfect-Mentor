import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import newUsersReducer from "./newUsers";
import totalUsersReducer from "./totalUsers";
import userReducer from "./user"
import usersFilterReducer from "./usersFilter";
import usersInfoReducer from "./usersInfo";
import usersPerMonthReducer from "./usersPerMonth";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      user: userReducer,
      usersPerMonth: usersPerMonthReducer,
      totalUsers: totalUsersReducer,
      newUsers: newUsersReducer,
      usersInfo: usersInfoReducer,
      usersFilter: usersFilterReducer
    },
  });
  
  export default store;