import React, { useEffect, useState } from "react";
import { PageContainer } from "../variables/styleStore";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";
import { useBbsInput } from '../variables/useBbsInput';
import HomeCard from '../components/HomeCard';
import HomeSearch from '../components/HomeSearch'

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [searchValue, SearchValueHandler] = useBbsInput('')
  const [search, setSearch] = useState(false)
  const [searchedRegion, setSearchedRegion] = useBbsInput('')

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  //FIXME: 검색 관련 ////////
  useEffect(() => {
    if (!searchValue) {
      setSearch(false)
    }
  }, [searchedRegion, searchValue])

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
    if (!searchedRegion && !searchValue) {
      alert('지역 또는 검색어를 입력해주세요')
    } else setSearch(true)
  }
  //FIXME: 여기까지 //////////

  const props = {
    searchedRegion,
    setSearchedRegion,
    searchValue,
    SearchValueHandler,
    onSearchBtnClickHandler,
    posts,
    search,
    setSearch,
    searchedPosts,
  }

  return (

    <PageContainer>
      <HomeImg />
      <MainArea>
        <HomeSearch {...props} />
        <HomeCard>{search ? searchedPosts : posts}</HomeCard>
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
        height: "400px",
      }}
      src="img/HomeImg2.jpeg"
      alt=" 이미지가 읽어지지 않네요.. ㅠㅠ"
    />
  );
};

