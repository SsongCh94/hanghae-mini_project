import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis, apis_token } from "../../axios/api";
import { removeCookie, setCookie } from "../../axios/cookies";

const initialState = {
    user: {
        loginid: '',
        nickname: '',
    },
    isLogin : false,
    isLoading: false,
    error: null,
}

export const __Join = createAsyncThunk(
    "join",
    async (payload, thunkApi) => {
        try {
            const response = await apis.post('/api/user/signup', payload);
            
            return thunkApi.fulfillWithValue(response);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const __login = createAsyncThunk(
    "login",
    async (payload, thunkApi) => {
        try {
            const response = await apis.post('/api/user/login', payload);
            const token = response.headers.authorization.split(' ')[1];
            setCookie('token',token);

            response.data.loginid = payload.loginid;

            return thunkApi.fulfillWithValue(response.data);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout : (state,action) => {
            state.user.loginid = '';
            state.user.nickname = '';
            state.isLogin = false;
            removeCookie('token');
            alert("로그아웃 되었습니다.");
        },
        toggleIsLogin : (state,action) => {
            state.isLogin = !state.isLogin;
            console.log('state.isLogin : ',state.isLogin);
        }
    },
    extraReducers: {
        [__Join.pending]: () => { },
        [__Join.fulfilled]: (state, action) => {
            console.log("통신 성공");
        },
        [__Join.rejected]: (state, action) => {
            state.isLoading = true;
            console.log(action.payload);
        },
        [__login.pending]: () => {},
        [__login.fulfilled]: (state, action) => {
            console.log('fulfilled action : ',action.payload);
            state.isLogin = true;
            state.isLoading = false;
            state.user = {
                loginid: action.payload.loginid,
                nickname: action.payload.loginid,
                // nickname: action.payload.nickname,
            }
        },
        [__login.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        },
    },

})


export const { logout, toggleIsLogin } = userSlice.actions;
export default userSlice.reducer;