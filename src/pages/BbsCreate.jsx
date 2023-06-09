import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateInput from '../components/CreateInput';
import SelectInput from '../components/SelectInput';
import { __postPosts } from "../redux/modules/postsSlice";
import { BasicDiv, ButtonMiddle, FlexHorizontal, FlexVertical, FormArea, PageContainer, TextArea } from "../variables/styleStore";
import { useBbsInput } from "../variables/useBbsInput";

function BbsCreate() {
  const navigate = useNavigate();
  const { region, category } = useSelector((state) => state.selects);
  const [selectedCategory, selectedCategoryHandler] = useState(category[0]);
  const [inputTitle, inputTitleHandler] = useBbsInput("");
  const [inputURL, inputURLHandler] = useBbsInput("");
  const [pageUrl, pageUrlHandler] = useBbsInput("");
  const [selectedRegion, selectedRegionHandler] = useState(region[0]);
  const [location, locationHandler] = useBbsInput("");
  const [startDate, startDateHandler] = useBbsInput("");
  const [endDate, endDateHandler] = useBbsInput("");
  const [contents, contentsHandler] = useBbsInput("");

  const dispatch = useDispatch();

  const requestPost = async (payload) => {
    dispatch(__postPosts(payload))
      .then(response => {
        if (response.payload.data.message === 'success') {
          navigate('/')
        }
      })
  };

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
    <PageContainer backgroundColor='#f5e0e383' others='padding : 50px 0px'>
      <FormArea>
        <FlexVertical gap='20px' others='padding : 20px; box-sizing : border-box'>

          <SelectInput defaultValue={selectedCategory} setDefaultValue={selectedCategoryHandler} Arr={category}>카테고리</SelectInput>
          <CreateInput title={'제목'} type={"text"} placeholder={"제목을 입력하세요."} defaultValue={inputTitle} onChange={inputTitleHandler} max={20}></CreateInput>
          <CreateInput title={'이미지 URL'} type={"text"} placeholder={"이미지 URL을 입력하세요."} defaultValue={inputURL} onChange={inputURLHandler} ></CreateInput>
          <CreateInput title={'행사 홈페이지'} type={"url"} placeholder={"행사 홈 URL을 입력하세요."} defaultValue={pageUrl} onChange={pageUrlHandler} ></CreateInput>

          <FlexHorizontal>
            <SelectInput defaultValue={selectedRegion} setDefaultValue={selectedRegionHandler} Arr={region}>지역구</SelectInput>
            <CreateInput title={'장소'} type={"text"} placeholder={"장소를 입력하세요."} defaultValue={location} onChange={locationHandler} max={20}></CreateInput>
          </FlexHorizontal>

          <FlexHorizontal>
            <CreateInput title={'시작일'} type={"date"} defaultValue={startDate} onChange={startDateHandler} ></CreateInput>
            <CreateInput title={'종료일'} type={"date"} defaultValue={endDate} onChange={endDateHandler} ></CreateInput>
          </FlexHorizontal>

          <BasicDiv>소개글 : </BasicDiv>
          <TextArea
            type="text"
            placeholder="소개글을 입력하세요"
            defaultValue={contents}
            onChange={contentsHandler}
            maxLength={500}
          />

          <FlexHorizontal width='fit-content' gap='20px' others='align-self : flex-end'>
            <ButtonMiddle type="button" onClick={() => requestPost(newPost)}>
              글 등록
            </ButtonMiddle>
            <ButtonMiddle type='button' onClick={() => navigate("/")}>뒤로가기</ButtonMiddle>
          </FlexHorizontal>

        </FlexVertical>
      </FormArea>

    </PageContainer >
  );
}



export default BbsCreate;
