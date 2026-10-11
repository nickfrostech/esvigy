# Memy — Project Milestones & Roadmap (TODO)

> **"Lucide for illustrations"** — Tracking the development progress of the Memy open-source illustration ecosystem from initial SVG normalization to multi-framework package releases.

---

## 📊 Milestone Progress Overview

| Phase | Milestone | Focus Area | Status | Target Completion |
| :---: | :--- | :--- | :---: | :---: |
| **M0** | **Spec & Architecture** | Core philosophy, API design, & build strategy | 🟢 Completed | Week 0 |
| **M1** | **Workspace & Monorepo** | pnpm monorepo structure, tooling & linting | 🟢 Completed | Week 1 |
| **M2** | **SVG Pipeline & Assets** | SVGO normalization, color tokens & initial 17 icons | 🟡 In Progress | Week 1 |
| **M3** | **React Package (`@memy/react`)** | SVGR generator, TypeScript typing & bundling | 🟡 In Progress | Week 1–2 |
| **M4** | **Interactive Showcase** | Searchable gallery, live color playground & docs | ⚪ Not Started | Week 2 |
| **M5** | **Multi-Framework Adapters & CLI** | Vue, Svelte, Angular, & CLI component scaffolder | ⚪ Not Started | Week 3 |
| **M6** | **Community & NPM Release** | CI/CD, SVG submission linting, & v0.1.0 launch | ⚪ Not Started | Week 4 |

---

## 🎯 Milestone 0: Specification & Architectural Design

