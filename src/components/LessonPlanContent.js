import React from 'react';

// Image imports
import ElemSchool from '../styles/images/lesson_plans/Elementary_School.jpg';
import MidSchool from '../styles/images/lesson_plans/Middle_School.jpg';
import HighSchool from '../styles/images/lesson_plans/High_School.jpg';

const texts = {
    en: {
        elementary: {
            title: "🌟 Dive into the world of energy with 'Energy & U!' 🌟",
            description: "Explore the magic behind how things move, glow, and heat up. Discover what energy means to scientists and engineers through exciting experiments. By the end, you'll unlock the mysteries of the first law of Thermodynamics and uncover the many wonders of energy. Get ready for a journey where you'll see, feel, and experience energy like never before.",
            download: "Download",
            imageAlt: "Elementary illustration",
            pdfLink: "/lesson_plans/E&U_Elementary_School.pdf"
        },
        middle: {
            title: "🔍 Journey with 'Energy & U' at the middle school level! 🔍",
            description: "Uncover the mysteries of energy and its wonders. Discover what energy truly means for scientists and engineers through hands-on experiments. Dive into the world of thermodynamics, explore different forms of energy, and see the magic behind force, motion, and Newton's laws. Plus, get a deeper grasp of matter and its properties, all while having fun! Let's unlock the power of energy together!",
            download: "Download",
            imageAlt: "Middle illustration",
            pdfLink: "/lesson_plans/E&U_Middle School.pdf"
        },
        high: {
            title: "📚 Embark on an advanced exploration with 'Energy & U' for high school! 📚",
            description: "Dive deeper into the intricacies of energy, from its foundational concepts to its real-world applications. Grasp the first law of Thermodynamics, delve into the diverse energy types, and experience firsthand the transformative power of energy through captivating onstage experiments. Whether it's biology's systems and interactions, chemistry's energy reactions, or the conservation principles in physics, this journey offers a comprehensive understanding tailored for the mature minds. Dive in and illuminate the universe of energy with us!",
            download: "Download",
            imageAlt: "Elementary illustration",
            pdfLink: "/lesson_plans/E&U_High_School.pdf"
        },
    },
    es: {
        elementary: {
            title: "🌟 ¡Sumérgete en el mundo de la energía con 'Energy & U!' 🌟",
            description: "Explora la magia detrás del movimiento, el brillo y el calentamiento de las cosas. Descubre qué significa la energía para los científicos e ingenieros a través de experimentos emocionantes. Al final, desbloquearás los misterios de la primera ley de la termodinámica y descubrirás las muchas maravillas de la energía. Prepárate para un viaje donde verás, sentirás y experimentarás la energía como nunca antes.",
            download: "Descargar",
            imageAlt: "Ilustración de primaria",
            pdfLink: "/lesson_plans/E&U_Elementary_School.pdf"
        },
        middle: {
            title: "🔍 ¡Aventúrate con 'Energy & U' en el nivel de secundaria! 🔍",
            description: "Descubre los misterios de la energía y sus maravillas. Aprende qué significa realmente la energía para los científicos e ingenieros a través de experimentos prácticos. Sumérgete en el mundo de la termodinámica, explora las diferentes formas de energía y observa la magia detrás de la fuerza, el movimiento y las leyes de Newton. Además, profundiza en la comprensión de la materia y sus propiedades, ¡todo mientras te diviertes! ¡Desbloqueemos juntos el poder de la energía!",
            download: "Descargar",
            imageAlt: "Ilustración nivel medio",
            pdfLink: "/lesson_plans/E&U_Middle School.pdf"
        },
        high: {
            title: "📚 Embarca en una exploración avanzada con 'Energy & U' para la preparatoria! 📚",
            description: "Profundiza en las complejidades de la energía, desde sus conceptos fundamentales hasta sus aplicaciones en el mundo real. Comprende la primera ley de la termodinámica, adéntrate en los diversos tipos de energía y experimenta de primera mano el poder transformador de la energía a través de experimentos cautivadores en el escenario. Ya sea los sistemas e interacciones en biología, las reacciones energéticas en química o los principios de conservación en física, este viaje ofrece una comprensión integral adaptada para mentes maduras. ¡Sumérgete e ilumina el universo de la energía con nosotros!",
            download: "Descargar",
            imageAlt: "Ilustración nivel alto",
            pdfLink: "/lesson_plans/E&U_High_School.pdf"
        },
    }
};

const LessonPlanSection = ({ image, alt, title, description, pdfLink, download }) => (
    <section className="grade-section">
        <img src={image} alt={alt} />
        <p>
            <strong>{title}<br></br></strong>
            {description}
        </p>
        <a href={pdfLink} download>{download}</a>
    </section>
);

const LessonPlanContent = ({ selectedLanguage }) => {
    const languageTexts = texts[selectedLanguage] || texts.en;
    return (
        <>
            <LessonPlanSection {...languageTexts.elementary} image={ElemSchool} />
            <LessonPlanSection {...languageTexts.middle} image={MidSchool} />
            <LessonPlanSection {...languageTexts.high} image={HighSchool} />
        </>
    );
};

export default LessonPlanContent;
