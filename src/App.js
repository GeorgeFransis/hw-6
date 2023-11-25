// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import ApiPage from './ApiPage';
import ProjectDescription from './ProjectDescription';
import './App.css';

const App = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#3498db',
    padding: '10px',
    margin: '3px',
    border: '2px solid #3498db',
    borderRadius: '8px',
    backgroundColor: '#ecf0f1',
    transition: 'background-color 0.3s',
    display: 'inline-block',
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Assignment</h1>
        </header>

        <nav>
          <ul>
          <li>
              <Link to="/project-description" style={linkStyle}>
                Project Description
              </Link>
            </li>
            <li>
              <Link to="/tic-tac-toe" style={linkStyle}>
                Tic Tac Toe
              </Link>
            </li>
            <li>
              <Link to="/api" style={linkStyle}>
                API
              </Link>
            </li>
          </ul>
        </nav>

        <hr />

        <div style={{ padding: '1rem' }} className="content-container">
          <Routes>
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/api" element={<ApiPage />} />
            <Route path="/project-description" element={<ProjectDescription />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
