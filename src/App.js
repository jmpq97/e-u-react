import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing componentsgit 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game from './components/Game';
import FAQ from './components/FAQ';
import Homework from './components/Homework';
import Footer from './components/Footer';

// Import global styles
import './styles/stylesheet.css';
import './styles/header_EU.css';
import './styles/landing_page.css';
import './styles/faq.css';
import './styles/activities.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onLanguageChange={handleLanguageChange} />
        <main>
          <Routes>
            <Route path="/" element={<Home selectedLanguage={selectedLanguage} />} exact />
            <Route path="/game" element={<Game />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/homework" element={<Homework />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
