<p align="center">
  <br />
  <h1 align="center">@esvigy/react</h1>
  <p align="center">
    <strong>UI illustrations as simple, tree-shakable, and developer-friendly as icons.</strong>
    <br />
    <em>The "Lucide for illustrations" — 100% vector, zero-JS micro-animations, two-tone theming, and React 19 / RSC ready.</em>
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@esvigy/react"><img src="https://img.shields.io/npm/v/@esvigy/react.svg?color=00D4FF&label=@esvigy/react" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@esvigy/react"><img src="https://img.shields.io/npm/dm/@esvigy/react.svg?color=10B981&label=downloads" alt="npm downloads" /></a>
  <a href="https://bundlephobia.com/package/@esvigy/react"><img src="https://img.shields.io/bundlephobia/minzip/@esvigy/react?color=7928CA&label=minzipped" alt="bundle size" /></a>
  <a href="https://github.com/nickfrostech/esvigy/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://github.com/nickfrostech/esvigy"><img src="https://img.shields.io/badge/react-18%20%7C%2019-61DAFB.svg" alt="React 18 & 19 Ready" /></a>
  <a href="https://esvigy.vercel.app"><img src="https://img.shields.io/badge/Live%20Studio-esvigy.vercel.app-00D4FF" alt="Live Studio" /></a>
</p>

<p align="center">
  <a href="https://esvigy.vercel.app"><strong>🎨 Open the Interactive Illustration Studio (esvigy.vercel.app)</strong></a>
  <br />
  <em>Preview all 30+ illustrations live, test two-tone palettes, toggle animations, and copy React JSX with one click.</em>
</p>

---

## 💡 Why @esvigy/react?

In modern web development, adding an **icon** takes 5 seconds: you install Lucide, Heroicons, or Radix, and write `<Search className="w-5 h-5" />`.

**Why should UI illustrations be any different?**

Traditionally, sourcing illustrations meant:
1. 📥 Downloading random raw SVGs from asset libraries or design files.
2. 🍝 Copy-pasting 300 lines of messy XML directly into your JSX or bloating your `public/` folder.
3. 🎨 Wrestling with hardcoded `#6C63FF` colors that break as soon as your app switches to dark mode.
4. 🐘 Installing 60KB+ runtime JavaScript animation libraries (Lottie, Framer Motion) just for a gentle floating card or hovering shadow.
5. ⚠️ Fighting with unstandardized `viewBox` coordinates, clipping masks, and unpredictable responsiveness.

**`@esvigy/react` eliminates this entire friction cycle.**

```tsx
import { EmptyCart } from "@esvigy/react";

// Just like an icon. One line. Perfectly styled.
<EmptyCart animated className="w-48 h-48" />
```

---

### ⚖️ The Comparison

| Feature | Traditional Downloaded SVGs | Heavy Lottie Animations | `@esvigy/react` |
| :--- | :--- | :--- | :--- |
| **Developer Experience** | Messy copy-pasted XML | JSON configuration files & player wrappers | **One-line React import** (`<EmptyCart />`) |
| **Theme / Dark Mode** | ❌ Hardcoded static colors | ❌ Complex JSON color overriding | ✅ **Inherits `currentColor` + customizable `secondaryColor`** |
| **Animation Overhead** | ❌ Static (no animation) | ❌ 60KB+ JS runtime engine | ✅ **0 KB JS overhead** (pure hardware-accelerated CSS keyframes) |
| **Bundle Impact** | Often bundled in full | Heavy canvas / JSON bundles | ✅ **100% Tree-Shakable** (`"sideEffects": false`) |
| **React Server Components** | Manual SVG wrapping | ❌ Client-only (`"use client"` required) | ✅ **RSC Ready** (pure JSX, works on Server & Client) |
| **Accessibility** | ❌ Ignored or missing attributes | Partial canvas accessibility | ✅ **Default `role="img"` + automatic `prefers-reduced-motion`** |
| **Type Safety** | ❌ Untyped raw XML | Generic JSON props | ✅ **Full TypeScript autocomplete & `EsvigyProps`** |

---

## 📦 Installation

Install with your favorite package manager:

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

