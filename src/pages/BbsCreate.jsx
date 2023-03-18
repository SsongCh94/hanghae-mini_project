import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import {
//   DateInputs,
//   LocationInputs,
//   TextInputs,
//   SelectBox,
// } from "../components/Inputs";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";
import { useBbsInput } from "../variables/useBbsInput";

function BbsCreate() {
  const navigate = useNavigate();
  const { region, category } = useSelector((state) => state.selects);
  const [inputTitle, inputTitleHandler] = useBbsInput("");
  const [inputURL, inputURLHandler] = useBbsInput("");

  // console.log("region", region);
  // console.log("category", category);
  return (
    <PageContainer>
      <InputArea>
        <Label>
          {" "}
          <Span>카테고리 : </Span>
          {/* <Input type="text" placeholder="글 제목을 입력하세요" /> */}
          <SelectList list={category} selected={"카테고리를 입력해주세요."} />
        </Label>
        <TextInputs
          type={"text"}
          placeholder={"글 제목을 입력하세요"}
          span={"글 제목 : "}
        >
          <Input
            type={"text"}
            placeholder={"글 제목을 입력하세요"}
            value={inputTitle}
            onChange={inputTitleHandler}
          />
        </TextInputs>
        <TextInputs
          span={"URL : "}
          type={"text"}
          placeholder={"이미지 URL을 입력하세요"}
        >
          <Input
            type={"text"}
            placeholder={"URL을 입력하세요"}
            value={inputURL}
            onChange={inputURLHandler}
          />
        </TextInputs>
        <LocationInputs selected={"지역구를 선택해주세요."} list={region} />
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
function TextInputs({ span, children, placeholder, type }) {
  return (
    <Label>
      <Span>{span}</Span>
      {children}
    </Label>
  );
}

function DateInputs() {
  return (
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
  );
}

function LocationInputs({ list, selected }) {
  return (
    <LocationDiv>
      <LocationLabel>
        <Span>구 : </Span>
        <RegionSelect>
          <option selected>{selected}</option>
          {list.map((item, idx) => {
            return (
              <option value={item} key={idx}>
                {item}
              </option>
            );
          })}
        </RegionSelect>
      </LocationLabel>
      <LocationLabel>
        <Span>장소 : </Span>
        <LocationInput type="text" placeholder="장소를 입력하세요" />
      </LocationLabel>
    </LocationDiv>
  );
}

function SelectList({ list, selected }) {
  return (
    <RegionSelect>
      <option selected>{selected}</option>
      {list.map((item, idx) => {
        return (
          <option value={item} key={idx}>
            {item}
          </option>
        );
      })}
    </RegionSelect>
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
  width: auto;
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

const RegionSelect = styled.select`
  width: 70%;
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

export default BbsCreate;
