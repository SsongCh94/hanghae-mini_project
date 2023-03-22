import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { setCommentState, __eraseComment, __modifyComment, __registryComment } from '../redux/modules/commentSlice';
import { cmtCountUp } from '../redux/modules/postsSlice';
import { ButtonSmall, FlexHorizontal, FlexVertical, StInput } from '../variables/styleStore';
import useLoginInput from '../variables/useLoginInput';
import EachComment from './EachComment';

function Comments({ boardId, children }) {

    /* 
        response body : 
        {
            id : string
            nickname : string
            comment : string
        }    
    */

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments);
    const nickname = useSelector((state) => state.user.user.nickname);
    
    
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        dispatch(setCommentState(children));
    }, [children]);

    const registryCommentHandler = (e) => {
        e.preventDefault();
        const payload = {
            boardId,
            comment: newComment,
            nickname,
        }
        dispatch(__registryComment(payload));
        dispatch(cmtCountUp());
        setNewComment('');
    }

    return (
        <FlexVertical alignItems='center' justifyContent='center'>
            <CommentContainer>
                <FlexVertical alignItems='center' justifyContent='center' gap='20px'>
                    <StForm onSubmit={registryCommentHandler}>
                        <FlexHorizontal
                            alignItems='center'
                            justifyContent='space-between'
                            gap='20px'
                            others='max-width:1100px;'
                        >
                            <StInput
                                value={newComment}
                                onChange={(e)=>setNewComment((e.target.value))}
                                placeholder='댓글을 적어주세요.'
                                others='width:100%'
                            />
                            <ButtonBox>
                                <ButtonSmall>작성</ButtonSmall>
                            </ButtonBox>
                        </FlexHorizontal>
                    </StForm>
                    <FlexVertical alignItems='center' gap='15px'>
                        {comments?.map((element) => <EachComment key={uuid()} boardId={boardId} dataObj={element} />)}
                    </FlexVertical>
                </FlexVertical>
            </CommentContainer>
        </FlexVertical>
    )
}

export default Comments;

const CommentContainer = styled.div`
    width: 1100px;
    height: 'fit-content';
    padding : 20px;
    border-radius: 25px;
    background-color: white;
`

const ButtonBox = styled.div`
    text-align: right;
    width: 60px;
`
const StForm = styled.form`
    width: 100%;
    max-width: 1100px;
`