> **Peer Dependency**: React `^18.0.0` or `^19.0.0`.

### 📋 Prefer copying single-file components? ("The shadcn Way")

If you prefer dropping self-contained `.tsx` files directly into your project's `components/esvigy/` folder instead of installing a package, use our official CLI:

```bash
# Interactive wizard
pnpm dlx @esvigy/cli add

# Add specific component directly into your components folder
pnpm dlx @esvigy/cli add ActionCreate --framework react
```

---

## 🚀 30-Second Quickstart

Using an Esvigy illustration is as intuitive as using an icon:

```tsx
import { EmptyCart } from "@esvigy/react";

export function App() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-slate-950 text-white">
      <div className="text-center">
        {/* 1. Sized with standard Tailwind or CSS */}
        <EmptyCart className="w-56 h-56 mx-auto mb-4" />

        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <p className="text-slate-400 text-sm mt-1">Looks like you haven't added anything yet.</p>
      </div>
    </main>
  );
}
```

---

## 🎯 Core Features & Design Philosophy

### 1. 🎨 The Two-Tone Theming Engine

Real-world UI illustrations require depth and hierarchy. A single flat color looks like an icon, while arbitrary multi-color SVGs clash with your design system.

Every Esvigy illustration features a calculated **dual-layer color system**:

- **Primary Accent (`color`)**: Controls the hero focal points, badges, buttons, active elements, and status indicators.
  - **Defaults to `"currentColor"`**. This means wrapping your illustration in any Tailwind text utility (`text-indigo-600 dark:text-indigo-400`) automatically colors the illustration to match your theme!
- **Secondary Depth (`secondaryColor`)**: Controls backgrounds, device chassis, shadow discs, metallic backdrops, and secondary structural cards.
  - **Defaults to `"transparent"`**, which gracefully preserves the illustration's built-in neutral slate tones unless overridden.

#### Example: Dark Mode & Brand Theming

```tsx
import { Search } from "@esvigy/react";

{/* 1. Automatically adapts to text color in light & dark mode */}
<div className="text-sky-600 dark:text-sky-400">
  <Search className="w-40 h-40" />
</div>

{/* 2. Custom brand palette: Amber hero + Deep slate chassis */}
<Search
  color="#F59E0B"
  secondaryColor="#0F172A"
  animated
  className="w-40 h-40"
/>
```

---

### 2. ⚡ Zero-JS Micro-Animations

Esvigy animations require **zero JavaScript runtime animation libraries**.

When you pass `animated={true}`, the component injects lightweight, GPU-accelerated CSS `@keyframes` directly inside an isolated `<style>` tag within the SVG:

- **Hardware Accelerated**: Transforms and opacities animate on the browser's compositor thread (60 FPS without main thread stutter).
- **Zero Overhead when Static**: When `animated={false}` (the default), no `<style>` element is generated at all.
- **Micro-Delights**: Subtle floating badges, rotating search glints, gentle bouncing carts, and breathing ground shadows.
- **Accessible & Motion-Safe**: Automatically includes an `@media (prefers-reduced-motion: reduce)` media query that disables motion for users with vestibular conditions.

```tsx
{/* Static (0 KB CSS overhead) */}
<ActionUpload className="w-48 h-48" />

{/* Micro-animated (Smooth CSS compositor motion) */}
<ActionUpload animated className="w-48 h-48" />
```

---

### 3. 🌲 100% Tree-Shakable & Ultra-Lightweight

Esvigy is packaged with strict `"sideEffects": false` and dual ESM (`.js`) / CommonJS (`.cjs`) builds:

- Import only what you use: `import { EmptyBox } from "@esvigy/react"`.
- Your bundler (Vite, Next.js, Webpack, Rollup) tree-shakes out every unused illustration.
- You only pay for the exact ~1-3 KB of the component you render in your production bundle.

---

### 4. ⚡ React Server Components (RSC) & Framework Ready

Esvigy components are pure, stateless JSX wrappers around standard SVG primitives:
- **No client hooks** (`useState`, `useEffect`) and **no browser globals** (`window`, `document`).
- Can be rendered in **Next.js App Router Server Components** without needing a `"use client"` directive (unless you attach interactive event handlers like `onClick`).
- Fully compatible with **Next.js**, **Remix / React Router v7**, **Vite**, **Astro**, and **Gatsby**.

