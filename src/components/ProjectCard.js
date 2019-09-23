import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { name, description, img } = project;
  return (
    <div className='ProjectCard'>
      <Card body>
        <CardImg top src={img} alt='project screenshot'/>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <CardLink href="#">github</CardLink>
          <CardLink href="#">live</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProjectCard;
