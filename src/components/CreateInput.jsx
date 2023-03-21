import React from 'react'
import styled from 'styled-components';
import { DIV, InputBox, Span } from '../variables/styleStore';

function CreateInput({ divStyle, children, placeholder, defaultValue, onChange, type, }) {
  const stDiv = DIV[divStyle]

  return (
    <InputBox stDiv={stDiv}>
      <Span>{children} </Span>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </InputBox>
  )
}



const Input = styled.input`
  width: 70%;
`;

export default CreateInput