---

## 🛠️ Props Reference

Every illustration component accepts standard `EsvigyProps`, extending all native SVG attributes (`React.SVGProps<SVGSVGElement>`):

```tsx
export interface EsvigyProps extends React.SVGProps<SVGSVGElement> {
  /** Primary accent color for hero elements (defaults to "currentColor") */
  color?: string;
  /** Secondary surface color for backdrops and chassis (defaults to "transparent") */
  secondaryColor?: string;
  /** Enables embedded zero-JS CSS micro-animations (defaults to false) */
  animated?: boolean;
}
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `"currentColor"` | Primary accent fill and stroke. Inherits parent CSS `color` by default. |
| `secondaryColor` | `string` | `"transparent"` | Secondary structural surface color (chassis, shadow discs, card backdrops). |
| `animated` | `boolean` | `false` | Enables embedded CSS micro-animations. 0 extra CSS emitted when `false`. |
| `className` | `string` | `""` | Standard CSS class for sizing and margins (e.g. Tailwind `w-40 h-40`). |
| `style` | `CSSProperties` | `undefined` | Inline style overrides (automatically preserves `display: block`). |
| `aria-label` | `string` | Component name | Accessible label for screen readers. Default `role="img"` is pre-configured. |
| `...props` | `SVGProps` | — | Any standard SVG attribute (`onClick`, `id`, `data-*`, `tabIndex`, etc.). |

---

## 🌟 Real-World UI Recipes

### 1. Dashboard Empty State Card
```tsx
import { EmptyBox } from "@esvigy/react";

export function EmptyProjects() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40">
      <EmptyBox animated color="#38BDF8" className="w-40 h-40 mb-4" />
      <h3 className="text-lg font-semibold text-white">No projects found</h3>
      <p className="text-sm text-slate-400 max-w-sm mb-6">
        You haven't created any workspaces yet. Get started by launching your first project.
      </p>
      <button className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium text-sm transition-colors">
        Create New Workspace
      </button>
    </div>
  );
}
```

### 2. 404 Error Page
```tsx
import { NotFoundRobot } from "@esvigy/react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-slate-950 text-white">
      <NotFoundRobot animated color="#00D4FF" secondaryColor="#1E293B" className="w-64 h-64 mb-6" />
      <h1 className="text-4xl font-bold tracking-tight mb-2">404 - Lost in Orbit</h1>
      <p className="text-slate-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has traveled to another dimension.
      </p>
      <a href="/" className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-colors">
        ← Back to Safety
      </a>
    </div>
  );
}
```

### 3. File Upload Dropzone
```tsx
import { ActionUpload } from "@esvigy/react";

export function FileUploader() {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-slate-700 hover:border-sky-500 transition-colors cursor-pointer bg-slate-900/30">
      <ActionUpload animated color="#38BDF8" secondaryColor="#0F172A" className="w-32 h-32 mb-3" />
      <p className="font-medium text-sm text-slate-200">Drag & drop your files here</p>
      <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG up to 10MB</p>
    </div>
  );
}
```

### 4. Operation Success Modal
```tsx
import { StatusSuccess } from "@esvigy/react";

