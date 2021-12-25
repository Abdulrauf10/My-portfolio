import React from 'react'
import './Home.css';
import Profile from '../images/profile.jpg';
import { Container, Row, Col } from 'react-bootstrap';



const Home = () => {
  return (
    <div className='home_style'>
      <Container>
      <Row>
        <Col md={11}>
          <div className='main_feature'>
            <Container>
              <Row className='layout'>
                <Col className='avatar'>
                  <img src={Profile} alt='profile' className='image_profile' />
                </Col>

                <Col className='right_side'>
                  <h5>
                    Hi, My name is Rauf
                  </h5>
                  <br/>
                  <h2>Full Stack Web Development</h2>
                  <h3 className='framework'> JavaScript | ReactJs | NodeJs</h3>
                  <a href='/portfolio' className='to_portfolio'>See My Work</a>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>

        <Col md={1}>
          <div className='layout_socialmedia'>
            <ul className='social_media'>
              <li>
                <a href='https://www.linkedin.com/in/muhammad-abdul-rauf-44b5a1171/'>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href='https://github.com/Abdulrauf10'>
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a href='https://rauf-story.medium.com/'>
                  <i className="fab fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home
