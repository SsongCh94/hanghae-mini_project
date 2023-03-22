import React from 'react'
import styled from 'styled-components';
import { FlexHorizontal } from '../variables/styleStore';

function HomeCardFactors({ title, children }) {
    return (
        <FlexHorizontal height='fit-content' alignItems='center' justifyContent='space-between'>
            <div>
                <Title>{title}</Title>
            </div>
            <div>
                <Content>{children}</Content>
            </div>
        </FlexHorizontal>
    )
}

export default HomeCardFactors;

const Title = styled.span`
    font-size: 20px;
    font-weight: 700;
`
const Content = styled.span`
    font-size: 20px;
    font-weight: 400;
`