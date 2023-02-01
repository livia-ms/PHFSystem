import React from "react";

import styled from "styled-components";
import background from "../../image/engenharia2.jpg";

const BodyHome = styled.div`
    width: 100%;
    height:100vh;
    text-align: center;
`;

const HomeTittle = styled.h2`
    font-size:3.3rem;
    letter-spacing: 4px;
    padding-top: 185px;
    color:#fff;
`;

const TextContentPrimary = styled.p`
    font-size:1.5rem;
    letter-spacing: 2px;
    padding-top:100px;
`;


function Home() {
    return(
        <BodyHome style={{backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
        }}>

        <HomeTittle>PHF Engenharia - Home Section</HomeTittle> 

        <TextContentPrimary>Nossa empresa é especializada na confecção de plantas
        das mais diversas formas que você pode imaginar.</TextContentPrimary>
        </BodyHome>

        
        
    )
}

export default Home;