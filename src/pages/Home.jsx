import React, { useEffect } from "react";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log("posts=======================", posts);
  console.log("posts@@@@@@@@", posts[1]);

  // const image = posts[7];
  // console.log("image!!@!@!@!@!@!@!@!@!@!@!", image);
  // console.log("type==================", typeof image);
  useEffect(() => {
    dispatch(__getPosts());
  }, []);
  return (
    <PageContainer
      style={{
        overflowY: "scroll",
      }}
    >
      <HomeImg />
      <MainArea>
        <SearchArea>
          <Input type="text" />
          <ButtonMiddle>검색</ButtonMiddle>
          <ButtonMiddle>글쓰기</ButtonMiddle>
        </SearchArea>
        {posts?.map((item) => {
          return (
            <Card key={item.id}>
              <CardImg src="item.image" />
              <CardInfo>
                <h1>item.title</h1>
                <h2>item.loaction</h2>
                <h2>item.startDate, item.endDate</h2>
              </CardInfo>
            </Card>
          );
        })}
        {/* <Card>
          <CardImg src="https://i.pinimg.com/236x/c3/61/83/c361835e4881cc83d5b7928728fdcd3f.jpg" />
          <CardInfo>
            <h1>글 제목 자리</h1>
            <h2>장소 자리</h2>
            <h2>날짜 자리</h2>
          </CardInfo>
        </Card> */}
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
