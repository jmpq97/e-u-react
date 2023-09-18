import React, { useState } from 'react';
import '../styles/meet.css';
import lozanoImage from '../styles/images/Characters/Resized/Dr_Lozano.png';
import realLozano from '../styles/images/Characters/Resized/Real_Dr_Lozano.png';
import PadillaImage from '../styles/images/Characters/Resized/Dr_Padilla.png';
import realPadilla from '../styles/images/Characters/Resized/Real_Dr_Padilla.png';
import MarquezImage from '../styles/images/Characters/Resized/Dr_Marquez.png';
import realMarquez from '../styles/images/Characters/Resized/Real_Dr_Marquez.png';
import JesseImage from '../styles/images/Characters/Resized/Jesse.png';
import realJesse from '../styles/images/Characters/Resized/Real_Jesse.png';
import GregImage from '../styles/images/Characters/Resized/Greg.png';
import realGreg from '../styles/images/Characters/Resized/Real_Mr_Greg.png';


const Meet = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (index) => {
    setFlipped({ ...flipped, [index]: !flipped[index] });
  };

  const teamMembers = [
    { caricature: lozanoImage, real: realLozano, name: 'Dr. Karen Lozano' },
    { caricature: PadillaImage, real: realPadilla, name: 'Dr. Padilla' },
    { caricature: MarquezImage, real: realMarquez, name: 'Dr. Marquez' },
    { caricature: JesseImage, real: realJesse, name: 'Jesse' },
    { caricature: GregImage, real: realGreg, name: 'Greg' },
  ];

  return (
    <section className="meet-section">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="card-container" onClick={() => handleFlip(index)}>
              <div className={`team-card ${flipped[index] ? 'flipped' : ''}`}>
                <div className="front">
                  <img src={member.caricature} alt={`${member.name} caricature`} />
                </div>
                <div className="back">
                  <img src={member.real} alt={`${member.name} real`} />
                </div>
              </div>
              <h2 className='team-names'>{member.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meet;
