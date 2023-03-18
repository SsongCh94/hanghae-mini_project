import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis, apis_token } from "../../axios/api";
import { setCookie } from "../../axios/cookies";

const initialState = {
  user: {
    loginid: "",
    nickname: "",
  },
  isLogin: false,
  isLoading: false,
  error: null,
};

export const __Join = createAsyncThunk("join", async (payload, thunkApi) => {
  try {
    await apis.post("/api/user/signup", payload);
    return thunkApi.fulfillWithValue(payload);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const __login = createAsyncThunk("login", async (payload, thunkApi) => {
  try {
    const response = await apis.post("/api/user/login", payload);
    const token = response.headers.authorization.split(" ")[1];
    setCookie("token", token);

    return thunkApi.fulfillWithValue(response.data);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__Join.pending]: () => {},
    [__Join.fulfilled]: (state, action) => {
      console.log("통신 성공");
    },
    [__Join.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [__login.pending]: () => {},
    [__login.fulfilled]: (state, action) => {
      console.log(action.payload.data);
    },
    [__login.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
  [__Join.rejected]: (state, action) => {
    console.log(action.payload);
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
