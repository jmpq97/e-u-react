import React from 'react';
import '../styles/activities.css';

const Game = ({ selectedLanguage }) => {
  return (
    <div className="game-background">
      <div className="custom-container">
        <div className="custom-row">
          <div className="custom-column">
            <div className="custom-embed">
              <iframe 
                className="embed-responsive-item" 
                src="https://itch.io/embed-upload/8591120?color=333333" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
