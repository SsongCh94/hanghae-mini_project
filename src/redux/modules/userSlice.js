import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apis from "../../axios/api";

const initialState = {
  user: {
    nickname: "",
  },
  isLoading: false,
  error: null,
};

export const __Join = createAsyncThunk("join", async (payload, thunkApi) => {
  try {
    console.log(payload);
    const header = {
      Authorization: null,
    };
    await apis.post("/api/user/signup", payload, header);
    return thunkApi.fulfillWithValue(payload);
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
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
