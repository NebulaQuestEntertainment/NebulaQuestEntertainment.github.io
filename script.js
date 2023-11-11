// Function to show/hide tabs
function showTab(tabId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(tabId);
    selectedSection.classList.add('active');
}

// Function to update description based on active section
function updateDescription(title, description) {
    document.getElementById('descriptionParagraph').innerHTML = `<strong>${title}</strong>: ${description}`;
}

// Add an event listener for the scroll event
window.addEventListener('scroll', function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Define the offsets for each section
    var homeOffset = document.getElementById('home').offsetTop;
    var gamesOffset = document.getElementById('games').offsetTop;
    var aboutOffset = document.getElementById('about').offsetTop;
    var contactOffset = document.getElementById('contact').offsetTop;

    // Determine which section is currently in view
    if (scrollPosition >= homeOffset && scrollPosition < gamesOffset) {
        updateDescription('Embark on an Indie Odyssey', 'Dive into the extraordinary world of indie gaming. Nebula Quest Entertainment brings your gaming fantasies to life.');
        showTab('home');
    } else if (scrollPosition >= gamesOffset && scrollPosition < aboutOffset) {
        updateDescription('Our Indie Games', 'Immerse yourself in the charm of our indie games, where every pixel tells a story. Check out our collection of thrilling adventures.');
        showTab('games');
    } else if (scrollPosition >= aboutOffset && scrollPosition < contactOffset) {
        updateDescription('The Indie Creators', 'We are a team of indie enthusiasts crafting unforgettable gaming experiences. Meet the minds behind Nebula Quest Entertainment.');
        showTab('about');
    } else if (scrollPosition >= contactOffset) {
        updateDescription('Get in Touch', 'Have questions, ideas, or just want to chat? We\'d love to hear from fellow gamers and indie enthusiasts!');
        showTab('contact');
    }
});
