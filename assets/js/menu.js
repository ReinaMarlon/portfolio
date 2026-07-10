window.addEventListener("load", () => {
    const menu = document.querySelector(".menu-primary");
    const menus = Array.from(document.querySelectorAll(".menu"));
    const sectionLinks = Array.from(document.querySelectorAll(".menu-link[data-section]"));
    const languageMenu = document.querySelector(".language-menu");
    const languageTrigger = document.querySelector(".language-trigger");
    const languageOptions = Array.from(document.querySelectorAll(".language-option"));
    const themeToggle = document.querySelector(".theme-toggle");
    const accentToggle = document.querySelector(".accent-toggle");

    if (!menu || !sectionLinks.length) {
        return;
    }

    let collapseTimer;

    const updateActiveIndicator = () => {
        const activeLink = menu.querySelector(".menu-link.active") || sectionLinks[0];
        const menuRect = menu.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        const x = linkRect.left - menuRect.left;

        menu.classList.add("has-active");
        menu.style.setProperty("--active-x", `${x}px`);
    };

    const setExpanded = (expanded) => {
        window.clearTimeout(collapseTimer);
        menus.forEach((item) => item.classList.toggle("is-expanded", expanded));
        window.requestAnimationFrame(updateActiveIndicator);
        window.setTimeout(updateActiveIndicator, 420);
    };

    const setLanguageOpen = (open) => {
        languageMenu?.classList.toggle("is-open", open);
        languageTrigger?.setAttribute("aria-expanded", String(open));

        if (open) {
            setExpanded(true);
        }
    };

    const scheduleCollapse = () => {
        window.clearTimeout(collapseTimer);
        collapseTimer = window.setTimeout(() => {
            const isInteracting = menus.some((item) => item.matches(":hover") || item.contains(document.activeElement));

            if (!isInteracting) {
                setExpanded(false);
                setLanguageOpen(false);
            }
        }, 140);
    };

    const applyTheme = (theme) => {
        const safeTheme = theme === "light" ? "light" : "dark";
        document.documentElement.dataset.theme = safeTheme;
        localStorage.setItem("portfolio-theme", safeTheme);
        themeToggle?.classList.toggle("is-light", safeTheme === "light");
        themeToggle?.setAttribute("aria-pressed", String(safeTheme === "light"));
        themeToggle?.querySelector("i")?.classList.toggle("fa-sun", safeTheme === "light");
        themeToggle?.querySelector("i")?.classList.toggle("fa-moon", safeTheme !== "light");
    };

    const applyAccent = (accent) => {
        const safeAccent = accent === "pink" ? "pink" : "blue";
        document.documentElement.dataset.accent = safeAccent;
        localStorage.setItem("portfolio-accent", safeAccent);
        accentToggle?.classList.toggle("is-pink", safeAccent === "pink");
        accentToggle?.setAttribute("aria-pressed", String(safeAccent === "pink"));
    };

    const setActive = (id) => {
        sectionLinks.forEach((link) => {
            const isActive = link.dataset.section === id;
            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        updateActiveIndicator();
    };

    const updateScrollProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        menu.style.setProperty("--scroll-progress", Math.min(Math.max(progress, 0), 1).toFixed(3));
    };

    const highlightContact = () => {
        const contact = document.getElementById("contact");

        if (!contact) {
            return;
        }

        contact.classList.remove("is-highlighted");
        window.requestAnimationFrame(() => {
            contact.classList.add("is-highlighted");
            window.setTimeout(() => contact.classList.remove("is-highlighted"), 1200);
        });
    };

    menus.forEach((item) => {
        item.addEventListener("pointerenter", () => setExpanded(true));
        item.addEventListener("pointermove", () => setExpanded(true));
        item.addEventListener("mouseenter", () => setExpanded(true));
        item.addEventListener("mouseover", () => setExpanded(true));
        item.addEventListener("pointerleave", scheduleCollapse);
        item.addEventListener("mouseleave", scheduleCollapse);
        item.addEventListener("focusin", () => setExpanded(true));
        item.addEventListener("focusout", scheduleCollapse);
    });

    languageTrigger?.addEventListener("click", (event) => {
        event.stopPropagation();
        setLanguageOpen(!languageMenu?.classList.contains("is-open"));
    });

    languageOptions.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            window.portfolioI18n?.applyLanguage(button.dataset.lang);
            setLanguageOpen(false);
            updateActiveIndicator();
        });
    });

    themeToggle?.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        applyTheme(nextTheme);
    });

    accentToggle?.addEventListener("click", () => {
        const nextAccent = document.documentElement.dataset.accent === "pink" ? "blue" : "pink";
        applyAccent(nextAccent);
    });

    document.addEventListener("click", (event) => {
        if (!languageMenu?.contains(event.target)) {
            setLanguageOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setLanguageOpen(false);
            setExpanded(false);
            document.activeElement?.blur();
        }
    });

    sectionLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setLanguageOpen(false);
            setExpanded(false);
        });
    });

    document.querySelectorAll('.footer-links a[href="#contact"]').forEach((link) => {
        link.addEventListener("click", highlightContact);
    });

    const sections = sectionLinks
        .map((link) => document.getElementById(link.dataset.section))
        .filter(Boolean);

    const updateActiveFromScroll = () => {
        const focusLine = window.innerHeight * 0.45;
        const current = sections.find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= focusLine && rect.bottom >= focusLine;
        });

        if (current) {
            setActive(current.id);
            return;
        }

        const nearest = sections.reduce((closest, section) => {
            const distance = Math.abs(section.getBoundingClientRect().top - focusLine);
            return distance < closest.distance ? { section, distance } : closest;
        }, { section: sections[0], distance: Number.POSITIVE_INFINITY }).section;

        if (nearest) {
            setActive(nearest.id);
        }
    };

    window.addEventListener("scroll", () => {
        updateScrollProgress();
        updateActiveFromScroll();
    }, { passive: true });

    window.addEventListener("resize", () => {
        updateActiveIndicator();
        updateActiveFromScroll();
    });

    updateActiveFromScroll();
    updateScrollProgress();
    applyTheme(localStorage.getItem("portfolio-theme") || "dark");
    applyAccent(localStorage.getItem("portfolio-accent") || "blue");
});
