import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apis from "../../axios/api";

const initialState = {
  posts: {
    title: "",
    image: "",
    classify: "",
    region: "",
    location: "",
    startDate: "",
    endDate: "",
    contents: "",
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const __postPosts = createAsyncThunk(
  "postposts",
  async (payload, thunkAPI) => {
    try {
      console.log("payload =====>>>>>", payload);
      const { data } = await axios.post(
        "http://localhost:3001/todos1",
        payload
      );
      console.log("data-->", data);
      // return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error-->", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postslice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__postPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload.data;
      console.log("action.payload", action.payload.data);
    },
    [__postPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__postPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});
export const {} = postslice.actions;
export default postslice.reducer;
