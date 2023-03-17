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

export function LocationInputs() {
  return (
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
