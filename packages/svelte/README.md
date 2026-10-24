<p align="center">
  <br />
  <h1 align="center">@esvigy/svelte</h1>
  <p align="center">
    <strong>UI illustrations as simple, tree-shakable, and developer-friendly as icons.</strong>
    <br />
    <em>The "Lucide for illustrations" — 100% vector, zero-JS micro-animations, two-tone theming, and Svelte 4 / Svelte 5 / SvelteKit ready.</em>
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@esvigy/svelte"><img src="https://img.shields.io/npm/v/@esvigy/svelte.svg?color=FF3E00&label=@esvigy/svelte" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@esvigy/svelte"><img src="https://img.shields.io/npm/dm/@esvigy/svelte.svg?color=10B981&label=downloads" alt="npm downloads" /></a>
  <a href="https://bundlephobia.com/package/@esvigy/svelte"><img src="https://img.shields.io/bundlephobia/minzip/@esvigy/svelte?color=7928CA&label=minzipped" alt="bundle size" /></a>
  <a href="https://github.com/nickfrostech/esvigy/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://github.com/nickfrostech/esvigy"><img src="https://img.shields.io/badge/svelte-4%20%7C%205-FF3E00.svg" alt="Svelte 4 & 5 Ready" /></a>
  <a href="https://esvigy.vercel.app"><img src="https://img.shields.io/badge/Live%20Studio-esvigy.vercel.app-00D4FF" alt="Live Studio" /></a>
</p>

<p align="center">
  <a href="https://esvigy.vercel.app"><strong>🎨 Open the Interactive Illustration Studio (esvigy.vercel.app)</strong></a>
  <br />
  <em>Preview all 30+ illustrations live, test two-tone palettes, toggle animations, and copy Svelte code with one click.</em>
</p>

---

## 💡 Why @esvigy/svelte?

In modern web development, adding an **icon** takes 5 seconds: you install Lucide or Heroicons, and write `<Search class="w-5 h-5" />`.

**Why should UI illustrations be any different?**

Traditionally, sourcing illustrations meant:
1. 📥 Downloading random raw SVGs from asset libraries or design files.
2. 🍝 Copy-pasting 300 lines of messy XML directly into your templates or bloating your `static/` folder.
3. 🎨 Wrestling with hardcoded `#6C63FF` colors that break as soon as your app switches to dark mode.
4. 🐘 Installing 60KB+ runtime JavaScript animation libraries (Lottie) just for a gentle floating card or hovering shadow.
5. ⚠️ Fighting with unstandardized `viewBox` coordinates, clipping masks, and unpredictable responsiveness.

**`@esvigy/svelte` eliminates this entire friction cycle.**

```svelte
<script>
  import { EmptyCart } from "@esvigy/svelte";
</script>

<!-- Just like an icon. One line. Perfectly styled. -->
<EmptyCart animated class="w-48 h-48" />
```

---

### ⚖️ The Comparison

| Feature | Traditional Downloaded SVGs | Heavy Lottie Animations | `@esvigy/svelte` |
| :--- | :--- | :--- | :--- |
| **Developer Experience** | Messy copy-pasted XML | JSON configuration files & player wrappers | **One-line Svelte import** (`<EmptyCart />`) |
| **Theme / Dark Mode** | ❌ Hardcoded static colors | ❌ Complex JSON color overriding | ✅ **Inherits `currentColor` + customizable `secondaryColor`** |
| **Animation Overhead** | ❌ Static (no animation) | ❌ 60KB+ JS runtime engine | ✅ **0 KB JS overhead** (pure hardware-accelerated CSS keyframes) |
| **Bundle Impact** | Often bundled in full | Heavy canvas / JSON bundles | ✅ **100% Tree-Shakable** (`"sideEffects": false`) |
| **SvelteKit / SSR Safe** | Manual SVG wrapping | ❌ Client-only wrapper required | ✅ **100% SSR Safe** |
| **Accessibility** | ❌ Ignored or missing attributes | Partial canvas accessibility | ✅ **Default `role="img"` + automatic `prefers-reduced-motion`** |
| **Type Safety** | ❌ Untyped raw XML | Generic JSON props | ✅ **Full TypeScript autocomplete & `EsvigyProps`** |

---

## 📦 Installation

Install with your favorite package manager:

```bash
# pnpm (recommended)
pnpm add @esvigy/svelte

# npm
npm install @esvigy/svelte

# yarn
yarn add @esvigy/svelte

# bun
bun add @esvigy/svelte
```

> **Peer Dependency**: Works seamlessly with **Svelte 4** (`^4.0.0`) and **Svelte 5** (`^5.0.0`).

### 📋 Prefer copying single-file components? ("The shadcn Way")

If you prefer dropping self-contained `.svelte` components directly into your project's `src/lib/components/esvigy/` folder instead of installing a package, use our official CLI:

```bash
# Interactive wizard (auto-detects Svelte & project structure)
pnpm dlx @esvigy/cli add

# Add specific component directly into your components folder
pnpm dlx @esvigy/cli add ActionCreate --framework svelte
```

---

## 🚀 Usage

### Basic Usage

Import any illustration component and use it in your markup:

```svelte
<script>
  import { NotFoundRobot } from "@esvigy/svelte";
</script>

<NotFoundRobot class="w-64 h-64" />
```

