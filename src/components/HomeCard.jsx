import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function HomeCard({children}) {
  const navigate = useNavigate()
  
  return (
    children.map((item) => {
      return (
        <Card
          key={item.id}
          onClick={() => navigate(`/bbs/detail/${item.id}`)}
        >
          <CardImg src={item.image} art={"왜안되는거람"} />
          <CardInfo>
            <h1>{item.title}</h1>
            <h2>{item.region}</h2>
            <h3>{item.location}</h3>
            <h3>
              {item.startDate} ~ {item.endDate}
            </h3>
            <h3>작성일 : {item.createdat}</h3>
            <span>작성자 : {item.nickname}</span>
          </CardInfo>
            <CommentCnt>{item.cmtCount}</CommentCnt>
        </Card>
      );
    })
  )
}

const Card = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  display: flex;

  border: 2px solid black;
`;

const CardImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 25px;
`;

const CardInfo = styled.div`
  background-color: aqua;

  width: 1000px;
  height: 250px;

  margin: 25px 25px 25px 0;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CommentCnt = styled.div`
background-color: beige;
width: 100px;
height: 150px;
`

export default HomeCard