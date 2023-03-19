import React from "react";
import { FlexVertical, FooterContainer } from "../variables/styleStore";

function Footer() {
  return (
    <FooterContainer>
      <FlexVertical
        alignItems="center"
        justifyContent="center"
        others="height:100%"
      >
        <span>FE : 김용민, 송철환</span>
        <span>BE : 노명빈, 장진혁, 홍다정</span>
      </FlexVertical>
    </FooterContainer>
  );
}

export default Footer;
