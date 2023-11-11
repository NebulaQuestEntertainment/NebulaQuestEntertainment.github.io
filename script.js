// Function to show/hide tabs and redirect to new website
function showTab(tabId) {
    // Define the mapping of tab IDs to URLs for the new website
    var tabUrls = {
        'home': 'https://nebulaquestentertainment.github.io/index.html',
        'games': 'https://nebulaquestentertainment.github.io/games.html',
        'about': 'https://nebulaquestentertainment.github.io/about.html',
        'contact': 'https://nebulaquestentertainment.github.io/contact.html'
    };

    // Redirect to the corresponding URL
    window.location.href = tabUrls[tabId];
}
