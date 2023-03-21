import React from 'react'
import styled from 'styled-components';
import { InputBox } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';

function CreateInput({ title, placeholder, defaultValue, onChange, type, max }) {


  return (
    <InputBox>
      <TopBox>{title}</TopBox>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        maxLength={max}
      />
    </InputBox>
  )
}

const TopBox = styled.div`
  width: 100%;
  color: black;
`


const Input = styled.input`
background-color: transparent;
  border: none;
  height: 30px;
  font-size: 15px;
  border-bottom: 2px solid ${COLOR_THEME.COLOR_4};
  padding-bottom: 5px;
`

export default CreateInput