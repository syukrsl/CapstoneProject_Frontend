import React from 'react';
import { Link } from 'react-router-dom';
import './AuthenticatedHome.css'; // Import your custom CSS file for styling

function AuthenticatedHome() {
  return (
    <div className="authenticated-home">
      <h1>Welcome to Sphere</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/todos" className="nav-link">To-Do List</Link>
        </li>
        <li className="nav-item">
          <Link to="/notes" className="nav-link">Meeting Notes</Link>
        </li>
        <li className="nav-item">
          <Link to="/games" className="nav-link">Classic Games</Link>
        </li>
        <li className="nav-item">
          <Link to="/news" className="nav-link">News</Link>
        </li>
      </ul>
    </div>
  );
}

export default AuthenticatedHome;
