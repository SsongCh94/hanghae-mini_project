/* 
    공통적으로 사용되는 Styled-Components 모음 
*/
import styled from "styled-components";
import { MIN_PAGE_HEIGHT, HEADER_HEIGHT, FOOTER_HEIGHT } from "./uiVariables";

/*
    각 동적 페이지의 최상위요소는 PageContainer로 한다.
    페이지 크기 통일화 하기 위한 목적
*/

export const PageContainer = styled.div`
    min-height: ${MIN_PAGE_HEIGHT};

    // 배경색을 특정해야할 경우, backgroundColor라는 이름의 prop을 넘겨준다.
    // 사용예시 : <PageContainer backgroundColor='black' />
    background-color: ${({backgroundColor})=>backgroundColor};
`
export const HeaderContainer = styled.div`
    height : ${HEADER_HEIGHT};
    background-color: gray;
`
export const FooterContainer = styled.div`
    height : ${FOOTER_HEIGHT};
    background-color: gray;
`