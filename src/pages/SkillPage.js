import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SkillCard from '../components/SkillCard';
import './SkillPage.css';

const SkillPage = (props) => {
  
  return (
    <section className='SkillPage'>
      <Container>
        <Row>
          <Col>
            <h2>SKILLS TO SHARE</h2>
          </Col>
        </Row>
        <Row>
          {props.skillSet.map(skill => (<Col key={skill.title}><SkillCard title={skill.category} content={skill.content} /></Col>))}
        </Row>
      </Container>
    </section>
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
