import React, { useState } from 'react'
import styled from 'styled-components';
import { InputBox } from '../variables/styleStore';

function SelectInput({ divStyle, defaultValue, onChange, Arr, children }) {
  // const stDiv = DIV[divStyle]
  // const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(Arr[0].value);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {Arr.map((item, index) => (
          <Option
            key={index}
            value={item.value}
            onClick={handleOnChangeSelectValue}
          >
            {item.value}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );

  // return (

  // <InputBox stDiv={stDiv}>
  //   {" "}
  //   <Span>{children}</Span>
  //   <RegionSelect
  //     defaultValue={defaultValue}
  //     onChange={onChange}
  //   >
  //     {Arr.map((item, idx) => {
  //       return (
  //         <option defaultValue={item} key={idx}>
  //           {item}
  //         </option>
  //       );
  //     })}
  //   </RegionSelect>
  // </InputBox>
  // )

}

const StDiv = styled.div`
  width: 300px;
  height: 200px;
  background-color: #5b5b91;

  position: absolute;
`


const RegionSelect = styled.div`
  width: 70%;
`;

const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
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
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;



export default SelectInput