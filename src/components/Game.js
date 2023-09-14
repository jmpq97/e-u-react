import React from 'react';
import '../styles/activities.css';

const Game = ({ selectedLanguage }) => {
  return (
    <div className="game-background">
      <div className="custom-container mt-5">
        <div className="custom-embed">
          <iframe
            title="Game Frame"
            frameborder="0"
            src="https://itch.io/embed-upload/8693125?color=333333"
            allowfullscreen=""
            width="1280"
            height="720">
            <a href="https://jicortez.itch.io/testhtml">Play Test on itch.io</a>
          </iframe>        </div>
      </div>
    </div>
  );
}

export default Game;
