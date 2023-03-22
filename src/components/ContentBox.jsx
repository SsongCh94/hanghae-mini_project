import React from 'react'
import styled from 'styled-components';
import { FlexHorizontal } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';

function ContentBox({ title, children }) {
    const containerLength = title ==='URL' ? '100%' : '500px';
    const boxLength = title === 'URL' ? '1000px' : '400px';
    return (
        <BoxContainer length={containerLength}>
            <FlexHorizontal alignItems='center' justifyContent='space-between'>
                <LeftBox>{title}</LeftBox>
                <RightBox length={boxLength}>{children}</RightBox>
            </FlexHorizontal>
        </BoxContainer>
    )
}

export default ContentBox;

const BoxContainer = styled.div`
    /* border-radius: 25px; */
    /* border : 2px solid ${COLOR_THEME.COLOR_4}; */
    width: ${({length}) => length};
    height: fit-content;
    overflow: hidden;
`
const LeftBox = styled.div`
    width: 60px;
    text-align: center;
    border-right: 1px solid ${COLOR_THEME.COLOR_1};
    background-color: ${COLOR_THEME.COLOR_1};
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border: 2px solid ${COLOR_THEME.COLOR_1};
    padding: 10px 20px;
    color : white;
    font-weight: 400;
`
const RightBox = styled.div`
    text-align: right;
    width: ${({length})=>length};
    padding: 10px 25px 10px 0px;
    border : 2px solid ${COLOR_THEME.COLOR_1};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    font-weight: 600;
    color : ${COLOR_THEME.COLOR_1};
    overflow: hidden;
`