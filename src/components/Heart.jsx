import React from 'react'
import { FcLike } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __thumbsUp } from '../redux/modules/postsSlice';

function Heart({ children }) {
    const {id,thumbsUpCount,boardThumbsupStatus} = useSelector((state) => state.posts.postDetail);
    const isLogin = localStorage.getItem('userInfo') ? true : false;
    const dispatch = useDispatch();

    const changeThumbsUpHandler = () => {
        const payload = {
            id,
            boardThumbsupStatus,
        }
        console.log('들어옴');
        dispatch(__thumbsUp(payload));
    }
    return (
        <div style={{ margin: '80px' }}>
            <ButtonHeart 
            isClicked={boardThumbsupStatus} 
            disabled={!isLogin} 
            onClick={changeThumbsUpHandler}
            >
                <TextContainer>
                    <CountText>{children}</CountText>
                </TextContainer>
                <FcLike style={{ fontSize: '100px' }} />
            </ButtonHeart>
        </div>
    );
}

export default Heart;

const ButtonHeart = styled.button`
    cursor : pointer;
    position: relative;
    border: none;
    background-color: transparent;
    width : fit-content;
    height : fit-content;
    padding : 0px;
    filter : ${({isClicked}) => isClicked? 'grayscale(0%)' : 'grayscale(100%)'};
    &:hover{
        filter : ${({isClicked}) => isClicked? 'grayscale(100%)' : 'grayscale(0%)'};
    }
`;

const TextContainer = styled.div`
    position: absolute;
    z-index: 5;
    left: 0%;
    top: 35%;
    width: 100%;
    height: 100%;
`
const CountText = styled.span`
    color:white;
    font-size: 24px;
    font-weight: 700;
`