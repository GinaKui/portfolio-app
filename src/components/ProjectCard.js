import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, description, img } = project;
  return (
    <div>
      <h5>{name}</h5>
      <p>{img}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard;
