import React from 'react'
import { Input, InputBox } from '../variables/styleStore';

function CreateInput({ title, placeholder, defaultValue, onChange, type, max }) {


  return (
    <InputBox>
      <div>{title}</div>
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




export default CreateInput