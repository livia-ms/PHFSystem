import styled from "styled-components";
import logo from "../../image/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: flex-start;
  background-color: #fff;
`;

function Logo() {
  return (
    <LogoContainer>
        <img src={logo} alt="Logo"/>
    </LogoContainer>

        
  );
}

export default Logo;
