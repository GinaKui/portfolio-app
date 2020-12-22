import React from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';

import SkillCard from '../components/SkillCard';
import './SkillPage.css';

const SkillPage = (props) => (
  <div className="Skill-parallax SkillPage">
    <Container>
      <Row>
        <Col>
          <h2>SKILLS TO SHARE</h2>
        </Col>
      </Row>
      <CardDeck>
        {props.skillSet.map(skill => 
          <SkillCard key={skill.title} title={skill.category} content={skill.content} />
        )}
      </CardDeck>
    </Container>
  </div>
);

SkillPage.defaultProps = {
  skillSet: [
    {
      'category':'Front End',
      'content': 'React, html5, css, sass, javascript, Bootstrap, Material-UI'
    },
    {
      'category':'Back End',
      'content': 'Node.js, Express.js, MongoDB, RESTful apis'
    },
    {
      'category':'Development Tooling',
      'content': 'Git, npm, webpack, babel, heroku'
    },
  ]
}

export default SkillPage
