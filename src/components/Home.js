import React, { useEffect } from 'react';

import { ReactComponent as ZigZagFrame } from '../styles/images/zig-zag.svg';


import '../styles/stylesheet.css';
import '../styles/header_EU.css';
import '../styles/landing_page.css';
import '../styles/faq.css';
import '../styles/activities.css';

import lozanoImage from '../styles/images/Lozano.png';
import gregNewsroom from '../styles/images/greg_newsroom.jpg';
import emmyImage from '../styles/images/emmy.jpg';
import jessieImageEsp from '../styles/images/jessie_esp.png';
import jessieImageEng from '../styles/images/jessie_eng.PNG';

const NewsItem = ({ image, title, link, date, description }) => (
    <div className="col-md-4 news-item">
        <div className="news-image">
            <img src={image} alt="News" />
        </div>
        <div className="news-content">
            <h2 className="news-title"><a className="news-link" target="_blank" rel="noreferrer" href={link}>{title}</a></h2>
            <p className="news-date">{date}</p>
            <p className="news-description">{description}</p>
        </div>
    </div>
);

const Home = ({ selectedLanguage }) => {

    useEffect(() => {
        const videoElement = document.querySelector('.custom-video-player');
        if (videoElement) {
            videoElement.addEventListener('ended', () => {
                videoElement.play();
            });
            videoElement.addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent right-click on video
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', () => {
                    videoElement.play();
                });
                videoElement.removeEventListener('contextmenu', (e) => e.preventDefault()); // Cleanup right-click prevention
            }
        };
    }, []);

    if (!['en', 'es'].includes(selectedLanguage)) {
        selectedLanguage = 'en';
    }

    const texts = {
        en: {
            headerTitle: "ENERGY & U",
            welcome: "Learn, Explore, Play!",
            subtext: "Welcome to the Energy & U Activities website, Learn and discover anywhere you are",
            tooltip: "Click on the Experiments Button to Play & Learn",
            activities: "Activities",
            faq: "FAQ",
            experimentsButton: "EXPERIMENTS",
            bottomTitle: "What is Energy & U?",
            bottomSubtitle: "Welcome to \"Energy and U!\" Brought to life by top minds from the University of Minnesota, and enriched with the generous support of the National Science Foundation, this program is ready to light up the Valley. A fun-filled exploration of energy for young learners, \"Energy and U\" is all about inspiring the next generation to care for our wonderful planet. It's time to power up your curiosity and spark our sense of responsibility. Join us in the adventure!",
            newsTitle: "Energy and U Highlights",
            newsItems: [


                {
                    image: jessieImageEng,
                    title: 'UTRGV Energy & U hosts school for solar car competition',
                    link: 'https://texasborderbusiness.com/3000-attend-energy-u-first-live-show/',
                    date: 'January 27, 2023',
                    description: 'EDINBURG, Texas More than 3,000 elementary students and the general public witnessed the first live performance of UTRGVs “Energy & U” spectacle, a show filled with explosions, bubbles and lots of learning and fun.',
                },

                {
                    image: gregNewsroom,
                    title: 'UTRGV Energy & U first live show garners about 3,000 attendees',
                    link: 'https://www.utrgv.edu/newsroom/2023/01/27/utrgvs-energy-u-first-live-show-garners-about-3000-attendees.htm',
                    date: 'January 25, 2023',
                    description: "RIO GRANDE VALLEY, TEXAS More than 3,000 elementary students and the general public witnessed the first live performance of UTRGV's “Energy & U” spectacle, a show filled with explosions, bubbles and lots of learning and fun.",
                },

                {
                    image: emmyImage,
                    title: 'Energy & U receives the Rocky Mountain Emmy Award for Best Educational Program',
                    link: 'https://www.valleycentral.com/news/local-news/utrgv-engineering-professor-and-team-win-lone-star-emmy/',
                    date: 'January 7, 2023',
                    description: 'The University of Texas Rio Grande Valley professor of mechanical engineering Karen Lozano and her team won a Lone Star Emmy on Nov. 12.',
                },


            ],
        },
        es: {
            headerTitle: "Energy & U",
            welcome: "Aprende, Explora, Juega!",
            subtext: "Te damos la bienvenida al sitio oficial de Energy & U, Aprende y descubre desde tu hogar",
            tooltip: "Haga clic en el botón de Experimentos para Jugar y Aprender",
            activities: "Actividades",
            faq: "Preguntas frecuentes",
            experimentsButton: "EXPERIMENTOS",
            bottomTitle: "¿Qué es Energy & U?",
            bottomSubtitle: "Te damos la bienvenida a \"Energy & U\". Creado por las destacadas mentes de la Universidad de Minnesota y enriquecido con el generoso apoyo de la Fundación Nacional de Ciencias, este programa está listo para iluminar el Valle. Una aventura llena de diversión en el mundo de la energía, \"Energy & U\" busca inspirar a las nuevas generaciones en el cuidado de nuestro preciado planeta. Llego el momento de impulsar tu curiosidad y despertar nuestra responsabilidad. ¡Únete a nosotros en esta emocionante aventura!",
            newsTitle: "Últimas Noticias",
            newsItems: [
                {
                    image: gregNewsroom,
                    title: "Primera presentación en vivo de UTRGV Energy & U atrajo a más de 3,000 asistentes.",
                    date: "27 de enero del 2023",
                    description: "Más de 3,000 estudiantes de primaria y la audencia en general presenciaron la primera presentación en vivo del espectáculo \"Energy & U\" de UTRGV, un show lleno de explosiones, burbujas y mucha diversión y aprendizaje.",
                    link: "https://www.utrgv.edu/newsroom/2023/01/27/utrgvs-energy-u-first-live-show-garners-about-3000-attendees.htm",
                    imageSrc: "images/greg_newsroom.jpg"
                },
                {
                    image: emmyImage,
                    title: "Profesora de ingeniería de UTRGV y su equipo reciben el Emmy.",
                    date: "7 de enero del 2023",
                    description: "La profesora de ingeniería mecánica, Karen Lozano, de la Universidad de Texas en el Valle del Río Grande y su equipo ganaron un premio Lone Star Emmy el 12 de noviembre.",
                    link: "https://www.valleycentral.com/news/local-news/utrgv-engineering-professor-and-team-win-lone-star-emmy/",
                    imageSrc: "images/emmy.jpg"
                },
                {
                    image: jessieImageEsp,
                    title: "3,000 de audiencia en primer show de Energy & U",
                    date: "27 de enero del 2023",
                    description: "EDINBURG, Texas. Más de 3,000 asitentes presenciaron la primera presentación en vivo del espectáculo \"Energy & U\" de UTRGV, un espectáculo lleno de explosiones, burbujas y mucha diversión y aprendizaje.",
                    link: "https://texasborderbusiness.com/3000-attend-energy-u-first-live-show/",
                    imageSrc: "images/jessie_esp.PNG"
                },
            ],
        },
    };

    const t = texts[selectedLanguage];
    const newsItems = texts[selectedLanguage].newsItems;

    return (
        <div className="BODY">
            <div className="container-fluid TOP">
                <main className="row middle-section text-center">
                    <div className="col">
                        <div className="title" id="siteContent">{t.welcome}</div>
                        <div className="subtext">{t.subtext}</div>
                        <div className="button_container d-flex justify-content-center align-items-center mt-3">
                            <div className="heartbeat">
                                <a className="btn btn-link first-link" href="/game">{t.experimentsButton}</a>
                            </div>
                        </div>
                    </div>
                </main>

                <section className="row lozano-section">
                    <div className="col lozanoImg text-center">
                        <img className="lozano" src={lozanoImage} alt="Dr. Lozano" />
                        <div className="tooltip">{t.tooltip}</div>
                        <div className="tooltipDos"></div>
                    </div>
                </section>
            </div>

            <section className="video-text-section">
                <div className="video-text-content">
                    <h2 className="titleBottom">{t.bottomTitle}</h2>
                    <p className="subtitleBottom">{t.bottomSubtitle}</p>
                </div>
                <div className="video-container">
                    <ZigZagFrame className="video-frame" />
                    <div className="video-overlay"></div> {/* Transparent overlay */}
                    <video className="custom-video-player" autoPlay loop muted>
                        <source src={require('../styles/videos/E&U_website_loop.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>


            <section className="container-fluid news-stuff news-section">
                <div className="row">
                    <div className="col text-center">
                        <div className="titleBottomThree">{t.newsTitle}</div>
                    </div>
                </div>
                <div className="row news-container">
                    {newsItems.map((item, index) => (
                        <NewsItem key={index} {...item} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;