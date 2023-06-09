import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis_token } from "../../axios/api";
import { getCookie } from "../../axios/cookies";

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};


export const __registryComment = createAsyncThunk(
    "registryComment",
    async (payload, thunkApi) => {
        try {
            console.log(payload);
            const sendData = {
                comment: payload.comment,
            }

            console.log('쿠키:', getCookie('token'));
            const response = await apis_token.post(
                `/api/comments/${payload.boardId}`,
                sendData);
            response.data.comment = payload.comment;
            response.data.id = payload.boardId;
            response.data.nickname = payload.nickname;
            return thunkApi.fulfillWithValue(response.data);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const __eraseComment = createAsyncThunk(
    "eraseComment",
    async (payload, thunkApi) => {
        try {
            const response = await apis_token.delete(`/api/comments/${payload.id}`);
            response.data.id = payload.id;
            return thunkApi.fulfillWithValue(response.data);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const __modifyComment = createAsyncThunk(
    "modifyComment",
    async (payload, thunkApi) => {
        try {
            const sendData = {
                comment: payload.comment,
            };
            const response = await apis_token.put(`/api/comments/${payload.id}`, sendData);

            return thunkApi.fulfillWithValue(response.data);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setCommentState: (state, action) => {
            state.comments = [];
            state.comments = action.payload;
        },
    },
    extraReducers: {
        [__registryComment.pending]: (state, action) => {
            console.log('서버에 댓글을 업로드 중입니다.');
        },
        [__registryComment.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.comments.unshift({
                id: action.payload.id,
                comment: action.payload.comment,
                nickname: action.payload.nickname,
            })
        },
        [__registryComment.rejected]: (state, action) => {
            alert(action.payload)
        },
        [__eraseComment.pending]: (state, action) => {
            console.log('서버에 댓글삭제 요청중입니다.');
        },
        [__eraseComment.fulfilled]: (state, action) => {
            state.comments = state.comments.filter((element) => element.id !== action.payload.id);
        },
        [__eraseComment.rejected]: (state, action) => {
        },
        [__modifyComment.pending]: (state, action) => {
            console.log('서버에 댓글수정 요청중입니다.');
        },
        [__modifyComment.fulfilled]: (state, action) => {
        },
        [__modifyComment.rejected]: () => {
        },
    },
});


export const { setCommentState } = commentSlice.actions;
export default commentSlice.reducer;