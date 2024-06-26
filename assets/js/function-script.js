// Function to display blog posts
function displayBlogPosts() {
    const blogPostsRef = ref(database, 'blog-posts');
    onValue(blogPostsRef, (snapshot) => {
        const blogPostsList = document.getElementById('blogPostsList');
        blogPostsList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const post = childSnapshot.val();
            const postId = childSnapshot.key;
            const postElement = document.createElement('div');
            postElement.classList.add('card', 'mb-2');
            postElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <img src="${post.imageUrl}" class="img-fluid mb-2" alt="${post.title}">
                    <button class="btn btn-sm btn-primary me-2" onclick="openBlogModal('edit', '${postId}', '${post.title}', '${post.description}', '${post.imageUrl}')">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteBlogPost('${postId}')">Delete</button>
                </div>
            `;
            blogPostsList.appendChild(postElement);
        });
    });
}

// Function to add or edit a blog post
function handleBlogForm(event, mode) {
    event.preventDefault();
    const form = document.getElementById('blogForm');
    const postId = form.blogPostId.value;
    const title = form.blogTitle.value;
    const description = form.blogDescription.value;
    const imageUrl = form.blogImageUrl.value;

    if (mode === 'create') {
        const newPostRef = push(ref(database, 'blog-posts'));
        set(newPostRef, {
            title,
            description,
            imageUrl
        }).then(() => {
            $('#blogModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error adding blog post: ', error);
        });
    } else if (mode === 'edit') {
        const postRef = ref(database, 'blog-posts/' + postId);
        set(postRef, {
            title,
            description,
            imageUrl
        }).then(() => {
            $('#blogModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error editing blog post: ', error);
        });
    }
}

// Function to delete a blog post
function deleteBlogPost(postId) {
    if (confirm("Are you sure you want to delete this blog post?")) {
        const postRef = ref(database, 'blog-posts/' + postId);
        remove(postRef).then(() => {
            console.log("Blog post deleted successfully!");
        }).catch((error) => {
            console.error("Error removing blog post: ", error);
        });
    }
}

// Function to open blog modal for create or edit
function openBlogModal(mode, postId, title, description, imageUrl) {
    const modalTitle = document.getElementById('blogModalLabel');
    const form = document.getElementById('blogForm');
    form.blogPostId.value = postId || '';
    if (mode === 'create') {
        modalTitle.textContent = 'Create Blog Post';
        form.blogTitle.value = '';
        form.blogDescription.value = '';
        form.blogImageUrl.value = '';
        form.onsubmit = (event) => handleBlogForm(event, 'create');
    } else if (mode === 'edit') {
        modalTitle.textContent = 'Edit Blog Post';
        form.blogTitle.value = title;
        form.blogDescription.value = description;
        form.blogImageUrl.value = imageUrl;
        form.onsubmit = (event) => handleBlogForm(event, 'edit');
    }
    $('#blogModal').modal('show');
}

// Function to display certificates
function displayCertificates() {
    const certificatesRef = ref(database, 'certificates');
    onValue(certificatesRef, (snapshot) => {
        const certificatesList = document.getElementById('certificatesList');
        certificatesList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const certificate = childSnapshot.val();
            const certificateId = childSnapshot.key;
            const certificateElement = document.createElement('div');
            certificateElement.classList.add('card', 'mb-2');
            certificateElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${certificate.title}</h5>
                    <p class="card-text">${certificate.description}</p>
                    <img src="${certificate.imageUrl}" class="img-fluid mb-2" alt="${certificate.title}">
                    <a href="${certificate.certificateLink}" target="_blank" class="btn btn-sm btn-primary me-2">View Certificate</a>
                    <button class="btn btn-sm btn-primary me-2" onclick="openCertificateModal('edit', '${certificateId}', '${certificate.title}', '${certificate.description}', '${certificate.imageUrl}', '${certificate.certificateLink}')">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCertificate('${certificateId}')">Delete</button>
                </div>
            `;
            certificatesList.appendChild(certificateElement);
        });
    });
}

