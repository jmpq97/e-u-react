import React, { useState } from 'react';
import LessonPlans from './LessonPlans';
import ActivitiesContent from './ActivitiesContent';

const EducationalContent = ({ selectedLanguage }) => {
  const [activeSection] = useState('lessonPlans');

  return (
    <div>
      {/* Tab buttons to switch between lesson plans and activities */}

      {/* Conditional rendering based on active section */}
      {activeSection === 'lessonPlans' ? (
        <LessonPlans selectedLanguage={selectedLanguage} />
      ) : (
        <ActivitiesContent selectedLanguage={selectedLanguage} />
      )}
    </div>
  );
};

export default EducationalContent;
