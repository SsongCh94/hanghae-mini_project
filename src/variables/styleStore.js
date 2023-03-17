/* 
    공통적으로 사용되는 Styled-Components 모음 
*/
import styled from "styled-components";
import { MIN_PAGE_HEIGHT, HEADER_HEIGHT, FOOTER_HEIGHT, COLOR_THEME } from "./uiVariables";

/*
    공용 스타일
    각 동적 페이지의 최상위요소는 PageContainer로 한다.
    동적페이지 최소크기를 화면 꽉차게 통일화시키는 목적
*/

export const PageContainer = styled.div`
    min-height: ${MIN_PAGE_HEIGHT};

    /*  배경색을 특정해야할 경우, backgroundColor라는 이름의 prop을 넘겨준다.
        사용예시 : <PageContainer backgroundColor='black' />                */
    background-color: ${({ backgroundColor }) => backgroundColor};
`
export const HeaderContainer = styled.div`
    height : ${HEADER_HEIGHT};
    background-color: gray;
`
export const FooterContainer = styled.div`
    height : ${FOOTER_HEIGHT};
    background-color: gray;
`


export const Button = styled.button`
    background-color: ${({ backgroundColor }) => backgroundColor
        ? backgroundColor
        : 'gray'};
    color : ${({ color }) => color ? color : 'black'};
    
    ${({ others }) => others};
`


export const ButtonSmall = styled.button`
    padding : 5px 10px;
    width: 40px;
    height: 15px;
    color : #${COLOR_THEME.COLOR_4};
    border : 1px solid #${COLOR_THEME.COLOR_4};
    background-color : #${COLOR_THEME.COLOR_1};
    &:hover{
        color : #${COLOR_THEME.COLOR_3};
        border : 1px solid #${COLOR_THEME.COLOR_3};
        background-color : #${COLOR_THEME.COLOR_2};
    }
`;
export const ButtonMiddle = styled.button`
    padding : 5px 10px;
    width: 40px;
    height: 15px;
    color : #${COLOR_THEME.COLOR_4};
    border : 1px solid #${COLOR_THEME.COLOR_4};
    background-color : #${COLOR_THEME.COLOR_1};
    &:hover{
        color : #${COLOR_THEME.COLOR_3};
        border : 1px solid #${COLOR_THEME.COLOR_3};
        background-color : #${COLOR_THEME.COLOR_2};
    }
`;
export const ButtonLarge = styled.button`
    padding : 5px 10px;
    width: 40px;
    height: 15px;
    color : #${COLOR_THEME.COLOR_4};
    border : 1px solid #${COLOR_THEME.COLOR_4};
    background-color : #${COLOR_THEME.COLOR_1};
    &:hover{
        color : #${COLOR_THEME.COLOR_3};
        border : 1px solid #${COLOR_THEME.COLOR_3};
        background-color : #${COLOR_THEME.COLOR_2};
    }
`;


/*  김용민 스타일 컴포넌트  */

export const FlexHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${({alignItems})=>alignItems? alignItems : null};
    justify-content: ${({justifyContent})=>justifyContent? justifyContent : null};
    ${({others}) => others}
`

export const FlexVertical = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({alignItems})=>alignItems? alignItems : null};
    justify-content: ${({justifyContent})=>justifyContent? justifyContent : null};
    ${({others}) => others}
`



/*  송철환 스타일 컴포넌트  */