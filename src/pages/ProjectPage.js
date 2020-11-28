import React from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import img4 from'../img/contact-book.png';
import img3 from '../img/ekitten.png';
import img2 from '../img/githuber.png';
import img1 from '../img/service-ticket.png';
import './ProjectPage.css';

const ProjectPage = (props) => {
  
  return (
    <Container className="ProjectPage">
      <Row>
        <Col>
          <h2>MY PROJECTS</h2>
        </Col>
      </Row>
      <CardDeck>
        {props.projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </CardDeck>
    </Container>
  );
};

ProjectPage.defaultProps = {
  projects: [
    {
      "id": 1,
      "name": "service-ticket",
      "description": "user panel to track request tickets",
      "techs": ['react', 'redux', 'javascript'],
      "img": img1,
      "deploy_url": "",
      "src_url": "https://github.com/GinaKui/service-ticket"
    },
    {
      "id": 2,
      "name": "search github users",
      "description": "UI to search for github user",
      "techs": ['react', 'javascript'],
      "img": img2,
      "deploy_url": "https://search-github-developerkui.netlify.com/",
      "src_url": "https://github.com/GinaKui/search-github-users"
    },
    {
      "id": 3,
      "name": "hash-kitten",
      "description": "SPA to display cute kittens",
      "techs": ['react', 'javascript', 'tachyons', 'scss'],
      "img": img3,
      "deploy_url": "https://hashkitten19.netlify.com/",
      "src_url": "https://github.com/GinaKui/hash-kitten"
    },
    {
      "id": 4,
      "name": "contact book",
      "description": "full stack app with JWT user auth",
      "techs": ['React', 'Node', 'Express.js', 'MongoDB'],
      "img": img4,
      "deploy_url": "https://contact-book-mern.herokuapp.com",
      "src_url": "https://github.com/GinaKui/contact-book"
    }
  ]
};

export default ProjectPage;
