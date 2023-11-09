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
                    <p>
                        <strong>🌟 Dive into the world of energy with 'Energy & U!' 🌟</strong>
                        {'\n'}
                        Explore the magic behind how things move, glow, and heat up. Discover what energy means to scientists and engineers through exciting experiments. 
                        {'\n'}
                        By the end, you'll unlock the mysteries of the first law of Thermodynamics and uncover the many wonders of energy. 
                        {'\n'}
                        Get ready for a journey where you'll see, feel, and experience energy like never before
                        </p>
                    <a href="/lesson_plans/E&U_Elementary_School.pdf" download>Download</a>
                </section>

                <section className="grade-section">
                    <img src={Middle_School} alt="Middle School illustration" />
                    <p>
                        <strong>🔍 Journey with 'Energy & U' at the middle school level! 🔍</strong>
                        {'\n'}
                        Uncover the mysteries of energy and its wonders. Discover what energy truly means for scientists and engineers through hands-on experiments. 
                        {'\n'}
                        Dive into the world of thermodynamics, explore different forms of energy, and see the magic behind force, motion, and Newton's laws. 
                        {'\n'}
                        Plus, get a deeper grasp of matter and its properties, all while having fun! Let's unlock the power of energy together!
                        </p>
                    <a href="/lesson_plans/E&U_Middle School.pdf" download>Download</a>
                </section>

                <section className="grade-section">
                    <img src={High_School} alt="High School illustration" />
                    <p>
                        <strong>📚 Embark on an advanced exploration with 'Energy & U' for high school! 📚</strong>
                        {'\n'}
                        Dive deeper into the intricacies of energy, from its foundational concepts to its real-world applications. Grasp the first law of Thermodynamics,
                        {'\n'}
                        delve into the diverse energy types, and experience firsthand the transformative power of energy through captivating onstage experiments.
                        {'\n'}
                        Whether it's biology's systems and interactions, chemistry's energy reactions, or the conservation principles in physics, this journey
                        {'\n'}
                        offers a comprehensive understanding tailored for the mature minds. Dive in and illuminate the universe of energy with us!
                        </p>
                    <a href="/lesson_plans/E&U_High_School.pdf" download>Download</a>
                </section>
            </div>
        </div>
    );
};

export default LessonPlans;
