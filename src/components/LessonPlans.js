import React from 'react';

// Importing styles and images
import '../styles/LessonPlans.css';
import Elem_School from '../styles/images/lesson_plans/Elementary_School.jpg';
import Middle_School from '../styles/images/lesson_plans/Middle_School.jpg';
import High_School from '../styles/images/lesson_plans/High_School.jpg';

const LessonPlans = () => {
    return (
        <div className="lesson-plans-container">
            <div className="lesson-content">
                <section className="grade-section">
                    <img src={Elem_School} alt="Elementary illustration" />
                    <p>Description for elementary grade lesson plans.</p>
                    <a href="/path/to/elementary-plan.docx" download>Download</a>
                </section>

                <section className="grade-section">
                    <img src={Middle_School} alt="Middle School illustration" />
                    <p>Description for middle school grade lesson plans.</p>
                    <a href="/path/to/middle-school-plan.docx" download>Download</a>
                </section>

                <section className="grade-section">
                    <img src={High_School} alt="High School illustration" />
                    <p>Description for high school grade lesson plans.</p>
                    <a href="/path/to/high-school-plan.docx" download>Download</a>
                </section>
            </div>
        </div>
    );
};

export default LessonPlans;
