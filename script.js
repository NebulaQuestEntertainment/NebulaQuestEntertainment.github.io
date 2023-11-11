// script.js

function scrollToSection(tabId) {
    var targetSection = document.getElementById(tabId);

    if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight the active tab
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function (tab) {
            tab.classList.remove('active');
        });

        var selectedTab = document.querySelector('.tab[data-tab="' + tabId + '"]');
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
    }
}

// Add an event listener for scrolling
window.addEventListener('scroll', function () {
    var currentSection = null;

    // Find the section currently in view
    document.querySelectorAll('.section').forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    // Highlight the active tab based on the current section
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    var activeTab = document.querySelector('.tab[data-tab="' + currentSection + '"]');
    if (activeTab) {
        activeTab.classList.add('active');
    }
});
