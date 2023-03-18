import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { ButtonSmall, FlexHorizontal, FlexVertical, HeaderContainer, StInput } from '../variables/styleStore';
import { COLOR_THEME } from '../variables/uiVariables';
import useLoginInput from '../variables/useLoginInput';
import Logo from './Logo';

function Header() {
  const navigation = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [id, onIdChangeHandler] = useLoginInput('');
  const [password, onPasswordChangeHandler] = useLoginInput('');
  const buttonOtherStyles = `
  border:2px solid #${COLOR_THEME.COLOR_4};
  border-radius: 25px;
  font-weight : 700;
  &:hover{
    font-weight : 700;
    border:2px solid white;
    color: white;
    border-radius: 25px;
  }
  `

  const toggleIsLogin = () => {
    setIsLogin((prev) => !prev);
  }

  return (
    <HeaderContainer style={{ padding: '0px 15px' }}>
      <FlexVertical
        alignItems="center"
        justifyContent="center"
        others='height:100%;'>
        <FlexHorizontal
          alignItems="center"
          justifyContent="space-between"
          others='width:100%;'>
          <Logo />
          <button onClick={()=>navigation('/user/mypage')}>마이페이지</button>
          {
            isLogin
              ? <FlexHorizontal gap="5px" alignItems="center">
                <WelcomeText>김용민 님 환영합니다.</WelcomeText>
                <ButtonSmall onClick={toggleIsLogin}>로그아웃</ButtonSmall>
                <ButtonSmall>마이페이지</ButtonSmall>
              </FlexHorizontal>
              : <form onSubmit={toggleIsLogin}>
                <FlexHorizontal gap="5px">
                  <StInput
                    value={id}
                    placeholder="ID"
                    onChange={onIdChangeHandler}
                  />
                  <StInput
                    value={password}
                    placeholder="PASSWORD"
                    onChange={onPasswordChangeHandler}
                  />
                  <ButtonSmall
                    type="submit"
                    others={buttonOtherStyles}
                    >로그인</ButtonSmall>
                  <ButtonSmall
                    type="button"
                    others={buttonOtherStyles}
                    onClick={()=>navigation("/user/join")}
                  >회원가입</ButtonSmall>
                </FlexHorizontal>
              </form>
          }
        </FlexHorizontal>
      </FlexVertical>
    </HeaderContainer>
  )
}

export default Header;

const WelcomeText = styled.span`
  /* color: #${COLOR_THEME.COLOR_4}; */
  color:white;
  font-weight: 500;
`