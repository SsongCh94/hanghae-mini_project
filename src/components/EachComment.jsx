import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { __eraseComment, __modifyComment } from '../redux/modules/commentSlice';
import { ButtonSmall, FlexHorizontal } from '../variables/styleStore'
import useLoginInput from '../variables/useLoginInput';
import styled from 'styled-components';

function EachComment({ dataObj }) {
    const [mode, setMode] = useState(true);

    const dispatch = useDispatch();
    const { id, comment, nickname } = { ...dataObj };
    const [commentState, commentChangeHandler] = useLoginInput(comment);
    const myNickname = useSelector((state) => state.user.user.nickname);

    const eraseCommentHandler = (id) => {
        console.log("이레이즈 id : ", id);
        const payload = {
            id,
        }
        dispatch(__eraseComment(payload));
    }

    const modifyCommentHandler = (e) => {
        e.preventDefault();
        const payload = {
            id: id,
            comment: commentState,
        }
        dispatch(__modifyComment(payload));
        setMode((prev) => !prev);
    }

    return (
        <StForm onSubmit={modifyCommentHandler}>
            <FlexHorizontal justifyContent='space-between'>
                <NicknameBox>
                    {dataObj.nickname}
                </NicknameBox>
                <CommentBox>
                    {mode
                        ? commentState
                        : <input
                            value={commentState}
                            onChange={commentChangeHandler}
                            required
                        />}
                </CommentBox>
                <ButtonBox>
                    {myNickname === dataObj.nickname
                        ? (mode
                            ? (
                                <>
                                    <ButtonSmall
                                        type='button'
                                        onClick={() => eraseCommentHandler(id)}
                                    >삭제</ButtonSmall>
                                    <ButtonSmall
                                        type='button'
                                        onClick={() => setMode(prev => !prev)}
                                        others='margin-left:10px;'
                                    >수정</ButtonSmall>
                                </>
                            )
                            : (
                                <>
                                    <ButtonSmall
                                        type='submit'
                                        onCheck={() => modifyCommentHandler(id, commentState)}
                                    >수정완료</ButtonSmall>
                                </>
                            )
                        )
                        : null
                    }
                </ButtonBox>
            </FlexHorizontal>
        </StForm>
    )
}

export default EachComment;


const NicknameBox = styled.div`
    width: 10%;
`
const CommentBox = styled.div`
    width: auto;
    min-width: 70%;
`
const ButtonBox = styled.div`
    text-align: right;
    width: fit-content;
`
const StForm = styled.form`
    width: 100%;
`