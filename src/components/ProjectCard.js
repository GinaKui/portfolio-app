import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { name, description, img } = project;
  return (
    <div className='ProjectCard'>
      <Card>
        <CardImg src={img} />
        <CardBody>
          <CardTitle>{name}</CardTitle>

          <CardText>{description}</CardText>
          <CardLink>Link to Source Code</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProjectCard;
