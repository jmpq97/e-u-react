// Gets the language switcher links and add event listeners
var languageLinks = document.querySelectorAll('.language-switcher a');
languageLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Creates a function to change the hash value of the page and update content
function changeLanguage(lang) {
    location.hash = lang;
    updateContent(lang);
}

// Defines the language content
var language = {
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
                title: "UTRGV Energy & U first live show garners about 3,000 attendees",
                date: "January 27, 2023",
                description: "RIO GRANDE VALLEY, TEXAS More than 3,000 elementary students and the general public witnessed the first live performance of UTRGV's “Energy & U” spectacle, a show filled with explosions, bubbles and lots of learning and fun.",
                link: "https://www.utrgv.edu/newsroom/2023/01/27/utrgvs-energy-u-first-live-show-garners-about-3000-attendees.htm",
                imageSrc: "images/greg_newsroom.jpg"
            },
            {
                title: "UTRGV engineering professor and team win Lone Star Emmy",
                date: "January 7, 2023",
                description: "The University of Texas Rio Grande Valley professor of mechanical engineering, Karen Lozano, and her team won a Lone Star Emmy on Nov. 12.",
                link: "https://www.valleycentral.com/news/local-news/utrgv-engineering-professor-and-team-win-lone-star-emmy/",
                imageSrc: "images/emmy.jpg"
            },
            {
                title: "3,000 Attend Energy & U First Live Show",
                date: "January 27, 2023",
                description: "EDINBURG, Texas More than 3,000 elementary students and the general public witnessed the first live performance of UTRGVs “Energy & U” spectacle, a show filled with explosions, bubbles and lots of learning and fun.",
                link: "https://texasborderbusiness.com/3000-attend-energy-u-first-live-show/",
                imageSrc: "images/jessie_eng.PNG"
            },
        ]
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
                title: "Primera presentación en vivo de UTRGV Energy & U atrajo a más de 3,000 asistentes.",
                date: "27 de enero del 2023",
                description: "Más de 3,000 estudiantes de primaria y la audencia en general presenciaron la primera presentación en vivo del espectáculo \"Energy & U\" de UTRGV, un show lleno de explosiones, burbujas y mucha diversión y aprendizaje.",
                link: "https://www.utrgv.edu/newsroom/2023/01/27/utrgvs-energy-u-first-live-show-garners-about-3000-attendees.htm",
                imageSrc: "images/greg_newsroom.jpg"
            },
            {
                title: "Profesora de ingeniería de UTRGV y su equipo reciben el Emmy.",
                date: "7 de enero del 2023",
                description: "La profesora de ingeniería mecánica, Karen Lozano, de la Universidad de Texas en el Valle del Río Grande y su equipo ganaron un premio Lone Star Emmy el 12 de noviembre.",
                link: "https://www.valleycentral.com/news/local-news/utrgv-engineering-professor-and-team-win-lone-star-emmy/",
                imageSrc: "images/emmy.jpg"
            },
            {
                title: "3,000 de audiencia en primer show de Energy & U",
                date: "27 de enero del 2023",
                description: "EDINBURG, Texas. Más de 3,000 asitentes presenciaron la primera presentación en vivo del espectáculo \"Energy & U\" de UTRGV, un espectáculo lleno de explosiones, burbujas y mucha diversión y aprendizaje.",
                link: "https://texasborderbusiness.com/3000-attend-energy-u-first-live-show/",
                imageSrc: "images/jessie_esp.PNG"
            },
        ]
    }
};

function createNewsItemElement(newsItem) {
    var newsItemElem = document.createElement('div');
    newsItemElem.classList.add('news-item');

    var newsImageElem = document.createElement('div');
    newsImageElem.classList.add('news-image');
    var newsImage = document.createElement('img');
    newsImage.src = newsItem.imageSrc; // Adds path to the news image
    newsImage.alt = "News Image";
    newsImageElem.appendChild(newsImage);
    newsItemElem.appendChild(newsImageElem);

    var newsContentElem = document.createElement('div');
    newsContentElem.classList.add('news-content');

    var newsTitleElem = document.createElement('h2');
    var newsTitleLinkElem = document.createElement('a');
    newsTitleLinkElem.href = newsItem.link;
    newsTitleLinkElem.textContent = newsItem.title;
    newsTitleElem.appendChild(newsTitleLinkElem);
    newsContentElem.appendChild(newsTitleElem);

    var newsDateElem = document.createElement('p');
    newsDateElem.classList.add('news-date');
    newsDateElem.textContent = newsItem.date;
    newsContentElem.appendChild(newsDateElem);

    var newsDescriptionElem = document.createElement('p');
    newsDescriptionElem.classList.add('news-description');
    newsDescriptionElem.textContent = newsItem.description;
    newsContentElem.appendChild(newsDescriptionElem);

    newsItemElem.appendChild(newsContentElem);
    return newsItemElem;
}

// Function to update the content based on the language
function updateContent(lang) {
    if (language.hasOwnProperty(lang)) {

        // Update header title
        document.querySelector('.middleTitle').textContent = language[lang].headerTitle;


        siteContent.textContent = language[lang].welcome;

        // main section
        document.querySelector('.subtext').textContent = language[lang].subtext;
        document.querySelector('.tooltip').textContent = language[lang].tooltip;
        document.querySelector('.Activities').textContent = language[lang].activities;
        document.querySelector('.FAQ').textContent = language[lang].faq;
        document.querySelector('.first-link').textContent = language[lang].experimentsButton;

        // bottom section
        document.querySelector('.titleBottom').textContent = language[lang].bottomTitle;
        document.querySelector('.subtitleBottom').textContent = language[lang].bottomSubtitle;

        // news section
        document.querySelector('.titleBottomThree').textContent = language[lang].newsTitle;
        var newsItems = language[lang].newsItems;
        var newsContainer = document.querySelector('.news-container');
        newsContainer.innerHTML = ''; // Clear existing news items

        for (var i = 0; i < newsItems.length; i++) {
            var newsItem = newsItems[i];
            var newsItemElement = createNewsItemElement(newsItem, lang);
            newsContainer.appendChild(newsItemElement);
        }


        // Gives buttons ability to switch states
        languageLinks.forEach(function (link) {
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Checks if a hash value exists in the URL and update content accordingly
function checkHash() {
    var lang = window.location.hash.substr(1);
    if (lang === "") {
        lang = "en"
    }
    updateContent(lang);
}


checkHash();

