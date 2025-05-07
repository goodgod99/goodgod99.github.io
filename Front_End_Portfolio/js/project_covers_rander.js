fetch('data/projects.json')
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
                    <img src="${e.image}.png" loading="lazy" class="" alt="${e.title}">
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

