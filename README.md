# Esvigy

<p align="center">
  <em>pronounced <strong>"es-vee-gee"</strong> (/ˌɛs.viːˈdʒiː/)</em>
  <br />
  <strong>UI illustrations as simple and developer-friendly as icons.</strong>
  <br />
  <em>The open-source, framework-agnostic illustration library — "Lucide for illustrations."</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@esvigy/react"><img src="https://img.shields.io/npm/v/@esvigy/react.svg?color=00D4FF&label=@esvigy/react" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@esvigy/react"><img src="https://img.shields.io/npm/dm/@esvigy/react.svg?color=10B981&label=downloads" alt="npm downloads" /></a>
  <a href="https://github.com/nickfrostech/esvigy/actions/workflows/ci.yml"><img src="https://github.com/nickfrostech/esvigy/actions/workflows/ci.yml/badge.svg" alt="CI Status" /></a>
  <a href="https://github.com/nickfrostech/esvigy/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://esvigy.vercel.app"><img src="https://img.shields.io/badge/studio-esvigy.vercel.app-7928CA" alt="Live Studio" /></a>
</p>

<p align="center">
  <a href="https://esvigy.vercel.app"><strong>🌐 Live Website &amp; Studio (esvigy.vercel.app)</strong></a>
</p>

<p align="center">
  <a href="https://esvigy.vercel.app">Website</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#why-esvigy">Why Esvigy</a> •
  <a href="#component-api">Component API</a> •
  <a href="#animation-mechanics--architecture">Animation Mechanics</a> •
  <a href="#architecture--ecosystem">Architecture</a> •
  <a href="#initial-illustration-catalog">Catalog</a> •
  <a href="#roadmap--milestones">Milestones</a> •
  <a href="./CONTRIBUTING.md">Contributing</a> •
  <a href="./COPYRIGHT.md">Copyright &amp; Takedown</a> •
  <a href="#license">License</a>
</p>

---

## Overview

In modern web development, sourcing and integrating UI illustrations is unnecessarily painful: developers download random SVGs, wrestle with oversized viewBoxes, manually clean messy XML, hardcode colors, and repeat the same boilerplate across projects.

**Esvigy** eliminates this friction. Just like icon sets (such as Lucide or Heroicons), Esvigy treats illustrations as lightweight, plug-and-play components.

```tsx
import { EmptyCart, NotFoundRobot } from "@esvigy/react";

export function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <NotFoundRobot
        animated
        color="#00D4FF"
        secondaryColor="#001014"
        className="w-64 h-64"
      />
      <h2 className="text-xl font-bold mt-4">Page Not Found</h2>
    </div>
  );
}
```

No downloading SVG files. No manual XML cleanup. Just clean, typed components ready for your design system.

---

## Key Features

- 🎨 **Minimal, Focused API**: No bloated config matrices or arbitrary sizing props. Control scale via standard CSS (`className`) and customize with primary/secondary colors.
- ⚡ **Dynamic Micro-Animations**: Smooth, lightweight CSS animations enabled with a simple `animated` prop.
- 🌐 **Framework Agnostic Source of Truth**: SVGs are the canonical foundation. Official packages are generated for React, Vue, Svelte, Angular, React Native, and raw SVG.
- 🌲 **Tree-Shakable & Featherweight**: Zero runtime overhead; bundle only the exact illustrations your app imports.
- 🛡️ **Permissively Licensed**: Free and open source under the MIT License, preserving attribution for open-source artwork.

---

## Quick Start

### Installation

Install the package for your framework using your favorite package manager:

```bash
# pnpm (recommended)
pnpm add @esvigy/react

# npm
npm install @esvigy/react

# yarn
yarn add @esvigy/react

# bun
bun add @esvigy/react
```

### Ways to Consume Esvigy

Esvigy offers **three distinct ways** to get illustrations into your project, giving every developer and designer maximum flexibility:

