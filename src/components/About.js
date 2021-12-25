import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <div className='about_me'>
          <h3>About me</h3>
          <h6>A Full-stack web developer that works with JavaScript including NodeJs and ReactJs but enjoys learning new technologies. </h6>
          <h3>Skills</h3>
          <ul>
            <li>
              JavaScript
            </li>
            <li>
              NodeJs
            </li>
            <li>
              ReactJs
            </li>
            <li>
              Express
            </li>
            <li>
              PostgreSQL
            </li>
            <li>
              MySQL
            </li>
            <li>
              MongoDB
            </li>
            <li>
              Jest
            </li>
            <li>
              React-Redux
            </li>
          </ul>

          <h3>Education</h3>
          <p>Binar Academy</p>
          <h6>Full-Stack Web Development</h6>
          <p>March - October, 2021</p>
        </div>
      </Container>
    </div>
  )
}

export default About
