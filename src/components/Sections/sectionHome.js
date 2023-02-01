import React from "react";

import styled from "styled-components";

const BodyHome = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f000;
    background-image: url("./image/engenharia.jpg");
    background-size: cover;
    color: #000;
    display: flex;
    Justify-content: center;
    align-items: center;
`;

function Home() {
    return(
        <BodyHome>
            <h2>PHF Engenharia - Home Section</h2>            
        </BodyHome>
        
    )
}

export default Home;