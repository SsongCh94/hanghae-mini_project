import React from 'react'
import styled from 'styled-components'
import MyPostCard from '../components/MyPostCard'
import { ButtonLarge, ButtonMiddle, ButtonSmall, FlexHorizontal, FlexVertical, PageContainer } from '../variables/styleStore'
import { MAINPAGE_CONTENTS_WIDTH } from '../variables/uiVariables'
import { COLOR_THEME } from '../variables/uiVariables'

function UserMypage() {

    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <PageContainer>
            <Wrap>
                <FlexHorizontal
                    alignItems="top"
                    justifyContent="space-between"
                    height='fit-contents'
                    others={'margin-bottom:100px;'}
                >
                    <ButtonLarge>개인정보 수정</ButtonLarge>
                    <ButtonSmall>뒤로가기</ButtonSmall>
                </FlexHorizontal>
                <WrapGroup>
                    <BoardTitle>내가 소개한 문화 행사</BoardTitle>
                </WrapGroup>
                <WrapGroup>
                    <FlexVertical>
                        <FlexHorizontal
                            alignItems='center'
                            justifyContent='space-between'
                            gap='50px'
                            others='flex-wrap : wrap'
                        >
                            <MyPostCard>
                                {tempArray}
                            </MyPostCard>
                        </FlexHorizontal>
                    </FlexVertical>
                </WrapGroup>
            </Wrap>
        </PageContainer>
    )
}

export default UserMypage

const Wrap = styled.div`
    width:${MAINPAGE_CONTENTS_WIDTH};
    max-width: ${MAINPAGE_CONTENTS_WIDTH};
    min-height: 500px;
    height: fit-content;
    margin : 100px auto 0px auto;
`
const BoardTitle = styled.span`
    /* color: #${COLOR_THEME.COLOR_3}; */
    color: ${COLOR_THEME.COLOR_1};
    /* text-shadow: 0px 0px 5px #${COLOR_THEME.COLOR_3}; */
    font-size: 48px;
    font-weight: 900;
`
const WrapGroup = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 50px;
`
