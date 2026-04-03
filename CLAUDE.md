# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Qizuna is a marketing website for a French digital agency built with **Next.js 15 (App Router)** with Static Site Generation (SSG). The site is fully pre-rendered at build time (`output: 'export'`) for optimal SEO.

## Commands

```bash
npm run dev     # Dev server (auto-picks available port starting from 3000)
npm run build   # Production build with static export to /out
npm run start   # Serve production build
npm run lint    # Run ESLint
```

## Architecture

### Directory Structure

```
app/
  layout.js       # Root layout with metadata, JSON-LD, fonts
  page.js         # Home page composing all sections
  globals.css     # CSS variables and global styles
  not-found.js    # 404 page
  sitemap.js      # Auto-generated sitemap.xml
  robots.js       # robots.txt configuration
components/
  layout/         # Navigation, Footer, ScrollButton (all "use client")
  sections/       # Hero, Services, Values, Certification, References, Contact, Philosophy, Testimonials
lib/
  data.js         # All site content (static data)
  icons.js        # Icon helper using lucide-react
public/           # Static assets (logos, images)
```

### Client vs Server Components

| Component | Type | Reason |
|-----------|------|--------|
| Navigation | Client | useState, useEffect, window API |
| Footer | Client | useState (modal) |
| ScrollButton | Client | useState, window API |
| Hero | Client | useState, useEffect, document.getElementById |
| Services | Server | Pure render |
| Values | Server | Pure render |
| Certification | Server | Pure render |
| Philosophy | Server | Pure render |
| References | Client | framer-motion |
| Testimonials | Client | useState, framer-motion |
| Contact | Client | useState, form submission |

### SEO

- **Metadata API**: Title, description, OG, Twitter configured in `app/layout.js`
- **JSON-LD**: Organization, WebSite, Service, LocalBusiness schemas in layout
- **Sitemap**: Auto-generated via `app/sitemap.js`
- **Robots.txt**: Configured via `app/robots.js`

### Styling

- **CSS variables** in `app/globals.css` (colors: `--primary-color`, `--secondary-color`, etc.)
- **Class naming**: `.qizuna-*` prefix
- **Font**: Manrope via `next/font/google`
- **Animations**: Framer Motion for References/Testimonials, CSS keyframes elsewhere

### External Services

- **Web3Forms**: Contact form backend (key in `.env.local`)
- **Umami Analytics**: stats.qizuna.net

### Environment Variables

```
NEXT_PUBLIC_WEB3FORMS_KEY=xxx   # Web3Forms API key
```

## Adding a New Section

1. Create `components/sections/NewSection.jsx` and `.css`
2. Add "use client" directive if using hooks/browser APIs
3. Add data to `lib/data.js`
4. Import and add to `app/page.js`
5. Add section ID for anchor navigation if needed
