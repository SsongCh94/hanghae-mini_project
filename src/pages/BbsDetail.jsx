import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../components/Comments";
import ContentBox from "../components/ContentBox";
import { __getPostDetail } from "../redux/modules/postsSlice";
import { BasicDiv, FlexHorizontal, FlexVertical, PageContainer } from "../variables/styleStore";
import { ButtonSmall } from "../variables/styleStore";
import { useBbsInput } from "../variables/useBbsInput";

function BbsDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [comment, commentHandler] = useBbsInput("");
  const { postDetail } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(__getPostDetail(params.id));
  }, []);

  return (
    <PageContainer others='padding: 100px 0px'>
      <FlexVertical alignItems='center' justifyContent='center'>
        <BoxWrapper>
          <FlexVertical alignItems='center' justifyContent='center' gap='20px'>
            <PhotoArea>
              <img src={postDetail.image} alt="" />
            </PhotoArea>
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
          </FlexVertical>
        </BoxWrapper>
      </FlexVertical>
      <DetailArea>
        <CommentsArea>
          <p>{postDetail.contents}</p>
        </CommentsArea>
        <BasicDiv>
          <Comments boardId={params.id}>{postDetail.commentList}</Comments>
        </BasicDiv>
        <Test>
          {" "}
          {user.loginid === postDetail.username ? <ButtonMiddle onClick={() => navigate(`/bbs/modify/${params.id}`)}>
            수정하기
          </ButtonMiddle> : null}
          <ButtonMiddle onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
        </Test>
      </DetailArea>
    </PageContainer>
  );
}

export default BbsDetail;



const BoxWrapper = styled.div`
  width:1100px;
  height: fit-content;
`

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
  width: 100%;
  height: 600px;
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
