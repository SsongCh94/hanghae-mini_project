import React from "react";
import styled from "styled-components";

export function TextInputs({ children, placeholder, type }) {
  return (
    <Label>
      <Span>{children}</Span>
      <Input type={type} placeholder={placeholder} />
    </Label>
  );
}

export function DateInputs() {
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

export function LocationInputs({ list, selected }) {
  return (
    <LocationDiv>
      <LocationLabel>
        <Span>구 : </Span>
        <RegionSelect>
          <option selected>{selected}</option>
          {regionList.map((item) => {
            return <option value={item}>{item}</option>;
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

export function SelectBox({ list, selected }) {
  return (
    <RegionSelect>
      <option selected>{selected}</option>
      {categoryList.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </RegionSelect>
  );
}

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

const Label = styled.label`
  /* background-color: aqua; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const Input = styled.input`
  width: 70%;
`;

const Span = styled.span`
  width: 130px;
  margin-left: 10px;
  font-size: 20px;
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

const categoryList = [
  "클래식",
  "콘서트",
  "축제-전통/역사",
  "축제-자연/경관",
  "축제-시민화합",
  "축제-문화/예술",
  "축제-기타",
  "전시/미술",
  "영화",
  "연극",
  "뮤지컬/오페라",
  "무용",
  "독주/독창회",
  "국악",
  "교육/체험",
  "기타",
];
