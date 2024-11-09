window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('load');
        preloader.classList.add('zoom-out'); // Add class to trigger zoom-out effect

        // After the animation completes, hide the preloader and show main content
        preloader.addEventListener('transitionend', () => {
            preloader.style.display = 'none';
            document.getElementById('main-page1').style.display = 'block';
        });
    }, 4000);
});

var typed = new Typed('#typed-text', {
    strings: ['a Software Developer', 'a Web Developer', 'theCode', 'a Front-End Developer'],
    typeSpeed: 100,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 1000,
    smartBackspace: true,
    loopCount: Infinity,
    cursorChar: '_',
    loop: true
});

const switchMode = () => {
    const themeStyle = document.getElementById('theme');
    const toggleSwitch = document.getElementById('toggle');
    if (themeStyle.getAttribute('href') === 'assets/css/light.css') {
        themeStyle.setAttribute('href', 'assets/css/dark.css');
        toggleSwitch.className = 'fa-solid fa-moon';
        console.log('now')
    } else {
        themeStyle.setAttribute('href', 'assets/css/light.css');
        toggleSwitch.className = 'fa-solid fa-sun';
        console.log('NOW')
    }
}

const changeLanguage = () => {
    const selectedLanguage = document.getElementById("language").value;

    if (selectedLanguage === "french") {
        document.getElementById("p1").innerHTML = "Bonjour, je suis";
        document.getElementById("p3").innerHTML = "Et je suis ";
        document.getElementById("p4").innerHTML = "Salut ! Je suis Victor Asama, un développeur front-end passionné, spécialisé dans la traduction de concepts de design en expériences web fluides et interactives en utilisant HTML, CSS et JavaScript.";
        document.getElementById("home").innerHTML = "Accueil"
        document.getElementById("about").innerHTML = "À propos"
        document.getElementById("contact").innerHTML = "Contactez-moi"
    } else if (selectedLanguage === "eng") {
        document.getElementById("p1").innerHTML = "Hello, I'm";
        document.getElementById("p3").innerHTML = "And I'm ";
        document.getElementById("p4").innerHTML = "Hi! I'm Victor Asama, a passionate front-end developer specializing in translating design concepts into seamless and interactive web experiences using HTML, CSS, and JavaScript.";
        document.getElementById("home").innerHTML = "Home"
        document.getElementById("about").innerHTML = "About"
        document.getElementById("contact").innerHTML = "Contact"
        document.getElementById("service").innerHTML = "Services"
        document.getElementById("portfolio").innerHTML = "Portfolio"
    } else if (selectedLanguage === "spanish") {
        document.getElementById("p1").innerHTML = "Hola, soy";
        document.getElementById("p3").innerHTML = "Y soy ";
        document.getElementById("p4").innerHTML = "¡Hola! Soy Victor Asama, un desarrollador front-end apasionado, especializado en traducir conceptos de diseño en experiencias web fluidas e interactivas utilizando HTML, CSS y JavaScript.";
        document.getElementById("home").innerHTML = "Inicio"
        document.getElementById("about").innerHTML = "Acerca de"
        document.getElementById("contact").innerHTML = "Contacto"
        document.getElementById("service").innerHTML = "Servicios"
        document.getElementById("portfolio").innerHTML = "Portafolio"
    } else {
        document.getElementById("p1").innerHTML = "";
        document.getElementById("p3").innerHTML = "";
        document.getElementById("p4").innerHTML = "";
    }
}

function aboutContent() {
    document.getElementById("about_summary").innerHTML = "I’m Victor Asama, a passionate web developer dedicated to creating engaging and visually appealing web experiences. Specializing in HTML, CSS, and JavaScript, I enjoy translating design concepts into functional and user-friendly interfaces. Before transitioning into web development, I gained valuable experience as a graphic designer, where I crafted digital products for various brands. This background taught me the significance of aesthetics and usability in design, shaping my approach to developing websites. Throughout my career, I have worked on a variety of projects, including e-commerce websites, mobile applications, and web applications. Each project has enhanced my skills and encouraged me to tackle challenges with creativity. As a dedicated individual, I am always seeking opportunities to improve my skills and expand my knowledge. Currently, I am looking for new challenges to advance my career and share my enthusiasm for web development with others."
    document.getElementById("btn2").style.display = 'none';
}

function prevContent() {
    document.getElementById("about_summary").innerHTML = "I’m Victor Asama, a passionate web developer dedicated to creating engaging and visually appealing web experiences. Specializing in HTML, CSS, and JavaScript, I enjoy translating design concepts into functional and user-friendly interfaces."
    document.getElementById("btn2").style.display = 'block';
}