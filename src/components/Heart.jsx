import React from 'react'
import { FcLike } from 'react-icons/fc'
import styled from 'styled-components';

function Heart({children}) {
    return (
        <div>
            <ButtonHeart>
                <TextContainer>
                    <CountText>{children}</CountText>
                </TextContainer>
                <FcLike style={{ fontSize: '100px' }} />
            </ButtonHeart>
        </div>
    )
}

export default Heart;

const ButtonHeart = styled.button`
    position: relative;
    border: none;
    background-color: transparent;
    width : fit-content;
    height : fit-content;
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