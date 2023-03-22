import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonMiddle, FlexHorizontal, StInput } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';

function HomeSearch({ searchedRegion, setSearchedRegion, searchValue, SearchValueHandler, onSearchBtnClickHandler }) {
  const { region } = useSelector((state) => state.selects);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()

  const onWriteBtnClickHandler = () => {
    user.loginid ? navigate("/bbs/create") : alert('로그인 후 이용해주세요')
  }

  const otherInputStyle = `
    width: 100%;
    height: 40px;
  `
  return (
    <FlexHorizontal alignItems='center' justifyContent='space-between' gap='20px' width='1100px'>
      <Select
        defaultValue={searchedRegion}
        onChange={setSearchedRegion}
      >
        {region.map((item, idx) => {
          return (
            <option defaultValue={item} key={idx}>
              {item}
            </option>
          );
        })}
      </Select>
      <StInput
        type="text"
        value={searchValue}
        onChange={SearchValueHandler}
        placeholder='행사 이름 또는 지역을 입력하세요'
        others={otherInputStyle}
      />
      <FlexHorizontal gap='5px' justifyContent='right' width='fit-content'>
        <ButtonMiddle
          onClick={onSearchBtnClickHandler}
          others='width:80px;'
        >검색</ButtonMiddle>
        <ButtonMiddle
          onClick={onWriteBtnClickHandler}
          others='width:80px;'>
          글쓰기
        </ButtonMiddle>
      </FlexHorizontal>
    </FlexHorizontal>
  )
}

export default HomeSearch;

const Select = styled.select`
  width: 200px;
  height : 40px;
  padding : 5px 15px;
  border-radius: 20px;
  border : 1px solid ${COLOR_THEME.COLOR_1};
`
