import React from 'react';
import './SkillCard.css';

const SkillCard = ({ title, content }) => {
  return (
    <div className='SkillCard'>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}

export default SkillCard;
