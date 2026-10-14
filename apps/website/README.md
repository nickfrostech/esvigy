# Esvigy Website & Illustration Studio

> Official documentation homepage and interactive illustration studio for the **Esvigy** *(pronounced "es-vee-gee" /ˌɛs.viːˈdʒiː/)* ecosystem.

🌐 **Live Website**: [https://esvigy.vercel.app](https://esvigy.vercel.app)

---

## Overview

The Esvigy Website serves as both the **public documentation hub** and an **interactive design studio** where developers and designers can explore, customize, recolor, and export illustrations in real time.

It is built as part of the Esvigy monorepo under `apps/website` and consumes `@esvigy/react` via pnpm workspace protocol (`workspace:*`).

---

## Features

- 🎨 **Interactive Illustration Studio**:
  - Live primary (`color`) and secondary (`secondaryColor`) hex pickers.
  - One-click curated color palette presets (Default Cyan, Emerald, Purple Night, Cyberpunk, Warm Coral).
  - Instant micro-animation play/pause toggle.
- 🔍 **Deep Inspection Modal**:
  - Zoomable SVG illustration preview.
  - 1-click React component code snippet generation.
  - Raw standalone `.svg` vector downloading.
  - Artist and source attribution links.
- 📐 **Dynamic Sizing & Grid Controls**:
  - Switch display sizes (`sm`, `md`, `lg`) and canvas background styles (`dark`, `light`, `grid`).
  - Search illustrations by name, tags, or category.
- 🌓 **Theme Engine**:
  - Full Dark Mode and Light Mode support with smooth transition tokens.
- 📱 **Fully Responsive**:
  - Optimized for mobile phones, tablets, laptops, and ultra-wide desktop monitors.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with tailored design tokens and CSS custom properties (no heavy runtime CSS-in-JS)
- **Deployment**: [Vercel](https://vercel.com)

---

## Local Development

From the repository root:

```bash
# Start the Vite development server (http://localhost:5173)
pnpm --filter website dev

# Build the production bundle for deployment
pnpm --filter website build
```

---

## Contributing

We welcome contributions to the website, including new studio features, UI refinements, export formats, and performance optimizations.

Please see our [Website Contributing Guide](./CONTRIBUTING.md) for architecture details, component organization, and pull request guidelines.

---

## License

[MIT License](../../LICENSE) © [Nick Frost](https://github.com/nickfrostech)
