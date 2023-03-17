import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from '../variables/styleStore';

function Header() {
  const navigation = useNavigate();

  return (
    <HeaderContainer>
      <button onClick={()=>navigation('/')}>Home</button>
      <button onClick={()=>navigation('/detail')}>Detail</button>
      <button onClick={()=>navigation('/mypage')}>Mypage</button>
    </HeaderContainer>
  )
}

export default Header