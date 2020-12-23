import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import img4 from'../img/contact-book.png';
import img3 from '../img/ekitten.png';
import img2 from '../img/githuber.png';
import img1 from '../img/service-ticket.png';
import themeColor from '../img/themeColor.png';
import hashKittenDemo from '../img/hashkitten-demo.gif';
import serviceTicketDemo from '../img/serviceticket-demo.gif';
import gitHubberDemo from '../img/githuber-demo.gif';
import contactBookDemo from '../img/contactbook-demo.gif';
import themeColorDemo from '../img/themeColor-demo.gif';
import './ProjectPage.css';

const ProjectPage = (props) => {
  
  return (
    <Container className="ProjectPage">
      <Row>
        <Col>
          <h2>MY PROJECTS</h2>
        </Col>
      </Row>
      <Row>
        {props.projects.map(project => 
          <Col sm="6" lg="4">
            <ProjectCard key={project.id} project={project} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

ProjectPage.defaultProps = {
  projects: [
    {
      "id": 1,
      "name": "service-ticket",
      "description": "React app to display service requests with modal dialog for editing. Redux toolkits are used to track status. App is styled using material-css",
      "techs": ['react', 'redux', 'javascript'],
      "img": img1,
      "demo": serviceTicketDemo,
      "deploy_url": "",
      "src_url": "https://github.com/GinaKui/service-ticket"
    },
    {
      "id": 2,
      "name": "search github users",
      "description": "SPA built by react hooks and react-router-dom. Consume github API by axios",
      "techs": ['react', 'javascript'],
      "img": img2,
      "demo": gitHubberDemo,
      "deploy_url": "https://search-github-developerkui.netlify.com/",
      "src_url": "https://github.com/GinaKui/search-github-users"
    },
    {
      "id": 3,
      "name": "hash-kitten",
      "description": "react responsive SPA making async request using fetch API. App is styled using tachyons",
      "techs": ['react', 'javascript', 'tachyons', 'scss'],
      "img": img3,
      "demo": hashKittenDemo,
      "deploy_url": "https://hashkitten19.netlify.com/",
      "src_url": "https://github.com/GinaKui/hash-kitten"
    },
    {
      "id": 4,
      "name": "contact book",
      "description": "RESTful app builted by MERN (mongoose, express, react, node.js). User authorization is implemented using json web token",
      "techs": ['React', 'Node', 'Express.js', 'MongoDB'],
      "img": img4,
      "demo": contactBookDemo,
      "deploy_url": "https://contact-book-mern.herokuapp.com",
      "src_url": "https://github.com/GinaKui/contact-book"
    },
    {
      "id": 5,
      "name": "theme color",
      "description": "Single page react app to pick color and generate theme color palette. Material-ui is used to style the app",
      "techs": ['react', 'material-ui', 'react-router-dom'],
      "img": themeColor,
      "demo": themeColorDemo,
      "deploy_url": "",
      "src_url": "https://github.com/GinaKui/theme-color"
    },
  ]
};

// TODO: - compress demo gif to reduce file size
// TODO: - add theme-color project

export default ProjectPage;
