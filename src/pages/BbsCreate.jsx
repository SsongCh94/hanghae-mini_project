import React from "react";
import styled from "styled-components";
import {
  ButtonMiddle,
  ButtonLarge,
  PageContainer,
} from "../variables/styleStore";

function BbsCreate() {
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
        <Label>
          <Span>글 제목 : </Span>
          <Input type="text" placeholder="글 제목을 입력하세요" />
        </Label>
        <Label>
          <Span>이미지 URL : </Span>
          <Input type="text" placeholder="이미지 URL을 입력하세요" />
        </Label>
        <LocationDiv>
          <LocationLabel>
            <Span>구 : </Span>
            <RegionSelect>
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </RegionSelect>
          </LocationLabel>
          <LocationLabel>
            <Span>장소 : </Span>
            <LocationInput type="text" placeholder="장소를 입력하세요" />
          </LocationLabel>
        </LocationDiv>
        <LocationDiv>
          <LocationLabel>
            <Span>시작 날짜 : </Span>
            <LocationInput type="date" />
          </LocationLabel>
          <LocationLabel>
            <Span>끝나는 날짜 : </Span>
            <LocationInput type="date" />
          </LocationLabel>
        </LocationDiv>
        <CommentArea>
          <Span>후기 : </Span>
          <TextArea type="text" placeholder="후기를 입력하세요" />
        </CommentArea>
        <ButtonArea>
          <ButtonLarge>글 등록</ButtonLarge>
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

const Input = styled.input`
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

const LocationDiv = styled.div`
  /* background-color: azure; */
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

const LocationLabel = styled.label`
  /* background-color: aqua; */
  width: 41%;
  display: flex;
  justify-content: flex-end;
`;
const LocationInput = styled.input`
  width: 70%;
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
  background-color: aqua;

  width: 50%;
  height: 10%;

  display: flex;
`;

export default BbsCreate;
