import React from 'react';
import { CardColumns, Container } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import './ProjectPage.css';

const ProjectPage = () => {
  
  return (
    <section className="ProjectPage">
      <Container>
        <h3>My Projects</h3>
        <CardColumns>
          { projects.map(project => <ProjectCard key={project.name} project={project} />) }
        </CardColumns>
      </Container>
    </section>
  );
};

const projects = [
  {
    "name": "project 1",
    "description": "function123, tech stack a b c ....",
    "techs": ['react', 'javascript'],
    "img": "gif graph url",
    "deploy_url": "alive link for deployed app",
    "source_url": "github link for source code"
  },
  {
    "name": "project 2",
    "description": "app function....",
    "techs": ['react', 'javascript'],
    "img": "gif graph url",
    "deploy_url": "alive link for deployed app",
    "source_url": "github link for source code"
  },
  {
    "name": "project 3",
    "description": "app function....",
    "techs": ['react', 'javascript'],
    "img": "gif graph url",
    "deploy_url": "alive link for deployed app",
    "source_url": "github link for source code"
  },
];
export default ProjectPage;
