import React from 'react'
import { FlexVertical, Input } from '../variables/styleStore';

function CreateInput({ title, placeholder, defaultValue, onChange, type, max }) {


  return (
    <FlexVertical gap='4px'>
      <div style={{ marginTop: '10px' }}>{title}</div>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        maxLength={max}
      />
    </FlexVertical>
  )
}

export default CreateInput