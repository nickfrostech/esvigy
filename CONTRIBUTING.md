# Contributing to Esvigy

Welcome to the **Esvigy** open-source project! We are building the "Lucide for illustrations" — an open-source, framework-agnostic illustration ecosystem where vector artwork is as lightweight, customizable, and developer-friendly as modern icon sets.

Whether you are a vector artist, a React developer, a web enthusiast, or making your very first open-source contribution, **there is a place for you here.**

---

## 🎯 Find Your Contribution Track

Contributing to open source isn't just about writing code. We have arranged our contribution tracks around different skill sets so you can jump in where you feel most comfortable:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        CHOOSE YOUR TRACK                               │
├─────────────────────┬────────────────────┬─────────────────────────────┤
│  🎨 Designers       │  ⚡ Developers     │  🐣 Newcomers / Writers     │
│  Draw vectors and   │  Transform SVGs,   │  Improve docs, report bugs, │
│  upload to staging  │  add animations,   │  test accessibility,        │
│  (No coding needed) │  build components  │  and suggest new concepts   │
└─────────────────────┴────────────────────┴─────────────────────────────┘
```

---

### Track 1: 🎨 Designers & Illustrators (No Coding Required!)

**Your Goal:** Help expand the Esvigy illustration catalog with clean, expressive, modern vector art.

- **You Can Use Any Tool:** Figma, Adobe Illustrator, Inkscape, Affinity Designer, Penpot, CorelDRAW, Boxy SVG, etc.
- **How It Works:**
  1. Design your illustration (empty state, error page, action badge, tech concept, etc.).
  2. Export as standard `.svg`.
  3. Upload your `.svg` to **[`packages/svg/unprocessedSVG/`](./packages/svg/unprocessedSVG)**.
  4. Submit a Pull Request titled `[Vector Upload]: <IllustrationName>`.
  5. Include your author name and portfolio link in the PR description so you receive full credit!
- A developer will pick up your raw artwork, standardize it into Esvigy's color and animation language, and migrate it into the production library.

👉 **Read the full [SVG Contributing Guide](./packages/svg/CONTRIBUTING.md)** for canvas framing, shadow guidelines, and color recommendations.

---

### Track 2: ⚡ Developers & Vector Engineers

**Your Goal:** Standardize raw artwork, engineer micro-animations, or improve component generators.

- **Standardize Staged Vectors:**
  - Pick up raw files from [`packages/svg/unprocessedSVG/`](./packages/svg/unprocessedSVG).
  - Map colors to the two-tone palette (`fill="currentColor"` and `data-esvigy-secondary="true"`).
  - Ensure tight unitless pixel `viewBox` coordinates.
  - Move finalized SVGs to [`packages/svg/src/`](./packages/svg/src/) and register them in [`packages/svg/manifest.json`](./packages/svg/manifest.json).
- **Craft Micro-Animations:**
  - Group SVG elements logically (`.esvigy-hero-badge`, `.esvigy-ground-shadow`).
  - Add smooth, GPU-accelerated CSS keyframe animations with `prefers-reduced-motion` fallbacks.
- **Improve `@esvigy/react`:**
  - Run the generator: `pnpm --filter @esvigy/react generate <Name>`.
  - Update the barrel index: `pnpm --filter @esvigy/react generate:index`.
  - Add automated tests in `test/components.test.tsx` and run `pnpm --filter @esvigy/react test`.

👉 **Read the [React Contributing Guide](./packages/react/CONTRIBUTING.md)** and **[SVG Contributing Guide](./packages/svg/CONTRIBUTING.md)**.

---

### Track 3: 🌐 Web & Frontend Developers

**Your Goal:** Enhance the live Studio & Showcase website at [`apps/website`](./apps/website) ([esvigy.vercel.app](https://esvigy.vercel.app)).

- **Features to build:**
  - New search filters, categories, and tags.
  - Color palette presets (e.g. Tailwind colors, Nord, Dracula, Catppuccin).
  - Code snippet generator enhancements (React, SVG, Vue, HTML).
  - Dark mode and contrast improvements.
  - Interactive animation speed and trigger toggles.

---

### Track 4: 🐣 Newcomers & First-Time Contributors

**Your Goal:** Get comfortable with open-source workflows by improving quality, documentation, and user experience.

- **Ways to contribute today:**
  - **Review Documentation:** Fix typos, clarify confusing steps, or translate guides.
  - **Test Accessibility:** Verify screen reader announcements (`aria-label`) and check that `prefers-reduced-motion` correctly disables animations.
  - **Browser & Device Testing:** Test illustrations across Safari, Firefox, Chrome, iOS, and Android to spot rendering glitches.
  - **Suggest Missing Illustrations:** Open a GitHub Issue requesting real-world UI states that apps commonly need (e.g., "Upgrade to Pro", "Email Verified", "Payment Failed") and what you suggest they look like.

---

## 📂 Repository Architecture

Esvigy is structured as a **pnpm monorepo**:

```text
esvigy/
├── packages/
│   ├── svg/                    # Raw vector illustration package (@esvigy/svg)
│   │   ├── src/                # Standardized production SVGs
│   │   ├── unprocessedSVG/     # Designer intake staging area
│   │   ├── manifest.json       # Illustration metadata and attribution
│   │   └── CONTRIBUTING.md     # Vector authoring & standardization guide
│   │
│   └── react/                  # React component package (@esvigy/react)
│       ├── src/illustrations/  # Generated React illustration components
│       ├── scripts/            # CLI component & barrel generators
│       ├── test/               # Vitest component & bundle verification
│       └── CONTRIBUTING.md     # React development & testing guide
│
├── apps/
│   └── website/                # Studio & Showcase web app (Vite + React)
│
└── CONTRIBUTING.md             # This master contribution guide
```

---

## 💻 Local Development Setup

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **Package Manager**: **`pnpm`** (required for workspace management)

### 1. Clone & Install

```bash
git clone https://github.com/nickfrostech/esvigy.git
cd esvigy

