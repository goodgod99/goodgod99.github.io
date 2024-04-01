const buttons = document.querySelectorAll('nav ul li button');
const projects = document.querySelectorAll('#project a');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        //變更nav button的樣式
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

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