export function SuccessModal({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
        <StatusSuccess animated color="#10B981" secondaryColor="#1E293B" className="w-36 h-36 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white">Deployment Complete</h3>
        <p className="text-sm text-slate-400 mt-1 mb-6">Your application has been published live to production.</p>
        <button
          onClick={onDismiss}
          className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-sm transition-colors"
        >
          View Dashboard
        </button>
      </div>
    </div>
  );
}
```

---

## 📚 Illustration Catalog (30 Components)

Browse, recolor, and copy code for all components in the interactive [Esvigy Studio](https://esvigy.vercel.app):

| Category | Component Names |
| :--- | :--- |
| **Actions & Transfers** | `ActionCreate`, `ActionDownload`, `ActionUpload` |
| **Empty States** | `EmptyBox`, `EmptyCart`, `EmptyFolder`, `EmptyMessage` |
| **Errors & Statuses** | `ErrorForbidden`, `ErrorServer`, `StatusFail`, `StatusOffline`, `StatusProcessing`, `StatusSuccess` |
| **404 Not Found** | `NotFoundLaptop`, `NotFoundRobot`, `NotFoundShopping`, `NotFoundSmiley` |
| **Search & Discovery** | `Search`, `SearchLoading`, `SearchNotFound`, `SearchSuccess` |
| **Characters & Conceptual** | `DocumentFolders`, `GamePad`, `LogoEsvigy`, `ManCarRepair`, `ManQuestion`, `SecurityLock`, `Wallet`, `WomanLaptop`, `WomanYoga` |

---

## 🌐 Framework Compatibility

`@esvigy/react` is built with modern ES modules and CommonJS dual-output:

- **Next.js (App Router)**: 100% React Server Components (RSC) compatible — zero `"use client"` requirement.
- **Next.js (Pages Router)**: Seamless SSR and hydration.
- **Vite & React 19 / 18**: Instant HMR, strictly tree-shakable with `"sideEffects": false`.
- **Remix & React Router v7**: Zero runtime overhead on server rendering.
- **Astro**: Works directly inside `.astro` files with client directives (`client:load`, `client:visible`) or static SSR.
- **Tailwind CSS**: Control width and height directly using standard utility classes (`w-32 h-32`, `w-48 h-48`, etc.).

---

## ❓ Frequently Asked Questions (FAQ)

<details>
<summary><strong>Do I need <code>"use client"</code> in Next.js App Router?</strong></summary>

No! Esvigy illustration components contain no client-side hooks (`useState`, `useEffect`) and no browser APIs (`window`, `document`). They render as pure SVG markup, making them 100% compatible with React Server Components (RSC). You only need `"use client"` if your parent component uses client state or if you attach client event handlers like `onClick`.
</details>

<details>
<summary><strong>How do I change the illustration size?</strong></summary>

Esvigy SVGs have an intrinsic `viewBox` and default to `width="100%"` / `height="100%"` with `display: block`. You can resize them cleanly using Tailwind utility classes (e.g. `className="w-32 h-32"` or `className="w-64 h-64"`) or inline styles (`style={{ width: 180, height: 180 }}`).
</details>

<details>
<summary><strong>Why do animations use CSS keyframes instead of Framer Motion or Lottie?</strong></summary>

Lottie requires loading a 60KB+ JavaScript runtime player that parses JSON and executes JavaScript animation loops on every frame. CSS keyframes, by contrast, run natively on the browser's hardware-accelerated compositor thread with zero JavaScript CPU overhead and zero runtime dependencies.
</details>

<details>
<summary><strong>Can I contribute my own illustration to the library?</strong></summary>

Yes! Designers can submit raw SVG files directly to our intake folder without writing any code. Developers and contributors convert them into React components. See our [Contributing Guide](https://github.com/nickfrostech/esvigy/blob/main/CONTRIBUTING.md) to get started!
</details>

---

## 🤝 Contributing & Community

Contributions are warmly welcome! Whether you are a vector artist, front-end developer, or documentation writer:

- 📖 **[Contributing Guide](https://github.com/nickfrostech/esvigy/blob/main/CONTRIBUTING.md)** — General guidelines and contribution tracks.
- ⚛️ **[React Package Guide](https://github.com/nickfrostech/esvigy/blob/main/packages/react/CONTRIBUTING.md)** — Generator scripts and testing checklist.
- 🎨 **[Designer Vector Staging](https://github.com/nickfrostech/esvigy/blob/main/packages/svg/CONTRIBUTING.md)** — Drop raw SVGs into `packages/svg/unprocessedSVG`.
- ⚖️ **[Copyright & Takedown Policy](https://github.com/nickfrostech/esvigy/blob/main/COPYRIGHT.md)** — Maintainer notice & DMCA-style takedown process.

---

## 📄 License

Distributed under the [MIT License](https://github.com/nickfrostech/esvigy/blob/main/packages/react/LICENSE).  
Copyright © 2026 [Nick Frost](https://github.com/nickfrostech). Free for personal and commercial projects.

