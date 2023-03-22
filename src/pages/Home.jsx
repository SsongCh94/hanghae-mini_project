import React, { useEffect, useState } from "react";
import { FlexVertical, PageContainer } from "../variables/styleStore";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";
import { useBbsInput } from '../variables/useBbsInput';
import HomeCard from '../components/HomeCard';
import HomeSearch from '../components/HomeSearch'
import { COLOR_THEME } from "../variables/uiVariables";

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
      <HomeImg>
        <Image src="img/SCP_background.jpg" />
      </HomeImg>
      <Wrap>
        <FlexVertical alignItems='center' justifyContent='center'>
          <MainContainer>
            <MainArea>
              <FlexVertical alignItems='center' justifyContent='center' gap='50px'>
                <HomeSearch {...props} />
                <HomeCard eachCard={search ? searchedPosts : posts} />
              </FlexVertical>
            </MainArea>
          </MainContainer>
        </FlexVertical>
      </Wrap>
    </PageContainer>
  );
}

export default Home;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0px;
  background-color: ${COLOR_THEME.COLOR_4};
`
const MainContainer = styled.div`
  width: 1200px;
  padding: 50px;
  border: none;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0px 0px 25px black;
`
const MainArea = styled.div`
  
  width: 100%;
  height: auto;
  margin: 20px auto 0 auto;
`;

// "img/HomeImg2.jpeg"
const HomeImg = styled.div`
  width: 100%;
  height: 600px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`