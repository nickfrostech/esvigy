# Esvigy — Project Milestones & Roadmap (TODO)

> **"Lucide for illustrations"** — Tracking the development progress of the Esvigy open-source illustration ecosystem from initial SVG normalization to multi-framework package releases.

---

## 📊 Milestone Progress Overview

|    Phase    | Milestone                                 | Focus Area                                          |     Status     | Target Completion |
| :----------: | :---------------------------------------- | :-------------------------------------------------- | :------------: | :---------------: |
| **M0** | **Spec & Architecture**             | Core philosophy, API design, & build strategy       |  🟢 Completed  |      Week 0      |
| **M1** | **Workspace & Monorepo**            | pnpm monorepo structure, tooling & linting          |  🟢 Completed  |      Week 1      |
| **M2** | **SVG Pipeline & Assets (30 SVGs)** | 2-tone normalization, manifest metadata & animations |  🟢 Completed  |      Week 1      |
| **M3** | **React Package (`@esvigy/react`)** | Automated generator, auto-pruning, TS declarations |  🟢 Completed  |     Week 1–2     |
| **M4** | **Documentation Website & Studio**  | Live documentation homepage & illustration studio   |  🟢 Completed  |      Week 2      |
| **M5** | **Multi-Framework Adapters & CLI**  | Vue, Svelte, Angular, & CLI component scaffolder    | 🟡 In Progress |      Week 3      |
| **M6** | **Community & NPM Release**         | CI/CD, SVG submission linting, & v0.1.0 launch      |  🟢 Completed  |      Week 4      |

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
  - `apps/website` (documentation homepage & illustration studio)

---

## 🎨 Milestone 2: SVG Pipeline & Initial Core Illustration Catalog (30 Illustrations)

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
    - [X] 30 entries with author, source, category, and searchable tags.
- [X] **Curate & Normalize Initial 30 Illustrations**:
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
    - [X] `LogoEsvigy` (Official brand logo & geometric icon)
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
    - [X] Universal regex converter replacing manual attribute replacements while safeguarding `data-*` and `aria-*`.
    - [X] Supports single component generation (`pnpm generate <Name>`) and batch (`pnpm generate --all`).
    - [X] Separated barrel index generator into standalone script ([generate-index.ts](packages/react/scripts/generate-index.ts)).
    - [X] Standard `EsvigyProps` interface (`color`, `secondaryColor`, `animated`, `className`, `style`).
    - [X] Inlines scoped CSS keyframes with `${componentName}_` prefixing for IDs, gradients, and filters.
    - [X] Generates barrel export `packages/react/src/index.ts` exporting all 30 components.
- [X] **Build & Bundler Setup**:
  - [X] Configure `tsup` for ESM (`dist/index.js`), CJS (`dist/index.cjs`), and TypeScript declarations (`dist/index.d.ts`).
  - [X] `"sideEffects": false` enabled for dead-code elimination.
  - [X] Server Components compatible (Next.js App Router safe).
- [X] **Testing & Verification**:
  - [X] Vitest test suite discovering all components dynamically (250 tests passing in ~2.5s).
  - [X] Contract tests verifying props (`color`, `secondaryColor`, `animated`, `className`, `style`, `aria-label`).
  - [X] Fast single-component test runner (`pnpm test:one <Name>`) executing in ~40ms.
  - [X] Bundle integrity tests verifying dual ESM/CJS exports and tree-shaking exports.

---

## 🌐 Milestone 4: Interactive Showcase & Documentation Site

- [X] Documentation website & illustration studio (`apps/website`):
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
  - [X] Integrated links to CONTRIBUTING guides and COPYRIGHT policy.
