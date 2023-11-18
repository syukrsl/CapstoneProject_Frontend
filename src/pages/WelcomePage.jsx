import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to Sphere</h1>
      <nav>
        <ul>
          <li><Link to="/todos">To-Do List</Link></li>
          <li><Link to="/notes">Meeting Notes</Link></li>
          <li><Link to="/games">Classic Games</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default WelcomePage;
