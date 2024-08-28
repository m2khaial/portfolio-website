// JavaScript to handle the project filtering and "Back to Top" button

// Function to filter projects
function filterProjects(category) {
    // Get all project tiles
    const projects = document.querySelectorAll('.project-tile');

    // Loop through each project tile
    projects.forEach((project) => {
        // If the project matches the category or the category is 'all', show the project
        if (category === 'all' || project.parentElement.id === category) {
            project.style.display = 'block';
        } else {
            // If it doesn't match, hide the project
            project.style.display = 'none';
        }
    });

    // Update the active button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
        btn.classList.remove('filter-active');
    });

    document.getElementById(category + '-btn').classList.add('filter-active');
}

// Event listeners for filter buttons
document.getElementById('all-btn').addEventListener('click', () => filterProjects('all'));
document.getElementById('vba-btn').addEventListener('click', () => filterProjects('vba'));
document.getElementById('html-btn').addEventListener('click', () => filterProjects('html'));
document.getElementById('javascript-btn').addEventListener('click', () => filterProjects('javascript'));
document.getElementById('python-btn').addEventListener('click', () => filterProjects('python'));

// Function to show/hide "Back to Top" button
function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Event listener for scrolling
window.onscroll = function () {
    toggleBackToTopButton();
};

// Function to scroll to the top of the page
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Event listener for the "Back to Top" button
document.getElementById('backToTopBtn').addEventListener('click', topFunction);
