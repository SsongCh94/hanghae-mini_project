import React from "react";
import styled from "styled-components";
import { PageContainer } from "../variables/styleStore";
import { ButtonSmall } from "../variables/styleStore";

function BbsDetail() {
  return (
    <PageContainer>
      <DetailArea>
        <PhotoArea />
        <InfoArea>
          <span>분류</span>
          <span>공연, 행사명</span>
        </InfoArea>
        <InfoArea>
          <span>자치구</span>
          <span>장소</span>
        </InfoArea>
        <div>
          <span>기간</span>
        </div>
        <div>행사 홈페이지 url</div>
        <Contents>글 내용</Contents>
        <CommentsArea>
          <CommentsInput type="text" placeholder="댓글을 입력하세요" />
          <ButtonSmall>댓글 달기</ButtonSmall>
        </CommentsArea>
      </DetailArea>
    </PageContainer>
  );
}

const DetailArea = styled.div`
  background-color: aqua;
  width: 100%;
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PhotoArea = styled.div`
  background-color: beige;
  width: 70%;
  height: 30%;
`;

const InfoArea = styled.div`
  background-color: azure;
  width: 70%;
  height: 5%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-sizing: border-box;
`;

const Contents = styled.div`
  background-color: beige;
  width: 70%;
  height: 20%;
`;

const CommentsArea = styled.div`
  background-color: beige;
  width: 70%;
  height: 5%;

  display: flex;
  justify-content: space-evenly;
`;

const CommentsInput = styled.input`
  width: 70%;
`;

export default BbsDetail;
