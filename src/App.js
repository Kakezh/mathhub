import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <HomePage />
    </div>
  );
};

export default App;

