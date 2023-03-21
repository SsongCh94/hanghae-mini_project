import React from 'react'
import styled from 'styled-components';
import { DIV, InputBox, Span } from '../variables/styleStore';

function SelectInput({ divStyle, defaultValue, onChange, Arr, children }) {
  const stDiv = DIV[divStyle]

  return (
    <InputBox stDiv={stDiv}>
      {" "}
      <Span>{children}</Span>
      <RegionSelect
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {Arr.map((item, idx) => {
          return (
            <option defaultValue={item} key={idx}>
              {item}
            </option>
          );
        })}
      </RegionSelect>
    </InputBox>
  )
}


const RegionSelect = styled.select`
  width: 70%;
`;



export default SelectInput