import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from '../variables/styleStore';

function Header() {
  const navigation = useNavigate();

  return (
    <HeaderContainer>
      <button onClick={()=>navigation('/')}>Home</button>
      <button onClick={()=>navigation('/bbs/detail')}>Detail</button>
      <button onClick={()=>navigation('/user/mypage')}>Mypage</button>
    </HeaderContainer>
  )
}

export default Header