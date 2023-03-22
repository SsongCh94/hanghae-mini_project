import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import selects from "../modules/selectsSlice";
import posts from "../modules/postsSlice";
import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    // 용민
    user,
    comment,
    // 철환
    selects,
    posts,
  },
});

export default store;
