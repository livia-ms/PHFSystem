import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
`;

const LogoContainerImg = styled.img`
  margin-right: 10px;
`;

const LogoH4 = styled.span`
  display: flex;
`

function Logo() {
  return (
    // <LogoContainer>
    //   {/* <LogoContainerImg src={logo} alt="Logo"/> */}
    //   </LogoContainer>
      <LogoH4>PHF Engenharia</LogoH4>

        
  );
}

export default Logo;
