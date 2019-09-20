import React from 'react';
import { CardColumns } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import './ProjectPage.css';

const ProjectPage = () => {
  
  return (
    <section className="ProjectPage">
      <h3>Project Show</h3>
      <CardColumns>
        { projects.map(project => <ProjectCard key={project.name} project={project} />) }
      </CardColumns>
    </section>
  );
};

const projects = [
  {
    "name": "project abc",
    "description": "app function....",
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
