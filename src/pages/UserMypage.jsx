import React from 'react'
import styled from 'styled-components'
import { ButtonMiddle, ButtonSmall, FlexHorizontal, FlexVertical, PageContainer } from '../variables/styleStore'
import { MAINPAGE_CONTENTS_WIDTH } from '../variables/uiVariables'

function UserMypage() {
    return (
        <PageContainer>
            <FlexVertical alignItems="center" justifyContent="center"
            width={MAINPAGE_CONTENTS_WIDTH}
            others='background-color:green'>
                    <FlexHorizontal
                    alignItems="center"
                    justifyContent="space-between"
                    height='fit-contents'
                    >
                        <ButtonMiddle>개인정보 수정</ButtonMiddle>
                        <ButtonMiddle>뒤로가기</ButtonMiddle>
                    </FlexHorizontal>
                    <div>내가 쓴 글</div>
                    <FlexVertical>
                        <FlexHorizontal
                        width='100%'
                        alignItems='center'
                        justifyContent='space-between'
                        >
                            <Picture>사진</Picture>
                            <span>글 제목</span>
                            <span>글 내용</span>
                            <ButtonSmall>상세보기</ButtonSmall>
                            <ButtonSmall>삭제</ButtonSmall>
                        </FlexHorizontal>
                    </FlexVertical>
            </FlexVertical>
        </PageContainer>
    )
}

export default UserMypage

const Wrap = styled.div`
    width:${MAINPAGE_CONTENTS_WIDTH};
    max-width: ${MAINPAGE_CONTENTS_WIDTH};
    min-height:500px;
    background-color: aqua;
`
const Picture = styled.div`
    width: 190px;
    height: 100px;
    background-color: orange;
`