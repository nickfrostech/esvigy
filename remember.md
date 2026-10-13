# Automated Package Releases & GitHub CI/CD with Changesets

> **Why this matters**: Major open-source component and icon libraries (such as **Lucide**, **shadcn**, **Vite**, and **Tailwind**) never publish to npm or create GitHub releases manually from a local machine. Instead, they use **Changesets** (`@changesets/cli`) combined with **GitHub Actions** (`changesets/action`) to completely automate versioning, changelog generation, and npm publishing across monorepo packages.

---

## 1. Core Tool: Changesets (`@changesets/cli`)

- **Primary Package**: `@changesets/cli`
- **GitHub Action**: `changesets/action`
- **Used by**: Lucide, shadcn/ui, Vite, Prettier, Svelte, Chakra UI, Radix UI.

### Key Benefits for Esvigy Monorepo:
1. **Multi-Package Harmony**: Coordinates versioning across `@esvigy/svg`, `@esvigy/react`, and future adapters (`@esvigy/vue`, `@esvigy/svelte`, `@esvigy/cli`).
2. **Automatic Changelogs**: Generates and updates clean `CHANGELOG.md` files for each package automatically based on contributors' changeset entries.
3. **Automated Version PRs**: GitHub Actions automatically opens a "Version Packages" pull request whenever changesets accumulate.
4. **Hands-Off Publishing**: Merging the Version PR triggers automated compilation (`pnpm build`), npm publication (`npm publish`), and git release tagging.

---

## 2. Setup Guide

### Step 1: Install Changesets
Run in the root of the monorepo:
```bash
pnpm add -Dw @changesets/cli
```

### Step 2: Initialize Configuration
```bash
pnpm changeset init
```
This creates a `.changeset/config.json` file.

### Recommended `.changeset/config.json`:
```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["playground"]
}
```
*(Notice `"ignore": ["playground"]` so the internal test playground is never published to npm).*

---

## 3. Daily Workflow (How You Use It)

### When you add or update illustrations / components:
1. Make your code or SVG changes.
2. Run in terminal:
   ```bash
   pnpm changeset
   ```
3. An interactive CLI prompt asks:
   - **Which packages should be bumped?** (e.g. `@esvigy/react`, `@esvigy/svg`)
   - **What kind of change is it?** (`patch` for bug fixes/small tweaks, `minor` for new illustrations, `major` for breaking API changes)
   - **Summary of change?** (e.g. `feat: add GamePad and ManCarRepair illustrations with animations`)
4. Changesets creates a small markdown file in `.changeset/`. Commit and push this file alongside your code:
   ```bash
   git add .
   git commit -m "feat(illustrations): add GamePad and ManCarRepair"
   git push origin main
   ```

---

## 4. GitHub Actions CI/CD Workflow (`.github/workflows/release.yml`)

Create `.github/workflows/release.yml`:

```yaml
name: Release & Publish Packages

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release & Publish
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: latest
          run_install: false

      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      - name: Setup pnpm cache
        uses: actions/cache@v4
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Build Packages
        run: pnpm build

      - name: Create Release Pull Request or Publish to npm
        id: changesets
        uses: changesets/action@v1
        with:
          title: "chore: version packages"
          commit: "chore: version packages"
          publish: pnpm changeset publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 5. What Happens on GitHub Automatically

```
Push code with changeset file (.changeset/*.md)
       │
       ▼
GitHub Actions runs on 'main'
       │
       ├─► If changesets exist: Opens "chore: version packages" Pull Request
       │   (Bumps package.json versions & writes CHANGELOG.md for you)
       │
       ▼
When you click "Merge" on that PR:
       │
       ▼
GitHub Actions automatically:
       1. Runs 'pnpm build'
       2. Publishes updated @esvigy/* packages to npm registry
       3. Creates GitHub Releases with git tags and changelog notes
```

---

## 6. One-Time Prerequisites When Ready to Launch
1. **GitHub Secret**: Add `NPM_TOKEN` in your GitHub repository under `Settings -> Secrets and variables -> Actions`.
2. **npm Scope**: Ensure your npm account owns the `@esvigy` organization / scope on [npmjs.com](https://www.npmjs.com) (or publish as `esvigy-react` / `esvigy-svg` if un-scoped).
