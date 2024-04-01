fetch('../data/projects.json')
    .then(response => response.json())
    .then(data => {
        const projectContainer = document.getElementById('project');
        data.forEach(e => {
            const projectElement = document.createElement('a');
            projectElement.classList.add('col-12', 'col-sm-6', 'col-xl-4', e.class);
            projectElement.target = '_blank';
            projectElement.href = e.url;
            projectElement.innerHTML = `
                <div class="img-box">
                    <img src="${e.image}" class="" alt="${e.title}">
                </div>
                <div class="text-box">
                    <h3 class="card-title">${e.title}</h3>
                    <p class="card-text">${e.description}</p>
                </div>
            `;
            projectContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));


// 根據點擊的按鈕來過濾專案
function filterProjectsByCategory(category) {
    const projectContainer = document.querySelectorAll('#project a');
    projectContainer.forEach(project => {
        if (category === 'All') {
            project.style.display = 'block'; 
        } else {
            if (project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
}

const buttons = document.querySelectorAll('nav ul li button');
const projects = document.querySelectorAll('#project a');
const menuControl = document.getElementById('menu-control');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        //變更nav button的樣式
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        //關閉menu
        menuControl.checked = false;

        //顯示對應的project
        const btnClass = button.id;
        // if (btnClass === 'All') {
        //     projects.forEach(project => {
        //         project.style.display = 'block';
        //     });
        // }
        // else{
        //     projects.forEach(project => {
        //         if (project.classList.contains(btnClass)) {
        //             project.style.display = 'block';
        //         } else {
        //             project.style.display = 'none';
        //         }
        //     });
        // }
        filterProjectsByCategory(btnClass);
        
    });
});