- [X] Production documentation site deployment live at [esvigy.vercel.app](https://esvigy.vercel.app).

---

## 🚀 Milestone 5: Multi-Framework Expansion & CLI Scaffolder

- [X] **Esvigy CLI Component Scaffolder (`pnpm dlx @esvigy/cli add <name> --framework <react|vue|svelte|svg>`)**:
  - [X] Scoped package: `@esvigy/cli` (published & live on npm).
  - [ ] Unscoped package: `esvigy` (pending npm support review for typosquatting whitelist).
  - [X] "The shadcn Way" for every framework: copy self-contained single-file component directly into user's `components/esvigy/`.
  - [X] Smart directory auto-detection (reads shadcn `components.json`, `tsconfig.json` path aliases, and filesystem structure).
  - [X] Interactive wizard via `@clack/prompts` with multi-select, category badges, and quick start code snippets.
  - [X] React: `components/esvigy/<Name>.tsx` + `types.ts`
  - [X] Raw SVG: `components/esvigy/<Name>.svg`
  - [X] Vue: `components/esvigy/<Name>.vue` (SFC with `<script setup>`)
  - [ ] Svelte: `components/esvigy/<Name>.svelte`
- [ ] **Raw SVG Package (`@esvigy/svg`)**:
  - [ ] Standalone optimized SVGs for static sites and vanilla HTML.
  - [ ] Provide SVG sprite builder option.
- [X] **Vue 3 Package (`@esvigy/vue`)**:
  - [X] Template generator producing `.vue` single-file components.
  - [X] Support both Composition API (`<script setup>`) and JSX.
- [ ] **Svelte Package (`@esvigy/svelte`)**:
  - [ ] Generate typed Svelte 4 / Svelte 5 components.
- [ ] **React Native Package (`@esvigy/react-native`)**:
  - [ ] Generate components using `react-native-svg` primitives (`Svg`, `Path`, `G`).
- [ ] **Angular Package (`@esvigy/angular`)**:
  - [ ] Standalone Angular components with inputs for `color`, `secondaryColor`, and `animated`.

---

## 🤝 Milestone 6: Community Pipeline, Licensing & Release

- [X] **Asset Contribution Infrastructure**:
  - [X] Master contributing guide with persona tracks ([CONTRIBUTING.md](CONTRIBUTING.md)).
  - [X] Tool-agnostic vector contribution pipeline & `unprocessedSVG/` intake folder ([packages/svg/CONTRIBUTING.md](packages/svg/CONTRIBUTING.md)).
  - [X] React package development guide & contributor checklist ([packages/react/CONTRIBUTING.md](packages/react/CONTRIBUTING.md)).
  - [X] Website development and architecture documentation ([apps/website/CONTRIBUTING.md](apps/website/CONTRIBUTING.md), [apps/website/README.md](apps/website/README.md)).
  - [X] Comprehensive legal copyright policy with DMCA takedown email ([COPYRIGHT.md](COPYRIGHT.md)).
  - [X] Updated MIT licenses with contributor warranty terms across packages.
- [X] **CI/CD & GitHub Infrastructure**:
  - [X] GitHub Actions CI workflow ([.github/workflows/ci.yml](.github/workflows/ci.yml)) for automated build and test verification.
  - [X] GitHub Actions npm publish workflow ([.github/workflows/publish.yml](.github/workflows/publish.yml)) with cryptographic provenance.
  - [X] Pull request template ([.github/pull_request_template.md](.github/pull_request_template.md)).
  - [X] GitHub issue forms ([.github/ISSUE_TEMPLATE/](.github/ISSUE_TEMPLATE)) for requests, vector uploads, bugs, and copyright takedowns.
- [X] **Public Launch**:
  - [X] Revamped `@esvigy/react` README with comparison tables, recipes, and two-tone guides.
  - [X] Published `@esvigy/react@0.1.0` to the official npm registry.
  - [X] Documentation showcase live at [esvigy.vercel.app](https://esvigy.vercel.app).

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
- **2026-10-14**:
  - Generator refactored for single component and batch generation; isolated barrel script `generate-index.ts`.
  - Built dynamic Vitest test suite discovering all 30 components (250 tests passing in ~2.5s).
  - Established community contribution guidelines and tool-agnostic vector intake directory (`packages/svg/unprocessedSVG/`).
  - Drafted comprehensive `COPYRIGHT.md` with DMCA takedown process and updated MIT licenses.
  - Created GitHub Actions CI/CD workflows and interactive issue/PR forms.
  - Revamped `@esvigy/react` README for npm with comparison matrices, recipes, and props table.
  - Officially published `@esvigy/react@0.1.0` to the global npm registry!
- **2026-10-16**:
  - Built and tested `packages/cli` (`esvigy`) with smart component folder auto-detection (shadcn `components.json`, `tsconfig.json` paths, and project structure).
  - Implemented interactive multi-select illustration wizard via `@clack/prompts`, framework auto-detection, and category inspection via `esvigy list`.
  - Configured zero-dependency GitHub raw file streaming for React and SVG formats with auto-injected `types.ts`.
- **2026-10-17**:
  - Built `@esvigy/vue` package with automated SFC generator `packages/vue/scripts/generate.ts` and barrel exporter `generate-index.ts`.
  - Generated all 30 Vue 3 Single-File Components (`.vue`) with `<script setup lang="ts">`, standard props (`color`, `secondaryColor`, `animated`, `className`, `style`), and self-contained vector micro-animations.
  - Configured Vite library build generating ESM (`dist/index.js`), CJS (`dist/index.cjs`), and TypeScript declarations (`dist/index.d.ts`).
  - Added full Vitest test suite with 250 passing unit, contract, and bundle verification tests.
  - Built interactive visual playground sandbox (`packages/vue/playground/`).
  - Updated `@esvigy/cli` with `--framework vue` scaffolding support, Vue/Nuxt project auto-detection, and bumped to `v0.2.0`.
  - Updated documentation website (`apps/website`) to showcase `@esvigy/vue` availability with copyable install commands and Vue template syntax switchers.
  - Officially published `@esvigy/vue@0.1.0` and `@esvigy/cli@0.2.0` to the global npm registry!

