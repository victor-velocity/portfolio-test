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