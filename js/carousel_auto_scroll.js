const carousel = document.querySelector('.features-carousel');

let direction = 1;
function autoScroll() {
    carousel.scrollLeft += direction;

    // Reverse at edges
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        direction = -1;
    } 
    else if (carousel.scrollLeft === 0) {
        direction = 1;
    }
}

let interval = setInterval(autoScroll, 1);
// Pause on hover
carousel.addEventListener('mouseover', () => clearInterval(interval));
// Resume when not hovering
carousel.addEventListener('mouseout', () => {
    interval = setInterval(autoScroll, 1);
});
