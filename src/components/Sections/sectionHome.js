import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import background from "../../image/engenharia2.jpg";
import background2 from "../../image/engenharia.jpg";


function Home() {
    return(
        <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={background2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PHF Engenharia</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={background}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>PHF Engenharia</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={background2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>PHF Engenharia</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>       
        
    )
}

export default Home;