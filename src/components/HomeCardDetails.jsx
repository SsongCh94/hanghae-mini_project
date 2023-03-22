import React from 'react'
import styled from 'styled-components';
import { FlexHorizontal, FlexVertical } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';
import HomeCardFactors from './HomeCardFactors';

function HomeCardDetails({item}) {
    const start = item.startDate.replaceAll('-','.');
    const end = item.endDate.replaceAll('-','.');
    const uploadDate = item.createdat.replaceAll('-','.');
    const splitDate = uploadDate.split(' ')[0];
    return (
        <>
            <FlexVertical gap='5px'>
                <HomeCardFactors title='지역:'>{item.region}</HomeCardFactors>
                <HomeCardFactors title='장소:'>{item.location}</HomeCardFactors>
                <FlexHorizontal height='fit-content' justifyContent='space-between'>
                    <Title>기간:</Title>
                    <ContentNormal>{start} - {end}</ContentNormal>
                </FlexHorizontal>
            </FlexVertical>
            <FlexHorizontal height='fit-content' justifyContent='space-between'>
                <div>
                    <Title>작성일:</Title>
                    <ContentNormal>{splitDate}</ContentNormal>
                </div>
                <div>
                    <Title>작성자:</Title>
                    <Content color='true'>{item.nickname}</Content>
                </div>
            </FlexHorizontal>
        </>
    )
}

export default HomeCardDetails;


const Title = styled.span`
    font-size: 20px;
    font-weight: 700;
`
const Content = styled.span`
    font-size: 20px;
    color: ${({color})=> color? COLOR_THEME.COLOR_4 : null};
    font-weight: 700;
    margin-left: 10px;
`

const ContentNormal = styled.span`
    font-size: 20px;
    color: ${({color})=> color? COLOR_THEME.COLOR_4 : null};
    font-weight: 400;
    margin-left: 10px;
`