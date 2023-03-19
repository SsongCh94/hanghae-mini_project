import React from 'react'
import styled from 'styled-components';
import { ButtonLarge, ButtonMiddle, ButtonSmall, FlexHorizontal, FlexVertical, StInput } from '../variables/styleStore';
import useLoginInput from '../variables/useLoginInput';
import ModalInputSet from './ModalInputSet';

function ModalModify({ call }) {
    const [nickname, onNicknameChangeHandler] = useLoginInput('');
    const [password, onPasswordChangeHandler] = useLoginInput('');

    const propsForNickname = {
        value: nickname,
        onChange: onNicknameChangeHandler,
        minLength: 2,
        maxLength: 8,
        placeHolder: '닉네임',
        type: 'text',
        buttonText: '닉네임 변경'
    }
    const propsForPassword = {
        value: password,
        onChange: onPasswordChangeHandler,
        minLength: 8,
        maxLength: 15,
        placeHolder: 'Password',
        type: 'password',
        buttonText: '비밀번호 변경'
    }


    return (
        <ModalRoot>
            <FlexVertical alignItems='center' justifyContent='center'>
                <BoxBorderStyle>
                    <WhiteBox>
                        <FlexVertical alignItems='center' justifyContent='center' gap='50px'>
                            <ModalInputSet>{propsForPassword}</ModalInputSet>
                            <ModalInputSet>{propsForNickname}</ModalInputSet>
                            <FlexHorizontal justifyContent='space-between' others='margin-top: 30px;'>
                                <FlexHorizontal justifyContent='center'>
                                    <StSpan>
                                        비밀번호는 8~15글자입니다.<br />
                                        닉네임은 2~8글자입니다.
                                    </StSpan>
                                </FlexHorizontal>
                                <FlexHorizontal justifyContent='right'>
                                    <ButtonMiddle type='button' onClick={call}>닫기</ButtonMiddle>
                                </FlexHorizontal>
                            </FlexHorizontal>
                        </FlexVertical>
                    </WhiteBox>
                </BoxBorderStyle>
            </FlexVertical>
        </ModalRoot>
    )
}

export default ModalModify;

const StSpan = styled.span`
    font-size: 14px;
    font-weight: 300;
`
const BoxBorderStyle = styled.div`
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0px 0px 10px white;
`

const ModalRoot = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    z-index: 100;
    width: 100vw;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
`

const WhiteBox = styled.div`
    width: 350px;
    height: fit-content;
    background-color: white;
    padding: 60px;
`