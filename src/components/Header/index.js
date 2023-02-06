import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Index';
import Menu from '../menu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  // align-items: center;
  padding-top:10px;
  background-image: #1e272e;
  color: black;
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