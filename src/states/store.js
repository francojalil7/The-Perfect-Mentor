import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import newUsersReducer from "./newUsers";
import totalUsersReducer from "./totalUsers";
import userReducer from "./user"
import usersFilterReducer from "./usersFilter";
import usersInfoReducer from "./usersInfo";
import usersPerMonthReducer from "./usersPerMonth";
import mentorsUsersReducer from "./mentorsUsers";
import menteesUsersReducer from "./menteesUsers";


const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer: {
      user: userReducer,
      usersPerMonth: usersPerMonthReducer,
      totalUsers: totalUsersReducer,
      newUsers: newUsersReducer,
      usersInfo: usersInfoReducer,
      usersFilter: usersFilterReducer,
      mentorsUsers: mentorsUsersReducer,
      menteesUsers: menteesUsersReducer,
    },
  });
  
  export default store;