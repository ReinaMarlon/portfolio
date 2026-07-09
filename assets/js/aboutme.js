const buttons = document.querySelectorAll(".toggle-btn");
const aboutText = document.getElementById("about-text");

const renderAboutText = (animate = true) => {
    const activeButton = document.querySelector(".toggle-btn.active") || buttons[0];
    const type = activeButton?.dataset.type || "professional";
    const key = type === "personal" ? "about.personal" : "about.professional";

    if (aboutText && window.portfolioI18n) {
        aboutText.innerHTML = window.portfolioI18n.translate(key);
    }

    if (animate && window.gsap) {
        gsap.fromTo(
            "#about-text",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderAboutText();
    });
});

window.addEventListener("portfolio:languagechange", () => renderAboutText(false));
