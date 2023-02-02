import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import ImgEng from '../../image/engenharia.jpg';
import ImgEng2 from '../../image/engenharia2.jpg';

const Test = styled.img`
width: 100vw;
height: 100vh;
`


function IndividualIntervalsExample() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <Test
            className="d-block w-100"
            src={ImgEng}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Test
            className="d-block w-100"
            src={ImgEng2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Test
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
    );
  }
  
  export default IndividualIntervalsExample;