window.addEventListener("load", () => {
    if (!window.gsap || !window.ScrollTrigger) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        ScrollTrigger.refresh();
        return;
    }

    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
        .from(".hero", { opacity: 0, scale: 1.025, duration: 1 })
        .from(".availability-pill", { opacity: 0, y: 18, duration: 0.55 }, "-=0.45")
        .from(".hero-kicker", { opacity: 0, y: 22, duration: 0.55 }, "-=0.35")
        .from(".hero-name", { opacity: 0, y: 42, duration: 0.75 }, "-=0.35")
        .from(".hero-skills", { opacity: 0, y: 26, duration: 0.6 }, "-=0.45")
        .from(".hero-stack span", { opacity: 0, y: 16, stagger: 0.045, duration: 0.45 }, "-=0.35")
        .from(".action-buttons .button", { opacity: 0, y: 18, stagger: 0.06, duration: 0.45 }, "-=0.32");

    gsap.fromTo(
        ".menu",
        { opacity: 0, y: -18, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
    );

    gsap.utils.toArray("main section:not(.hero)").forEach((section) => {
        const items = section.querySelectorAll("article, .about-toggle, .skill-group, .project-card, .contact-link, .timeline-impact li");

        gsap.from(section.querySelectorAll(".section-eyebrow, h2:not(.sr-only)"), {
            scrollTrigger: {
                trigger: section,
                start: "top 78%"
            },
            opacity: 0,
            y: 24,
            duration: 0.65,
            ease: "power3.out"
        });

        if (items.length) {
            gsap.from(items, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 68%"
                },
                opacity: 0,
                y: 34,
                stagger: 0.08,
                duration: 0.7,
                ease: "power3.out"
            });
        }
    });

    const syncTimelineActive = () => {
        const items = gsap.utils.toArray(".timeline-item");

        if (!items.length) {
            return;
        }

        const viewportCenter = window.innerHeight * 0.55;
        const nearest = items.reduce((closest, item) => {
            const distance = Math.abs(item.getBoundingClientRect().top - viewportCenter);
            return distance < closest.distance ? { item, distance } : closest;
        }, { item: items[0], distance: Number.POSITIVE_INFINITY }).item;

        items.forEach((item) => item.classList.toggle("is-active", item === nearest));
    };

    ScrollTrigger.create({
        trigger: ".timeline",
        start: "top bottom",
        end: "bottom top",
        onUpdate: syncTimelineActive,
        onEnter: syncTimelineActive,
        onEnterBack: syncTimelineActive
    });

    ScrollTrigger.refresh();
    syncTimelineActive();
});
