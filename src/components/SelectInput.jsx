import React, { useState } from 'react'
import styled from 'styled-components';
import { COLOR_THEME } from '../variables/uiVariables';

function SelectInput({ defaultValue, setDefaultValue, Arr, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setDefaultValue(e.target.getAttribute("value"));
  };
  return (
    <StDiv>
      <TopBox>{children}</TopBox>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)}>
        <Label>{defaultValue}</Label>
        <SelectOptions show={isOpen}>
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
    </StDiv>

  );

}

const StDiv = styled.div`
  /* background-color: aliceblue; */

  width: 60%;
  margin-right: auto;

  display: flex;
  flex-direction: column;
`

const TopBox = styled.span`
/* background-color: aqua; */
  color: black;
  margin-bottom: 10px;
`

const SelectBox = styled.div`
  position: relative;
  width: 300px;
  padding: 8px;
  margin-right: 20px;
  border-radius: 12px;
  background-color: ${COLOR_THEME.COLOR_3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
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
  display: ${(props) => (props.show ? 'block' : "none")};
  padding: 0;
  border-radius: 8px;
  background-color: ${COLOR_THEME.COLOR_4};
  color: #fefefe;
  z-index: 99;
`;
const Option = styled.li`
  font-size: 15px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${COLOR_THEME.COLOR_3};
  }
  z-index: 100;
`;



export default SelectInput