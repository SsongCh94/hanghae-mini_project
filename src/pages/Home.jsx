import React, { useEffect, useState } from "react";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";
import { useNavigate } from "react-router-dom";
import { useBbsInput } from '../variables/useBbsInput';
import HomeCard from '../components/HomeCard';

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { region, category } = useSelector((state) => state.selects);
  const navigate = useNavigate();
  const [searchValue, SearchValueHandler] = useBbsInput('')
  const [search, setSearch] = useState(false)
  const [searchedRegion, setSearchedRegion] = useBbsInput('')

  const {user} = useSelector((state) => state.user);
  // console.log(posts);



  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  useEffect(()=>{
  if (!searchValue) {
    setSearch(false)
  }
  },[searchedRegion, searchValue])

  
  // const searchedPosts = posts.filter((item) => {
  //   return item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.location.toLowerCase().includes(searchValue.toLowerCase() || item.region === searchedRegion )
  // })
  let searchedPosts = [];

  if (searchedRegion && !searchValue) {
    searchedPosts = posts.filter((item) => {
      return item.region === searchedRegion;
    }) 
  } else if (!searchedRegion && searchValue) {
    searchedPosts = posts.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.location.toLowerCase().includes(searchValue.toLowerCase())
    })
  } else if (searchedRegion && searchValue) {
    searchedPosts = posts.filter((item) => {
      return (item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.location.toLowerCase().includes(searchValue.toLowerCase())) && item.region === searchedRegion
    })
  }

  





  const onSearchBtnClickHandler = () => {
    console.log(searchedPosts);  
    if (!searchedRegion && !searchValue) {
    alert('지역 또는 검색어를 입력해주세요')
  } else setSearch(true)
    
  }

  const onWriteBtnClickHandler = () => {
    user.loginid ? navigate("/bbs/create") : alert('로그인 후 이용해주세요')
    
  }

  return (
    <PageContainer
      style={{
        overflowY: "scroll",
      }}
    >
      <HomeImg />
      <MainArea>
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
          <Input type="text" value={searchValue} onChange={SearchValueHandler} placeholder={'행사 이름 또는 지역을 입력하세요'}/>
          <ButtonMiddle onClick={onSearchBtnClickHandler}>검색</ButtonMiddle>
          <ButtonMiddle onClick={onWriteBtnClickHandler}>
            글쓰기
          </ButtonMiddle>
        </SearchArea>
        <HomeCard>{search ? searchedPosts : posts }</HomeCard>
      </MainArea>
    </PageContainer>
  );
}

export default Home;

const MainArea = styled.div`
  background-color: azure;
  width: 80%;
  height: auto;
  margin: 20px auto 0 auto;
`;

const HomeImg = () => {
  return (
    <img
      style={{
        width: "100%",
        height: "300px",
      }}
      src="img/HomeImg.jpeg"
      alt=" 이미지가 읽어지지 않네요.. ㅠㅠ"
    />
  );
};

const SearchArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 60%;
`;
