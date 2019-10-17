import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const { name, description, img } = project;
  return (
    <div className='ProjectCard'>
      <Card>
        <CardImg top src={img} alt='app screenshot' width='200px' height='150px'/>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          { project.src_url && <CardLink href={project.src_url}><i className="fab fa-github" title="github source code"></i></CardLink> }
          { project.deploy_url && <CardLink href="project.deploy_url">deployment</CardLink> }
        </CardBody>
      </Card>
    </div>
  )
};

ProjectCard.defaultProps = {
  project: {
    name: 'project',
    description: 'brief description',
    img: 'image url'
  }
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
}
export default ProjectCard;
