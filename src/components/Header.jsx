import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeCookie } from "../axios/cookies";
import { initLoginStatus, logout, toggleIsLogin, __login } from "../redux/modules/userSlice";
import {
  ButtonSmall,
  FlexHorizontal,
  FlexVertical,
  HeaderContainer,
  StInput,
} from "../variables/styleStore";
import { COLOR_THEME } from "../variables/uiVariables";
import useLoginInput from "../variables/useLoginInput";
import Logo from "./Logo";

function Header() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  // const [isLogin, setIsLogin] = useState(false);
  const { user, isLogin, isLoading, error } = useSelector(
    (state) => state.user
  );
  const [id, onIdChangeHandler] = useLoginInput("");
  const [password, onPasswordChangeHandler] = useLoginInput("");
  const buttonOtherStyles = `
    border: 1px solid ${COLOR_THEME.COLOR_4};
    border-radius: 17px;
    font-weight : 700;
    &:hover{
      font-weight : 700;
      border-color: #070505;
      color: white;
    }
  `;

  const localCheck = () => {
    const local = JSON.parse(localStorage.getItem('userInfo'));
    if (local) {
      dispatch(initLoginStatus(local));
    }
  }
  useEffect(() => {
    localCheck();
  },[]);

  const logoutClickHandler = () => {
    dispatch(logout());
    navigation("/");
  };
  const loginClickHandler = (e) => {
    e.preventDefault();
    const logInUser = {
      loginid: id,
      password: password,
    };
    dispatch(__login(logInUser));
    console.log("isLogin: ", isLogin);
  };
  const toggle = () => {
    dispatch(toggleIsLogin());
  };

  return (
    <HeaderContainer style={{ padding: "0px 15px" }}>
      <FlexVertical
        alignItems="center"
        justifyContent="center"
        others="height:100%;"
      >
        <FlexHorizontal
          alignItems="center"
          justifyContent="space-between"
          others="width:100%;"
        >
          <Logo />
          {isLogin ? (
            <div>
              <FlexHorizontal gap="5px" alignItems="center">
                <WelcomeText>{user?.nickname} 님 환영합니다.</WelcomeText>
                <ButtonSmall onClick={logoutClickHandler}>로그아웃</ButtonSmall>
                <ButtonSmall onClick={() => navigation("/user/mypage")}>
                  마이페이지
                </ButtonSmall>
              </FlexHorizontal>
            </div>
          ) : (
            <form onSubmit={(e) => loginClickHandler(e)}>
              <FlexHorizontal gap="5px">
                <StInput
                  value={id}
                  placeholder="ID"
                  onChange={onIdChangeHandler}
                />
                <StInput
                  value={password}
                  type="password"
                  placeholder="PASSWORD"
                  onChange={onPasswordChangeHandler}
                />
                <ButtonSmall type="submit" others={buttonOtherStyles}>
                  로그인
                </ButtonSmall>
                <ButtonSmall
                  type="button"
                  others={buttonOtherStyles}
                  onClick={() => navigation("/user/join")}
                >
                  회원가입
                </ButtonSmall>
              </FlexHorizontal>
            </form>
          )}
        </FlexHorizontal>
      </FlexVertical>
    </HeaderContainer>
  );
}

export default Header;

const WelcomeText = styled.span`
  /* color: #${COLOR_THEME.COLOR_4}; */
  color: white;
  font-weight: 500;
`;
