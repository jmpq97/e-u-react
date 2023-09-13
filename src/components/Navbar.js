import React, { useState } from 'react';
import '../styles/header_EU.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = ({onLanguageChange}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = {
    en: { Activities: 'Activities', FAQ: 'FAQ', label: 'ENG' },
    es: { Activities: 'Actividades', FAQ: 'Preguntas Frecuentes', label: 'ESP' },
  };

  const handleLanguageClick = (event) => {
    const lang = event.currentTarget.getAttribute('data-lang');
    setSelectedLanguage(lang);
    onLanguageChange(lang);
    event.preventDefault();
  };

  const renderLanguageLink = (lang) => (
    <a
      href="#"
      className={`language-link ${selectedLanguage === lang ? 'selected' : ''}`}
      data-lang={lang}
      onClick={handleLanguageClick}
    >
      {languages[lang].label}
    </a>
  );

  return (
    <header className="header_EU">
      <div className="col left-section-EU">
        <div className="containerLogo">
          <img className="rotate-center" src="images/energy-and-u-white.png" alt="Logo Image" />
        </div>
      </div>
      <div className="middle-section-header">
        <span className="middleTitle">Energy & U</span>
      </div>
      <div className="col right-section-EU text-end">
        <div className="dropdown d-md-none">
          <Dropdown>
            <Dropdown.Toggle className="btn green-dropdown-btn responsive-dropdown-btn" id="dropdownMenuButton">
              Menu <i className="fas fa-chevron-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/game">{languages[selectedLanguage].Activities}</Dropdown.Item>
              <Dropdown.Item href="/faq">{languages[selectedLanguage].FAQ}</Dropdown.Item>
              {Object.keys(languages).map(lang => selectedLanguage !== lang && renderLanguageLink(lang))} {/* render alternate language */}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-none d-md-inline-block">
          <a className={`Activities d-inline-block`} href="/game">{languages[selectedLanguage].Activities}</a>
          <a className="FAQ d-inline-block" href="/faq">{languages[selectedLanguage].FAQ}</a>
          <div className="language-switcher d-inline-block">
            {Object.keys(languages).map(renderLanguageLink)}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;