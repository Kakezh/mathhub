import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../projects';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <img src={project.preview} alt={`${project.name} preview`} />
    </div>
  );
};

export default ProjectPage;

