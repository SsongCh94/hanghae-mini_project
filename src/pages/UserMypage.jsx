import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalModify from "../components/ModalModify";
import MyPostCard from "../components/MyPostCard";
import { __getMyPost } from '../redux/modules/userSlice';
import {
    ButtonLarge,
    ButtonSmall,
    FlexHorizontal,
    FlexVertical,
    PageContainer,
} from "../variables/styleStore";
import { MAINPAGE_CONTENTS_WIDTH } from "../variables/uiVariables";
import { COLOR_THEME } from "../variables/uiVariables";

function UserMypage() {
  const navigation = useNavigate();
  const [modalSwitch, setModalSwitch] = useState(false);
  const dispatch = useDispatch()

  const {myPages} = useSelector((state) => state.user)
  console.log('myPages====', myPages);

    const toggleModal = () => {
        setModalSwitch((prev) => !prev);
    };

  useEffect(() => {
    dispatch(__getMyPost())
  },[])
  
  return (
    <PageContainer>
      {modalSwitch ? <ModalModify call={toggleModal} /> : null}
      <Wrap>
        <FlexHorizontal
          alignItems="top"
          justifyContent="space-between"
          height="fit-contents"
          others={"margin-bottom:100px;"}
        >
          <ButtonLarge onClick={toggleModal}>개인정보 수정</ButtonLarge>
          <ButtonSmall onClick={() => navigation("/")}>뒤로가기</ButtonSmall>
        </FlexHorizontal>
        <WrapGroup>
          <BoardTitle>
            내가 <StyledText>작성</StyledText>한 포스팅
          </BoardTitle>
        </WrapGroup>
        <WrapGroup>
          <FlexVertical>
            <FlexHorizontal
              alignItems="center"
              justifyContent="space-between"
              gap="50px"
              others="flex-wrap : wrap"
            >
              <MyPostCard>{myPages}</MyPostCard>
            </FlexHorizontal>
          </FlexVertical>
        </WrapGroup>
      </Wrap>
    </PageContainer>
  );
}

export default UserMypage;
const StyledText = styled.span`
  color: ${COLOR_THEME.COLOR_3};
  font-size: inherit;
  font-weight: inherit;
`;
const Wrap = styled.div`
  width: ${MAINPAGE_CONTENTS_WIDTH};
  max-width: ${MAINPAGE_CONTENTS_WIDTH};
  min-height: 500px;
  height: fit-content;
  margin: 100px auto 0px auto;
`;
const BoardTitle = styled.span`
  /* color: #${COLOR_THEME.COLOR_3}; */
  color: ${COLOR_THEME.COLOR_1};
  /* text-shadow: 0px 0px 5px #${COLOR_THEME.COLOR_3}; */
  font-size: 48px;
  font-weight: 900;
`;
const WrapGroup = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
`;
