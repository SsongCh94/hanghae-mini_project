import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { __eraseComment, __modifyComment } from '../redux/modules/commentSlice';
import { FlexHorizontal, FlexVertical } from '../variables/styleStore'
import useLoginInput from '../variables/useLoginInput';
import styled from 'styled-components';
import { BiLike } from "react-icons/bi"
import { COLOR_THEME } from '../variables/uiVariables';
import { __commentThumbsUp } from '../redux/modules/postsSlice';
import { timeCalc } from '../variables/timeCalc';

function EachComment({ boardId, dataObj }) {
    const [mode, setMode] = useState(true);

    const dispatch = useDispatch();
    const {
        id,
        comment,
        nickname,
        thumbsUpCount,
        commentThumbsupStatus,
        createdat,
    } = { ...dataObj };
    const [commentState, commentChangeHandler] = useLoginInput(comment);
    const myNickname = useSelector((state) => state.user.user.nickname);


    const eraseCommentHandler = (id) => {
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
            commentThumbsupStatus,
        }
        dispatch(__modifyComment(payload));
        setMode((prev) => !prev);
    }

    const thumbsUpHandler = () => {
        const payload = {
            boardId,
            commentId: id,
        }
        dispatch(__commentThumbsUp(payload));
    }


    return (
        <StForm onSubmit={modifyCommentHandler}>
            <Wrap>
                <FlexVertical gap='15px'>
                    <FlexHorizontal alignItems='center' justifyContent='space-between'>
                        <NicknameBox>
                            {nickname}
                        </NicknameBox>
                        <FlexHorizontal alignItems='center' justifyContent='right' width='500px'>
                            {myNickname === nickname
                                ? (mode
                                    ? (
                                        <>
                                            <ButtonNoBorder
                                                type='button'
                                                onClick={() => eraseCommentHandler(id)}
                                            >삭제</ButtonNoBorder>
                                            <ButtonNoBorder
                                                type='button'
                                                onClick={() => setMode(prev => !prev)}
                                                others='margin-left:10px;'
                                            >수정</ButtonNoBorder>
                                        </>
                                    )
                                    : (
                                        <>
                                            <ButtonNoBorder
                                                type='submit'
                                                onCheck={() => modifyCommentHandler(id, commentState)}
                                            >수정완료</ButtonNoBorder>
                                        </>
                                    )
                                )
                                : null
                            }
                            <ButtonNoBorder type='button' onClick={thumbsUpHandler}>
                                <BiLike style={{ margin: '0px 5px' }} />
                                <span>{thumbsUpCount}</span>
                            </ButtonNoBorder>
                        </FlexHorizontal>
                    </FlexHorizontal>
                    <FlexHorizontal alignItems='center' justifyContent='space-between'>
                        <CommentBox>
                            {mode
                                ? commentState
                                : <input
                                    value={commentState}
                                    onChange={commentChangeHandler}
                                    style={{ width: '100%' }}
                                    required
                                />}
                        </CommentBox>
                        <div style={{width:'70px',textAlign:'right'}}><span>{timeCalc(createdat)}</span></div>
                    </FlexHorizontal>
                </FlexVertical>
            </Wrap>
        </StForm>
    )
}

export default EachComment;


const NicknameBox = styled.div`
    width: 200px;
    font-weight: 700;
`
const CommentBox = styled.div`
    width: 100%;
`

const StForm = styled.form`
    width: 100%;
`

const Wrap = styled.div`
    width: 1100;
    padding:25px;
    border : none;
    border-radius: 25px;
    height : fit-content;
    box-shadow: 0px 0px 5px ${COLOR_THEME.COLOR_2};
`
const ButtonNoBorder = styled.button`
    cursor : pointer;
    width : fit-content;
    height: fit-content;
    border : none;
    padding : 0px;
    margin : 0px 5px;
    background-color: transparent;
`