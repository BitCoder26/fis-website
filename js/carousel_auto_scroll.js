    const carousel = document.querySelector('.features-carousel');
    function autoScroll() {
        carousel.scrollLeft += 1;
    }
    let interval = setInterval(autoScroll, 1);
    // Pause on hover
    carousel.addEventListener('mouseover', () => clearInterval(interval));
    // Resume when not hovering
    carousel.addEventListener('mouseout', () => {
        interval = setInterval(autoScroll, 20);
    });
