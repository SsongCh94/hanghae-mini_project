import React from 'react'
import styled from 'styled-components';

function TextBox({children}) {
    return (
        <TextContainer>{children}</TextContainer>
    )
}

export default TextBox;

const TextContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
    text-align: left;
    font-size : 16px;
    font-weight : 400;
`