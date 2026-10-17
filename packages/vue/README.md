<p align="center">
  <br />
  <h1 align="center">@esvigy/vue</h1>
  <p align="center">
    <strong>UI illustrations as simple, tree-shakable, and developer-friendly as icons.</strong>
    <br />
    <em>The "Lucide for illustrations" — 100% vector, zero-JS micro-animations, two-tone theming, and Vue 3 / Nuxt 3 ready.</em>
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@esvigy/vue"><img src="https://img.shields.io/npm/v/@esvigy/vue.svg?color=42B883&label=@esvigy/vue" alt="npm version" /></a>
  <a href="https://github.com/nickfrostech/esvigy/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://github.com/nickfrostech/esvigy"><img src="https://img.shields.io/badge/vue-3.x-42B883.svg" alt="Vue 3 Ready" /></a>
  <a href="https://esvigy.vercel.app"><img src="https://img.shields.io/badge/Live%20Studio-esvigy.vercel.app-00D4FF" alt="Live Studio" /></a>
</p>

<p align="center">
  <a href="https://esvigy.vercel.app"><strong>🎨 Open the Interactive Illustration Studio (esvigy.vercel.app)</strong></a>
  <br />
  <em>Preview all 30+ illustrations live, test two-tone palettes, toggle animations, and copy Vue code with one click.</em>
</p>

---

## 💡 Why @esvigy/vue?

In modern web development, adding an **icon** takes 5 seconds: you install Lucide or Heroicons, and write `<Search class="w-5 h-5" />`.

**Why should UI illustrations be any different?**

Traditionally, sourcing illustrations meant:
1. 📥 Downloading random raw SVGs from asset libraries or design files.
2. 🍝 Copy-pasting 300 lines of messy XML directly into your templates or bloating your `public/` folder.
3. 🎨 Wrestling with hardcoded `#6C63FF` colors that break as soon as your app switches to dark mode.
4. 🐘 Installing 60KB+ runtime JavaScript animation libraries (Lottie) just for a gentle floating card or hovering shadow.
5. ⚠️ Fighting with unstandardized `viewBox` coordinates, clipping masks, and unpredictable responsiveness.

**`@esvigy/vue` eliminates this entire friction cycle.**

```vue
<script setup>
import { EmptyCart } from "@esvigy/vue";
</script>

<template>
  <!-- Just like an icon. One line. Perfectly styled. -->
  <EmptyCart animated class="w-48 h-48" />
</template>
```

---

### ⚖️ The Comparison

| Feature | Traditional Downloaded SVGs | Heavy Lottie Animations | `@esvigy/vue` |
| :--- | :--- | :--- | :--- |
| **Developer Experience** | Messy copy-pasted XML | JSON configuration files & player wrappers | **One-line Vue import** (`<EmptyCart />`) |
| **Theme / Dark Mode** | ❌ Hardcoded static colors | ❌ Complex JSON color overriding | ✅ **Inherits `currentColor` + customizable `secondaryColor`** |
| **Animation Overhead** | ❌ Static (no animation) | ❌ 60KB+ JS runtime engine | ✅ **0 KB JS overhead** (pure hardware-accelerated CSS keyframes) |
| **Bundle Impact** | Often bundled in full | Heavy canvas / JSON bundles | ✅ **100% Tree-Shakable** (`"sideEffects": false`) |
| **Nuxt 3 / SSR Safe** | Manual SVG wrapping | ❌ Client-only (`<ClientOnly>` required) | ✅ **100% SSR Ready** (pure Vue SFC render functions) |
| **Accessibility** | ❌ Ignored or missing attributes | Partial canvas accessibility | ✅ **Default `role="img"` + automatic `prefers-reduced-motion`** |
| **Type Safety** | ❌ Untyped raw XML | Generic JSON props | ✅ **Full TypeScript autocomplete & `EsvigyProps`** |

---

## 📦 Installation

Install with your favorite package manager:

```bash
# pnpm (recommended)
pnpm add @esvigy/vue

# npm
npm install @esvigy/vue

# yarn
yarn add @esvigy/vue

# bun
bun add @esvigy/vue
```

> **Peer Dependency**: Vue `^3.3.0` or higher.

### 📋 Prefer copying single-file components? ("The shadcn Way")