### Enabling Micro-Animations (`animated`)

Every Esvigy illustration includes bespoke micro-animations crafted directly in CSS (smooth floating items, pulsing badges, rotating radars, floating dino legs). Enable them with a single boolean prop:

```svelte
<script>
  import { SearchLoading, StatusProcessing } from "@esvigy/svelte";
</script>

<!-- CSS hardware-accelerated micro-animations with 0 KB runtime JS! -->
<SearchLoading animated class="w-48 h-48" />
<StatusProcessing animated class="w-48 h-48" />
```

### Two-Tone Palette Customization

Esvigy illustrations feature an intentional two-tone design system:
- **`color`**: Controls primary accents, focal elements, and highlights (defaults to `currentColor`).
- **`secondaryColor`**: Controls background surfaces, soft badges, and secondary elements (defaults to `transparent` or illustration fallback).

```svelte
<script>
  import { ActionCreate } from "@esvigy/svelte";
</script>

<!-- Cyan Pop palette -->
<ActionCreate
  animated
  color="#06b6d4"
  secondaryColor="#083344"
  class="w-64 h-64"
/>
```

---

## 🛠️ Props & API Reference

All `@esvigy/svelte` components accept the standard `EsvigyProps` interface:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`color`** | `string` | `"currentColor"` | Primary accent color. Supports hex, RGB, HSL, or CSS variables. |
| **`secondaryColor`** | `string` | `"transparent"` | Secondary background surface color. |
| **`animated`** | `boolean` | `false` | Enables embedded vector CSS micro-animations. |
| **`class`** | `string` | `""` | Utility class names (e.g. Tailwind `w-64 h-64`). |
| **`style`** | `string` | `""` | Custom inline CSS styles (e.g. `"opacity: 0.9;"`). |
| **`aria-label`** | `string` | `"<Name> illustration"` | Screen reader accessibility label. |

---

## 📚 Illustration Catalog (30 Core Illustrations)

| Illustration | Component Name | Category | Best Used For |
| :--- | :--- | :--- | :--- |
| **Create Action** | `<ActionCreate />` | `actions` | New file, entity creation, onboarding |
| **Download Action** | `<ActionDownload />` | `actions` | File export, asset download, save |
| **Upload Action** | `<ActionUpload />` | `actions` | File dropzones, document upload |
| **Document Folders** | `<DocumentFolders />` | `business` | File hierarchy, archives, repositories |
| **Empty Box** | `<EmptyBox />` | `empty-states` | Empty parcel, missing deliveries |
| **Empty Cart** | `<EmptyCart />` | `empty-states` | Empty shopping cart, cleared bag |
| **Empty Folder** | `<EmptyFolder />` | `empty-states` | Empty project folder or workspace |
| **Empty Message** | `<EmptyMessage />` | `empty-states` | Cleared inbox, zero notifications |
| **Forbidden 403** | `<ErrorForbidden />` | `errors` | 403 authorization stop, restricted |
| **Server Error 500** | `<ErrorServer />` | `errors` | 500 server downtime, backend error |
| **GamePad** | `<GamePad />` | `gaming` | Gaming hub, play mode, controller |
| **Esvigy Brand Logo** | `<LogoEsvigy />` | `brand` | Official Esvigy vector emblem |
| **Car Diagnostics** | `<ManCarRepair />` | `lifestyle` | Maintenance, diagnostics, automotive |
| **Puzzled Question** | `<ManQuestion />` | `lifestyle` | Help center, FAQs, support inquiries |
| **Laptop 404** | `<NotFoundLaptop />` | `errors` | Missing web page with screen error |
| **Robot 404** | `<NotFoundRobot />` | `errors` | Lost cyber bot, 404 broken route |
| **Shopping 404** | `<NotFoundShopping />` | `errors` | Missing store product or catalog item |
| **Smiley 404** | `<NotFoundSmiley />` | `errors` | Confused smiley face, missing content |
| **Search Lens** | `<Search />` | `search` | Discovery query prompt, search bar |
| **Search Radar** | `<SearchLoading />` | `search` | Active radar scan, query pending |
| **No Results Found** | `<SearchNotFound />` | `search` | Zero matches returned, empty filter |
| **Search Found** | `<SearchSuccess />` | `search` | Search completed with matched items |
| **Security Lock** | `<SecurityLock />` | `security` | Authentication, 2FA, password form |
| **Status Failed** | `<StatusFail />` | `status` | Action rejected, validation error |
| **Offline Dino** | `<StatusOffline />` | `status` | Network disconnected, offline runner |
| **Sync Processing** | `<StatusProcessing />` | `status` | Async data sync, processing spinner |
| **Status Success** | `<StatusSuccess />` | `status` | Task finished, payment confirmed |
| **Payment Wallet** | `<Wallet />` | `finance` | Checkout, balance, crypto, payments |
| **Developer Woman** | `<WomanLaptop />` | `lifestyle` | Coding session, engineering productivity |
| **Mindful Yoga** | `<WomanYoga />` | `lifestyle` | Wellness, meditation, break prompt |

---

## 🛡️ License & Attribution

Distributed under the [MIT License](https://github.com/nickfrostech/esvigy/blob/main/LICENSE).  
Copyright © 2026 [Nick Frost](https://github.com/nickfrostech).
