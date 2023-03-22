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
      const { data } = await apis_token.get(`/api/board/detail/${payload}`);
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
      const data = await apis_token.post("/api/board/", payload);
      return thunkAPI.fulfillWithValue(data);
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
      const data = await apis_token.put(`/api/board/${payload.id}`, payload.revisedPost);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __thumbsUp = createAsyncThunk(
  "thumbsUp",
  async (payload, thunkApi) => {
    try {
      const response = await apis_token.post(`/api/board/${payload.id}/thumbsup`, null);

      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __commentThumbsUp = createAsyncThunk(
  "commentThumbsUp",
  async (payload, thunkApi) => {
    try {
      const response = await apis_token.post(
        `/api/boards/${payload.boardId}/comments/${payload.commentId}`, null);
      response.data.payload = payload;
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postslice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    cmtCountUp: (state, action) => {
      state.postDetail.cmtCount++;
    },
    cmtRefresh : (state, action) => {
      state.postDetail.commentList.push(action.payload)
    }
  },
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
    [__thumbsUp.pending]: (state, action) => {

    },
    [__thumbsUp.fulfilled]: (state, action) => {
      state.postDetail.boardThumbsupStatus = !state.postDetail.boardThumbsupStatus;
      state.postDetail.thumbsUpCount = state.postDetail.boardThumbsupStatus
        ? state.postDetail.thumbsUpCount + 1
        : state.postDetail.thumbsUpCount - 1;
      // console.log('따봉 수:', state.postDetail.thumbsUpCount);
    },
    [__thumbsUp.rejected]: (state, action) => {

    },
    [__commentThumbsUp.pending]: (state, action) => {

    },
    [__commentThumbsUp.fulfilled]: (state, action) => {
      console.log(action.payload.payload);
      console.log('state: ', state.postDetail);
      const target = action.payload.payload;
      state.postDetail.commentList = state.postDetail.commentList
        .map((element) => {
          if(element.id === target.commentId){
            if(element.commentThumbsupStatus){
              --element.thumbsUpCount;
            } else {
              ++element.thumbsUpCount;
            }
            element.commentThumbsupStatus = !element.commentThumbsupStatus;
          }
          return element;
        })
    },
    [__commentThumbsUp.rejected]: (state, action) => {

    },
  },
});

export const { cmtCountUp,cmtRefresh } = postslice.actions;
export default postslice.reducer;