// Function to add or edit a certificate
function handleCertificateForm(event, mode) {
    event.preventDefault();
    const form = document.getElementById('certificateForm');
    const certificateId = form.certificateId.value;
    const title = form.certificateTitle.value;
    const description = form.certificateDescription.value;
    const imageUrl = form.certificateImageUrl.value;
    const certificateLink = form.certificateLink.value;

    if (mode === 'create') {
        const newCertificateRef = push(ref(database, 'certificates'));
        set(newCertificateRef, {
            title,
            description,
            imageUrl,
            certificateLink
        }).then(() => {
            $('#certificateModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error adding certificate: ', error);
        });
    } else if (mode === 'edit') {
        const certificateRef = ref(database, 'certificates/' + certificateId);
        set(certificateRef, {
            title,
            description,
            imageUrl,
            certificateLink
        }).then(() => {
            $('#certificateModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error editing certificate: ', error);
        });
    }
}

// Function to delete a certificate
function deleteCertificate(certificateId) {
    if (confirm("Are you sure you want to delete this certificate?")) {
        const certificateRef = ref(database, 'certificates/' + certificateId);
        remove(certificateRef).then(() => {
            console.log("Certificate deleted successfully!");
        }).catch((error) => {
            console.error("Error removing certificate: ", error);
        });
    }
}

// Function to open certificate modal for create or edit
function openCertificateModal(mode, certificateId, title, description, imageUrl, certificateLink) {
    const modalTitle = document.getElementById('certificateModalLabel');
    const form = document.getElementById('certificateForm');
    form.certificateId.value = certificateId || '';
    if (mode === 'create') {
        modalTitle.textContent = 'Add Certificate';
        form.certificateTitle.value = '';
        form.certificateDescription.value = '';
        form.certificateImageUrl.value = '';
        form.certificateLink.value = '';
        form.onsubmit = (event) => handleCertificateForm(event, 'create');
    } else if (mode === 'edit') {
        modalTitle.textContent = 'Edit Certificate';
        form.certificateTitle.value = title;
        form.certificateDescription.value = description;
        form.certificateImageUrl.value = imageUrl;
        form.certificateLink.value = certificateLink;
        form.onsubmit = (event) => handleCertificateForm(event, 'edit');
    }
    $('#certificateModal').modal('show');
}

