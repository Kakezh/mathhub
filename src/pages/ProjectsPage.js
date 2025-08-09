import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'Project 1', id: 'project-1' },
  { name: 'Project 2', id: 'project-2' },
];

const ProjectsPage = () => (
  <div>
    <h2>Projects</h2>
    {projects.map(project => <div key={project.id}><Link to={`/project/${project.id}`}>{project.name}</Link></div>)}
  </div>
);
