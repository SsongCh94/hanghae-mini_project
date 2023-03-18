import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import selects from "../modules/selectsSlice";

const store = configureStore({
  reducer: {
    // 용민
    user,
    // 철환
    selects,
  },
});

export default store;
