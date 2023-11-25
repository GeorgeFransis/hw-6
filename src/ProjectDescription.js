// ProjectDescription.js
import React from 'react';
import './ProjectDescription.css';

const ProjectDescription = () => {
  return (
    <div>
      <h2>Project Description</h2>
      <p className="project-description">
        This is an awesome React app showcasing a Tic Tac Toe game and an API page. The Tic Tac Toe game allows players to take turns marking the cells in a 3x3 grid, aiming to be the first to get three of their symbols in a row. The API page fetches data from a public API containing information about various APIs, displaying it in a table with pagination.

        The app is styled with a clean and modern design, featuring navigation links, loader animations, and a reset button for the Tic Tac Toe game. The use of React Router enables seamless navigation between different sections of the app.
      </p>
    </div>
  );
};

export default ProjectDescription;
