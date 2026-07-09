# Marlon Reina Portfolio

Live URL: https://reinamarlon.github.io/portfolio/

Portfolio website for Marlon Estiben Reina Dinas, a Java Backend Engineer focused on Spring Boot APIs, microservices, integrations, and enterprise backend systems.

## Design System

### Color palette
- `#0a0a0a`: primary near-black background.
- `#000000`: deep page background and hero base.
- `#101010`: subtle surface color for editorial panels.
- `#f5f5f5`: primary text.
- `rgba(255, 255, 255, 0.58)`: muted labels and secondary copy.
- `rgba(255, 255, 255, 0.14)`: dividers and low-contrast borders.
- `#23b7ff`: single blue accent for status, active states, links, and highlights.

### Typography
- `Iosevka Charon`: italic display type for hero names, section titles, stats, years, and editorial headings.
- `Inter`: clean sans-serif for body copy, labels, buttons, navigation, and project descriptions.
- Display headings use light italic weights; labels and interface text use bold sans-serif weights.

### Spacing scale
- `--space-1`: 0.25rem
- `--space-2`: 0.5rem
- `--space-3`: 0.75rem
- `--space-4`: 1rem
- `--space-5`: 1.5rem
- `--space-6`: 2rem
- `--space-7`: 3rem
- `--space-8`: 4rem

### Animation principles
- GSAP `power3.out` for section reveals and hero entrance.
- Fast UI transitions use `--ease-standard: cubic-bezier(0.22, 1, 0.36, 1)`.
- Section content animates with fade + vertical slide.
- Grid items stagger subtly.
- Timeline state and floating menu state react to scroll.
- Animations initialize on `window.load` and call `ScrollTrigger.refresh()`.

## Sections Overview

- Hero: recruiter-ready positioning, availability, stack, and CTAs visible in the first viewport.
- About: professional summary, core technologies, stats, location, and professional/personal toggle.
- Experience: career story with impact bullets, stack tags, and active timeline dots.
- Skills: grouped capabilities by Backend, Architecture, Frontend, and Tools & Platforms.
- Projects: backend-oriented mini case studies with problem, solution, role, impact, technical decisions, stack, and repo/contact links.
- Contact: email, LinkedIn, GitHub, and availability signal.
- Footer: name, role, and quick navigation.
- Language switcher: Spanish-first content with an ES/ENG dropdown in the floating navigation.

## SEO Strategy

- Semantic HTML5 structure with `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Target keywords include Java Backend Engineer, Spring Boot Developer, Microservices, API Design, PHP Developer, ASP.NET Developer, and Software Engineer Colombia.
- Meta tags include title, description, keywords, author, robots, Open Graph, Twitter card, and canonical URL.
- Structured data uses JSON-LD `Person` schema.
- `robots.txt` and `sitemap.xml` are included.

## Tech Stack

- HTML5
- CSS3 with custom properties and section-level files
- Vanilla JavaScript
- Custom ES/EN i18n layer with `localStorage` persistence
- Client-side JSON data layer for projects: `data/projects.json`
- GSAP 3.12.5
- ScrollTrigger 3.12.5
- Font Awesome 6.5.1
- Google Fonts: Inter and Iosevka Charon

## Project Data

Projects are loaded from `data/projects.json`, so adding or editing a project only requires changing that JSON file and committing it. The static HTML contains only the section shell; `assets/js/projects.js` sorts projects by `numero` and renders the cards dynamically.

GitHub Pages supports this client-side `fetch` approach without a build step. For stronger SEO later, the same JSON can be consumed by a static generator such as Eleventy or Astro to pre-render project HTML at build time.
