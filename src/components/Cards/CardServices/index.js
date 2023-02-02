import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ImgEng from '../../image/engenharia.jpg';
import ImgEng2 from '../../image/engenharia2.jpg';


function GroupExample() {
  return (
    <CardGroup className='div'>
      <Card>
        <Card.Img variant="top" src={ImgEng} className="teste"/>
        <Card.Body>
          <Card.Title>Exemplo de Card</Card.Title>
          <Card.Text>
            Descrição do projeto
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ImgEng2} className="teste"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;