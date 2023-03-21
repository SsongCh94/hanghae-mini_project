import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis, apis_token } from "../../axios/api";
import { getCookie, removeCookie, setCookie } from "../../axios/cookies";
import jwt_decode from "jwt-decode";

const initialState = {
  user: {
    loginid: "",
    nickname: "",
  },
  myPages: [],
  isLogin: false,
  isLoading: false,
  error: null,
};

export const __Join = createAsyncThunk("join", async (payload, thunkApi) => {
  try {
    const response = await apis.post("/api/user/signup", payload);

    return thunkApi.fulfillWithValue(response);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const __login = createAsyncThunk("login", async (payload, thunkApi) => {
  try {
    const response = await apis.post("/api/user/login", payload);
    const token = response.headers.authorization;
    setCookie("token", token);

    const decodedUserInfo = jwt_decode(token);
    localStorage.setItem('userInfo',JSON.stringify(decodedUserInfo));
    response.data.loginid = payload.loginid;

    return thunkApi.fulfillWithValue(response.data);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const __changePassword = createAsyncThunk(
  "changePassword",
  async (payload, thunkApi) => {
    try {
      const response = await apis_token.patch("/api/user/modify/pw", payload);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __changeNickname = createAsyncThunk(
  "changeNickname",
  async (payload, thunkApi) => {
    try {
      const response = await apis_token.patch("/api/user/modify/nick", payload);
      response.nickname = payload.nickname;
      console.log(getCookie("token"));
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __isUserIdExist = createAsyncThunk(
  "isUserIdExists",
  async (payload, thunkApi) => {
    try {
      const response = await apis.post("/api/user/check", payload);
      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __getMyPost = createAsyncThunk(
  'getMyPost',
  async (payload, thunkApi) => {
    try {
      const { data } = await apis_token.get('/api/board/mylist')
      return thunkApi.fulfillWithValue(data)
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)
export const __deleteMyPost = createAsyncThunk(
  'deleteMyPost',
  async (payload, thunkApi) => {
    try {
      await apis_token.delete(`/api/board/${payload}`)
      return thunkApi.fulfillWithValue(payload)
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user.loginid = "";
      state.user.nickname = "";
      state.isLogin = false;
      removeCookie("token");
      localStorage.removeItem('userInfo');
      alert("로그아웃 되었습니다.");
    },
    toggleIsLogin: (state, action) => {
      state.isLogin = !state.isLogin;
      console.log("state.isLogin : ", state.isLogin);
    },
    initLoginStatus : (state, action) => {
      state.isLogin = true;
      state.user.loginid = action.payload.sub;
      state.user.nickname = action.payload.nickname;
    }
  },
  extraReducers: {
    [__Join.pending]: (state, action) => {
      state.isLoading = true;
      console.log("서버와 연결 시도 중");
    },
    [__Join.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("통신 성공");
    },
    [__Join.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [__login.pending]: (state, action) => {
      state.isLoading = true;
      console.log("서버와 연결 시도 중");
    },
    [__login.fulfilled]: (state, action) => {
      // console.log("fulfilled action : ", action.payload);
      state.isLogin = true;
      state.isLoading = false;
      console.log(action.payload);
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      console.log('nickname: ', userInfo.nickname);

      state.user = {
        loginid: userInfo.sub,
        nickname: userInfo.nickname,
      };
      alert(
        `${state.user.nickname}님, 서울컬쳐포트에 오신 것을 환영합니다! :D`
      );
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      alert(action.payload);
      // console.log(action.payload.message);
    },
    [__isUserIdExist.pending]: (state, action) => { },
    [__isUserIdExist.fulfilled]: (state, action) => {
      alert("중복아이디가 없습니다. 사용하셔도 좋습니다!");
    },
    [__isUserIdExist.rejected]: (state, action) => {
      alert("사용중인 ID입니다.");
    },
    [__changePassword.pending]: () => { },
    [__changePassword.fulfilled]: (state, action) => {
      alert("비밀번호 변경을 성공했습니다.");
    },
    [__changePassword.rejected]: (state, action) => {
      // console.log(action.payload);
      alert(action.payload.response.data.message);
    },
    [__changeNickname.pending]: () => { },
    [__changeNickname.fulfilled]: (state, action) => {
      alert("닉네임 변경을 성공하였습니다.");
      console.log(action.payload);
      state.user.nickname = action.payload.nickname;
    },
    [__changeNickname.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [__getMyPost.pending]: () => { },
    [__getMyPost.fulfilled]: (state, action) => {
      state.myPages = action.payload;
    },
    [__getMyPost.rejected]: (state, action) => { },
    [__deleteMyPost.pending]: () => { },
    [__deleteMyPost.fulfilled]: (state, action) => {
      state.myPages = [...state.myPages.filter((item) => {
        return item.id !== action.payload
      })]
      console.log(state.myPages);
    },
    [__deleteMyPost.rejected]: (state, action) => { },
  },
});

export const { logout, toggleIsLogin, initLoginStatus } = userSlice.actions;
export default userSlice.reducer;
