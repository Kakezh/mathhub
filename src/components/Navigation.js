import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/linear-algebra">Linear Algebra</a></li>
        <li><a href="/calculus">Calculus</a></li>
        <li><a href="/probability">Probability</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;


