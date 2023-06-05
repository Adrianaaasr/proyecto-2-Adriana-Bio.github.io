window.addEventListener('DOMContentLoaded', function() {
    var biographySection = document.getElementById('biography');
    var paragraph = biographySection.querySelector('p');

    paragraph.addEventListener('click', function() {
        paragraph.style.color = '#ECC7C7';
    });
});