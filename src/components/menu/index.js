import React from 'react';
import styled from 'styled-components';

const Options = ["Home", "About Us", "Contact"];
const MenuContainer = styled.ul`
  display: flex;
`;

const MenuContainerLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-size: 16px;
  min-width: 120px;
`;


const Menu = () => {
  return (
    <nav>
      <MenuContainer>
        {Options.map((text) => (
        <MenuContainerLi>
          <p>{text}</p>
        </MenuContainerLi>
      ))}
      </MenuContainer>
    </nav>
  );
};

export default Menu;
