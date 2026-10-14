# Contributing to the Esvigy Website & Studio

Thank you for contributing to the **Esvigy Website & Studio** (`apps/website`)! This web application serves as the official documentation hub and interactive studio playground deployed live at **[esvigy.vercel.app](https://esvigy.vercel.app)**.

---

## Architecture & Code Structure

The website is a fast, responsive Single Page Application built with **Vite 6**, **React 19**, and **TypeScript**:

```text
apps/website/
├── index.html                  # HTML entry point and SEO meta tags
├── package.json                # Dependencies (@esvigy/react workspace:*)
├── src/
│   ├── main.tsx                # React DOM root mounting
│   ├── App.tsx                 # Root application state & router (home vs catalog)
│   ├── index.css               # Design tokens, CSS custom properties, and reset
│   │
│   └── components/
│       ├── Navbar.tsx          # Fixed header, theme switcher, and mobile drawer
│       ├── IllustrationCatalog.tsx  # Studio catalog, search, filters & color controls
│       ├── IllustrationModal.tsx    # Inspection modal, snippet generator & SVG export
│       ├── HomePage.tsx        # Documentation homepage container
│       │
│       └── home/
│           ├── HeroSection.tsx          # Top hero banner & CTA
│           ├── HeroDemoWidget.tsx       # Interactive sandbox in the hero
│           ├── FeaturesSection.tsx      # "Why Esvigy" value propositions
│           ├── FeaturedIllustrations.tsx # Preview grid of popular illustrations
│           ├── QuickStartGuide.tsx      # Multi-package installation tabs
│           ├── PackagesSection.tsx      # Monorepo ecosystem overview
│           ├── ContributorsSection.tsx  # Creator, Flowbite, and community spotlights
│           └── Footer.tsx               # Footer with links and license
```

---

## How Illustrations are Loaded in the Studio

The website does **not** hardcode a list of illustration components. Instead, it discovers them dynamically from the workspace packages:

1. **React Components**: Imported directly from the `@esvigy/react` workspace package:
   ```tsx
   import * as EsvigyComponents from "@esvigy/react";
   ```
2. **Metadata & Tags**: Read directly from the canonical SVG manifest:
   ```tsx
   import manifestData from "../../../packages/svg/manifest.json";
   ```

> **Why this is a superpower:** Whenever a new illustration is added to `@esvigy/react`, the website studio **automatically displays, categorizes, and enables animations for it without needing any code changes in `apps/website`!**

---

## Local Development Workflow

From the repository root:

```bash
# 1. Install dependencies
pnpm install

# 2. Build the React package first (so website can resolve it)
pnpm --filter @esvigy/react build

# 3. Start the Vite development server with hot-reload
pnpm --filter website dev
```

Open **`http://localhost:5173`** in your browser. Changes in `apps/website/src` will hot-reload instantly.

---

## Things You Can Work On

We welcome contributions of all scopes! Here are great ideas to explore:

### 1. Studio & Playground Features
- **Code Snippet Formats**: Extend [`IllustrationModal.tsx`](./src/components/IllustrationModal.tsx) to generate code snippets for **Vue 3**, **Svelte 5**, **HTML `<img src>`**, or **Base64 Data URIs**.
- **Palette Presets**: Add popular color palette presets (e.g. Tailwind 500 tones, Catppuccin, Dracula, Nord) to [`IllustrationCatalog.tsx`](./src/components/IllustrationCatalog.tsx).
- **Animation Controls**: Add an animation speed toggle (`0.5x`, `1x`, `1.5x`, `2x`) or hover-only trigger toggle.
- **Export Formats**: Add PNG / WebP raster export at `1x`, `2x`, `4x` resolutions using an off-screen canvas.

### 2. UI / UX & Design
- **Responsive Polish**: Refine layout on mobile devices and foldables.
- **Micro-Interactions**: Smooth card hover effects, copy-to-clipboard toast confirmations, and modal entry transitions.
- **Search & Filter Enhancements**: Add filter pills by category (`Actions`, `Empty States`, `Errors`, `Search`, etc.) or filter by animation availability.

### 3. Documentation & SEO
- Enhance meta tags, OpenGraph preview cards, and structured schema data in [`index.html`](./index.html).
- Improve code examples, guide explanations, and accessibility docs in [`QuickStartGuide.tsx`](./src/components/home/QuickStartGuide.tsx).

---

## Contributor Checklist for Website PRs

Before opening a Pull Request for website changes, verify the following:

- [ ] **Development server runs clean**:
  ```bash
  pnpm --filter website dev
  ```
  Check the browser developer console for zero warnings or React key errors.
- [ ] **Production build passes**:
  ```bash
  pnpm --filter website build
  ```
  Ensure Vite finishes building `dist/` with exit code 0.
- [ ] **Both Dark and Light themes look crisp**:
  Test the theme toggle in the navigation bar and verify contrast on both backgrounds.
- [ ] **Responsive behavior verified**:
  Test on both desktop resolution and mobile viewport (`< 768px`) using browser dev tools.
- [ ] **Clean Git Commit**: Follow conventional commit guidelines (e.g., `feat(website): add Vue snippet generator to modal`).
