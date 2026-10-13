# Esvigy — Project Milestones & Roadmap (TODO)

> **"Lucide for illustrations"** — Tracking the development progress of the Esvigy open-source illustration ecosystem from initial SVG normalization to multi-framework package releases.

---

## 📊 Milestone Progress Overview

|    Phase    | Milestone                                 | Focus Area                                          |     Status     | Target Completion |
| :----------: | :---------------------------------------- | :-------------------------------------------------- | :------------: | :---------------: |
| **M0** | **Spec & Architecture**             | Core philosophy, API design, & build strategy       |  🟢 Completed  |      Week 0      |
| **M1** | **Workspace & Monorepo**            | pnpm monorepo structure, tooling & linting          |  🟢 Completed  |      Week 1      |
| **M2** | **SVG Pipeline & Assets (29 SVGs)** | 2-tone normalization, manifest metadata & animations |  🟢 Completed  |      Week 1      |
| **M3** | **React Package (`@esvigy/react`)** | Automated generator, auto-pruning, TS declarations |  🟢 Completed  |     Week 1–2     |
| **M4** | **Interactive Showcase**            | Live playground gallery with theme color controls   | 🟡 In Progress |      Week 2      |
| **M5** | **Multi-Framework Adapters & CLI**  | Vue, Svelte, Angular, & CLI component scaffolder    | ⚪ Not Started |      Week 3      |
| **M6** | **Community & NPM Release**         | CI/CD, SVG submission linting, & v0.1.0 launch      | ⚪ Not Started |      Week 4      |

---

## 🎯 Milestone 0: Specification & Architectural Design

- [X] Define product thesis ("Lucide for illustrations" — framework-agnostic component model).
- [X] Finalize minimal component API specification (`animated`, `color`, `secondaryColor`, `className`).
- [X] Create project documentation and vision summary ([README.md](README.md)).
- [X] Establish milestone tracker ([TODO.md](TODO.md)).

---

## 🛠️ Milestone 1: Workspace & Monorepo Setup

- [X] Initialize `pnpm` monorepo configuration:
  - [X] Create `pnpm-workspace.yaml` defining `packages/*` and `apps/*`.
  - [X] Configure root `package.json` with script shortcuts (`build`, `dev`, etc.).
- [X] Configure TypeScript for `@esvigy/react`:
  - [X] Set up `tsconfig.json` with React JSX and bundler resolution.
- [X] Establish folder hierarchy:
  - `packages/svg` (`@esvigy/svg` — canonical SVG source and manifest metadata)
  - `packages/react` (`@esvigy/react` — React components)
  - `packages/react/scripts/generate.ts` (automation generator)
  - `apps/playground` (live interactive test app)

---

## 🎨 Milestone 2: SVG Pipeline & Initial Core Illustration Catalog (29 Illustrations)

- [X] **Canonical SVG Normalization Engine**:
  - [X] Standardize viewBox specifications matching illustration geometry and aspect ratios.
  - [X] Strip hardcoded `width` and `height` while preserving `viewBox`.
  - [X] Clean up redundant CorelDRAW metadata, comments, and empty wrappers.
  - [X] Color token engine:
    - [X] Map primary accents to `currentColor` / `fill={color}`.
    - [X] Map secondary surfaces to `data-esvigy-secondary="true"` and `data-esvigy-default="..."`.
  - [X] Standardized micro-animations with GPU acceleration:
    - [X] Scoped class naming (`.esvigy-hero-badge`, `.esvigy-cards-assembly`, `.esvigy-ground-shadow`, etc.).
    - [X] Automatic accessibility support (`@media (prefers-reduced-motion: reduce)`).
  - [X] Illustration metadata manifest ([packages/svg/manifest.json](packages/svg/manifest.json)):
    - [X] 29 entries with author, source, category, and searchable tags.
- [X] **Curate & Normalize Initial 29 Illustrations**:
  - **Actions (`Action*`)**:
    - [X] `ActionCreate` (New entity, compose document canvas with 3D plus)
    - [X] `ActionDownload` (File transfer sheet with 3D downward arrow & tray)
    - [X] `ActionUpload` (File transfer sheet with 3D upward arrow & tray)
  - **Status & Feedback (`Status*`)**:
    - [X] `StatusSuccess` (Completed celebration with 3D checkmark)
    - [X] `StatusFail` (Action failure with 3D cross)
    - [X] `StatusProcessing` (In-progress sync with 3D spinner ring)
    - [X] `StatusOffline` (Network disconnected dino runner)
  - **Search Suite (`Search*`)**:
    - [X] `Search` (Base magnifying glass exploration)
    - [X] `SearchLoading` (Query loading with radar sweep spinner)
    - [X] `SearchSuccess` (Matching search records with checkmark)
    - [X] `SearchNotFound` (Zero results with cross mark)
  - **Empty States (`Empty*`)**:
    - [X] `EmptyBox` (Empty delivery parcel)
    - [X] `EmptyCart` (Zero shopping cart items)
    - [X] `EmptyFolder` (Empty project directory)
    - [X] `EmptyMessage` (Cleared inbox / zero messages)
  - **Errors & 404s (`NotFound*` / `Error*`)**:
    - [X] `ErrorForbidden` (403 authorization stop hand)
    - [X] `ErrorServer` (500 server rack & laptop error)
    - [X] `NotFoundLaptop` (404 missing resource with laptop screen)
    - [X] `NotFoundRobot` (404 cyber robot)
    - [X] `NotFoundShopping` (404 empty store cart)
    - [X] `NotFoundSmiley` (404 confused smiley face)
  - **Security, Finance & Utility**:
    - [X] `SecurityLock` (Authentication lock & key)
    - [X] `DocumentFolders` (File organization folders)
    - [X] `Wallet` (Finance payment wallet & coins)
    - [X] `GamePad` (Gaming controller)
  - **Characters & Lifestyle**:
    - [X] `ManCarRepair` (Mechanic car diagnostics)
    - [X] `ManQuestion` (Puzzled help inquiry)
    - [X] `WomanLaptop` (Developer woman at desk)
    - [X] `WomanYoga` (Meditation & wellness)

