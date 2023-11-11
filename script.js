// script.js

function showTab(tabId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
