import React from 'react'
import styled from 'styled-components';
import { COLOR_THEME } from '../variables/uiVariables';

function Logo() {
    return (
        <div style={{cursor:'pointer'}}>
            <LogoSpan>S</LogoSpan>
            <LogoSmall>EOUL</LogoSmall>
            <LogoSpan>C</LogoSpan>
            <LogoSmall>ulture</LogoSmall>
            <LogoSpan>P</LogoSpan>
            <LogoSmall>ort</LogoSmall>
        </div>
    )
}

export default Logo;


const LogoSpan = styled.span`
  /* cursor: pointer; */
    font-weight: 600;
    font-size : 36px;
    color:white;
  /* color:#${COLOR_THEME.COLOR_4}; */
`;
const LogoSmall = styled.span`
    font-weight: 600;
    font-size: 18px;
    color:#${COLOR_THEME.COLOR_4};
`;