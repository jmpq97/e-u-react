import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';

const ConditionalFooter = () => {
    const location = useLocation();
    return location.pathname !== '/game' ? <Footer /> : null;
};

export default ConditionalFooter;
