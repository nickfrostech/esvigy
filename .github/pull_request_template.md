## 📝 Summary of Changes

<!-- Briefly describe what this pull request does and why. -->

---

## 📌 Contribution Type

<!-- Select all that apply: -->
- [ ] 🎨 **New Vector Artwork** (raw SVG added to `packages/svg/unprocessedSVG/`)
- [ ] ⚡ **Standardized Vector** (moved to `packages/svg/src/` with two-tone tokens)
- [ ] 📦 **React Component Update** (`@esvigy/react` generator or component changes)
- [ ] 🌐 **Website / Studio** (`apps/website` UI, features, or design polish)
- [ ] 📖 **Documentation** (README, guides, or typo fixes)
- [ ] 🐛 **Bug Fix**

---

## 🎨 For Vector Illustration Submissions

<!-- If you are submitting or standardizing an illustration, please fill out these details: -->
- **Illustration Name:** ` ` (e.g. `RocketLaunch`)
- **Category:** ` ` (e.g. `actions`, `empty-states`, `errors`, `search`, etc.)
- **Author Attribution:** ` ` (your name or creator handle)
- **Author Link / Portfolio:** ` ` (e.g. `https://github.com/your-username`)

---

## 🧪 Contributor Verification Checklist

<!-- Please check the boxes that apply to your pull request: -->

### For Vector Contributors:
- [ ] SVG is 100% pure vector (zero `<image>` raster tags).
- [ ] File size is under 35 KB.
- [ ] Uses UTF-8 character encoding.
- [ ] Tight unitless pixel `viewBox` with ~15px–25px padding.
- [ ] Primary accents use `currentColor` and secondary surfaces use `data-esvigy-secondary="true"`.
- [ ] Registered in [`packages/svg/manifest.json`](packages/svg/manifest.json).

### For React & Code Contributors:
- [ ] Ran component generator: `pnpm --filter @esvigy/react generate <Name>`
- [ ] Synchronized barrel index: `pnpm --filter @esvigy/react generate:index`
- [ ] Component tests pass: `pnpm --filter @esvigy/react test:one <Name>`
- [ ] Full test suite passes: `pnpm --filter @esvigy/react test`
- [ ] Build succeeds: `pnpm --filter @esvigy/react build`
- [ ] Visual verification in web studio: `pnpm --filter website dev`

---

## ⚖️ Intellectual Property Confirmation

- [ ] **I certify that this contribution is my own original creation or that I hold all legal rights and authorizations to license it under the MIT License, as outlined in [COPYRIGHT.md](COPYRIGHT.md).**
