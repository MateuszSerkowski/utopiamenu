const images = document.querySelectorAll('.category-items img');

images.forEach(image => {
    // Rozpoczęcie dotyku
    image.addEventListener('touchstart', function() {
        image.classList.add('active'); // Aktywuj efekt
    });

    // Zakończenie dotyku
    image.addEventListener('touchend', function() {
        image.classList.remove('active'); // Usuń efekt po dotknięciu
    });

    // Opcjonalnie dla użytkowników desktopowych, dla myszki
    image.addEventListener('mouseenter', function() {
        image.classList.add('active'); // Aktywuj efekt na desktopie
    });

    image.addEventListener('mouseleave', function() {
        image.classList.remove('active'); // Usuń efekt po najechaniu
    });
});
