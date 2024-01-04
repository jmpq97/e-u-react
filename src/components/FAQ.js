import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/faq.css';

import img1 from '../styles/images/FAQ/carr_1.jpg';
import img2 from '../styles/images/FAQ/carr_2.jpg';
import img3 from '../styles/images/FAQ/carr_3.jpg';

const FAQ = () => {
  return (
    <div className="faq-section">
      <div className="top-section"></div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" data-bs-target="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" data-bs-target="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      <div className="faq-item">
        <div className="faq-question">
          What is Energy & U?
        </div>
        <div className="faq-answer">
        Energy and U is a fully produced, on-stage science extravaganza that provides an understanding of the first law of thermodynamics to students across elementary, middle, and high-school levels. Our mission extends beyond the stage; we intend to provide a comprehensive educational and fun experience empowering both students and teachers by equipping them with the necessary tools to master the first law of thermodynamics in and out of the classroom. E&U was originally conceived and developed at the University of Minnesota in 2007 by Professors Marc Hillmyer, Frank Bates, and David Blank, and currently (at UMN) under the direction of Professor Aaron Massari. In 2019, E&U was significantly enriched, migrated to South Texas, and translated to Spanish by a team led by Professors Karen Lozano, Arturo Fuentes, and Brian Warren. Numerous outstanding students and staff from UMN and UTRGV have actively participated in E&U. 
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          How can I join the Energy & U Adventure?
        </div>
        <div className="faq-answer">
         Joining the Energy & U Adventure is easy and accessible to anyone interested in energy! Energy and U remains a FREE live show at the University of Texas Rio Grande Valley and at The University of Minnesota, through this website we are further expanding our reach. Here, you can start or continue the learning experience through interactive games and lesson plans.
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          Where can I find more information about the upcoming shows?
        </div>
        <div className="faq-answer">
          Stay tuned for more news at <a href="http://www.utrgv.edu/energy&U" target="_blank" rel="noopener noreferrer">www.utrgv.edu/energy&U</a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
