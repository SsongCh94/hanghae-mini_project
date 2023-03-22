import React from 'react'
import { useSelector } from 'react-redux';
import { FlexHorizontal } from '../variables/styleStore';
import ContentBox from './ContentBox';

function EventDetails() {

    const { postDetail } = useSelector((state) => state.posts);

    return (
        <>
            <FlexHorizontal alignItems='center' justifyContent='space-between'>
                <ContentBox title='행사명'>{postDetail.title}</ContentBox>
                <ContentBox title='분류'>{postDetail.classify}</ContentBox>
            </FlexHorizontal>
            <FlexHorizontal alignItems='center' justifyContent='space-between'>
                <ContentBox title='자치구'>{postDetail.region}</ContentBox>
                <ContentBox title='장소'>{postDetail.location}</ContentBox>
            </FlexHorizontal>
            <FlexHorizontal alignItems='center' justifyContent='space-between'>
                <ContentBox title='시작일'>{postDetail.startDate}</ContentBox>
                <ContentBox title='종료일'>{postDetail.endDate}</ContentBox>
            </FlexHorizontal>
            <FlexHorizontal alignItems='center' justifyContent='left'>
                <ContentBox title='URL'>{postDetail.pageUrl}</ContentBox>
            </FlexHorizontal>
        </>
    )
}

export default EventDetails