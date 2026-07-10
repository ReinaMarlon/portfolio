window.addEventListener("load", async () => {
    const container = document.getElementById("projects-list");
    const projectsCount = document.getElementById("about-projects-count");

    if (!container) {
        return;
    }

    const allowedInvolvement = new Set([
        "solo-dev",
        "team-lead",
        "team-member",
        "freelance",
        "contribucion-parcial"
    ]);

    let cachedProjects = [];
    let projectTranslations = {};

    const getLang = () => window.portfolioI18n?.getLanguage?.() || "es";
    const t = (key) => window.portfolioI18n?.translate(key) || key;

    const normalizeNumber = (value) => Number.parseInt(String(value).replace(/\D/g, ""), 10) || 0;
    const isVisibleProject = (project) => project?.mostrar_proyecto !== false;

    const updateProjectsCount = (projects) => {
        if (projectsCount) {
            projectsCount.textContent = String(projects.filter(isVisibleProject).length);
        }
    };

    const escapeHtml = (value = "") => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const renderList = (items = []) => items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");

    const renderStack = (stack = []) => stack
        .map((item) => `<span>${escapeHtml(item)}</span>`)
        .join("");

    const renderRepoAction = (project) => {
        if (project.confidencial) {
            return `
                <span class="project-confidential">
                    <i class="fa-solid fa-lock" aria-hidden="true"></i>
                    ${t("projects.confidential")}
                </span>
            `;
        }

        if (!project.links?.repo) {
            return "";
        }

        return `
            <a href="${escapeHtml(project.links.repo)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                <span>${t("projects.repo")}</span>
            </a>
        `;
    };

    const renderSiteAction = (project) => {
        if (!project.mostrar_sitio || !project.links?.sitio) {
            return "";
        }

        return `
            <a href="${escapeHtml(project.links.sitio)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                <span>${t("projects.visitSite")}</span>
            </a>
        `;
    };

    const renderTalkAction = (project) => {
        if (!project.links?.conversar) {
            return "";
        }

        const isExternal = /^https?:\/\//.test(project.links.conversar);
        const targetAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";

        return `
            <a href="${escapeHtml(project.links.conversar)}"${targetAttrs}>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                <span>${t("projects.discuss")}</span>
            </a>
        `;
    };

    const renderCompanyContext = (project, context) => {
        if (!project.confidencial && project.empresa_url) {
            return `
                <a href="${escapeHtml(project.empresa_url)}" target="_blank" rel="noopener noreferrer">
                    ${escapeHtml(context)}
                </a>
            `;
        }

        return `<span>${escapeHtml(context)}</span>`;
    };

    const localizeProject = (project) => ({
        ...project,
        ...(projectTranslations[getLang()]?.[project.id] || {})
    });

    const renderProject = (projectData) => {
        const project = localizeProject(projectData);
        const safeId = escapeHtml(project.id);
        const involvement = allowedInvolvement.has(project.tipo_involucramiento)
            ? project.tipo_involucramiento
            : "contribucion-parcial";
        const context = project.confidencial
            ? t("projects.confidentialContext")
            : (project.empresa_contexto || t("projects.independent"));

        return `
            <article class="project-card" id="project-${safeId}" aria-labelledby="project-${safeId}-title" data-involvement="${escapeHtml(involvement)}">
                <div class="project-meta">
                    <span>${project.destacado ? t("projects.featured") : escapeHtml(project.numero)}</span>
                    <span>${escapeHtml(project.categoria)}</span>
                </div>

                <div class="project-intro">
                    <h3 id="project-${safeId}-title">${escapeHtml(project.titulo)}</h3>
                    <p>${escapeHtml(project.descripcion_corta)}</p>
                    <div class="project-context">
                        ${renderCompanyContext(project, context)}
                        <span>${escapeHtml(involvement)}</span>
                    </div>
                    <div class="project-stack" aria-label="Stack del proyecto">
                        <strong>Stack</strong>
                        ${renderStack(project.stack)}
                    </div>
                </div>

                <dl class="project-brief">
                    <div>
                        <dt>${t("projects.problem")}</dt>
                        <dd>${escapeHtml(project.problema)}</dd>
                    </div>
                    <div>
                        <dt>${t("projects.solution")}</dt>
                        <dd>${escapeHtml(project.solucion)}</dd>
                    </div>
                    <div>
                        <dt>${t("projects.role")}</dt>
                        <dd>${escapeHtml(project.rol)}</dd>
                    </div>
                </dl>

                <div class="project-detail-grid">
                    <div>
                        <h4>${t("projects.impact")}</h4>
                        <ul class="project-list">
                            ${renderList(project.impacto)}
                        </ul>
                    </div>
                    <div>
                        <h4>${t("projects.decisions")}</h4>
                        <ul class="project-list">
                            ${renderList(project.decisiones_tecnicas)}
                        </ul>
                    </div>
                </div>

                <div class="project-actions">
                    ${renderRepoAction(project)}
                    ${renderSiteAction(project)}
                    ${renderTalkAction(project)}
                </div>
            </article>
        `;
    };

    const renderProjects = (projects) => {
        const sortedProjects = projects
            .filter(isVisibleProject)
            .sort((a, b) => normalizeNumber(a.numero) - normalizeNumber(b.numero));

        container.innerHTML = sortedProjects.map(renderProject).join("");

        if (window.ScrollTrigger) {
            window.ScrollTrigger.refresh();
        }

        if (window.gsap) {
            gsap.from(container.querySelectorAll(".project-card"), {
                opacity: 0,
                y: 28,
                stagger: 0.08,
                duration: 0.65,
                ease: "power3.out"
            });
        }
    };

    try {
        const response = await fetch("data/projects.json", { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Projects request failed: ${response.status}`);
        }

        const data = await response.json();
        cachedProjects = Array.isArray(data.projects) ? data.projects : [];
        projectTranslations = data.translations || {};
        updateProjectsCount(cachedProjects);
        renderProjects(cachedProjects);
    } catch (error) {
        console.error(error);
        container.innerHTML = `<p class="projects-loading">${t("projects.error")}</p>`;
    }

    window.addEventListener("portfolio:languagechange", () => renderProjects(cachedProjects));
});
