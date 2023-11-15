import React from 'react';

// You would import your activity images here, similar to how you imported lesson plan images
import Xword from '../styles/images/lesson_plans/Crossword.png';
import Xgrama from '../styles/images/lesson_plans/Crucigrama.png';
import Labyrinth from '../styles/images/lesson_plans/Labyrinth.png';
import Laberinto from '../styles/images/lesson_plans/Laberinto.png';
import WSearch from '../styles/images/lesson_plans/Word_Search.png';
import Sopa from '../styles/images/lesson_plans/Sopa_de_Letras.png';
import Connect from '../styles/images/lesson_plans/connect_the_dots.png';
import Conectar from '../styles/images/lesson_plans/Une_los_Puntos.png';
import Coloring from '../styles/images/lesson_plans/coloring_pages.png';
import Colorear from '../styles/images/lesson_plans/colorear.png';
import diy from '../styles/images/lesson_plans/DIY.png';
import htm from '../styles/images/lesson_plans/hazlo_tu.png';


// Here you can add your activity texts, similar to the lesson plan texts
const activityTexts = {
    en: {
        activity1: {
            title: "Energy & U Crossword Puzzle",
            description: `Dive into a thrilling exploration of energy and science, challenging you to find key terms and expand your STEM vocabulary. Solve the puzzle and unlock a world of knowledge about diverse energy forms and scientific innovations.`,
            download: "Download",
            imageAlt: "Crossword Puzzle illustration",
            pdfLink: "/activities/Crossword.pdf"
        },
        activity2: {
            title: "Energy Maze Adventure",
            description: `Embark on an exciting quest through a complex labyrinth, uncovering energy and science secrets. It's a fun and educational exploration of renewable energy, efficiency, and scientific breakthroughs, ideal for aspiring young scientists.`,
            download: "Download",
            imageAlt: "Solar Panel illustration",
            pdfLink: "/activities/lost.pdf"
        },
        activity3: {
            title: "STEM Vocabulary Hunt",
            description: `A thrilling word search where you assist Dr. Marquez and Dr. Padilla in finding key scientific terms like 'Joule' and 'Energy.' Dive into this fun and educational challenge to master crucial STEM vocabulary!`,
            download: "Download",
            imageAlt: "Word Soup illustration",
            pdfLink: "/activities/Wordsearch.pdf"
        },
        activity4: {
            title: "Energetic Connections",
            description: `An engaging connect-the-dots game that unveils the science of energy conversion, from drones to motorcycles. Discover the fascinating world of energy transformation in a fun and educational journey through physics and engineering.`,
            download: "Download",
            imageAlt: "Connect the dots illustration",
            pdfLink: "/activities/Connect the dots.pdf"
        },
        activity5: {
            title: "Energy in Color",
            description: `Coloring pages blend art with STEM, turning each page into a vibrant exploration of energy concepts, from solar panels to wind turbines. Dive into this colorful, educational adventure and bring the dynamic world of science to life with your crayons!`,
            download: "Download",
            imageAlt: "Color Game illustration",
            pdfLink: "/activities/Coloringpages.pdf"
        },
        activity6: {
            title: "DIY: Energy & U Creations",
            description: `Energy & U invites you to the world of STEM with three fun activities. Build a bottle rocket, design a digital character, and create dance costumes. It's an exciting journey into science, technology, and creativity!`,
            download: "Download",
            imageAlt: "DIY illustration",
            pdfLink: "/activities/DIY.zip"
        },
    },
    // Add other languages as needed
    es: {
        activity1: {
            title: "Crucigrama de Energía & U",
            description: `Sumérgete en una emocionante exploración de energía y ciencia, desafiándote a encontrar términos clave y expandir tu vocabulario STEM. Resuelve el rompecabezas y desbloquea un mundo de conocimiento sobre diversas formas de energía e innovaciones científicas.`,
            download: "Descargar",
            imageAlt: "Ilustración de crucigrama",
            pdfLink: "/activities/Crossword.pdf"
        },
        activity2: {
            title: "Aventura en el Laberinto de Energía",
            description: `Embárcate en una emocionante búsqueda a través de un laberinto complejo, descubriendo secretos de energía y ciencia. Es una exploración divertida y educativa de energía renovable, eficiencia y descubrimientos científicos, ideal para jóvenes científicos aspirantes.`,
            download: "Descargar",
            imageAlt: "Ilustración de panel solar",
            pdfLink: "/activities/lost.pdf"
        },
        activity3: {
            title: "Caza de Vocabulario STEM",
            description: `Un emocionante juego de búsqueda de palabras donde asistes a los Doctores Marquez y Padilla en encontrar términos científicos clave como 'Joule' y 'Energy'. ¡Sumérgete en este desafío divertido y educativo para dominar el vocabulario STEM esencial!`,
            download: "Descargar",
            imageAlt: "Ilustración de sopa de letras",
            pdfLink: "/activities/Wordsearch.pdf"
        },
        activity4: {
            title: "Conexiones Energéticas",
            description: `Un juego atractivo de unir los puntos que revela la ciencia de la conversión de energía, desde drones hasta motocicletas. Descubre el fascinante mundo de la transformación de energía en un viaje divertido y educativo a través de la física y la ingeniería.`,
            download: "Descargar",
            imageAlt: "Ilustración de unir los puntos",
            pdfLink: "/activities/Connect the dots.pdf"
        },
        activity5: {
            title: "Energía en Color",
            description: `Las páginas para colorear combinan el arte con STEM, convirtiendo cada página en una exploración vibrante de conceptos de energía, desde paneles solares hasta turbinas de viento. ¡Sumérgete en esta aventura colorida y educativa y da vida al dinámico mundo de la ciencia con tus crayones!`,
            download: "Descargar",
            imageAlt: "Ilustración del juego de colores",
            pdfLink: "/activities/Coloringpages.pdf"
        },
        activity6: {
            title: "DIY: Creaciones de Energía & U",
            description: `Energía & U te invita al mundo de STEM con tres actividades divertidas. Construye un cohete de botella, diseña un personaje digital y crea disfraces de baile. ¡Es un emocionante viaje a la ciencia, la tecnología y la creatividad!`,
            download: "Descargar",
            imageAlt: "Ilustración de DIY",
            pdfLink: "/activities/DIY.zip"
        },        
    },
};

const ActivitySection = ({ image, alt, title, description, pdfLink, download }) => (
    <section className="activity-section">
        <img src={image} alt={alt} />
        <div>
            <strong>{title}</strong>
            <p>{description}</p>
            <a href={pdfLink} download>{download}</a>
        </div>
    </section>
);

const ActivitiesContent = ({ selectedLanguage }) => {
    // Check if the selected language is available, else default to English
    if (!['en', 'es'].includes(selectedLanguage)) {
        selectedLanguage = 'en';
    }

    const languageTexts = activityTexts[selectedLanguage];

    return (
        <>
            <ActivitySection {...languageTexts.activity1} image={selectedLanguage === 'en' ? Xword : Xgrama} />
            <ActivitySection {...languageTexts.activity2} image={selectedLanguage === 'en' ? Labyrinth : Laberinto} />
            <ActivitySection {...languageTexts.activity3} image={selectedLanguage === 'en' ? WSearch : Sopa} />
            <ActivitySection {...languageTexts.activity4} image={selectedLanguage === 'en' ? Connect : Conectar} />
            <ActivitySection {...languageTexts.activity5} image={selectedLanguage === 'en' ? Coloring : Colorear} />
            <ActivitySection {...languageTexts.activity6} image={selectedLanguage === 'en' ? diy : htm} />
        </>
    );
};

export default ActivitiesContent;

