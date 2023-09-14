import React, { useState } from 'react';
import '../styles/meet.css';
import lozanoImage from '../styles/images/Lozano.png';
import PadillaImage from '../styles/images/Characters/Padilla1.png';
import YorchImage from '../styles/images/Characters/Jorge 1.png';
import JesseImage from '../styles/images/Characters/Jesse.png';
import GregImage from '../styles/images/Characters/GREG.png';


const Meet = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (index) => {
    setFlipped({ ...flipped, [index]: !flipped[index] });
  };

  const teamMembers = [
    { caricature: lozanoImage, real: 'path/to/real1.jpg', name: 'Dr. Karen Lozano' },
    { caricature: PadillaImage, real: 'path/to/real2.jpg', name: 'Dr. Padilla' },
    { caricature: YorchImage, real: 'path/to/real2.jpg', name: 'Jorge' },
    { caricature: JesseImage, real: 'path/to/real2.jpg', name: 'Jesse' },
    { caricature: GregImage, real: 'path/to/real2.jpg', name: 'Greg' },
  ];

  return (
    <section className="meet-section">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className={`team-card ${flipped[index] ? 'flipped' : ''}`} onClick={() => handleFlip(index)}>
              <div className="front">
                <img src={member.caricature} alt={`${member.name} caricature`} />
              </div>
              <div className="back">
                <img src={member.real} alt={`${member.name} real`} />
              </div>
            </div>
            <h2>{member.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meet;
