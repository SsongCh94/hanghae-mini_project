import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis, apis_token } from "../../axios/api";

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
            const response = await apis_token.post(
                `/api/comments/${payload.boardId}`,
                sendData);
            response.data.comment = payload.comment;
            response.data.id = payload.boardId;
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
            const response = await apis_token.put(`/api/comments/${payload.id}`, sendData)
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
            console.log('들어왔음');
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
            state.comments = state.comments.map((element) => {
                if (element.id === action.payload.id) {
                    element.comment = action.payload.comment;
                }
                return element;
            })
            alert(action.payload.message);
        },
        [__registryComment.rejected]: (state, action) => {
            // alert(action.payload)
        },
        [__eraseComment.pending]: (state, action) => {
            console.log('서버에 댓글삭제 요청중입니다.');
        },
        [__eraseComment.fulfilled]: (state, action) => {
            alert(action.payload.message);
        },
        [__eraseComment.rejected]: (state, action) => {
        },
        [__modifyComment.pending]: (state, action) => {
            console.log('서버에 댓글수정 요청중입니다.');
        },
        [__modifyComment.fulfilled]: (state, action) => {
            alert(action.payload.message);

        },
        [__modifyComment.rejected]: () => {
        },
    },
});


export const { setCommentState } = commentSlice.actions;
export default commentSlice.reducer;