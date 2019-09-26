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
            <h3>My Skills to Share</h3>
          </Col>
        </Row>
        <Row>
          {props.skillSet.map(skill => (<Col key={skill.title}><SkillCard title={skill.title} content={skill.content} /></Col>))}
        </Row>
      </Container>
    </section>
  );
};

SkillPage.defaultProps = {
  skillSet: [
    {
      'category':'Front End',
      'content': 'html5, css, javascript, React'
    },
    {
      'category':'Back End',
      'content': 'Node.js, Express.js, MongoDB'
    },
    {
      'category':'Development Tooling',
      'content': 'Git, npm, babel'
    },
  ]
}

export default SkillPage