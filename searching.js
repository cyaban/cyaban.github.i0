// Hide or show the "No results found" message based on the flag
if (resultsFound) {
    noResultsMessage.style.display = 'none'; // Hide the message if results were found
    copyrightDiv.style.display = 'none'; // Hide the copyright div if results were found
} else {
    noResultsMessage.style.display = 'block'; // Show the message if no results were found
    copyrightDiv.style.display = 'none'; // Hide the copyright div if no results were found
}

// Hide or show the trending sections based on the flag
var trendingSections = document.querySelectorAll('.trending.container');
trendingSections.forEach(function(section) {
    if (!resultsFound) {
        section.style.display = 'none'; // Hide the section if no results were found
    } else {
        section.style.display = 'block'; // Show the section if results were found
    }
});

// Hide the <a> elements with class "view-more" if no results were found
var viewMoreLinks = document.querySelectorAll('.view-more a');
viewMoreLinks.forEach(function(link) {
    if (!resultsFound) {
        link.style.display = 'none';
    } else {
        link.style.display = 'block';
    }
});

// Hide the pagination if there is text in the search input
var pagination = document.querySelector('.pagination');
if (input.value.length > 0) {
    pagination.style.display = 'none';
} else {
    pagination.style.display = 'block';
}
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

// Initially hide the copyright div
var copyrightDiv = document.querySelector('.copyright.container');
copyrightDiv.style.display = 'none';

// Initial hiding of the <i class="fa-solid fa-star"></i> within anchor tags
var starAnchors = document.querySelectorAll('a i.fa-solid.fa-star');
starAnchors.forEach(function(star) {
    star.style.display = 'none';
});





