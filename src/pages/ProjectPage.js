import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectPage.css';

const ProjectPage = () => {
  
  return (
    <section className="ProjectPage">
      <h3>Project Show</h3>
      <div className='project-panel'>
      { projects.map(project => <ProjectCard key={project.name} project={project} />) }
      </div>
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
  }
];
export default ProjectPage;
