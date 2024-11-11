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

function aboutContent() {
    document.getElementById("about_summary").innerHTML = "I’m Victor Asama, a passionate web / software developer dedicated to creating engaging and visually appealing web experiences. Specializing in HTML, CSS, and JavaScript, I enjoy translating design concepts into functional and user-friendly interfaces. Before transitioning into web development, I gained valuable experience as a graphic designer, where I crafted digital products for various brands. This background taught me the significance of aesthetics and usability in design, shaping my approach to developing websites. Throughout my career, I have worked on a variety of projects, including e-commerce websites, mobile applications, and web applications. Each project has enhanced my skills and encouraged me to tackle challenges with creativity. As a dedicated individual, I am always seeking opportunities to improve my skills and expand my knowledge. Currently, I am looking for new challenges to advance my career and share my enthusiasm for web development with others."
    document.getElementById("btn2").style.display = 'none';
}

function prevContent() {
    document.getElementById("about_summary").innerHTML = "I’m Victor Asama, a passionate web developer dedicated to creating engaging and visually appealing web experiences. Specializing in HTML, CSS, and JavaScript, I enjoy translating design concepts into functional and user-friendly interfaces."
    document.getElementById("btn2").style.display = 'block';
}