| Method                                                               | Best For                                                             | Output Location          | Dependencies Added                          | Frameworks                                   |
| :------------------------------------------------------------------- | :------------------------------------------------------------------- | :----------------------- | :------------------------------------------ | :------------------------------------------- |
| 📦**NPM Packages***(The Lucide Way)*                         | Apps using multiple illustrations across routes                      | `node_modules/`        | `@esvigy/<framework>`                       | React, Vue, Svelte, etc.                     |
| 📋**CLI Component Scaffolding***(The shadcn Way)*            | Using 1–3 illustrations; full code ownership & direct customization | `components/esvigy/`     | **Zero** (self-contained source file) | **React, Vue, Svelte, Solid, Raw SVG** |
| 🌐 **Web Showcase ([esvigy.vercel.app](https://esvigy.vercel.app))** *(100% Framework Agnostic)* | Designers, quick prototypes, HTML, Astro, Figma | Clipboard / `.svg` file | **Zero** (pure vector XML) | All tools & frameworks |

---

#### 1. Official Framework Packages (NPM — "The Lucide Way")

Install the official package for your framework. Components reside in `node_modules` with strict `"sideEffects": false` tree-shaking—your final production bundle only includes the illustrations you import.

```bash
# React
pnpm add @esvigy/react

# Vue
pnpm add @esvigy/vue

# Svelte
pnpm add @esvigy/svelte
```

```tsx
import { NotFoundRobot, EmptyCart } from "@esvigy/react";

export function Example() {
  return <NotFoundRobot animated color="#2563eb" secondaryColor="#f9fafb" className="w-64 h-64" />;
}
```

---

#### 2. Direct Component Source Code ("The shadcn Way" for Every Framework)

> **Don't want to install an npm package? Only need one or two illustrations? Want full source code ownership to edit paths, styles, or props directly?**

Just like [shadcn/ui](https://ui.shadcn.com/) revolutionized React by copying component code directly into your repository instead of installing heavy black-box dependencies, **Esvigy provides this exact same experience for every major framework**:

- **React developers**: grab a native `.tsx` component.
- **Vue developers**: grab a native `.vue` Single File Component (SFC with `<script setup>`).
- **Svelte developers**: grab a native `.svelte` component.
- **Solid developers**: grab a native `.tsx` component.
- **Static / Vanilla**: grab the standalone `.svg` vector file.

All generated component files are **completely self-contained**—they have **zero external runtime dependencies** beyond your framework itself!

##### Add Components via the Esvigy CLI:

```bash
# React: creates components/esvigy/NotFound.tsx
pnpm dlx esvigy add not-found --framework react

# Vue: creates components/esvigy/NotFound.vue
pnpm dlx esvigy add not-found --framework vue

# Svelte: creates components/esvigy/NotFound.svelte
pnpm dlx esvigy add not-found --framework svelte

# Raw SVG: creates components/esvigy/NotFound.svg
pnpm dlx esvigy add not-found --svg
```

##### What the Scaffolder Copies into Your Project:

<details>
<summary><b>View React Component (<code>components/esvigy/NotFound.tsx</code>)</b></summary>

```tsx
import type { SVGProps } from "react";

export interface NotFoundProps extends SVGProps<SVGSVGElement> {
  animated?: boolean;
  color?: string;
  secondaryColor?: string;
  className?: string;
}

export function NotFound({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: NotFoundProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["esvigy-svg", animated ? "esvigy-animated" : "", className].filter(Boolean).join(" ")}
      data-animated={animated ? "true" : undefined}
      style={{ display: "block", ...style }}
      role="img"
      aria-label="NotFound illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
            @keyframes esvigy-notfound-float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(1deg); }
            }
            svg.esvigy-animated .esvigy-notfound-body {
              transform-box: fill-box;
              transform-origin: center;
              animation: esvigy-notfound-float 3s ease-in-out infinite;
            }
            /* ... bespoke illustration keyframes & reduced-motion queries ... */
          `}
        </style>
      )}
      {/* Self-contained SVG paths */}
    </svg>
  );
}
```

</details>

<details>
<summary><b>View Vue Component (<code>components/esvigy/NotFound.vue</code>)</b></summary>

```vue
<script setup lang="ts">
withDefaults(
  defineProps<{
    animated?: boolean;
    color?: string;
    secondaryColor?: string;
    class?: string;
  }>(),
  {
    animated: false,
    color: "currentColor",
    secondaryColor: "transparent",
    class: "",
  }
);
</script>

<template>
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="['esvigy-svg', animated ? 'esvigy-animated' : '', $props.class]"
    :data-animated="animated ? 'true' : undefined"
  >
    <style v-if="animated">
      @keyframes esvigy-notfound-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      svg.esvigy-animated .esvigy-notfound-body {
        transform-box: fill-box;
        transform-origin: center;
        animation: esvigy-notfound-float 3s ease-in-out infinite;
      }
    </style>
    <!-- Self-contained SVG markup -->
  </svg>
</template>
```

</details>

<details>
<summary><b>View Svelte Component (<code>components/esvigy/NotFound.svelte</code>)</b></summary>

```svelte
<script lang="ts">
  export let animated: boolean = false;
  export let color: string = "currentColor";
  export let secondaryColor: string = "transparent";
  export let className: string = "";
</script>

