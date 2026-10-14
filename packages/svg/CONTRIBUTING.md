# Contributing Vector Illustrations to @esvigy/svg

Thank you for contributing vector artwork to Esvigy! Whether you are a professional vector artist, a UI designer, or a developer standardizing vectors, this guide explains how our illustration pipeline works.

---

## 🎨 Use Any Design Tool of Your Choice

Esvigy is **tool-agnostic**. You can design illustrations using whatever software you are most comfortable with:

- **Figma**
- **Adobe Illustrator**
- **Inkscape**
- **Affinity Designer**
- **Penpot**
- **CorelDRAW**
- **Boxy SVG / Web Vector Editors**

As long as the final export is clean, standards-compliant SVG, any tool is welcome!

---

## 🚀 The Two-Stage Contribution Pipeline

We have established a simple two-stage pipeline so that **designers do not need to write code**, and **developers can help standardize artwork**:

```text
┌─────────────────────────────────┐
│     Designers / Illustrators    │
│  Draw vector art in any tool    │
└────────────────┬────────────────┘
                 │
                 ▼  Upload raw SVG export
┌─────────────────────────────────┐
│  packages/svg/unprocessedSVG/   │  ◀── Raw artwork staging area
└────────────────┬────────────────┘
                 │
                 ▼  Transform to Esvigy standards (clean paths, two-tone colors, animations)
┌─────────────────────────────────┐
│       packages/svg/src/         │  ◀── Production-ready SVGs
└────────────────┬────────────────┘
                 │
                 ▼  Generate React components (pnpm generate)
┌─────────────────────────────────┐
│      packages/react/src/        │
└─────────────────────────────────┘
```

---

### Stage 1: For Designers & Illustrators (Raw Uploads)

If you are an illustrator or designer who wants to submit artwork without worrying about SVG code, XML attributes, or CSS animation keyframes:

1. Create your illustration in your favorite design tool.
2. Export your artwork as a standard `.svg` file.
3. Place your file in the **[`packages/svg/unprocessedSVG/`](./unprocessedSVG)** folder.
4. Give your file a clear PascalCase name (e.g. `RocketLaunch.svg`, `EmptyInbox.svg`, `MaintenanceServer.svg`).
5. Open a Pull Request titled:
   `[Vector Upload]: Add <IllustrationName> to unprocessedSVG`
6. Include your attribution details in the PR description:
   - **Author Name / Handle**
   - **Portfolio / GitHub / Website Link**
   - **Recommended Category** (e.g. `empty-states`, `errors`, `actions`, `security`, `finance`)
   - **Suggested Tags** (e.g. `rocket, launch, startup, speed`)

A developer or community maintainer will pick up your file, standardize it into our format, and migrate it to `src/`!

---

### Stage 2: Standardizing Vectors into `packages/svg/src/`

If you are a developer or vector specialist picking up a file from `unprocessedSVG/` (or authoring a standardized SVG directly):

#### 1. Frame & ViewBox Optimization
- Open the SVG in a code editor or vector optimizer.
- Set a clean, tight, unitless pixel `viewBox` (e.g. `viewBox="0 0 800 600"`).
- Ensure the artwork occupies **80% to 90%** of the frame, with **15px–25px** padding around edges so micro-animations don't clip outside the viewport.

#### 2. Apply the 4-Role Color Palette
To make the SVG dynamically recolorable by developers in React, map the illustration's colors to these roles:

| Role | SVG Syntax | Purpose |
| :--- | :--- | :--- |
| **Primary Accent** | `fill="currentColor"` or `stroke="currentColor"` | Inherits user's brand color via the `color` prop. Used for main character details, primary focal shapes, and accents. |
| **Secondary Accent** | `data-esvigy-secondary="true"` <br> `data-esvigy-default="#HEX"` | Recolorized via `secondaryColor` prop. Used for backdrop blobs, laptop bodies, cards, and secondary surfaces. |
| **Fixed Highlights** | `fill="#FFFFFF"` (Pure White) | Glare glints, eye sclera, specular reflections. These stay white regardless of theme. |
| **Fixed Shadows** | `fill="#111928"` / `#0B1120` | Depth extrusions, pupil centers, contact shadows. Preserves 3D depth across light and dark modes. |
| **Shading Gradients** | Black/White-to-Transparent stops | In `<linearGradient>` or `<radialGradient>`, use black/white with varying opacities fading to `0%`. This dynamically shades any user color! |

#### 3. Vector Hygiene (Clean Up)
- **100% Vectors Only**: Ensure there are **zero embedded bitmaps** (`<image>` or base64 data URIs).
- **Text Outlines**: Short labels or digits (e.g., `404`, `ERR`) must be converted to curves/paths so they render without external fonts. Avoid long paragraphs.
- **Pure Vector Shadows**: Use `<ellipse>` shapes with `opacity="0.15"` to `0.3` for ground shadows. Never use raster Gaussian blur shadows.
- **Group Elements for Animation**: Group elements logically with clean classes (e.g. `<g class="esvigy-hero-badge">`, `<ellipse class="esvigy-ground-shadow">`).

