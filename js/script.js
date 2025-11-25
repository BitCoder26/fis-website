///////////////////////////////////////////////////////
/////////////  APP FEATURES SLIDESHOW  ////////////////
///////////////////////////////////////////////////////

// ------------ Slider Function -------------
let currentSlide = 0;

function showSlide(index) {
    const slidesTrack = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index < 0) index = 0; 
    if (index >= totalSlides) index = totalSlides - 1;

    currentSlide = index;
    slidesTrack.style.transform = `translateX(-${index * 100}%)`;

    updateDots();
}

// press right arrow - move to next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// press left arrow - move to previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Attach arrows
document.querySelectorAll(".right-arrow").forEach(button => {
    button.addEventListener("click", nextSlide);
});
document.querySelectorAll(".left-arrow").forEach(button => {
    button.addEventListener("click", prevSlide);
});

// --------------- Dots ----------------
function updateDots() {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
        if (i === currentSlide) dot.classList.add("active");
        else dot.classList.remove("active");
    });
}

document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
        const slideIndex = parseInt(dot.dataset.slide);
        showSlide(slideIndex);
    });
});

showSlide(0); // shows colured dot when page loaded