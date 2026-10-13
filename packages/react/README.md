# @esvigy/react

> **Esvigy illustration components for React.** UI illustrations as simple and developer-friendly as icons.

Part of the [Esvigy](https://github.com/nickfrostech/esvigy) illustration ecosystem.

---

## Installation

```bash
# pnpm (recommended)
pnpm add @esvigy/react

# npm
npm install @esvigy/react

# yarn
yarn add @esvigy/react
```

---

## Usage

```tsx
import { ActionUpload, EmptyCart, StatusSuccess } from "@esvigy/react";

export function Example() {
  return (
    <div className="flex gap-6 items-center">
      {/* Default static */}
      <EmptyCart className="w-48 h-48" />

      {/* Dynamic theme colors and micro-animations */}
      <ActionUpload
        animated
        color="#00D4FF"
        secondaryColor="#0F172A"
        className="w-48 h-48"
      />

      <StatusSuccess
        animated
        color="#10B981"
        className="w-48 h-48"
      />
    </div>
  );
}
```

---

## Props

All Esvigy React components share a clean, consistent interface:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `"currentColor"` | Primary accent fill and stroke color |
| `secondaryColor` | `string` | `"transparent"` | Secondary background / surface tone |
| `animated` | `boolean` | `false` | Enables GPU-accelerated micro-animations |
| `className` | `string` | `""` | Standard CSS classes (Tailwind, etc.) for sizing |
| `style` | `React.CSSProperties` | `undefined` | Inline style overrides |

---

## Features

- 🌲 **Tree-Shakable**: Built with strict `"sideEffects": false`. Only the illustrations you import are bundled.
- ⚡ **Zero-JS CSS Motion**: Micro-animations are 100% vector CSS keyframes—zero JavaScript runtime overhead.
- ♿ **Accessibility First**: Automatically respects `prefers-reduced-motion` settings.
- 🎨 **Two-Tone Engine**: Easily customize primary and secondary brand colors.

---

## License

MIT © [Nick Frost](https://github.com/nickfrostech)
