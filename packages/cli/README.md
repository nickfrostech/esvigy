# @esvigy/cli

> **"The shadcn way for illustrations"** — Copy-paste beautiful, customizable, and animated vector illustrations directly into your project with a single command.

---

## ⚡ Quick Start

You don't need to install this package permanently. Run it directly with your package manager:

```bash
# With pnpm
pnpm dlx @esvigy/cli add
# or unscoped alias:
pnpm dlx esvigy add

# With npm
npx @esvigy/cli add
# or unscoped alias:
npx esvigy add

# With bun
bunx @esvigy/cli add
# or unscoped alias:
bunx esvigy add
```

If no arguments are passed, an interactive wizard prompts you to select illustrations, target framework, and verifies your installation folder.

---

## 🚀 Direct Usage

### Add a specific illustration:

```bash
# React component (.tsx)
pnpm dlx esvigy add ActionCreate --framework react

# Raw SVG (.svg) into public folder
pnpm dlx esvigy add EmptyBox --framework svg --dir public/illustrations

# Multiple illustrations at once
pnpm dlx esvigy add StatusSuccess StatusFail StatusProcessing
```

---

## 🧠 Smart Component Folder Auto-Detection

`esvigy` automatically inspects your project layout so you don't have to specify `--dir` every time:

1. **shadcn/ui `components.json`**:
   If your project has a `components.json` configuration, `esvigy` reads your `aliases.components` path (e.g. `@/components` or `~/components`) and targets `<components>/esvigy/`.
2. **Project Structure**:
   * If `src/components/` exists $\rightarrow$ targets `src/components/esvigy/`
   * If `components/` exists $\rightarrow$ targets `components/esvigy/`
   * If `src/` exists $\rightarrow$ targets `src/components/esvigy/`
   * Fallback: `components/esvigy/`
3. **Framework Auto-Detection**:
   Inspects `package.json` dependencies to determine whether you're using React, Vue, or Svelte, and pre-selects the appropriate framework in the interactive prompt.

---

## 📋 Commands

### `esvigy add [illustrations...]`

| Option | Shorthand | Description | Default |
| :--- | :---: | :--- | :--- |
| `--framework` | `-f` | Target framework (`react`, `svg`, `vue`, `svelte`) | Auto-detected |
| `--dir` | `-d` | Target folder for the components | Auto-detected `components/esvigy` |
| `--yes` | `-y` | Skip interactive prompts and accept detected defaults | `false` |
| `--overwrite` | | Overwrite existing files if they already exist | `false` |

### `esvigy list`

List all 30+ illustrations in the catalog with category groupings and tags:

```bash
# List all illustrations
pnpm dlx esvigy list

# Filter by category
pnpm dlx esvigy list --category empty-states
pnpm dlx esvigy list --category status
pnpm dlx esvigy list --category actions

# Output as JSON
pnpm dlx esvigy list --json
```

---

## 📄 License

MIT © [Nick Frost](https://github.com/nickfrostech)