- [x] Define product thesis ("Lucide for illustrations" — framework-agnostic component model).
- [x] Finalize minimal component API specification (`animated`, `color`, `secondaryColor`, `className`).
- [x] Map out cross-project synergy with NickCN, SimpleDB, and downstream apps ([BUILD_ROADMAP.md](file:///c:/Code/memy/BUILD_ROADMAP.md)).
- [x] Create project documentation and vision summary ([README.md](file:///c:/Code/memy/README.md)).
- [x] Establish milestone tracker ([TODO.md](file:///c:/Code/memy/TODO.md)).

---

## 🛠️ Milestone 1: Workspace & Monorepo Setup

- [x] Initialize `pnpm` monorepo configuration:
  - [x] Create `pnpm-workspace.yaml` defining `packages/*` and `apps/*`.
  - [x] Configure root `package.json` with script shortcuts (`build`, etc.).
- [x] Configure TypeScript for `@memy/react`:
  - [x] Set up `tsconfig.json` with React JSX and bundler resolution.
- [x] Establish folder hierarchy:
  - `packages/svg` (`@memy/svg` — canonical SVG source)
  - `packages/react` (`@memy/react` — React components)
  - `packages/react/scripts/generate.ts` (automation generator)
  - `apps/playground` (live interactive test app)

---

## 🎨 Milestone 2: SVG Pipeline & Initial Illustration Asset Set

- [ ] **Canonical SVG Normalization Engine**:
  - [ ] Define standard viewBox specification (e.g., `0 0 500 500` or `0 0 400 300`).
  - [ ] Configure `svgo.config.js` tailored for illustrations:
    - [ ] Strip hardcoded `width` and `height` while keeping `viewBox`.
    - [ ] Clean up redundant metadata, comments, and empty `<g>` wrappers.
    - [ ] Preserve class identifiers and animation markers.
  - [ ] Build color token replacer:
    - [ ] Map primary paths/strokes to `currentColor` or `--memy-primary`.
    - [ ] Map secondary accents/shadows to `--memy-secondary`.
  - [ ] Define standardized micro-animations:
    - [ ] Subtle floating / pulse / bounce CSS keyframes.
    - [ ] Scoped class naming (`.memy-animated-float`, `.memy-animated-pulse`).
  - [ ] Create illustration metadata schema (`illustrations.json`):
    - [ ] Name, category, keywords/tags, source attribution, and license info.
- [ ] **Curate & Normalize Initial Core Catalog (17 Illustrations)**:
  - **Errors & System States**:
    - [ ] `NotFound` (404 missing resource)
    - [ ] `ServerError` (500 internal server crash)
    - [ ] `Forbidden` (403 unauthorized access)
    - [ ] `Offline` (Network disconnect)
  - **Empty States**:
    - [ ] `EmptyCart` (Zero shopping items)
    - [ ] `EmptyInbox` (Zero incoming messages)
    - [ ] `EmptyFolder` (No files or empty project directory)
    - [ ] `NoResults` (Search or filter returned no matches)
    - [ ] `NoNotifications` (Notification center is clear)
  - **Feedback & Status**:
    - [ ] `Success` (Action completed successfully)
    - [ ] `Failed` (Action encountered failure)
    - [ ] `Processing` (Asynchronous task underway)
    - [ ] `Maintenance` (System under maintenance)
  - **Actions & Triggers**:
    - [ ] `Upload` (File upload state)
    - [ ] `Download` (File download / export)
    - [ ] `Search` (Search state / discover)
    - [ ] `Create` (New item creation)

---

## ⚛️ Milestone 3: React Component Generator (`@memy/react`)

- [x] **Component Generator Pipeline**:
  - [x] Build generator script `packages/react/scripts/generate.ts`:
    - [x] Transforms normalized SVGs in `@memy/svg` into React functional components.
    - [x] Implements the standard `MemyProps` interface (`color`, `secondaryColor`, `animated`, `className`).
    - [x] Inlines CSS keyframes safely and scopes gradient/mask IDs (`${componentName}_`).
    - [x] Forwards React `ref` and SVG props.
    - [x] Generates tree-shakable barrel export (`index.ts`).
- [x] **Build & Bundler Setup**:
  - [x] Configure `tsup` for dual ESM (`dist/index.js`), CJS (`dist/index.cjs`), and TypeScript declarations (`dist/index.d.ts`).
  - [x] Configure `"sideEffects": false` for tree-shaking.
  - [x] Verify Server Components compatibility (Next.js App Router safe).
- [ ] **Testing & Verification**:
  - [ ] Unit tests for props (`color`, `secondaryColor`, `animated`, `className`) using Vitest.
  - [ ] Size budget: verify gzipped output per component is < 2KB.

---

## 🌐 Milestone 4: Interactive Showcase & Documentation Site

- [ ] Scaffold documentation web app in `apps/docs` / `apps/gallery` using Vite / Next.js:
  - [ ] Responsive grid showcase of all Memy illustrations.
  - [ ] Real-time search by keyword and category filters.
  - [ ] Interactive customization controls:
    - [ ] Primary color picker (with hex input and presets).
    - [ ] Secondary color picker.
    - [ ] Live `animated` toggle.
    - [ ] Scale / container size slider.
  - [ ] Framework-agnostic export (100% SVG-first, strictly zero framework bias):
    - [ ] Copy Raw normalized SVG XML (one-click clipboard copy).
    - [ ] Download optimized SVG file (`.svg`).
  - [ ] Component guidelines and design system integration tips (NickCN pairing).
- [ ] Deploy documentation site to Vercel / Cloudflare Pages.

---

## 🚀 Milestone 5: Multi-Framework Expansion & CLI Scaffolder

- [ ] **Memy CLI Component Scaffolder (`pnpm dlx memy add <name> --framework <react|vue|svelte|svg>`)**:
  - [ ] "The shadcn Way" for every framework: copy self-contained single-file component directly into user's `components/memy/`.
  - [ ] React: `components/memy/<Name>.tsx`
  - [ ] Vue: `components/memy/<Name>.vue` (SFC with `<script setup>`)
  - [ ] Svelte: `components/memy/<Name>.svelte`
  - [ ] Raw SVG: `components/memy/<Name>.svg`
- [ ] **Raw SVG Package (`@memy/svg`)**:
  - [ ] Publish standalone optimized SVGs for static sites and vanilla HTML.
  - [ ] Provide SVG sprite builder option.
- [ ] **Vue 3 Package (`@memy/vue`)**:
  - [ ] Create template generator producing `.vue` single-file components.
  - [ ] Support both Composition API (`<script setup>`) and JSX.
- [ ] **Svelte Package (`@memy/svelte`)**:
  - [ ] Generate typed Svelte 4 / Svelte 5 components.
- [ ] **React Native Package (`@memy/react-native`)**:
  - [ ] Generate components using `react-native-svg` primitives (`Svg`, `Path`, `G`).
- [ ] **Angular Package (`@memy/angular`)**:
  - [ ] Generate standalone Angular components with inputs for `color`, `secondaryColor`, and `animated`.

---

## 🤝 Milestone 6: Community Pipeline, Licensing & Release

- [ ] **Asset Contribution Infrastructure**:
  - [ ] Create `CONTRIBUTING.md` with SVG guidelines (viewBox, layers, naming conventions).
  - [ ] Build automated validation CLI (`pnpm test:svg`):
    - [ ] Enforces viewBox formatting.
    - [ ] Verifies color token compliance (`currentColor` / CSS variables).
    - [ ] Detects forbidden embedded bitmaps or inline styles.
    - [ ] Validates license attribution in metadata.
- [ ] **CI/CD Automation**:
  - [ ] GitHub Actions workflow for pull request linting, formatting, and build tests.
  - [ ] Automated Changesets publishing workflow to npm registry on merged releases.
- [ ] **Public Launch**:
  - [ ] Publish `@memy/react` v0.1.0 and `@memy/svg` v0.1.0 to npm.
  - [ ] Publish announcement and documentation showcase.

---

## 📝 Activity Log & Notes

- **2026-10-11**: Repository initiated, architecture specified, and roadmap unified with master ecosystem sequence.
