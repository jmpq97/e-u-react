import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/LessonPlans.css';


// Tab content components (you'll need to create these)
import LessonPlanContent from './LessonPlanContent';
import ActivitiesContent from './ActivitiesContent';

const tabTexts = {
    en: {
        lessonPlans: 'Lesson Plans',
        activities: 'Activities'
    },
    es: {
        lessonPlans: 'Planes de Estudio',
        activities: 'Actividades'
    }
};


const Tabs = ({ activeTab, setActiveTab, selectedLanguage }) => {
    const texts = tabTexts[selectedLanguage] || tabTexts.en; // Default to English if the selected language is not found

    return (
        <div className="tabs">
            <button
                className={`tab-button ${activeTab === 'lessonPlans' ? 'active' : ''}`}
                onClick={() => setActiveTab('lessonPlans')}
            >
                {texts.lessonPlans}
            </button>
            <button
                className={`tab-button ${activeTab === 'activities' ? 'active' : ''}`}
                onClick={() => setActiveTab('activities')}
            >
                {texts.activities}
            </button>
        </div>
    );
};

const LessonPlans = ({ selectedLanguage }) => {
    const location = useLocation(); // Hook to get the current location object
    const [activeTab, setActiveTab] = useState('lessonPlans');

    useEffect(() => {
        // This effect runs when the component mounts and whenever the location changes
        const searchParams = new URLSearchParams(location.search);
        const tab = searchParams.get('tab'); // Get the 'tab' query parameter
        if (tab === 'activities') {
            setActiveTab('activities'); // Set the active tab to 'activities' if the query parameter is present
        }
    }, [location]); // Depend on location to re-run the effect when the URL changes

    return (
        <div className="lesson-plans-container">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} selectedLanguage={selectedLanguage} />
            <div className="lesson-content">
                {activeTab === 'lessonPlans' ? (
                    <LessonPlanContent selectedLanguage={selectedLanguage} />
                ) : (
                    <ActivitiesContent selectedLanguage={selectedLanguage} />
                )}
            </div>
        </div>
    );
};

export default LessonPlans;