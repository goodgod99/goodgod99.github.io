const buttons = document.querySelectorAll('nav ul li button');
const menuControl = document.getElementById('menu-control');
const menuLabel = document.getElementById('menu-label');

//nav開關icon切換
menuControl.addEventListener('change', () => {
    menuLabel.innerText = menuControl.checked ? '✖' : '☰';
});

//點擊nav內button觸發
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //變更button的樣式
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        //關閉menu
        menuControl.checked = false;
        menuLabel.innerText = menuControl.checked ? '✖' : '☰';

        //滑動至頂端
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        //顯示或隱藏對應的project
        const btnClass = button.id;
        filterProjectsByCategory(btnClass);
    });
});

// 根據點擊button過濾專案
function filterProjectsByCategory(category) {
    const projectContainer = document.querySelectorAll('#project a');
    projectContainer.forEach(project => {
        project.style.opacity = '0';
        setTimeout(() => {
            if (category === 'All') {
                project.style.display = 'block';
                setTimeout(() => {
                    project.style.opacity = '1';
                }, 100);
            } else {
                if (project.classList.contains(category)) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                    }, 100);
                } else {
                    project.style.display = 'none';
                }
            }
        }, 500);
    });
}

