import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CreateInput from '../components/CreateInput';
import SelectInput from '../components/SelectInput';
import { __getPostDetail, __revisePost } from "../redux/modules/postsSlice";
import { ButtonMiddle, FlexHorizontal, PageContainer } from "../variables/styleStore";
import { COLOR_THEME } from '../variables/uiVariables';
import { useBbsInput } from "../variables/useBbsInput";

function BbsModify() {
  const { postDetail } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(__getPostDetail(params.id));
  }, [dispatch, params.id]);

  const navigate = useNavigate();
  const { region, category } = useSelector((state) => state.selects);
  const [inputTitle, inputTitleHandler] = useBbsInput(`${postDetail.title}`);
  const [inputURL, inputURLHandler] = useBbsInput(`${postDetail.image}`);
  const [selectedCategory, selectedCategoryHandler] = useBbsInput(
    `${postDetail.classify}`
  );
  const [selectedRegion, selectedRegionHandler] = useBbsInput(
    `${postDetail.region}`
  );
  const [location, locationHandler] = useBbsInput(`${postDetail.location}`);
  const [startDate, startDateHandler] = useBbsInput(`${postDetail.startDate}`);
  const [endDate, endDateHandler] = useBbsInput(`${postDetail.endDate}`);
  const [contents, contentsHandler] = useBbsInput(`${postDetail.contents}`);
  const [pageUrl, pageUrlHandler] = useBbsInput(`${postDetail.pageUrl}`);

  const revisePost = {
    id: params.id,
    revisedPost: {
      title: inputTitle,
      image: inputURL,
      pageUrl,
      classify: selectedCategory,
      region: selectedRegion,
      location,
      startDate,
      endDate,
      contents,
    },
  };

  const reviseBtnHandler = async (payload) => {
    await dispatch(__revisePost(payload));
    // navigate(`/bbs/detail/${params.id}`);
  };

  return (
    <PageContainer>
      <InputArea>
        <SelectInput defaultValue={selectedCategory} setDefaultValue={selectedCategoryHandler} Arr={category}>카테고리</SelectInput>
        <CreateInput title={'제목'} type={"text"} placeholder={"제목을 입력하세요."} defaultValue={inputTitle} onChange={inputTitleHandler} max={20}></CreateInput>
        <CreateInput title={'이미지 URL'} type={"text"} placeholder={"이미지 URL을 입력하세요."} defaultValue={inputURL} onChange={inputURLHandler} ></CreateInput>
        <CreateInput title={'행사 홈페이지'} type={"url"} placeholder={"행사 홈 URL을 입력하세요."} defaultValue={pageUrl} onChange={pageUrlHandler} ></CreateInput>

        <LocationDiv>
          <SelectInput defaultValue={selectedRegion} setDefaultValue={selectedRegionHandler} Arr={region}>지역구</SelectInput>
          <CreateInput title={'장소'} type={"text"} placeholder={"장소를 입력하세요."} defaultValue={location} onChange={locationHandler} max={20}></CreateInput>
        </LocationDiv>

        <FlexHorizontal alignItems='center' justifyContent='space-between'>
          <CreateInput title={'시작일'} type={"date"} defaultValue={startDate} onChange={startDateHandler} ></CreateInput>
          <CreateInput title={'종료일'} type={"date"} defaultValue={endDate} onChange={endDateHandler} ></CreateInput>
        </FlexHorizontal>

        <CommentArea>
          <Span>후기 : </Span>
          <TextArea
            type="text"
            placeholder="후기를 입력하세요"
            defaultValue={contents}
            onChange={contentsHandler}
            maxLength={500}
          />
        </CommentArea>

        <ButtonArea>
          <ButtonMiddle
            type="button"
            onClick={() => reviseBtnHandler(revisePost)}
          >
            수정완료
          </ButtonMiddle>
          <ButtonMiddle type='button' onClick={() => navigate(`/bbs/detail/${params.id}`)}>
            뒤로가기
          </ButtonMiddle>
        </ButtonArea>
      </InputArea>
    </PageContainer>
  );
}

const InputArea = styled.form`
  background-color: beige;
  width: 50%;
  // FIXME: ???????? height 잘 안먹음
  height: auto;

  margin: 0 auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 20px;

  padding: 20px;
`;


const Span = styled.span`
  width: auto;
  margin-left: 10px;
  font-size: 20px;
`;

const CommentArea = styled.label`
  /* background-color: aqua; */
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
			height: 200px;
			padding: 10px;
			box-sizing: border-box;
			border: solid 2px ${COLOR_THEME.COLOR_4};
			border-radius: 5px;
			font-size: 16px;
`;

const ButtonArea = styled.div`
  width: 50%;
  height: 10%;

  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const LocationDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export default BbsModify;
