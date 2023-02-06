import styled from "styled-components";

const DivAboutUs = styled.div`
display: inline-block;
align-items: center;
justify-content: center;
margin-left: 380px;
`

const AboutUSP = styled.p`
display:flex;
align-items: center;
justify-content: center;
`

function AboutUs () {
    return(
        <DivAboutUs>
        <h4>Sobre Nós:</h4>
        <AboutUSP>Lorem Ipsum.</AboutUSP>
        </DivAboutUs>
    )
}

export default AboutUs;