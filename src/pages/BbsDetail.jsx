import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../variables/styleStore";
import { ButtonSmall } from "../variables/styleStore";

function BbsDetail() {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const params = useParams();
  console.log("posts========", posts);

  const foundPost = posts.find((item) => {
    return item.id === parseInt(params.id);
  });

  console.log("foundPost============", foundPost);

  return (
    <PageContainer>
      <DetailArea>
        <PhotoArea />
        <InfoArea>
          <span>{foundPost.category}</span>
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
        <CommentsList>
          <CommentBox>
            <Comment>댓글</Comment>
            <CommentNickname>댓글 작성자 닉네임</CommentNickname>
          </CommentBox>
          <CommentBox>
            <Comment>댓글</Comment>
            <CommentNickname>댓글 작성자 닉네임</CommentNickname>
          </CommentBox>
          <CommentBox>
            <Comment>댓글</Comment>
            <CommentNickname>댓글 작성자 닉네임</CommentNickname>
          </CommentBox>
        </CommentsList>
        <Test>
          {" "}
          <ButtonMiddle>수정하기</ButtonMiddle>
          <ButtonMiddle onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
        </Test>
      </DetailArea>
    </PageContainer>
  );
}

const DetailArea = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  overflow-y: scroll;
`;

const PhotoArea = styled.div`
  background-color: beige;
  width: 70%;
  height: 400px;
`;

const InfoArea = styled.div`
  background-color: azure;
  width: 70%;
  height: 40px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-sizing: border-box;
`;

const Contents = styled.div`
  background-color: beige;
  width: 70%;
  height: 200px;
`;

const CommentsArea = styled.div`
  background-color: beige;
  width: 60%;
  height: 5%;

  display: flex;
  justify-content: space-between;
`;

const CommentsInput = styled.input`
  width: 70%;
`;

const CommentsList = styled.div`
  background-color: beige;
  width: 60%;
  height: 20000px;
  display: flex;
  flex-direction: column;
`;

const CommentBox = styled.div`
  width: 100%;
  height: 20px;

  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Comment = styled.div`
  background-color: #76ff8b;
  width: 75%;
  height: 20px;
`;

const CommentNickname = styled.div`
  background-color: #76ff8b;
  width: 20%;
  height: 20px;
`;

const Test = styled.div`
  gap: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  right: 50px;
  bottom: 100px;
`;

// TODO: 버튼 가져왔음!

const COLOR_1 = "37306B";
const COLOR_2 = "66347F";
const COLOR_3 = "9E4784";
const COLOR_4 = "D27685";

const ButtonMiddle = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  width: auto;
  height: auto;
  color: #${COLOR_4};
  border: 1px solid #${COLOR_4};
  background-color: #${COLOR_1};
  &:hover {
    color: #${COLOR_3};
    border: 1px solid #${COLOR_3};
    background-color: #${COLOR_2};
  }
  ${({ others }) => others};
`;

export default BbsDetail;
