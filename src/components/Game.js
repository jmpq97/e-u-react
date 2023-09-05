import React from 'react';
import '../styles/activities.css';

const Game = ({ selectedLanguage }) => {
  return (
    <div className="game-background">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="embed-responsive embed-responsive-16by9 shadow-lg rounded">
              <iframe 
                className="embed-responsive-item" 
                src="https://itch.io/embed-upload/8591120?color=333333" 
                allowfullscreen="">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
