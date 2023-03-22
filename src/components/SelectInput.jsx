import React, { useState } from 'react'
import styled from 'styled-components';
import { FlexVertical } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';

function SelectInput({ defaultValue, setDefaultValue, Arr, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setDefaultValue(e.target.getAttribute("value"));
    console.log(e.target);
  };
  return (
    <FlexVertical gap='10px'>
      <div>{children}</div>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)}>
        <Label>{defaultValue}</Label>
        <SelectOptions open={isOpen}>
          {Arr.map((item, index) => (
            <Option
              key={index}
              value={item}
              onClick={handleOnChangeSelectValue}
            >
              {item}
            </Option>
          ))}
        </SelectOptions>
      </SelectBox>
    </FlexVertical>
  );
}

const SelectBox = styled.div`
  position: relative;
  width: 400px;
  padding: 8px;
  margin-right: 20px;
  border-radius: 12px;
  background-color: #EBBFC6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: ${COLOR_THEME.COLOR_4};
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 15px;
  margin-left: 10px;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 0px;
  left: 0;
  width: 100%;
  overflow: auto;
  height: 200px;
  display: ${(props) => (props.open ? 'block' : "none")};
  padding: 0;
  border-radius: 8px;
  background-color: #e9aeb8;
  color: #fefefe;
  z-index: 99;
`;
const Option = styled.li`
  font-size: 15px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${COLOR_THEME.COLOR_4};
  }
  z-index: 100;
`;



export default SelectInput