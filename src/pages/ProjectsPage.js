import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects';

const ProjectsPage = () => (
  <div>
    <h2>Projects</h2>
    {projects.map(project => (
      <div key={project.id}>
        <Link to={`/project/${project.id}`}>
          <h3>{project.name}</h3>
          <img src={project.preview} alt={`${project.name} preview`} />
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectsPage;
