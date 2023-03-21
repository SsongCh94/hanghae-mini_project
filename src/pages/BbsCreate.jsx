import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateInput from '../components/CreateInput';
import SelectInput from '../components/SelectInput';
import { __postPosts } from "../redux/modules/postsSlice";
import { ButtonMiddle, PageContainer } from "../variables/styleStore";
import { useBbsInput } from "../variables/useBbsInput";

function BbsCreate() {
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.posts)
  const { region, category } = useSelector((state) => state.selects);
  const [inputTitle, inputTitleHandler] = useBbsInput("");
  const [inputURL, inputURLHandler] = useBbsInput("");
  const [selectedCategory, selectedCategoryHandler] = useBbsInput("");
  const [selectedRegion, selectedRegionHandler] = useBbsInput("");
  const [location, locationHandler] = useBbsInput("");
  const [startDate, startDateHandler] = useBbsInput("");
  const [endDate, endDateHandler] = useBbsInput("");
  const [contents, contentsHandler] = useBbsInput("");
  const [pageUrl, pageUrlHandler] = useBbsInput("");

  const dispatch = useDispatch();

  const requestPost = (payload) => {
    dispatch(__postPosts(payload));
  };


  console.log(isError);

  const newPost = {
    title: inputTitle,
    image: inputURL,
    classify: selectedCategory,
    region: selectedRegion,
    location,
    startDate,
    endDate,
    contents,
    pageUrl,
  };

  return (
    <PageContainer>
      <InputArea>
        <SelectInput divStyle={'longInput'} defaultValue={selectedCategory} onChange={selectedCategoryHandler} Arr={category}>카테고리 : </SelectInput>
        <CreateInput divStyle={'longInput'} type={"text"} placeholder={"제목을 입력하세요."} defaultValue={inputTitle} onChange={inputTitleHandler} >제목 : </CreateInput>
        <CreateInput divStyle={'longInput'} type={"text"} placeholder={"이미지 URL을 입력하세요."} defaultValue={inputURL} onChange={inputURLHandler} >이미지 URL : </CreateInput>
        <CreateInput divStyle={'longInput'} type={"url"} placeholder={"행사 홈 URL을 입력하세요."} defaultValue={pageUrl} onChange={pageUrlHandler} >행사 홈페이지 URL : </CreateInput>
        {/* ////FIXME: 장소 div */}
        <LocationDiv>
          <SelectInput divStyle={'shortInput'} defaultValue={selectedRegion} onChange={selectedRegionHandler} Arr={region}>구 : </SelectInput>
          <CreateInput divStyle={'shortInput'} type={"text"} placeholder={"장소를 입력하세요."} defaultValue={location} onChange={locationHandler} >장소 : </CreateInput>
        </LocationDiv>
        {/* ////FIXME: 장소 div */}

        {/* ////FIXME: 장소 div */}
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
        {/* ////FIXME: 장소 div */}

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
          <ButtonMiddle type='button' onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
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
