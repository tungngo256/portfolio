# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
npm start        # Serve production build
```

## Architecture

Single-page portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Deployed on Vercel.

**Routing:** Single route (`app/page.tsx`) — the entire site is one page with anchor-linked sections (hero, about, skills, experience, projects, credentials, contact).

**Section components:** Each section is its own component in `components/sections/` (Hero, About, Skills, Experience, Projects, Credentials, Contact, Footer). `page.tsx` composes them. Each section's content data (e.g. `SKILL_GROUPS`, `EXPERIENCE`, `PROJECTS`) lives in its own component file.

**Shared UI helpers:** `Pill` and `SectionTitle` in `components/` are used across multiple sections.

**Theming:** Dark/light mode via `next-themes` with class strategy. Colors are CSS variables (RGB channels in `globals.css`) consumed through Tailwind's `rgb(var(--name) / <alpha-value>)` pattern in `tailwind.config.ts`. The custom palette names are: `bg`, `fg`, `muted`, `accent`, `accent-solid`, `card`, `line`.

**Scroll animations:** The `Reveal` component uses IntersectionObserver to add an `is-visible` class for CSS-driven fade-up transitions. Respects `prefers-reduced-motion`. The CSS for `.reveal` / `.is-visible` lives in `globals.css`.

**SEO:** Comprehensive metadata in `app/layout.tsx`, plus `robots.ts`, `sitemap.ts`, and a programmatic OG image (`opengraph-image.tsx` using `next/og`). JSON-LD Person schema is embedded in the root layout.

**Site URL:** `https://portfolio-corbin-dev.vercel.app` — referenced in `layout.tsx`, `sitemap.ts`, `robots.ts`.

## Key conventions

- All images in `public/` are WebP format
- Path alias `@/*` maps to the project root
- Font: Inter via `next/font/google`, exposed as CSS variable `--font-inter`
- All components in `components/` are client components (`"use client"`)
