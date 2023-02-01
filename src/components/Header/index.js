import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Index';
import Menu from '../menu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
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