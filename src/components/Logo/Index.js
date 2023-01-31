import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
`;

const LogoContainerImg = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      {/* <LogoContainerImg src={logo} alt="Logo"/> */}
      <p>
        <strong>PHF</strong> Engenharia
      </p>
    </LogoContainer>
  );
}

export default Logo;
