import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis, apis_token } from "../../axios/api";

const initialState = {
  posts: [],
  postDetail: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.get("/api/board/list");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("error-->", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostDetail = createAsyncThunk(
  "getPostDetail",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.get(`/api/board/detail/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("error-->", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    try {
      await apis_token.post("/api/board/", payload);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __revisePost = createAsyncThunk(
  "revisePost",
  async (payload, thunkAPI) => {
    try {
      await apis_token.put(`/api/board/${payload.id}`, payload.revisedPost);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      alert(error.response.data.message)
      console.log('error======', error.response.data.message);
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
      alert('글 작성이 완료되었습니다.')
    },
    [__postPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__postPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload
    },
    [__revisePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      alert('글 수정이 완료되었습니다.')
    },
    [__revisePost.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__revisePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload;
    },
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.postDetail = action.payload;
    },
    [__getPostDetail.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export default postslice.reducer;
