const screens = document.querySelectorAll(".phone-screen");
const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach(bubble => {
    bubble.addEventListener("click", () => {
        bubbles.forEach(b => b.classList.remove("active"));
        bubble.classList.add("active");

        const target = bubble.getAttribute("data-target");

        screens.forEach(screen => {
            screen.classList.remove("active");
            if (screen.getAttribute("data-screen") === target) {
                screen.classList.add("active");
            }
        });
    });
});
