import React from 'react';
import '../styles/activities.css';

const Game = ({ selectedLanguage }) => {
  return (
    <div className="game-background">
      <div className="top-section"></div>
      <div className="custom-container mt-5">
        <div className="custom-embed">
        <iframe frameborder="0" src="https://itch.io/embed-upload/9100447?color=333333" allowfullscreen="" width="960" height="560"><a href="https://jicortez.itch.io/testhtml">Play Energy &amp; U Game Beta on itch.io</a></iframe>
        </div>
      </div>
    </div>
  );
}

export default Game;
