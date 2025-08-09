import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/linear-algebra">Linear Algebra</Link></li>
        <li><Link to="/calculus">Calculus</Link></li>
        <li><Link to="/probability">Probability</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;


