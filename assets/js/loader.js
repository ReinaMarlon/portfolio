window.addEventListener("load", () => {
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 650;

    window.setTimeout(() => {
        document.body.classList.add("is-loaded");
    }, delay);
});
