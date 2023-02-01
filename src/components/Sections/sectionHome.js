import React from "react";

import styled from "styled-components";
import background from "../../image/engenharia.jpg";


const Img = styled.img`
    width: 100%;
    height: 200px;

`;
const BodyHome = styled.div`
    width: 100%;
    height:100vh;
    background-color: #636e72;
    color: #000;
    text-align: center;
`;



function Home() {
    return(
        <BodyHome style={{backgroundImage: `url(${background})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat"
        }}>
            <h2>PHF Engenharia - Home Section</h2> 

            <p>Nossa empresa é especializada na confecção de plantas
                das mais diversas formas que você pode imaginar</p>  
            
        </BodyHome>

        
        
        
    )
}

export default Home;