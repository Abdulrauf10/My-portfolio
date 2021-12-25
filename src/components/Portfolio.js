import React from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import './Portfolio.css';

import Web1 from '../images/Capture.JPG';
import Web2 from '../images/react-player.JPG';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Container>
        <Card style={{ width: '60%' }} className='card'>
          <Card.Img variant="top" src={Web1} />
          <Card.Body>
            <Card.Title>List-destination</Card.Title>
            <Card.Text>
              An application to make lists for destinations place where users can input and delete a photo and descriptions. 
            </Card.Text>
            <Card.Text>
              Technologies: NodeJs, ReactJs, Redux-Thunk, MongoDB 
            </Card.Text>
            <Button href='http://tourist-destination.rauf-fullstack.com' variant="primary" className='button_toweb'>Website</Button>
            <Button href='https://github.com/Abdulrauf10/tourist-destination-final' variant="primary">Code</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '60%' }} className='card'>
          <Card.Img variant="top" src={Web2} />
          <Card.Body>
            <Card.Title>React-player + JWT Authentication</Card.Title>
            <Card.Text>
              A Website to provide videos for learning languages. To access videos, users are required to register first.
            </Card.Text>
            <Card.Text>
              Technologies: NodeJs, ReactJs, React-player, JWT, PostgreSQL
            </Card.Text>
            <Button href='http://react-player.rauf-fullstack.com' variant="primary" className='button_toweb'>Website</Button>
            <Button href='https://github.com/Abdulrauf10/react-player' variant="primary">Code</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Portfolio;
