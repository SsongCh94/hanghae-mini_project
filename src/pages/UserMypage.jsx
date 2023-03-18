import React from "react";
import styled from "styled-components";
import {
  ButtonLarge,
  ButtonMiddle,
  ButtonSmall,
  FlexHorizontal,
  FlexVertical,
  PageContainer,
} from "../variables/styleStore";
import { MAINPAGE_CONTENTS_WIDTH } from "../variables/uiVariables";
import { COLOR_THEME } from "../variables/uiVariables";

function UserMypage() {
  return (
    <PageContainer>
      <Wrap>
        <FlexHorizontal
          alignItems="top"
          justifyContent="space-between"
          height="fit-contents"
          others={"margin-bottom:100px;"}
        >
          <ButtonLarge>개인정보 수정</ButtonLarge>
          <ButtonSmall>뒤로가기</ButtonSmall>
        </FlexHorizontal>
        <WrapGroup>
          <BoardTitle>나의 포스팅</BoardTitle>
        </WrapGroup>
        <WrapGroup>
          <FlexVertical>
            <FlexHorizontal
              alignItems="center"
              justifyContent="space-between"
              gap="50px"
              others="flex-wrap : wrap"
            >
              <PostingCard>
                <Picture>사진</Picture>
                <span>글 제목</span>
                <div>글 내용</div>
                <div>
                  <ButtonSmall>상세보기</ButtonSmall>
                  <ButtonSmall>삭제</ButtonSmall>
                </div>
              </PostingCard>
            </FlexHorizontal>
          </FlexVertical>
        </WrapGroup>
      </Wrap>
    </PageContainer>
  );
}

export default UserMypage;

const Wrap = styled.div`
  width: ${MAINPAGE_CONTENTS_WIDTH};
  max-width: ${MAINPAGE_CONTENTS_WIDTH};
  min-height: 500px;
  height: fit-content;
  margin: 100px auto 0px auto;
`;
const Picture = styled.div`
  width: 190px;
  height: 100px;
  background-color: orange;
`;
const BoardTitle = styled.span`
  /* color: #${COLOR_THEME.COLOR_3}; */
  color: purple;
  /* text-shadow: 0px 0px 5px #${COLOR_THEME.COLOR_3}; */
  font-size: 24px;
  font-weight: 900;
`;
const WrapGroup = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
`;

const PostingCard = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  min-width: "525px";
  height: 200px;
`;