---

## ⚛️ Milestone 3: React Component Generator (`@esvigy/react`)

- [X] **Component Generator Pipeline**:
  - [X] Generator script `packages/react/scripts/generate.ts`:
    - [X] Reads normalized SVGs in `@esvigy/svg/src/` and converts them to React functional components.
    - [X] Automatic pruning of stale `.tsx` files when SVGs are renamed or deleted.
    - [X] Standard `EsvigyProps` interface (`color`, `secondaryColor`, `animated`, `className`, `style`).
    - [X] Inlines scoped CSS keyframes with `${componentName}_` prefixing for IDs, gradients, and filters.
    - [X] Generates barrel export `packages/react/src/index.ts` exporting all 29 components.
- [X] **Build & Bundler Setup**:
  - [X] Configure `tsup` for ESM (`dist/index.js`), CJS (`dist/index.cjs`), and TypeScript declarations (`dist/index.d.ts`).
  - [X] `"sideEffects": false` enabled for dead-code elimination.
  - [X] Server Components compatible (Next.js App Router safe).
- [ ] **Testing & Verification**:
  - [ ] Unit tests for props (`color`, `secondaryColor`, `animated`, `className`) using Vitest.
  - [ ] Size budget: verify gzipped output per component is < 2KB.

---

## 🌐 Milestone 4: Interactive Showcase & Documentation Site

- [X] Live interactive playground (`apps/playground`):
  - [X] Dynamic discovery of all `@esvigy/react` components via barrel export and `manifest.json`.
  - [X] Responsive grid layout with size controls (`sm`, `md`, `lg`).
  - [X] Search filtering by name and metadata tags.
  - [X] Category pill filters (`all`, `actions`, `status`, `search`, `empty-states`, `errors`, etc.).
  - [X] Real-time theme customization:
    - [X] Preset color palettes (Cyan Pop, Emerald, Purple Neon, Sunset, Rose, Monochrome).
    - [X] Primary & secondary color pickers.
    - [X] Card background modes (dark, light, grid).
    - [X] Live animation toggle (`animated`).
  - [X] Modal inspection with import snippets and copy-to-clipboard.
- [ ] Production documentation site deployment (`esvigy.dev`).

---

## 🚀 Milestone 5: Multi-Framework Expansion & CLI Scaffolder

- [ ] **Esvigy CLI Component Scaffolder (`pnpm dlx esvigy add <name> --framework <react|vue|svelte|svg>`)**:
  - [ ] "The shadcn Way" for every framework: copy self-contained single-file component directly into user's `components/esvigy/`.
  - [ ] React: `components/esvigy/<Name>.tsx`
  - [ ] Vue: `components/esvigy/<Name>.vue` (SFC with `<script setup>`)
  - [ ] Svelte: `components/esvigy/<Name>.svelte`
  - [ ] Raw SVG: `components/esvigy/<Name>.svg`
- [ ] **Raw SVG Package (`@esvigy/svg`)**:
  - [ ] Standalone optimized SVGs for static sites and vanilla HTML.
  - [ ] Provide SVG sprite builder option.
- [ ] **Vue 3 Package (`@esvigy/vue`)**:
  - [ ] Template generator producing `.vue` single-file components.
  - [ ] Support both Composition API (`<script setup>`) and JSX.
- [ ] **Svelte Package (`@esvigy/svelte`)**:
  - [ ] Generate typed Svelte 4 / Svelte 5 components.
- [ ] **React Native Package (`@esvigy/react-native`)**:
  - [ ] Generate components using `react-native-svg` primitives (`Svg`, `Path`, `G`).
- [ ] **Angular Package (`@esvigy/angular`)**:
  - [ ] Standalone Angular components with inputs for `color`, `secondaryColor`, and `animated`.

---

## 🤝 Milestone 6: Community Pipeline, Licensing & Release

- [ ] **Asset Contribution Infrastructure**:
  - [X] Create CorelDRAW & SVG Design Guide ([packages/svg/README.md](packages/svg/README.md)).
  - [ ] Build automated validation CLI (`pnpm test:svg`).
- [ ] **CI/CD Automation**:
  - [ ] GitHub Actions workflow for pull request linting, formatting, and build tests.
  - [ ] Automated Changesets publishing workflow to npm registry on merged releases.
- [ ] **Public Launch**:
  - [ ] Publish `@esvigy/react` v0.1.0 and `@esvigy/svg` v0.1.0 to npm.
  - [ ] Publish announcement and documentation showcase.

---

## 📝 Activity Log & Notes

- **2026-10-11**: Repository initiated, architecture specified, and roadmap unified.
- **2026-10-12**: SVG normalization pipeline established. Added initial empty state, error, and status illustration suites.
- **2026-10-13**: Completed 29 canonical illustrations:
  - Added `ActionUpload`, `ActionDownload`, and `ActionCreate` matching 3D badge aesthetic.
  - Unified search states: `Search`, `SearchLoading`, `SearchSuccess`, `SearchNotFound`.
  - Applied consistent category prefix taxonomy (`Action*`, `Status*`, `Empty*`, `NotFound*`, `Error*`).
  - Added auto-pruning pipeline to `packages/react/scripts/generate.ts`.
  - Re-synced [packages/svg/manifest.json](packages/svg/manifest.json) with 1-to-1 parity.
