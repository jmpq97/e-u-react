import React, { useState } from 'react';
import '../styles/header_EU.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation } from 'react-router-dom';

const Navbar = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = {
    en: { Home: 'Home', Activities: 'Games', FAQ: 'FAQ', Downloads: 'Lesson Plans', Meet: 'Meet', label: 'ENG' },
    es: { Home: 'Inicio', Activities: 'Juegos', FAQ: 'Preguntas', Downloads: 'Planificaciones', Meet: 'Encuentro', label: 'ESP' },
  };

  const handleLanguageClick = (event) => {
    const lang = event.currentTarget.getAttribute('data-lang');
    setSelectedLanguage(lang);
    onLanguageChange(lang);
    event.preventDefault();
  };

  const renderLanguageLink = (lang) => (
    <a
      href="/#"
      className={`language-link ${selectedLanguage === lang ? 'selected' : ''}`}
      data-lang={lang}
      onClick={handleLanguageClick}
    >
      {languages[lang].label}
    </a>
  );

  const pageTitles = {
    '/': { en: 'Energy & U', es: 'Energy & U' },
    '/game': { en: 'Games', es: 'Juegos' },
    '/faq': { en: 'FAQ', es: 'Preguntas Frecuentes' },
    '/meet': { en: 'Our team', es: 'Nuestro equipo' },
    '/lesson-plans': { en: 'Downloads', es: 'Descargas' },

  };

  const location = useLocation();

  const navOptions = {
    '/': [<a className="Activities d-inline-block" href="/game">{languages[selectedLanguage].Activities}</a>, <a className="Downloads d-inline-block" href="/lesson-plans">{languages[selectedLanguage].Downloads}</a>, <a className="FAQ d-inline-block" href="/faq">{languages[selectedLanguage].FAQ}</a>],
    '/game': [<a className="Home d-inline-block" href="/">{languages[selectedLanguage].Home}</a>, <a className="Downloads d-inline-block" href="/lesson-plans">{languages[selectedLanguage].Downloads}</a>, <a className="FAQ d-inline-block" href="/faq">{languages[selectedLanguage].FAQ}</a>],
    '/faq': [<a className="Home d-inline-block" href="/">{languages[selectedLanguage].Home}</a>, <a className="Activities d-inline-block" href="/game">{languages[selectedLanguage].Activities}</a>, <a className="Downloads d-inline-block" href="/lesson-plans">{languages[selectedLanguage].Downloads}</a>],
    '/meet': [<a className="Home d-inline-block" href="/">{languages[selectedLanguage].Home}</a>, <a className="Activities d-inline-block" href="/game">{languages[selectedLanguage].Activities}</a>, <a className="Downloads d-inline-block" href="/lesson-plans">{languages[selectedLanguage].Downloads}</a>, <a className="FAQ d-inline-block" href="/faq">{languages[selectedLanguage].FAQ}</a>],
    '/lesson-plans': [
      <a className="Home d-inline-block" href="/">{languages[selectedLanguage].Home}</a>,
      <a className="Activities d-inline-block" href="/game">{languages[selectedLanguage].Activities}</a>,
      <a className="FAQ d-inline-block" href="/faq">{languages[selectedLanguage].FAQ}</a>,
      // Other links as necessary...
    ],

  };

  const currentOptions = navOptions[location.pathname] || [<a className="Home d-inline-block" href="/">{languages[selectedLanguage].Home}</a>, <a className="Activities d-inline-block" href="/game">{languages[selectedLanguage].Activities}</a>, <a className="Downloads d-inline-block" href="/lesson-plans">{languages[selectedLanguage].Downloads}</a>, <a className="FAQ d-inline-block" href="/faq">{languages[selectedLanguage].FAQ}</a>];

  return (
    <header className="header_EU">
      <div className="col left-section-EU">
        <div className="containerLogo">
        <a href="/" className="logo-link">
          <img className="rotate-center" src="images/energy-and-u-white.png" alt="Logo" />
          </a>
        </div>
      </div>
      <div className="middle-section-header">
        <span className="middleTitle">{pageTitles[location.pathname][selectedLanguage] || 'Energy & U'}</span>
      </div>
      <div className="col right-section-EU text-end">
        <div className="dropdown d-md-none">
          <Dropdown>
            <Dropdown.Toggle className="btn green-dropdown-btn responsive-dropdown-btn" id="dropdownMenuButton">
              Menu <i className="fas fa-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {currentOptions.map((option, index) => (
                <Dropdown.Item key={index} as="span">
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-none d-md-inline-block">
          {currentOptions.map(option => option)}
          <div className="language-switcher d-inline-block">
            {Object.keys(languages).map(renderLanguageLink)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;