If you prefer dropping self-contained `.vue` Single File Components directly into your project's `components/esvigy/` folder instead of installing a package, use our official CLI:

```bash
# Interactive wizard
pnpm dlx @esvigy/cli add

# Add specific component directly into your components folder
pnpm dlx @esvigy/cli add ActionCreate --framework vue
```

---

## 🚀 Quickstart

Using an Esvigy illustration in Vue 3 is as intuitive as using an icon:

```vue
<script setup>
import { EmptyCart } from "@esvigy/vue";
</script>

<template>
  <main class="flex min-h-screen items-center justify-center p-6 bg-slate-950 text-white">
    <div class="text-center">
      <!-- 1. Sized with standard Tailwind or CSS -->
      <EmptyCart class="w-56 h-56 mx-auto mb-4" />

      <h2 class="text-xl font-bold">Your cart is empty</h2>
      <p class="text-slate-400 text-sm mt-1">Looks like you haven't added anything yet.</p>
    </div>
  </main>
</template>
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

```vue
<script setup>
import { Search } from "@esvigy/vue";
</script>

<template>
  <!-- 1. Automatically adapts to text color in light & dark mode -->
  <div class="text-sky-600 dark:text-sky-400">
    <Search class="w-40 h-40" />
  </div>

  <!-- 2. Custom brand palette: Amber hero + Deep slate chassis -->
  <Search
    color="#F59E0B"
    secondaryColor="#0F172A"
    animated
    class="w-64 h-64"
  />
</template>
```

---

### 2. ✨ Micro-Animations (Zero-JS Overhead)

Every Esvigy illustration comes with handcrafted CSS keyframe animations designed to bring life to empty states, error screens, and success modals.

Pass the `animated` prop to activate them:

```vue
<StatusSuccess animated class="w-32 h-32" />
<StatusProcessing animated class="w-32 h-32" />
<StatusOffline animated class="w-32 h-32" />
```

- **GPU-Accelerated**: Transforms and opacity are animated using compositor-only properties (`transform-box: fill-box; transform-origin: center;`).
- **Zero Runtime Dependencies**: No Framer Motion, no Lottie runtime engine, no canvas element.
- **Accessibility by Default**: Micro-animations automatically disable themselves when users enable `@media (prefers-reduced-motion: reduce)` on their operating systems.

---

## 📖 Component API & Props

All illustrations share the standardized `EsvigyProps` interface:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `"currentColor"` | Primary accent color (hero elements, badges, focal marks). |
| `secondaryColor` | `string` | `"transparent"` | Secondary accent color (surfaces, chassis, backdrops). |
| `animated` | `boolean` | `false` | Enables GPU-accelerated micro-animations. |
| `className` | `string` | `""` | Additional CSS classes (also supports standard `class`). |
| `style` | `StyleValue` | `{ display: 'block' }` | Additional inline styles. |

All standard SVG attributes (`width`, `height`, `aria-label`, `role`, `@click`, etc.) fall through automatically to the underlying `<svg>` element.

---

## 🎨 Available Illustrations (30 Included)

| Category | Available Components |
| :--- | :--- |
| **Actions** | `ActionCreate`, `ActionDownload`, `ActionUpload` |
| **Status & Feedback** | `StatusSuccess`, `StatusFail`, `StatusProcessing`, `StatusOffline` |
| **Search Suite** | `Search`, `SearchLoading`, `SearchSuccess`, `SearchNotFound` |
| **Empty States** | `EmptyBox`, `EmptyCart`, `EmptyFolder`, `EmptyMessage` |
| **Errors & 404s** | `ErrorForbidden`, `ErrorServer`, `NotFoundLaptop`, `NotFoundRobot`, `NotFoundShopping`, `NotFoundSmiley` |
| **Security & Finance** | `SecurityLock`, `DocumentFolders`, `Wallet` |
| **Gaming & Brand** | `GamePad`, `LogoEsvigy` |
| **Characters & Lifestyle** | `ManCarRepair`, `ManQuestion`, `WomanLaptop`, `WomanYoga` |

Explore and test all illustrations live on the **[Esvigy Illustration Studio](https://esvigy.vercel.app)**.

---

## 📄 License

MIT © [Nick Frost](https://github.com/nickfrostech).
See [LICENSE](LICENSE) for full details.
