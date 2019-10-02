import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import './ProjectPage.css';

const ProjectPage = (props) => {
  
  return (
    <section className="ProjectPage">
      <Container>
        <Row>
          <Col>
            <h2>MY PROJECTS</h2>
          </Col>
        </Row>
        <Row>
          { props.projects.map(project => <Col key={project.id}><ProjectCard project={project} /></Col>) }
        </Row>
      </Container>
    </section>
  );
};

ProjectPage.defaultProps = {
  projects: [
    {
      "id": 1,
      "name": "service-ticket",
      "description": "User panel to keep track and update request ticket",
      "techs": ['react', 'redux', 'javascript'],
      "img": "gif graph url",
      "deploy_url": "",
      "src_url": "https://github.com/GinaKui/service-ticket"
    },
    {
      "id": 2,
      "name": "search github users",
      "description": "UI to query github user information",
      "techs": ['react', 'javascript'],
      "img": "gif graph url",
      "deploy_url": "https://search-github-developerkui.netlify.com/",
      "src_url": "https://github.com/GinaKui/search-github-users"
    },
    {
      "id": 3,
      "name": "hash-kitten",
      "description": "SPA to query cute kitten",
      "techs": ['react', 'javascript', 'tachyons', 'scss'],
      "img": "gif graph url",
      "deploy_url": "https://hashkitten19.netlify.com/",
      "src_url": "https://github.com/GinaKui/hash-kitten"
    },
  ]
};

export default ProjectPage;
