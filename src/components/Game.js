import React from 'react';
import '../styles/activities.css';

const Game = ({ selectedLanguage }) => {
  return (
    <div className="game-background">
      <div className="custom-container mt-5">
        <div className="custom-embed">
          <iframe 
            className="custom-iframe"
            src="https://itch.io/embed-upload/8591120?color=333333" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}


export default Game;
