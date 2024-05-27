document.addEventListener('DOMContentLoaded', function() {
    const prev = document.querySelector('.custom-prev');
    const next = document.querySelector('.custom-next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showItem(index) {
        const offset = -index * 100; // Move to the correct item
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    next.addEventListener('click', function() {
        index = (index + 1) % items.length;
        showItem(index);
    });

    prev.addEventListener('click', function() {
        index = (index - 1 + items.length) % items.length;
        showItem(index);
    });
});


