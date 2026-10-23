<p align="center">
  <br />
  <h1 align="center">@esvigy/svg</h1>
  <p align="center">
    <strong>Raw, standardized SVG illustrations with two-tone styling and micro-animations.</strong>
    <br />
    <em>100% pure vectors, zero-dependency, framework-agnostic, and ready for any web framework or design tool.</em>
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@esvigy/svg"><img src="https://img.shields.io/npm/v/@esvigy/svg.svg?color=FF5722&label=@esvigy/svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@esvigy/svg"><img src="https://img.shields.io/npm/dm/@esvigy/svg.svg?color=10B981&label=downloads" alt="npm downloads" /></a>
  <a href="https://bundlephobia.com/package/@esvigy/svg"><img src="https://img.shields.io/bundlephobia/minzip/@esvigy/svg?color=7928CA&label=minzipped" alt="bundle size" /></a>
  <a href="https://github.com/nickfrostech/esvigy/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://github.com/nickfrostech/esvigy"><img src="https://img.shields.io/badge/format-SVG%20%7C%20Vector-FF5722.svg" alt="Vector Format" /></a>
  <a href="https://esvigy.vercel.app"><img src="https://img.shields.io/badge/Live%20Studio-esvigy.vercel.app-00D4FF" alt="Live Studio" /></a>
</p>

<p align="center">
  <a href="https://esvigy.vercel.app"><strong>🎨 Open the Interactive Illustration Studio (esvigy.vercel.app)</strong></a>
  <br />
  <em>Preview all 30+ illustrations live, test two-tone palettes, toggle animations, and download raw SVGs with one click.</em>
</p>

---

## What is @esvigy/svg?

`@esvigy/svg` is the framework-agnostic foundation of Esvigy. It provides a clean, curated catalog of production-ready `.svg` vector files that can be used directly in:

- **HTML / Vanilla JS** (`<img src="...">` or inline `<svg>`)
- **Frontend Frameworks** (Vue, Svelte, Angular, Solid, React)
- **Static Site Generators** (Astro, Hugo, 11ty, VitePress)
- **Design Tools** (Figma, Sketch, Adobe XD, Penpot)
- **CDNs** (unpkg, jsdelivr)

---

## Installation

```bash
# pnpm
pnpm add @esvigy/svg

# npm
npm install @esvigy/svg

# yarn
yarn add @esvigy/svg
```

### 📋 Direct Download via CLI (No dependency needed)

```bash
# Download raw .svg file directly into your assets or public directory:
pnpm dlx @esvigy/cli add EmptyBox --framework svg --dir public/illustrations
```

---

## Usage

### 1. In Modern Bundlers (Vite, Webpack, Next.js, Astro)

Import the SVG directly as a URL or asset path:

```ts
import emptyCartUrl from "@esvigy/svg/EmptyCart.svg";
import searchUrl from "@esvigy/svg/Search.svg";

// Example in vanilla JS or DOM manipulation
const img = document.createElement("img");
img.src = emptyCartUrl;
document.body.appendChild(img);
```

### 2. Using via CDN (Zero Installation)

You can hotlink any Esvigy SVG directly in web pages:

```html
<!-- Via unpkg -->
<img
  src="https://unpkg.com/@esvigy/svg@0.1.0/src/NotFoundRobot.svg"
  alt="Page not found"
  width="320"
  height="240"
/>

<!-- Via jsDelivr -->
<img
  src="https://cdn.jsdelivr.net/npm/@esvigy/svg@0.1.0/src/StatusSuccess.svg"
  alt="Operation successful"
  width="320"
  height="240"
/>
```

### 3. Reading Illustration Metadata (`manifest.json`)

Attribution, authors, tags, and category metadata are available in [`manifest.json`](./manifest.json):

```ts
import manifest from "@esvigy/svg/manifest.json";

console.log(manifest.Search);
// Output:
// {
//   "author": "nick",
//   "source": "https://github.com/nickfrostech",
//   "category": "search",
//   "tags": ["search", "magnifying-glass", "cards", "inspect"],
//   "colors": { "primary": "#00D4FF", "secondary": "#1E293B" }
// }
```

---

## Vector Conventions & Architecture

Every SVG in `packages/svg/src/` adheres to a strict set of quality standards:

1. **Unitless Pixel ViewBox**:
   - Clean, tight bounding box (e.g. `viewBox="0 0 682 382"` or `viewBox="185 -25 3255 3390"`).
   - Illustration occupies **80% to 90%** of the frame, avoiding giant empty margins.

2. **Two-Tone Color Engine**:
   - **Primary Color**: Tagged with `fill="currentColor"` or `stroke="currentColor"`. When inlined in HTML/CSS, the SVG inherits your text color.
   - **Secondary Accent**: Tagged with `data-esvigy-secondary="true"` and `data-esvigy-default="#HEX"`. Enables surface customization.

3. **Zero JavaScript Micro-Animations**:
   - Micro-animations run on pure CSS `@keyframes` defined in a self-contained `<style>` block.
   - Animations activate via `.esvigy-animated` and `[data-animated="true"]`.
   - Automatically pauses when user has `prefers-reduced-motion: reduce` enabled in system settings.

4. **100% Pure Vectors**:
   - Zero embedded raster images (`<image>` tags).
   - Zero proprietary editor metadata (clean, standards-compliant SVG).
   - Lightweight file sizes: typically **5 KB to 35 KB**.

---

## Directory Structure

```text
packages/svg/
├── manifest.json       # Metadata, categories, tags, and author attribution
├── src/                # Standardized, production-ready SVGs
│   ├── ActionCreate.svg
│   ├── EmptyCart.svg
│   ├── Search.svg
│   └── ...
└── unprocessedSVG/     # Staging area for raw community vector contributions
```

---

## Contributing

We welcome vector illustrations from designers and developers of all skill levels!

- **Designers**: You can use **any illustration software** of your choice (Figma, Illustrator, Inkscape, Affinity Designer, Penpot, CorelDraw, etc.) and drop your raw exports into [`unprocessedSVG/`](./unprocessedSVG). No coding required!
- **Developers**: Help transform unprocessed vectors into standardized Esvigy SVGs in [`src/`](./src).

Please read our [SVG Contributing Guide](./CONTRIBUTING.md) for full details, color guidelines, and contributor checklists.

---

## License

[MIT License](./LICENSE) © [Nick Frost](https://github.com/nickfrostech)
