# Contributing to @esvigy/react

Thank you for your interest in contributing to `@esvigy/react`! This document provides instructions for developing, generating, testing, and building React illustration components in the Esvigy monorepo.

---

## Architecture Overview

`@esvigy/react` illustrations are **not written manually**. Instead, they are generated from normalized vector files located in [`packages/svg/src/`](../svg/src) using an automated pipeline:

```text
packages/svg/src/MyIllustration.svg
       │
       ▼  (pnpm generate MyIllustration)
packages/react/src/illustrations/MyIllustration.tsx
       │
       ▼  (pnpm generate:index)
packages/react/src/index.ts  (barrel exports)
       │
       ▼  (pnpm build via tsup)
packages/react/dist/  (ESM, CJS, and TypeScript .d.ts)
```

### Key Files

- [`src/types.ts`](./src/types.ts): Defines the `EsvigyProps` contract (`color`, `secondaryColor`, `animated`, `className`, `style`).
- [`src/illustrations/`](./src/illustrations): Generated individual React components.
- [`src/index.ts`](./src/index.ts): Barrel export file.
- [`scripts/generate.ts`](./scripts/generate.ts): Component generator with automatic SVG-to-React attribute conversion.
- [`scripts/generate-index.ts`](./scripts/generate-index.ts): Dynamic barrel index generator.
- [`test/components.test.tsx`](./test/components.test.tsx): Automated test suite verifying contract and accessibility across all components.
- [`test/bundle.test.ts`](./test/bundle.test.ts): Automated verification of compiled `dist/` artifacts.

---

## Development Workflow

### 1. Generating Components

Whenever an SVG in `packages/svg/src/` is added or modified:

```bash
# Generate a single component (e.g. Search)
pnpm --filter @esvigy/react generate Search

# Generate multiple specific components
pnpm --filter @esvigy/react generate Search EmptyCart ActionUpload

# Interactive prompt (asks which file or all)
pnpm --filter @esvigy/react generate

# Regenerate ALL components in the library
pnpm --filter @esvigy/react generate:all
```

> **Tip:** You can pass the name with or without `.svg` (e.g. `Search` or `Search.svg`). If misspelled, the generator will suggest close matches.

### 2. Updating the Index Barrel

If you added or renamed a component, update the main export file [`src/index.ts`](./src/index.ts):

```bash
pnpm --filter @esvigy/react generate:index
```

### 3. Testing Your Changes

We use **Vitest** for fast, deterministic component testing:

```bash
# Test ONLY your component (lightning fast ~40ms)
pnpm --filter @esvigy/react test:one <ComponentName>
# Example:
pnpm --filter @esvigy/react test:one Search

# Run the complete test suite (all components + bundle verification)
pnpm --filter @esvigy/react test

# Run tests in interactive watch mode
pnpm --filter @esvigy/react test:watch -t <ComponentName>
```

### 4. Building the Package

Compile the TypeScript and bundle ESM + CJS distributions into `dist/`:

```bash
pnpm --filter @esvigy/react build
```

---

## Contributor Checklist

Before submitting a Pull Request containing React component changes, follow this checklist:

- [ ] **Component Generated Cleanly**:
  ```bash
  pnpm --filter @esvigy/react generate <ComponentName>
  ```
- [ ] **Barrel Index Synchronized**:
  ```bash
  pnpm --filter @esvigy/react generate:index
  ```
- [ ] **Single Component Tests Pass**:
  ```bash
  pnpm --filter @esvigy/react test:one <ComponentName>
  ```
- [ ] **Full Test Suite Passes (0 failures)**:
  ```bash
  pnpm --filter @esvigy/react test
  ```
- [ ] **Build Succeeds with Zero Errors**:
  ```bash
  pnpm --filter @esvigy/react build
  ```
- [ ] **Visual Verification in Studio**:
  ```bash
  pnpm --filter website dev
  ```
  Open `http://localhost:5173` and verify the illustration renders crisp, recolors accurately, and animates smoothly without console warnings.

---

## ⚖️ Intellectual Property & Copyright Takedown

All code and generated React components in this package are licensed under the [MIT License](../../LICENSE).

By submitting contributions, you warrant that your code and any associated illustrations are your original creation or properly authorized under the MIT License. If you believe any component infringes your copyright, please report it via [GitHub Issues](https://github.com/nickfrostech/esvigy/issues) or email `nb.nicholasbenson@gmail.com` for immediate removal. See [COPYRIGHT.md](../../COPYRIGHT.md) for our full takedown policy.

