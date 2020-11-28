import React from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';

import SkillCard from '../components/SkillCard';
import './SkillPage.css';

const SkillPage = (props) => {
// TODO: - add parallax effect
  return (
    <>
    <div className="Skill-parallax"></div>
    <Container className='SkillPage'>
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
    <div className="Skill-parallax"></div>
    </>
  );
};

SkillPage.defaultProps = {
  skillSet: [
    {
      'category':'Front End',
      'content': 'React, html5, css, javascript'
    },
    {
      'category':'Back End',
      'content': 'Node.js, Express.js, MongoDB'
    },
    {
      'category':'Development Tooling',
      'content': 'Git, npm, webpack, babel'
    },
  ]
}

export default SkillPage
