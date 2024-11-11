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