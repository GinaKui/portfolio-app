import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SkillCard from '../components/SkillCard';
import './SkillPage.css';

const SkillPage = () => {
  const skillSet = [
    {
      'title':'Front End',
      'content': 'html5, css, javascript, React'
    },
    {
      'title':'Back End',
      'content': 'Node.js, Express.js, MongoDB'
    },
    {
      'title':'Development Tooling',
      'content': 'Git, npm, babel'
    },
  ];
  return (
    <section className='SkillPage'>
      <Container>
        <Row>
          <Col>
            <h3>My Skills to Share</h3>
          </Col>
        </Row>
        <Row>
          {skillSet.map(skill => (<Col key={skill.title}><SkillCard title={skill.title} content={skill.content} /></Col>))}
        </Row>
      </Container>
    </section>
  );
}

export default SkillPage
