
const menuLabel = document.getElementById('menu-label');

menuControl.addEventListener('change', () => {
    if (menuControl.checked) {
        menuLabel.innerText = '✖';
    } else {
        menuLabel.innerText = '☰';
    }
});
