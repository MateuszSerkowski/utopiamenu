const images = document.querySelectorAll('.category-items img');

images.forEach(image => {
    image.addEventListener('click', function() {
        // Dodajemy klasę "active" do obrazu, aby aktywować efekty
        image.classList.toggle('active');
    });
});
