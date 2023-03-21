import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonMiddle } from '../variables/styleStore';

function HomeSearch({ searchedRegion, setSearchedRegion, searchValue, SearchValueHandler, onSearchBtnClickHandler }) {
  const { region } = useSelector((state) => state.selects);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()

  const onWriteBtnClickHandler = () => {
    user.loginid ? navigate("/bbs/create") : alert('로그인 후 이용해주세요')
  }

  return (
    <SearchArea>
      <select
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
      </select>
      <Input type="text" value={searchValue} onChange={SearchValueHandler} placeholder={'행사 이름 또는 지역을 입력하세요'} />
      <ButtonMiddle onClick={onSearchBtnClickHandler}>검색</ButtonMiddle>
      <ButtonMiddle onClick={onWriteBtnClickHandler}>
        글쓰기
      </ButtonMiddle>
    </SearchArea>
  )
}

const SearchArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 60%;
`;

export default HomeSearch