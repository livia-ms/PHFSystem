import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Index';
import Menu from '../menu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000;
  opacity:0.5;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  );
};

export default Header;