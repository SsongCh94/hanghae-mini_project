import React from 'react'
import styled from 'styled-components';
import { DIV, InputBox, Span } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';

function CreateInput({ title, divStyle, children, placeholder, defaultValue, onChange, type, }) {
  const stDiv = DIV[divStyle]

  return (
    <InputBox>
      <TopBox>{title}</TopBox>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </InputBox>
  )
}

const TopBox = styled.div`
  width: 100%;
  color: black
`

// const BottomBox = styled.div`
//   background-color: azure;
//   width: 70%;
// `

const Input = styled.input`
background-color: transparent;
  border: none;
  height: 30px;
  font-size: 15px;
  border-bottom: 2px solid ${COLOR_THEME.COLOR_4};
  padding-bottom: 5px;
`

export default CreateInput