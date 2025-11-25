document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".logo-icon-wrapper");
    document.querySelector('.animation-text').classList.add('animate');

    wrapper.classList.remove("animate");
    void wrapper.offsetWidth;

    requestAnimationFrame(() => {
        wrapper.classList.add("animate");
    });
});