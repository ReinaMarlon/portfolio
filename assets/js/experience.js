window.addEventListener("load", async () => {
    const container = document.getElementById("experience-list");

    if (!container) {
        return;
    }

    let experiences = [];

    const getLang = () => window.portfolioI18n?.getLanguage?.() || "es";
    const t = (key) => window.portfolioI18n?.translate(key) || key;

    const escapeHtml = (value = "") => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const getCopy = (experience) => experience.summary?.[getLang()] || experience.summary?.es || {};
    const getDetail = (experience) => experience.detail?.[getLang()] || experience.detail?.es || {};

    const renderPeriod = (period = {}) => `
        <span>${escapeHtml(period.start)}</span>
        <span>${escapeHtml(period.end)}</span>
    `;

    const renderList = (items = []) => items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");

    const renderTags = (stack = []) => stack
        .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
        .join("");

    const renderCompany = (experience, copy) => {
        if (experience.company_url) {
            return `
                <a class="timeline-company" href="${escapeHtml(experience.company_url)}" target="_blank" rel="noopener noreferrer">
                    ${escapeHtml(copy.company)}
                </a>
            `;
        }

        return escapeHtml(copy.company);
    };

    const renderExperience = (experience, index) => {
        const copy = getCopy(experience);
        const lastClass = index === experiences.length - 1 ? " last" : "";

        return `
            <article class="timeline-item${lastClass}" data-experience-id="${escapeHtml(experience.id)}">
                <span class="timeline-dot" aria-hidden="true"></span>
                <div class="timeline-row">
                    <span class="timeline-year">${renderPeriod(experience.period)}</span>
                    <div class="timeline-content">
                        <h3>${escapeHtml(copy.role)}</h3>
                        <p class="timeline-meta">${renderCompany(experience, copy)}</p>
                        <p class="timeline-desc">${escapeHtml(copy.description)}</p>
                        <ul class="timeline-impact">
                            ${renderList(copy.impact)}
                        </ul>
                        <div class="timeline-tags">
                            ${renderTags(experience.stack)}
                        </div>
                        <button class="timeline-detail-button" type="button" data-experience-detail="${escapeHtml(experience.id)}">
                            ${t("experience.detail")}
                        </button>
                    </div>
                </div>
            </article>
        `;
    };

    const renderDetailSections = (sections = []) => sections
        .map((section) => `
            <section class="experience-focus-section">
                <h4>${escapeHtml(section.heading)}</h4>
                <ul>
                    ${renderList(section.items)}
                </ul>
            </section>
        `)
        .join("");

    const closeFocus = () => {
        document.querySelectorAll(".timeline-item.is-focused").forEach((item) => {
            item.classList.remove("is-focused");
            item.querySelector(".experience-inline-detail")?.remove();
            item.querySelector(".experience-inline-close")?.remove();
            item.querySelector(".timeline-detail-button")?.removeAttribute("disabled");
        });
        document.body.classList.remove("experience-focus-open");
        document.body.style.removeProperty("overflow");
    };

    const openFocus = (experience, trigger) => {
        const copy = getCopy(experience);
        const detail = getDetail(experience);
        const item = trigger.closest(".timeline-item");

        closeFocus();

        if (!item) {
            return;
        }

        item.classList.add("is-focused");
        trigger.setAttribute("disabled", "true");
        document.body.classList.add("experience-focus-open");

        if (window.matchMedia("(min-width: 901px)").matches) {
            document.body.style.overflow = "hidden";
        }
        item.querySelector(".timeline-content")?.insertAdjacentHTML("beforeend", `
            <div class="experience-inline-detail" aria-live="polite">
                <div class="experience-focus-copy">
                    <h4>${escapeHtml(detail.title || copy.description)}</h4>
                    <p>${escapeHtml(detail.intro || copy.description)}</p>
                </div>
                <div class="experience-focus-grid">
                    ${renderDetailSections(detail.sections)}
                </div>
            </div>
        `);

        item.querySelector(".timeline-content h3")?.insertAdjacentHTML("afterend", `
            <button class="experience-inline-close" type="button" aria-label="${escapeHtml(t("experience.close"))}">
                <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
        `);

        item.querySelector(".experience-inline-close")?.focus();
        item.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const bindDetailButtons = () => {
        container.querySelectorAll("[data-experience-detail]").forEach((button) => {
            button.addEventListener("click", () => {
                const experience = experiences.find((item) => item.id === button.dataset.experienceDetail);

                if (experience) {
                    openFocus(experience, button);
                }
            });
        });
    };

    const render = () => {
        closeFocus();
        container.innerHTML = experiences.map(renderExperience).join("");
        bindDetailButtons();

        window.dispatchEvent(new CustomEvent("portfolio:experiencerendered"));
    };

    document.addEventListener("click", (event) => {
        if (event.target.closest(".experience-inline-close")) {
            closeFocus();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeFocus();
        }
    });

    try {
        const response = await fetch("data/experience.json", { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Experience request failed: ${response.status}`);
        }

        const data = await response.json();
        experiences = Array.isArray(data.experiences) ? data.experiences : [];
        render();
    } catch (error) {
        console.error(error);
        container.innerHTML = `<p class="timeline-loading">${t("experience.error")}</p>`;
    }

    window.addEventListener("portfolio:languagechange", render);
});
