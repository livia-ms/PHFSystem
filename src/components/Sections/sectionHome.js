import React from "react";
import Carousel from 'react-bootstrap/Carousel';

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
        <div>
        <BodyHome style={{backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
        }}>

        <HomeTittle>PHF Engenharia - Home Section</HomeTittle> 

        <TextContentPrimary>Nossa empresa é especializada na confecção de plantas
        das mais diversas formas que você pode imaginar.</TextContentPrimary>
        </BodyHome>

        <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>

        
        
    )
}

export default Home;