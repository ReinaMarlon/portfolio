window.portfolioI18n = (() => {
    const translations = {
        es: {
            "nav.home": "Inicio",
            "nav.about": "Sobre mí",
            "nav.experience": "Experiencia",
            "nav.skills": "Habilidades",
            "nav.projects": "Proyectos",
            "nav.contact": "Contacto",
            "nav.language": "Idioma",
            "nav.theme": "Tema",
            "nav.accent": "Acento",
            "hero.availability": "Disponible para roles remotos e híbridos",
            "hero.kicker": "Desarrollador de Software Java / 4 años de experiencia",
            "hero.description": "Construyo sistemas confiables con Spring Boot, microservicios, APIs e integraciones empresariales para equipos que necesitan sistemas backend que escalen con claridad.",
            "hero.cta.contact": "Contacto",
            "hero.cta.projects": "Proyectos",
            "hero.cv.spanish": "Español",
            "hero.cv.english": "Inglés",
            "about.eyebrow": "02 / Sobre mí",
            "about.badge": "Desarrollador de Software",
            "about.title": "Desarrollador de Software Java enfocado en sistemas Spring Boot confiables",
            "about.professional": "Ayudo a equipos a convertir flujos de negocio en <span class=\"highlight\">sistemas backend estables</span>: APIs con Spring Boot, módulos listos para microservicios, integraciones y código mantenible que otros desarrolladores pueden extender sin miedo.",
            "about.personal": "Soy un constructor curioso que disfruta entender cómo encajan los sistemas: <span class=\"highlight\">arquitectura, herramientas, videojuegos </span> y el oficio de volverse más claro con cada entrega.",
            "about.stat.years": "Años de experiencia",
            "about.stat.projects": "Proyectos",
            "about.stat.availability": "Disponibilidad",
            "about.stat.remote": "Remoto e Híbrido",
            "about.toggle.professional": "Profesional",
            "about.toggle.personal": "Personal",
            "experience.eyebrow": "03 / Experiencia",
            "experience.range": "Jul 2020 - Mar 2026",
            "experience.title": "Experiencia en desarrollo de software con APIs Java, plataformas web y aplicaciones internas empresariales",
            "experience.detail": "Ver detalle",
            "experience.close": "Cerrar detalle",
            "experience.error": "No se pudo cargar la experiencia.",
            "experience.item1.year": "<span>Jul 2025</span><span>Mar 2026</span>",
            "experience.item1.role": "Desarrollador de Software",
            "experience.item1.meta": "Globant",
            "experience.item1.desc": "Desarrollo de contratos de API con enfoque contract-first, incluyendo herramientas propias para validar cumplimiento de especificaciones OpenAPI/Swagger en proyectos empresariales.",
            "experience.item1.impact1": "Diseñé un plugin de Maven personalizado para validar contratos de API JSON/YAML contra especificaciones OpenAPI/Swagger.",
            "experience.item1.impact2": "Apliqué prácticas de desarrollo e ingeniería en Java en un entorno de proyectos empresariales de gran escala.",
            "experience.item2.year": "<span>Jul 2022</span><span>Jul 2024</span>",
            "experience.item2.role": "Líder TI",
            "experience.item2.meta": "CCED - Centro de Capacitación y Educación Dirigida",
            "experience.item2.desc": "Desarrollo end-to-end del sitio institucional y de software interno de gestión académica y financiera.",
            "experience.item2.impact1": "Diseñé e implementé el sitio web oficial de CCED con cursos, programas, información legal, FAQs y recursos para empresas.",
            "experience.item2.impact2": "Desarrollé software institucional para gestión de estudiantes, pagos, notas y asistencia.",
            "experience.item3.year": "<span>Jul 2020</span><span>Jul 2021</span>",
            "experience.item3.role": "Desarrollador de Software",
            "experience.item3.meta": "Omnicon",
            "experience.item3.desc": "Desarrollo de múltiples aplicaciones internas para gestión de contratos, talento humano e innovación colaborativa.",
            "experience.item3.impact1": "Desarrollé aplicaciones para generar contratos, consultar históricos, gestionar talento humano y apoyar procesos de onboarding.",
            "experience.item3.impact2": "Construí plataformas internas para ideas, recompensas y seguimiento de solicitudes de nuevas aplicaciones.",
            "skills.eyebrow": "04 / Habilidades",
            "skills.count": "18 capacidades",
            "skills.title": "Habilidades en microservicios Spring Boot e ingeniería backend",
            "skills.backend.desc": "APIs de producción, lógica de servicio, flujos de persistencia y módulos backend mantenibles.",
            "skills.arch.title": "Arquitectura",
            "skills.arch.desc": "Pensamiento de sistemas para bases de código modulares, límites de integración y servicios listos para escalar.",
            "skills.front.desc": "Criterio suficiente en cliente para construir interfaces pulidas y colaborar a través del stack.",
            "skills.tools.title": "Herramientas & Plataformas",
            "skills.tools.desc": "Herramientas diarias para versionamiento, contenedores, automatización y flujos empresariales.",
            "projects.eyebrow": "05 / Proyectos",
            "projects.subtitle": "Impacto en el desarrollo",
            "projects.title": "Proyectos backend Java con APIs, integraciones y arquitectura pensada para producción",
            "projects.problem": "Problema",
            "projects.solution": "Solución",
            "projects.role": "Rol",
            "projects.impact": "Impacto",
            "projects.decisions": "Decisiones técnicas",
            "projects.loading": "Cargando proyectos...",
            "projects.empty": "Aún no hay proyectos visibles. Estoy preparando nuevos casos para mostrar pronto.",
            "projects.error": "Ocurrió un error al cargar los proyectos. Inténtalo de nuevo más tarde.",
            "projects.featured": "Destacado",
            "projects.confidential": "Repo confidencial",
            "projects.confidentialContext": "Empresa confidencial",
            "projects.independent": "Proyecto independiente",
            "projects.repo": "Repo",
            "projects.visitSite": "Visitar sitio",
            "projects.download": "Descargar",
            "projects.personal": "Personal",
            "projects.app": "App",
            "projects.discuss": "Conversar",
            "contact.eyebrow": "06 / Contacto",
            "contact.subtitle": "Oportunidades remotas e híbridas",
            "contact.title": "¿Necesitas un desarrollador backend que pueda hacerse cargo de APIs y comunicarse con claridad?",
            "contact.desc": "Estoy abierto a roles Java, Spring Boot, backend, fullstack e integraciones con equipos de producto, consultoras y grupos de ingeniería que valoren una entrega limpia.",
            "contact.email": "Email",
            "contact.linkedin": "Conectar profesionalmente",
            "contact.github": "Revisar código y proyectos",
            "footer.role": "Desarrollador de Software Java / Spring Boot / Microservicios",
            "footer.top": "Inicio",
            "footer.projects": "Proyectos",
            "footer.contact": "Contacto"
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.experience": "Experience",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "nav.language": "Language",
            "nav.theme": "Theme",
            "nav.accent": "Accent",
            "hero.availability": "Open to remote and hybrid roles",
            "hero.kicker": "Java Backend Developer / 4 years experience",
            "hero.description": "I build reliable Spring Boot systems, microservices, APIs, and enterprise integrations for product teams that need backend systems to scale cleanly.",
            "hero.cta.contact": "Contact",
            "hero.cta.projects": "Projects",
            "hero.cv.spanish": "Spanish",
            "hero.cv.english": "English",
            "about.eyebrow": "02 / About me",
            "about.badge": "Software Developer",
            "about.title": "Java Backend Developer focused on reliable Spring Boot APIs",
            "about.professional": "I help teams turn business workflows into <span class=\"highlight\">stable backend systems</span>: Spring Boot APIs, microservice-ready modules, integrations, and maintainable code that other developers can extend without fear.",
            "about.personal": "I am a curious builder who enjoys understanding how systems fit together: <span class=\"highlight\">architecture, tooling, games</span>, and the craft of becoming calmer and sharper with every release.",
            "about.stat.years": "Years experience",
            "about.stat.projects": "Projects",
            "about.stat.availability": "Availability",
            "about.stat.remote": "Remote and Hybrid",
            "about.toggle.professional": "Professional",
            "about.toggle.personal": "Personal",
            "experience.eyebrow": "03 / Experience",
            "experience.range": "Jul 2020 - Mar 2026",
            "experience.title": "Software development experience across Java APIs, web platforms, and internal enterprise applications",
            "experience.detail": "View detail",
            "experience.close": "Close detail",
            "experience.error": "Experience could not be loaded.",
            "experience.item1.year": "<span>Jul 2025</span><span>Mar 2026</span>",
            "experience.item1.role": "Java Software Developer",
            "experience.item1.meta": "Globant",
            "experience.item1.desc": "API contract development with a contract-first approach, including internal tooling to validate OpenAPI/Swagger compliance in enterprise projects.",
            "experience.item1.impact1": "Designed a custom Maven plugin to validate JSON/YAML API contracts against OpenAPI/Swagger specifications.",
            "experience.item1.impact2": "Applied Java development and engineering practices in a large-scale enterprise project environment.",
            "experience.item2.year": "<span>Jul 2022</span><span>Jul 2024</span>",
            "experience.item2.role": "IT Leader",
            "experience.item2.meta": "CCED - Directed Training and Education Center",
            "experience.item2.desc": "End-to-end development of the institutional website and internal academic and financial management software.",
            "experience.item2.impact1": "Designed and implemented CCED's official website with courses, programs, legal information, FAQs, and business resources.",
            "experience.item2.impact2": "Built institutional software for student management, payments, grades, and attendance.",
            "experience.item3.year": "<span>Jul 2020</span><span>Jul 2021</span>",
            "experience.item3.role": "Software Developer",
            "experience.item3.meta": "Omnicon",
            "experience.item3.desc": "Development of multiple internal applications for contract management, human talent, and collaborative innovation.",
            "experience.item3.impact1": "Built applications to generate contracts, view history, manage talent information, and support onboarding processes.",
            "experience.item3.impact2": "Built internal platforms for ideas, rewards, and tracking new internal application requests.",
            "skills.eyebrow": "04 / Skills",
            "skills.count": "18 capabilities",
            "skills.title": "Spring Boot microservices and backend development skills",
            "skills.backend.desc": "Production APIs, service logic, persistence flows, and maintainable backend modules.",
            "skills.arch.title": "Architecture",
            "skills.arch.desc": "Systems thinking for modular codebases, integration boundaries, and scale-ready services.",
            "skills.front.desc": "Sharp enough on the client side to build polished interfaces and collaborate across the stack.",
            "skills.tools.title": "Tools & Platforms",
            "skills.tools.desc": "Everyday delivery tooling for versioning, containers, automation, and enterprise workflows.",
            "projects.eyebrow": "05 / Projects",
            "projects.subtitle": "Development Impact",
            "projects.title": "Java backend projects with APIs, integrations, and production-minded architecture",
            "projects.problem": "Problem",
            "projects.solution": "Solution",
            "projects.role": "Role",
            "projects.impact": "Impact",
            "projects.decisions": "Technical decisions",
            "projects.loading": "Loading projects...",
            "projects.empty": "There are no visible projects yet. New case studies are being prepared.",
            "projects.error": "Projects could not be loaded. Check data/projects.json.",
            "projects.featured": "Featured",
            "projects.confidential": "Confidential repo",
            "projects.confidentialContext": "Confidential company",
            "projects.independent": "Independent project",
            "projects.repo": "Repo",
            "projects.visitSite": "Visit site",
            "projects.download": "Download",
            "projects.personal": "Personal",
            "projects.app": "App",
            "projects.discuss": "Discuss",
            "contact.eyebrow": "06 / Contact",
            "contact.subtitle": "Remote and hybrid opportunities",
            "contact.title": "Need a backend developer who can own APIs and communicate clearly?",
            "contact.desc": "I am open to Java, Spring Boot, backend, fullstack, and integration-focused roles with product teams, consulting firms, and engineering groups that value clean delivery.",
            "contact.email": "Email",
            "contact.linkedin": "Connect professionally",
            "contact.github": "Review code and projects",
            "footer.role": "Java Backend Developer / Spring Boot / Microservices",
            "footer.top": "Top",
            "footer.projects": "Projects",
            "footer.contact": "Contact"
        }
    };

    const getLanguage = () => localStorage.getItem("portfolio-language") || "es";
    const translate = (key, lang = getLanguage()) => translations[lang]?.[key] || translations.es[key] || key;

    const updateMetadata = (lang) => {
        const meta = {
            es: {
                title: "Marlon Reina | Desarrollador de Software Java & Spring Boot",
                description: "Portafolio de Marlon Reina, desarrollador de software Java enfocado en Spring Boot, APIs, microservicios e integraciones empresariales.",
                ogTitle: "Marlon Reina | Desarrollador de Software Java",
                ogDescription: "Desarrollador de software que construye APIs escalables, servicios Spring Boot y sistemas backend empresariales."
            },
            en: {
                title: "Marlon Reina | Java Backend Developer & Spring Boot Developer",
                description: "Portfolio of Marlon Reina, Java software developer focused on Spring Boot, APIs, microservices, and enterprise integrations.",
                ogTitle: "Marlon Reina | Java Backend Developer",
                ogDescription: "Software Developer building scalable APIs, Spring Boot services, and enterprise backend systems."
            }
        }[lang];

        document.title = meta.title;
        document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
        document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.ogTitle);
        document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.ogDescription);
        document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.ogTitle);
        document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
    };

    const applyLanguage = (lang) => {
        const safeLang = translations[lang] ? lang : "es";
        localStorage.setItem("portfolio-language", safeLang);
        document.documentElement.lang = safeLang;
        updateMetadata(safeLang);

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            element.textContent = translate(element.dataset.i18n, safeLang);
        });

        document.querySelectorAll("[data-i18n-html]").forEach((element) => {
            element.innerHTML = translate(element.dataset.i18nHtml, safeLang);
        });

        document.querySelectorAll(".language-option").forEach((button) => {
            const isActive = button.dataset.lang === safeLang;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { lang: safeLang } }));
    };

    window.addEventListener("load", () => applyLanguage(getLanguage()));

    return { applyLanguage, getLanguage, translate };
})();
