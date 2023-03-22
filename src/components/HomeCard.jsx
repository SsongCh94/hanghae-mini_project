import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FlexHorizontal, FlexVertical } from '../variables/styleStore';
import { BiCommentDots } from "react-icons/bi"
import { FcLike } from "react-icons/fc"
import { COLOR_THEME } from '../variables/uiVariables';
import HomeCardDetails from './HomeCardDetails';

function HomeCard({ eachCard }) {
  const navigate = useNavigate();

  const pictureFrame = `
    width: 500px;
    height: 250px;
    align-items: center;
    justify-content : center;
  `
  // <h2>{item.region}</h2>
  // <h3>{item.location}</h3>
  // <h3>
  //   {item.startDate} ~ {item.endDate}
  // </h3>
  // <h3>작성일 : {item.createdat}</h3>
  // <span>작성자 : {item.nickname}</span>
  return (
    eachCard.map((item) => {
      return (
        <Card
          key={item.id}
          onClick={() => navigate(`/bbs/detail/${item.id}`)}
        >
          <FlexHorizontal
            alignItems='center'
            justifyContent='space-between'
            gap='50px'
          >
            <PictureFrame>
              <FlexVertical others={pictureFrame}>
                <CardImg src={item.image} art="" />
              </FlexVertical>
            </PictureFrame>
            <FlexVertical height='250px'>
              <FlexHorizontal alignItems='top' justifyContent='space-between'>
                <CardTitle>{item.title}</CardTitle>
                <FlexHorizontal
                  justifyContent='right'
                  width='fit-content'
                  height='fit-content'
                  gap='20px'
                >
                  <FlexHorizontal alignItems='center' width='fit-content'>
                    <FcLike style={{ marginRight: '5px', fontSize: '24px' }} />
                    <span style={{
                      fontSize: '20px',
                      color: `1px solid ${COLOR_THEME.COLOR_1}`,
                      fontWeight: '700'
                    }}>{item.thumbsUpCount}</span>
                  </FlexHorizontal>
                  <FlexHorizontal alignItems='center' width='fit-content'>
                    <BiCommentDots style={{ marginRight: '5px', fontSize: '24px' }} />
                    <span style={{
                      fontSize: '20px',
                      color: `1px solid ${COLOR_THEME.COLOR_1}`,
                      fontWeight: '700'
                    }}>{item.cmtCount}</span>
                  </FlexHorizontal>
                </FlexHorizontal>
              </FlexHorizontal>
              <HomeCardDetails item={item} />
            </FlexVertical>

          </FlexHorizontal>
        </Card >
      );
    })
  )
}

const PictureFrame = styled.div`
border : none;
border-radius : 25px;
overflow: hidden;
`

const CardTitle = styled.span`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
`
const Card = styled.div`
  width: 1000px;
  height: 300px;
  padding : 20px 50px;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px black;
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export default memo(HomeCard)