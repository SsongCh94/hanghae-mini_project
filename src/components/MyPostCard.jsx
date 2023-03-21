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

  const onDeleteBtnClickHandler = (id) => {
    dispatch(__deleteMyPost(id))
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
                        <h3 style={{ textAlign: 'center' }}>{item.title}</h3>
                      </FlexHorizontal>
                      <div><span>내용: </span><span>{item.contents}</span></div>
                      <div><span>댓글 수: </span><span>{item.cmtCount}</span></div>
                      <div><span>작성일: </span><span>{item.createdat}</span></div>
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

const Img = styled.img`
  width: 100%;
  height: 100%;
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
    /* width: 525px; */
    height : 200px;
    box-shadow: 0px 0px 10px ${COLOR_THEME.COLOR_4};
    &:hover{
      box-shadow: 0px 0px 10px ${COLOR_THEME.COLOR_1};
    }
`

const ButtonBox = styled.div`
  align-self: flex-end;
  margin-top: 10px;
`
