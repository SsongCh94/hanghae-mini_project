import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DateInputs, LocationInputs, TextInputs } from "../components/Inputs";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";

function BbsModify() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <InputArea>
        <Label>
          {" "}
          <Span>카테고리 : </Span>
          {/* <Input type="text" placeholder="글 제목을 입력하세요" /> */}
          <RegionSelect>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </RegionSelect>
        </Label>
        <TextInputs type={"text"} placeholder={"글 제목을 입력하세요"}>
          글 제목 :{" "}
        </TextInputs>
        <TextInputs type={"text"} placeholder={"이미지 URL을 입력하세요"}>
          이미지 URL :{" "}
        </TextInputs>
        <LocationInputs />
        <DateInputs />
        <CommentArea>
          <Span>후기 : </Span>
          <TextArea type="text" placeholder="후기를 입력하세요" />
        </CommentArea>
        <ButtonArea>
          <ButtonMiddle>수정 완료</ButtonMiddle>
          <ButtonMiddle onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
        </ButtonArea>
      </InputArea>
    </PageContainer>
  );
}

const InputArea = styled.form`
  background-color: beige;
  width: 50%;
  // FIXME: ???????? height 잘 안먹음
  height: 75vh;

  margin: 0 auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 20px;

  padding: 50px 50px 50px 50px;
`;

const RegionSelect = styled.select`
  width: 70%;
`;

const Label = styled.label`
  /* background-color: aqua; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const Span = styled.span`
  width: 130px;
  margin-left: 10px;
  font-size: 20px;
`;

const CommentArea = styled.label`
  /* background-color: aqua; */
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const TextArea = styled.textarea`
  width: 70%;
`;

const ButtonArea = styled.div`
  width: 50%;
  height: 10%;

  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export default BbsModify;
