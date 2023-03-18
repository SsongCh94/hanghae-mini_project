import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  DateInputs,
  LocationInputs,
  TextInputs,
  SelectBox,
} from "../components/Inputs";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";

function BbsCreate() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <InputArea>
        <Label>
          {" "}
          <Span>카테고리 : </Span>
          {/* <Input type="text" placeholder="글 제목을 입력하세요" /> */}
          <SelectBox list={regionList} selected={"카테고리를 입력해주세요."} />
        </Label>
        <TextInputs type={"text"} placeholder={"글 제목을 입력하세요"}>
          글 제목 :{" "}
        </TextInputs>
        <TextInputs type={"text"} placeholder={"이미지 URL을 입력하세요"}>
          이미지 URL :{" "}
        </TextInputs>
        <LocationInputs selected={"지역구를 입력해주세요."} />
        <DateInputs />
        <CommentArea>
          <Span>후기 : </Span>
          <TextArea type="text" placeholder="후기를 입력하세요" />
        </CommentArea>
        <ButtonArea>
          <ButtonMiddle>글 등록</ButtonMiddle>
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
const regionList = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

export default BbsCreate;
