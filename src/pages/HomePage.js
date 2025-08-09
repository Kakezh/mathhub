import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="content">
      <h2>Welcome to MathHub</h2>
      <p>Your journey to understanding the math behind deep learning starts here.</p>
      <Link to="/projects">View Projects</Link>
    </div>
  );
};
export default HomePage;
