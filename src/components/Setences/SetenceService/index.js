import styled from "styled-components"

const Setence = styled.span`
font-size: 23px;
font-weight: 600;
margin-left: 25px;
display: flex;
justify-content: center;
`;

function SetenceService () {
    return(
    <Setence>Nossos Serviços:</Setence>
    )
}

export default SetenceService;