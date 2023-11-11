// script.js

function showTab(tabId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Deactivate all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Activate the corresponding tab
    var selectedTab = document.querySelector('.tab[data-tab="' + tabId + '"]');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}