# Install all workspace dependencies
pnpm install
```

### 2. Build the Packages

```bash
# Build all packages (@esvigy/react, etc.)
pnpm build:packages

# Or build everything including the website
pnpm build:all
```

### 3. Run the Studio Locally

```bash
# Start the showcase web app at http://localhost:5173
pnpm --filter website dev
```

### 4. Run the Tests

```bash
# Run all automated tests in @esvigy/react
pnpm --filter @esvigy/react test

# Or test a single component (~40ms)
pnpm --filter @esvigy/react test:one Search
```

---

## ⚡ Useful Commands Reference

| Command                                         | Description                                          |
| :---------------------------------------------- | :--------------------------------------------------- |
| `pnpm install`                                | Installs dependencies across all packages.           |
| `pnpm build`                                  | Builds the website application for production.       |
| `pnpm build:packages`                         | Compiles `@esvigy/react` distribution (`dist/`). |
| `pnpm --filter website dev`                   | Starts the interactive web studio dev server.        |
| `pnpm --filter @esvigy/react generate <Name>` | Generates a single React component from its SVG.     |
| `pnpm --filter @esvigy/react generate:all`    | Regenerates all React components.                    |
| `pnpm --filter @esvigy/react generate:index`  | Refreshes the `src/index.ts` barrel file.          |
| `pnpm --filter @esvigy/react test`            | Runs the full Vitest suite (250 tests).              |
| `pnpm --filter @esvigy/react test:one <Name>` | Runs tests only for the specified component.         |

---

## 🌿 Git & Pull Request Guidelines

1. **Create a descriptive branch**:
   ```bash
   git checkout -b feat/add-rocket-illustration
   # or
   git checkout -b fix/react-generator-kebab
   ```
2. **Follow commit conventions**:
   - `feat(svg): add RocketLaunch illustration`
   - `feat(react): generate RocketLaunch component`
   - `fix(generator): preserve xml namespaces in svg conversion`
   - `docs: update contributing guide for designers`
3. **Run checks before opening your PR**:
   ```bash
   pnpm --filter @esvigy/react test
   pnpm build:packages
   ```
4. **Submit your Pull Request** with a brief summary of what was added or fixed, and tag any related issues.

---

## ⚖️ Intellectual Property & Contributor Warranty

To protect both original creators and developers using Esvigy in production:

1. **Contributor Warranty**: By submitting any illustration, vector file, code, or asset to Esvigy (whether via Pull Request, uploading to [`packages/svg/unprocessedSVG/`](./packages/svg/unprocessedSVG/), or proposing a commit), you represent and warrant that:
   - The artwork is your own original creative work, or that you hold all necessary rights, permissions, and licenses to publish and release it under the [MIT License](./LICENSE).
   - Your submission does not infringe upon or violate any third-party copyright, trademark, trade secret, or intellectual property rights.
   - You agree to indemnify and hold harmless the project maintainers against any claims or liabilities arising from your submission.
2. **Good-Faith Disclaimer**: Esvigy maintainers accept community submissions in good faith and cannot independently verify third-party ownership of every submission. The maintainers disclaim any liability for unauthorized or infringing artwork submitted by third parties.
3. **Immediate Copyright Takedown Policy**: If you believe an illustration infringes upon your copyright, please report it via [GitHub Issues](https://github.com/nickfrostech/esvigy/issues) or email `nb.nicholasbenson@gmail.com`. We will immediately remove the contested illustration from all packages and the studio. For full details, see [COPYRIGHT.md](./COPYRIGHT.md).

---

## ❤️ Community & Code of Conduct

Esvigy is an inclusive, welcoming community. We expect all contributors to:

- Be respectful, constructive, and kind.
- Value different viewpoints and experience levels.
- Offer constructive feedback on Pull Requests and Issues.

Thank you for helping make illustrations accessible to every developer!
