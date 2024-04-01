const menu_control = document.getElementById('menu-control');
const menu_label = document.getElementById('menu-label');

menu_control.addEventListener('change', () => {
    if (menu_control.checked) {
        menu_label.innerText = '✖';
    } else {
        menu_label.innerText = '☰';
    }
});