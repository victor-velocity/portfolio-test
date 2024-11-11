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

const checkbox = document.getElementById('check');
const body = document.body;
const cancelIcon = document.getElementById('cancel');

// Disable scroll when menu opens
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

// Enable scroll when the "X" icon is clicked
cancelIcon.addEventListener('click', function() {
    checkbox.checked = false;
    body.classList.remove('no-scroll');
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
    } else {
        themeStyle.setAttribute('href', 'assets/css/light.css');
        toggleSwitch.className = 'fa-solid fa-sun';
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