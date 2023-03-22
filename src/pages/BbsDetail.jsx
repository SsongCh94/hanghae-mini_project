import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../components/Comments";
import TextBox from "../components/TextBox";
import { __getPostDetail } from "../redux/modules/postsSlice";
import { BasicDiv, FlexHorizontal, FlexVertical, PageContainer } from "../variables/styleStore";
import { COLOR_THEME } from "../variables/uiVariables";
import { useBbsInput } from "../variables/useBbsInput";
import Heart from "../components/Heart";
import EventDetails from "../components/EventDetails";
import { ButtonMiddle } from "../variables/styleStore";


function BbsDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [comment, commentHandler] = useBbsInput("");
  const { postDetail } = useSelector((state) => state.posts);


  useEffect(() => {
    dispatch(__getPostDetail(params.id));
  }, []);

  return (
    <PageContainer backgroundColor={`${COLOR_THEME.COLOR_4}`} others='padding: 100px 0px'>
      <FlexVertical alignItems='center' justifyContent='center'>
        <Wrap>
          <FlexVertical alignItems='center' justifyContent='center'>
            <BoxWrapper>
              <FlexVertical alignItems='center' justifyContent='center' gap='20px'>

                <LineBold />
                <div style={{ fontWeight: '700', fontSize: '24px' }}>
                  <span>{postDetail.title}</span>
                </div>
                <LineBold />

                <PhotoArea>
                  <Image src={postDetail.image} alt="" />
                </PhotoArea>

                <Line />
                <EventDetails />

                <Line />
                <BoxTitleContainer>
                  <FlexHorizontal alignItems='center' justifyContent='space-between'>
                    <BoxTitle>소개글</BoxTitle>
                    <BoxTitle><span style={{ color: COLOR_THEME.COLOR_4 }}>{postDetail.nickname}</span> 님</BoxTitle>
                  </FlexHorizontal>
                </BoxTitleContainer>
                <TextBox>
                  {postDetail.contents}
                </TextBox>
                <Heart>{postDetail.thumbsUpCount}</Heart>
                <Line />
                <BoxTitleContainer>
                  <FlexHorizontal alignItems='center' justifyContent='space-between'>
                    <BoxTitle>코멘트</BoxTitle>
                    <BoxTitle>
                      <span style={{ color: COLOR_THEME.COLOR_4 }}>{postDetail.cmtCount}</span> 개
                    </BoxTitle>
                  </FlexHorizontal>
                </BoxTitleContainer>
                <Comments boardId={params.id}>{postDetail.commentList}</Comments>
                <LineBold />
                <FlexHorizontal alignItems='center' justifyContent='right' gap='10px'>
                  <ButtonMiddle onClick={() => navigate(`/bbs/modify/${params.id}`)}>
                    수정하기
                  </ButtonMiddle>
                  <ButtonMiddle onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
                </FlexHorizontal>
              </FlexVertical>
            </BoxWrapper>
          </FlexVertical>
        </Wrap>
      </FlexVertical>
    </PageContainer>
  );
}

export default BbsDetail;

const Wrap = styled.div`
  width: 1200px;
  padding: 50px 50px;
  background-color: white;
  border : none;
  border-radius: 50px;
  box-shadow: 0px 0px 25px black;
`

const BoxTitle = styled.div`
  font-size : 36px;
  font-weight: 900;
  color: ${({ color }) => color ? color : COLOR_THEME.COLOR_1};
`

const BoxTitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding : 10px 0px;
`
const Image = styled.img`
  object-fit: contain;
  width:100%;
  height:100%;
`
const LineBold = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLOR_THEME.COLOR_1};
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLOR_THEME.COLOR_1};
`

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
  /* background-color: beige; */
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
