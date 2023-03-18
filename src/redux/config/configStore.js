import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";

const store = configureStore({
    reducer : {
        // 용민
        user,
        // 철환

    }
});

export default store;