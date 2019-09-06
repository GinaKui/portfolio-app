import React from 'react';
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
    <section id="skill-page">
      <div className='container'>
        <h3>My Skills to Share</h3>
        <div className='skill-panel'>
        {skillSet.map(skill => (<SkillCard key={skill.title} title={skill.title} content={skill.content} />))}
        </div>
      </div>
    </section>
  );
}

export default SkillPage
