import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgCard from '../../../image/engenharia2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
  return (
    <div style={{display: 'flex',
                 justifyContent: 'center',
                 marginTop: '20px'}}>
    <Card style={{ width: '18rem',
                   margin:'20px' }}>
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',
                   margin:'20px' }}>
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', 
                   margin:'20px' }}>
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',
                   margin:'20px'  }}>
      <Card.Img variant="top" src={imgCard} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;