// Function to display skills
function displaySkills() {
    const skillsRef = ref(database, 'skills');
    onValue(skillsRef, (snapshot) => {
        const skillsList = document.getElementById('skillsList');
        skillsList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const skill = childSnapshot.val();
            const skillName = childSnapshot.key;
            const skillElement = document.createElement('div');
            skillElement.classList.add('card', 'mb-2');
            skillElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${skillName.toUpperCase()}</h5>
                    <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: ${skill}%;" aria-valuenow="${skill}" aria-valuemin="0" aria-valuemax="100">${skill}%</div>
                    </div>
                    <button class="btn btn-sm btn-primary me-2" onclick="openSkillsModal('edit', '${skillName}', ${skill})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteSkill('${skillName}')">Delete</button>
                </div>
            `;
            skillsList.appendChild(skillElement);
        });
    });
}

// Function to add or edit a skill
function handleSkillsForm(event, mode) {
    event.preventDefault();
    const form = document.getElementById('skillsForm');
    const skillName = form.skillTitle.value;
    const skillLevel = form.skillLevel.value;

    if (mode === 'create') {
        const skillRef = ref(database, 'skills/' + skillName);
        set(skillRef, parseInt(skillLevel)).then(() => {
            $('#skillsModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error adding skill: ', error);
        });
    } else if (mode === 'edit') {
        const skillRef = ref(database, 'skills/' + skillName);
        set(skillRef, parseInt(skillLevel)).then(() => {
            $('#skillsModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error editing skill: ', error);
        });
    }
}

// Function to delete a skill
function deleteSkill(skillName) {
    if (confirm("Are you sure you want to delete this skill?")) {
        const skillRef = ref(database, 'skills/' + skillName);
        remove(skillRef).then(() => {
            console.log("Skill deleted successfully!");
        }).catch((error) => {
            console.error("Error removing skill: ", error);
        });
    }
}

// Function to open skills modal for create or edit
function openSkillsModal(mode, skillName, skillLevel) {
    const modalTitle = document.getElementById('skillsModalLabel');
    const form = document.getElementById('skillsForm');
    form.skillTitle.value = skillName || '';
    form.skillLevel.value = skillLevel || 0;
    if (mode === 'create') {
        modalTitle.textContent = 'Add Skill';
        form.onsubmit = (event) => handleSkillsForm(event, 'create');
    } else if (mode === 'edit') {
        modalTitle.textContent = 'Edit Skill';
        form.onsubmit = (event) => handleSkillsForm(event, 'edit');
    }
    $('#skillsModal').modal('show');
}

// Function to display projects
function displayProjects() {
    const projectsRef = ref(database, 'projects');
    onValue(projectsRef, (snapshot) => {
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const project = childSnapshot.val();
            const projectId = childSnapshot.key;
            const projectElement = document.createElement('div');
            projectElement.classList.add('card', 'mb-2');
            projectElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description || ''}</p>
                    ${project.imgUrl ? `<img src="${project.imgUrl}" class="img-fluid mb-2" alt="${project.title}">` : ''}
                    ${project.source ? `<a href="${project.source}" target="_blank" class="btn btn-sm btn-primary me-2">Source</a>` : ''}
                    <button class="btn btn-sm btn-primary me-2" onclick="openProjectModal('edit', '${projectId}', '${project.title}', '${project.description}', '${project.imgUrl}', '${project.source}')">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProject('${projectId}')">Delete</button>
                </div>
            `;
            projectsList.appendChild(projectElement);
        });
    });
}

// Function to add or edit a project
function handleProjectForm(event, mode) {
    event.preventDefault();
    const form = document.getElementById('projectForm');
    const projectId = form.projectId.value;
    const title = form.projectTitle.value;
    const description = form.projectDescription.value || '';
    const imgUrl = form.projectImageUrl.value || '';
    const source = form.projectSource.value || '';

    if (mode === 'create') {
        const newProjectRef = push(ref(database, 'projects'));
        set(newProjectRef, {
            title,
            description,
            imgUrl,
            source
        }).then(() => {
            $('#projectModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error adding project: ', error);
        });
    } else if (mode === 'edit') {
        const projectRef = ref(database, 'projects/' + projectId);
        set(projectRef, {
            title,
            description,
            imgUrl,
            source
        }).then(() => {
            $('#projectModal').modal('hide');
            form.reset();
        }).catch((error) => {
            console.error('Error editing project: ', error);
        });
    }
}

// Function to delete a project
function deleteProject(projectId) {
    if (confirm("Are you sure you want to delete this project?")) {
        const projectRef = ref(database, 'projects/' + projectId);
        remove(projectRef).then(() => {
            console.log("Project deleted successfully!");
        }).catch((error) => {
            console.error("Error removing project: ", error);
        });
    }
}

// Function to open project modal for create or edit
function openProjectModal(mode, projectId, title, description, imgUrl, source) {
    const modalTitle = document.getElementById('projectModalLabel');
    const form = document.getElementById('projectForm');
    form.projectId.value = projectId || '';
    if (mode === 'create') {
        modalTitle.textContent = 'Add Project';
        form.projectTitle.value = '';
        form.projectDescription.value = '';
        form.projectImageUrl.value = '';
        form.projectSource.value = '';
        form.onsubmit = (event) => handleProjectForm(event, 'create');
    } else if (mode === 'edit') {
        modalTitle.textContent = 'Edit Project';
        form.projectTitle.value = title;
        form.projectDescription.value = description;
        form.projectImageUrl.value = imgUrl;
        form.projectSource.value = source;
        form.onsubmit = (event) => handleProjectForm(event, 'edit');
    }
    $('#projectModal').modal('show');
}