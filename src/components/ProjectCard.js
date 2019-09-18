import React from 'react';

import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { name, description, img } = project;
  return (
    <div className='ProjectCard'>
      <h5>{name}</h5>
      <p>{img}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard;
