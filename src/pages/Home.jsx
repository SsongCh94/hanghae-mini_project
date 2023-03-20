import React, { useEffect } from "react";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";
import { useNavigate } from "react-router-dom";
import { useBbsInput } from '../variables/useBbsInput';

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const [searchValue, SearchValueHandler] = useBbsInput('')

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const searchedPosts = posts.filter((item) => {
    item.title.includes(searchValue)
  })

  const onSearchBtnClickHandler = () => {
    console.log(searchedPosts);
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
          <Input type="text" value={searchValue} onChange={SearchValueHandler}/>
          <ButtonMiddle onClick={onSearchBtnClickHandler}>검색</ButtonMiddle>
          <ButtonMiddle onClick={() => navigate("/bbs/create")}>
            글쓰기
          </ButtonMiddle>
        </SearchArea>
        {posts?.map((item) => {
          return (
            <Card
              key={item.id}
              onClick={() => navigate(`/bbs/detail/${item.id}`)}
            >
              <CardImg src={item.image} art={"왜안되는거람"} />
              <CardInfo>
                <h1>{item.title}</h1>
                <h2>{item.location}</h2>
                <h2>
                  {item.startDate}, {item.endDate}
                </h2>
              </CardInfo>
            </Card>
          );
        })}
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

const Card = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  display: flex;

  border: 2px solid black;
`;

const CardImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 25px;
`;

const CardInfo = styled.div`
  background-color: aqua;

  width: 1000px;
  height: 250px;

  margin: 25px 25px 25px 0;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 60%;
`;