#### 4. Add Micro-Animations (Optional but Recommended)
If the illustration has motion, embed a scoped `<style>` block right after the `<svg>` opening tag:

```xml
<svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="esvigy-animated" data-animated="true" data-author="your-name" data-source="https://github.com/your-username">
  <style>
    @keyframes esvigy-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    svg.esvigy-animated .esvigy-hero-badge,
    svg[data-animated="true"] .esvigy-hero-badge {
      animation: esvigy-float 4s ease-in-out infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-hero-badge,
      svg[data-animated="true"] .esvigy-hero-badge {
        animation: none !important;
      }
    }
  </style>
  <!-- Vector paths here -->
</svg>
```

#### 5. Register in `packages/svg/manifest.json`
Add an entry for your illustration in [`manifest.json`](./manifest.json):

```json
"RocketLaunch": {
  "author": "jane-doe",
  "source": "https://github.com/jane-doe",
  "category": "actions",
  "tags": ["rocket", "launch", "startup", "deploy", "speed"],
  "colors": {
    "primary": "#00D4FF",
    "secondary": "#1E293B"
  }
}
```

#### 6. Move File to `packages/svg/src/`
Move the standardized SVG from `packages/svg/unprocessedSVG/` into `packages/svg/src/`.

---

## 🛠 Export Settings Quick Reference

When exporting SVG from your design application:

| Setting | Recommended Value | Why |
| :--- | :--- | :--- |
| **Format** | **SVG 1.1** or **SVG 2.0** | Universal web standard |
| **Character Encoding** | **UTF-8** ⚠️ | Critical: UTF-16 breaks web bundlers and Node generators |
| **Styling** | **Presentation Attributes** | Outputs clean `fill="..."` / `stroke="..."` instead of inline CSS |
| **Text** | **Convert to Outlines / Curves** | Guarantees exact rendering without font dependencies |
| **Bitmaps / Images** | **None (0 images)** | Prevents massive base64 image bloat |
| **Units** | **Pixels (`px`)** | Prevents fractional millimeter/inch scaling bugs |
| **Precision** | **2 to 3 decimal places** | Keeps file size small while preserving crisp curves |

---

## ✅ Contributor Checklist

Follow this checklist before submitting a Pull Request for a finalized SVG:

- [ ] File is placed in [`packages/svg/src/`](./src) (and removed from `unprocessedSVG/`).
- [ ] File size is under **35 KB**.
- [ ] Encoding is verified as **UTF-8**.
- [ ] Contains **zero `<image>` tags** (100% pure vector).
- [ ] ViewBox uses clean **unitless pixel coordinates** (e.g. `viewBox="0 0 800 600"`).
- [ ] Artwork occupies **80%–90%** of the frame (no huge dead margins).
- [ ] Primary accents use `fill="currentColor"` or `stroke="currentColor"`.
- [ ] Secondary surfaces are tagged with `data-esvigy-secondary="true"`.
- [ ] Header attribution comments and data attributes (`data-author`, `data-source`) are present.
- [ ] Entry added to [`packages/svg/manifest.json`](./manifest.json).
- [ ] Generate the corresponding React component:
  ```bash
  pnpm --filter @esvigy/react generate <IllustrationName>
  pnpm --filter @esvigy/react generate:index
  ```
- [ ] Verify tests pass:
  ```bash
  pnpm --filter @esvigy/react test:one <IllustrationName>
  pnpm --filter @esvigy/react test
  ```
- [ ] Visually verify in the Studio:
  ```bash
  pnpm --filter website dev
  ```

---

## ⚖️ Contributor Intellectual Property Warranty & Takedown

1. **Warranty of Originality**: By submitting any vector file to `packages/svg/unprocessedSVG/` or `packages/svg/src/`, you represent and warrant that the artwork is your own original creation or that you possess the necessary rights and licenses to release it under the [MIT License](../../LICENSE). You agree to indemnify and hold harmless the project maintainers against any copyright or intellectual property claims resulting from your submission.
2. **Disclaimer**: The maintainers of Esvigy curate contributions in good faith and cannot independently verify third-party ownership of every submission. The maintainers disclaim any liability for unauthorized artwork submitted by third parties.
3. **Immediate Takedown**: If you are a copyright owner and believe an illustration infringes upon your copyright, please report it via [GitHub Issues](https://github.com/nickfrostech/esvigy/issues) or email `nb.nicholasbenson@gmail.com`. Contested illustrations will be immediately removed. See [COPYRIGHT.md](../../COPYRIGHT.md) for full details.