<svg
  viewBox="0 0 400 300"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={["esvigy-svg", animated ? "esvigy-animated" : "", className].filter(Boolean).join(" ")}
  data-animated={animated ? "true" : undefined}
  {...$$restProps}
>
  {#if animated}
    <style>
      @keyframes esvigy-notfound-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      svg.esvigy-animated .esvigy-notfound-body {
        transform-box: fill-box;
        transform-origin: center;
        animation: esvigy-notfound-float 3s ease-in-out infinite;
      }
    </style>
  {/if}
  <!-- Self-contained SVG markup -->
</svg>
```

</details>

You can also copy files directly from the repository's packages folder (`packages/<framework>/src/illustrations/`) into your codebase manually if you prefer not to use the CLI.

---

#### 3. Interactive Web Showcase (100% Framework Agnostic)

Visit the official web gallery and studio at **[esvigy.vercel.app](https://esvigy.vercel.app)**:

- 🎨 **Live Customizer**: Test brand colors, secondary accents, and toggle micro-animations dynamically on any illustration.
- 📋 **"Copy SVG"**: One-click copy of the clean, normalized SVG XML directly to your clipboard. Paste it directly into JSX, HTML, Astro, Svelte, Vue, or Figma.
- ⬇️ **"Download SVG"**: Instant download of the standalone, optimized `.svg` file.

> **Why doesn't the website supply framework-specific TSX snippets?**
> The website is designed to be **strictly framework-agnostic**. Providing only React snippets would create framework bias and leave Vue, Svelte, Angular, Solid, and mobile developers as second-class citizens. Instead, the web showcase provides pure, standardized SVG vectors—ensuring zero vendor lock-in, zero hosting overhead, and 100% universal compatibility across every tool and language. Framework components are cleanly handled via NPM packages and the CLI scaffolder.

### Basic Usage

```tsx
import { NotFound } from "@esvigy/react";

function App() {
  return <NotFound />;
}
```

### Styled and Animated

```tsx
import { EmptyInbox } from "@esvigy/react";

function InboxEmptyState() {
  return (
    <EmptyInbox
      animated
      color="#6366F1"
      secondaryColor="#EEF2FF"
      className="w-72 h-72 mx-auto"
    />
  );
}
```

---

## Component API

Esvigy intentionally keeps the component interface minimal and predictable across all illustrations:

```tsx
<Illustration
  animated={false}              // Optional: enables built-in micro-animations
  color="currentColor"          // Optional: primary brand/illustration color
  secondaryColor="transparent"  // Optional: secondary accents/background fills
  className="w-64 h-64"         // Optional: controls dimensions and CSS styles
  {...svgProps}                 // Standard SVG HTML attributes (aria-*, role, etc.)
/>
```

### Props Specification

| Prop               | Type        | Default            | Description                                                                          |
| :----------------- | :---------- | :----------------- | :----------------------------------------------------------------------------------- |
| `animated`       | `boolean` | `false`          | Toggles subtle, lightweight micro-animations.                                        |
| `color`          | `string`  | `"currentColor"` | Primary accent/fill/stroke color.                                                    |
| `secondaryColor` | `string`  | `undefined`      | Secondary accent or background fill color.                                           |
| `className`      | `string`  | `""`             | CSS classes to control dimensions (`width`, `height`), positioning, and effects. |

> **Design Note:** Esvigy intentionally omits custom `size` props or complex color-token systems. Sizing is delegated to standard CSS / Tailwind classes (`w-48 h-48`), ensuring seamless responsiveness.

---

## Animation Mechanics & Architecture

Esvigy does not use external animation libraries (such as Framer Motion or GSAP) or heavy JavaScript runtime requestAnimationFrame loops. Instead, Esvigy uses an **SVG-First CSS Motion Engine** that delivers 60fps GPU-accelerated micro-animations with **zero JavaScript runtime overhead**:

### 1. Self-Contained Raw Vector Stylesheets

Every illustration owns its unique motion system authored directly inside its canonical `.svg` file in [`packages/svg/src/`](file:///c:/Code/esvigy/packages/svg/src). Rather than forcing every illustration into a generic "float" animation, each illustration defines motion bespoke to its narrative:

- **`EmptyCart`**: Shopping cart basket floats, ground shadow dynamically expands/fades, empty question bubble bobs, and wheels rock back and forth.
- **`NotFoundLaptop`**: Floating 404 monitor tilts gently, shadow breathes, 404 badge floats, and screen pulses.
- **`WomanLaptop`**: Left and right indoor plants shake and sway, typing dots in the input bar dance in a continuous traveling wave, the laptop screen pulses with light, the woman's head nods gently, and her hand taps in a brisk typing rhythm.

### 2. How the Switch ON / OFF Works

All animation keyframes are gated by root selectors:

```css
svg.esvigy-animated .esvigy-element,
svg[data-animated="true"] .esvigy-element {
  animation: esvigy-keyframe-name 2s ease-in-out infinite;
}
```

* **When `animated={false}` (default)**:
  * The `<style>` tag is omitted from the DOM entirely.
  * No `.esvigy-animated` class or `data-animated` attribute is placed on `<svg>`.
  * **Result**: 0% CPU/GPU overhead. The illustration is completely static.
* **When `animated={true}`**:
  * The stylesheet is injected, and the root `<svg>` receives `className="esvigy-svg esvigy-animated"` and `data-animated="true"`.
  * Keyframe animations immediately activate via the GPU.
* **When Downloaded as Standalone `.svg`**:
  * The standalone `.svg` has `class="esvigy-animated" data-animated="true"` by default.
  * Opens pre-animated out of the box when dragged into Chrome, Figma, Penpot, or embedded in an `<img>` tag!

### 3. Cross-Browser Transform Rules

SVG transforms can distort or rotate around unexpected coordinates if not properly constrained. Esvigy strictly enforces:

```css
transform-box: fill-box;
transform-origin: center; /* or '50% 100%' for plants pivoting from their pots */
```

This guarantees that vector transforms calculate relative to the element's own bounding box, delivering pixel-perfect, consistent animation across Chrome, Safari, Firefox, and Edge.

### 4. Accessibility First (`prefers-reduced-motion`)

Every animated Esvigy illustration automatically embeds:

```css
@media (prefers-reduced-motion: reduce) {
  svg.esvigy-animated *,
  svg[data-animated="true"] * {
    animation: none !important;
  }
}
```

Users who have requested reduced motion in their system settings are protected by default across all frameworks and static SVGs.

---

## Architecture & Ecosystem

React is not the source of truth—the **normalized SVG illustration** is. Framework-specific packages are code-generated from this single canonical SVG source.

```
Esvigy Ecosystem
│
├── SVG Source (packages/svg) ───────── Normalized, optimized canonical artwork
│
├── React (@esvigy/react) ─────────────── First-class React component library
├── React Native (@esvigy/react-native) ─ Native mobile vector illustrations
├── Vue (@esvigy/vue) ─────────────────── Vue 3 SFC wrappers
├── Svelte (@esvigy/svelte) ───────────── Svelte 4/5 component wrappers
├── Angular (@esvigy/angular) ─────────── Angular standalone components
└── Raw SVG (@esvigy/svg) ─────────────── Direct optimized SVGs for static sites
```

### Build Pipeline

```mermaid
flowchart TD
    A["Raw SVG Artwork\n(Open-source / Community / Original)"] --> B["Curate & Vet License"]
    B --> C["Normalize Coordinates & Layers\n(ViewBox, Color Tokens)"]
    C --> D["Optimize with SVGO\n(Strip bloat & IDs)"]
    D --> E["Canonical Esvigy SVG Repository\n(@esvigy/svg)"]
    E --> F["Framework Component Generation\n(SVGR & Custom AST Transformers)"]
    F --> G["Multi-Target Distribution\n(NPM: @esvigy/react, @esvigy/vue, etc.)"]
```

---

## Initial Illustration Catalog

The collection features 29 beautifully normalized, animated vector illustrations across core UI scenarios:

### 1. Actions (`Action*`)

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Create** | `<ActionCreate />` | New file, entity creation, onboarding flow |
| **Download** | `<ActionDownload />` | File download, asset export, saving states |
| **Upload** | `<ActionUpload />` | Drag-and-drop file uploaders, data import |

### 2. Status & Feedback (`Status*`)

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Success** | `<StatusSuccess />` | Action completed, transaction verified |
| **Fail** | `<StatusFail />` | Action rejected, error encountered |
| **Processing** | `<StatusProcessing />` | Asynchronous operations, sync in progress |
| **Offline** | `<StatusOffline />` | Network disconnected, offline dino runner |

### 3. Search Suite (`Search*`)

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Search** | `<Search />` | Default discovery and query prompt |
| **Searching** | `<SearchLoading />` | Active query loading with radar spinner |
| **Found** | `<SearchSuccess />` | Successfully matched records found |
| **No Results** | `<SearchNotFound />` | Filter or query returned zero matches |

### 4. Empty States (`Empty*`)

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Empty Box** | `<EmptyBox />` | Empty parcel, missing deliveries |
| **Empty Cart** | `<EmptyCart />` | E-commerce shopping bag with zero items |
| **Empty Folder** | `<EmptyFolder />` | Empty project folder or file directory |
| **Empty Message** | `<EmptyMessage />` | Cleared inbox, zero notification messages |

### 5. Errors & 404s (`NotFound*` / `Error*`)

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Forbidden** | `<ErrorForbidden />` | 403 access denied, permission restricted |
| **Server Error** | `<ErrorServer />` | 500 server crash, backend downtime |
| **Laptop 404** | `<NotFoundLaptop />` | 404 missing resource with laptop screen |
| **Robot 404** | `<NotFoundRobot />` | 404 missing page with cyber bot |
| **Shopping 404** | `<NotFoundShopping />` | 404 missing product or store item |
| **Smiley 404** | `<NotFoundSmiley />` | 404 route missing with confused smiley |

### 6. Security, Finance & Utility

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Security Lock** | `<SecurityLock />` | Password form, authentication, security |
| **Documents** | `<DocumentFolders />` | Archive files, document folder hierarchy |
| **Wallet** | `<Wallet />` | Payment methods, wallet balance, checkout |
| **GamePad** | `<GamePad />` | Gaming hubs, entertainment features |

### 7. Characters & Lifestyle

| Illustration | Component Name | Description / Use Case |
| :--- | :--- | :--- |
| **Car Repair** | `<ManCarRepair />` | Maintenance, diagnostics, automotive |
| **Question** | `<ManQuestion />` | FAQ, help center, puzzled user prompt |
| **Developer** | `<WomanLaptop />` | Coding, work, developer productivity |
| **Yoga** | `<WomanYoga />` | Meditation, wellness, fitness break |

---

## Asset Sources & Licensing

Esvigy expands its illustration collection through three responsible channels:

1. **Permissively Licensed Artwork**: Curated open-source collections (MIT, CC0, Apache 2.0).
2. **Original & AI-Assisted Artwork**: Bespoke artwork crafted and normalized specifically for the Esvigy library.
3. **Community Contributions**: Peer-reviewed illustrations submitted by developers and designers.

> Every external asset retains full source attribution and licensing metadata inside its manifest.

---

## Roadmap & Milestones

For a detailed task list, execution phases, and tracking of work items, see [TODO.md](file:///c:/Code/esvigy/TODO.md) and [BUILD_ROADMAP.md](file:///c:/Code/esvigy/BUILD_ROADMAP.md).

- [X] Initial specification and architectural design
- [X] Monorepo workspace configuration (`pnpm`)
- [X] SVG normalization pipeline & multi-color token architecture (29 canonical illustrations)
- [X] `@esvigy/react` package generation, TypeScript declarations, and auto-pruning pipeline
- [X] Interactive documentation website & illustration studio ([esvigy.vercel.app](https://esvigy.vercel.app))
- [ ] Direct component scaffolder CLI (`esvigy add <name> --framework <react|vue|svelte|svg>`)
- [ ] Multi-framework package adapters (`@esvigy/vue`, `@esvigy/svelte`, `@esvigy/react-native`)

---

## Contributing

We welcome contributions of all kinds! Whether you are a designer creating raw vector art, a developer standardizing SVGs, or building framework adapters:

- **Choose Your Track**: Read our master [Contributing Guide](./CONTRIBUTING.md) to find the path that matches your skills (designers, vector engineers, React developers, newcomers).
- **Designers**: Drop raw vector exports directly into [`packages/svg/unprocessedSVG/`](./packages/svg/unprocessedSVG/) — no coding needed!
- **Developers**: See the [SVG Contributing Guide](./packages/svg/CONTRIBUTING.md) and [React Contributing Guide](./packages/react/CONTRIBUTING.md) for step-by-step instructions and contributor checklists.

---

## License

Distributed under the [MIT License](file:///c:/Code/esvigy/LICENSE).
Copyright © 2026 [Nick Frost](https://github.com/nickfrostech).

---

## Copyright & Takedown Policy

Esvigy is a community-driven open-source illustration library. Contributions are accepted in good faith, and the maintainers cannot independently verify third-party ownership of all community submissions. The maintainers disclaim liability for unauthorized artwork submitted by third parties.

If you are a copyright owner and believe that any illustration in Esvigy infringes upon your copyright:
- **Open a GitHub Issue**: [github.com/nickfrostech/esvigy/issues](https://github.com/nickfrostech/esvigy/issues) with the title `[Copyright Takedown]: <IllustrationName>`.
- **Or Email**: `nb.nicholasbenson@gmail.com` with the details of your claim.

Upon receiving notice, we will **immediately and permanently remove** the contested illustration from all repositories, packages, and the studio. For complete terms, see [COPYRIGHT.md](./COPYRIGHT.md).
