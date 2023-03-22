import React from 'react'
import { ButtonSmall, FlexHorizontal, FlexVertical } from '../variables/styleStore';
import styled from 'styled-components';
import { COLOR_THEME } from '../variables/uiVariables';
import { useDispatch } from 'react-redux';
import { __deleteMyPost } from '../redux/modules/userSlice';
import { useNavigate } from 'react-router-dom';

function MyPostCard({ children }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onDeleteBtnClickHandler = async (id) => {
    const answer = prompt(`삭제하시려면 '삭제' 를 입력해주세요`)
    answer === '삭제' ? dispatch(__deleteMyPost(id)) : alert('삭제되지 않았습니다.');
  }


  return (
    <>
      {
        children.map((item) => {
          return (
            <PostingCard key={item.id}>
              <FlexVertical alignItems='center'>
                <FlexHorizontal height="100%">
                  <FlexVertical alignItems='center' justifyContent='center'>
                    <Picture>
                      <Img src={item.image} alt="왜안나오지" />
                    </Picture>
                  </FlexVertical>
                  <FlexVertical alignItems='center' justifyContent='center'>
                    <FlexVertical width='90%' height='88%'>
                      <FlexHorizontal justifyContent='space-between'>
                        <CardTitle>{item.title}</CardTitle>
                      </FlexHorizontal>
                      <div><CardContent> <BoldSpan>내용 : </BoldSpan>  {item.contents}</CardContent></div>
                      <div><BoldSpan>댓글 수: </BoldSpan><span>{item.cmtCount}</span></div>
                      <div><BoldSpan>작성일: </BoldSpan><span>{item.createdat}</span></div>
                      <ButtonBox>
                        <ButtonSmall onClick={() => navigate(`/bbs/detail/${item.id}`)}>상세보기</ButtonSmall>
                        <ButtonSmall onClick={() => onDeleteBtnClickHandler(item.id)}>삭제</ButtonSmall>
                      </ButtonBox>
                    </FlexVertical>
                  </FlexVertical>
                </FlexHorizontal>
              </FlexVertical>
            </PostingCard>
          )
        })
      }
    </>
  )
}

export default MyPostCard;

const CardTitle = styled.h3`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const CardContent = styled.span`
  margin: 5px 10px 5px 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const BoldSpan = styled.span`
  font-weight: bold;
`


const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  
`

const Picture = styled.div`
    width: 90%;
    height: 90%;
    overflow: hidden; 
    border: 1px solid white;
    `

const PostingCard = styled.div`
    border : 1px solid white;
    min-width: 523px;
    width: 525px;
    height : 200px;
    box-shadow: 0px 0px 10px ${COLOR_THEME.COLOR_4};
    &:hover{
      box-shadow: 0px 0px 10px ${COLOR_THEME.COLOR_1};
    }
    border-radius: 10px;
`

const ButtonBox = styled.div`
  align-self: flex-end;
  display: flex;
  margin-top: 4px;
  gap: 5px;
`
