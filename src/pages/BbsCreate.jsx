import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getPosts, __postPosts } from "../redux/modules/postsSlice";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";
import { useBbsInput } from "../variables/useBbsInput";

function BbsCreate() {
  const navigate = useNavigate();
  const { region, category } = useSelector((state) => state.selects);
  // const { posts } = useSelector((state) => state.posts);
  const [inputTitle, inputTitleHandler] = useBbsInput("");
  const [inputURL, inputURLHandler] = useBbsInput("");
  const [selectedCategory, selectedCategoryHandler] = useBbsInput("");
  const [selectedRegion, selectedRegionHandler] = useBbsInput("");
  const [location, locationHandler] = useBbsInput("");
  const [startDate, startDateHandler] = useBbsInput("");
  const [endDate, endDateHandler] = useBbsInput("");
  const [contents, contentsHandler] = useBbsInput("");
  const [pageURL, pageURLHandler] = useBbsInput("");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getPosts());
  // }, []);

  const requestPost = (payload) => {
    dispatch(__postPosts(payload));
  };
  //git test
  const newPost = {
    title: inputTitle,
    image: inputURL,
    classify: selectedCategory,
    region: selectedRegion,
    location: location,
    startDate: startDate,
    endDate: endDate,
    contents: contents,
    pageURL,
  };

  return (
    <PageContainer>
      <InputArea>
        <Label>
          {" "}
          <Span>카테고리 : </Span>
          <RegionSelect
            defaultValue={selectedCategory}
            onChange={selectedCategoryHandler}
          >
            {category.map((item, idx) => {
              return (
                <option defaultValue={item} key={idx}>
                  {item}
                </option>
              );
            })}
          </RegionSelect>
        </Label>
        <Label>
          <Span>제목 : </Span>
          <Input
            type={"text"}
            placeholder={"제목을 입력하세요"}
            defaultValue={inputTitle}
            onChange={inputTitleHandler}
          />
        </Label>
        <Label>
          <Span>이미지 URL : </Span>
          <Input
            type={"text"}
            placeholder={"이미지 URL을 입력하세요"}
            defaultValue={inputURL}
            onChange={inputURLHandler}
          />
        </Label>
        <Label>
          <Span>행사 홈페이지 URL : </Span>
          <Input
            type={"text"}
            placeholder={"행사 홈 URL을 입력하세요"}
            defaultValue={pageURL}
            onChange={pageURLHandler}
          />
        </Label>
        <LocationDiv>
          <LocationLabel>
            <Span>구 : </Span>
            <RegionSelect
              defaultValue={selectedRegion}
              onChange={selectedRegionHandler}
            >
              {/* <option selected>"지역구를 선택해주세요."</option> */}
              {region.map((item, idx) => {
                return (
                  <option defaultValue={item} key={idx}>
                    {item}
                  </option>
                );
              })}
            </RegionSelect>
          </LocationLabel>
          <LocationLabel>
            <Span>장소 : </Span>
            <LocationInput
              type="text"
              placeholder="장소를 입력하세요"
              defaultValue={location}
              onChange={locationHandler}
            />
          </LocationLabel>
        </LocationDiv>
        <LocationDiv>
          <LocationLabel>
            <Span>시작 날짜 : </Span>
            <LocationInput
              type="date"
              defaultValue={startDate}
              onChange={startDateHandler}
            />
          </LocationLabel>
          <LocationLabel>
            <Span>끝나는 날짜 : </Span>
            <LocationInput
              type="date"
              defaultValue={endDate}
              onChange={endDateHandler}
            />
          </LocationLabel>
        </LocationDiv>
        <CommentArea>
          <Span>후기 : </Span>
          <TextArea
            type="text"
            placeholder="후기를 입력하세요"
            defaultValue={contents}
            onChange={contentsHandler}
          />
        </CommentArea>
        <ButtonArea>
          <ButtonMiddle type="button" onClick={() => requestPost(newPost)}>
            글 등록
          </ButtonMiddle>
          <ButtonMiddle onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
        </ButtonArea>
      </InputArea>
    </PageContainer>
  );
}

const InputArea = styled.form`
  background-color: beige;
  width: 50%;
  // FIXME: ???????? height 잘 안먹음
  height: 75vh;

  margin: 0 auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 20px;

  padding: 50px 50px 50px 50px;
`;

const Input = styled.input`
  width: 70%;
`;

const Label = styled.label`
  /* background-color: aqua; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const Span = styled.span`
  width: auto;
  margin-left: 10px;
  font-size: 20px;
`;

const CommentArea = styled.label`
  /* background-color: aqua; */
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const TextArea = styled.textarea`
  width: 70%;
`;

const ButtonArea = styled.div`
  width: 50%;
  height: 10%;

  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const RegionSelect = styled.select`
  width: 70%;
`;

const LocationDiv = styled.div`
  /* background-color: azure; */
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;
const LocationLabel = styled.label`
  /* background-color: aqua; */
  width: 41%;
  display: flex;
  justify-content: flex-end;
`;
const LocationInput = styled.input`
  width: 70%;
`;

export default BbsCreate;
