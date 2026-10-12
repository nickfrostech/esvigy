# CorelDRAW SVG Design Guide for Memy

This guide explains how to properly design, structure, and export vector illustrations in **CorelDRAW** so they integrate seamlessly into the **Memy** illustration ecosystem (`@memy/react`, `@memy/svg`, etc.).

---

## 1. Core Principles

Memy illustrations are built for **modern web applications** — not print documents:

| Web UI Illustration (Memy) | Print Document (Traditional) |
| :--- | :--- |
| **File Size**: 5 KB – 35 KB | Often 500 KB – 5 MB |
| **Units**: Pixels (`px`) | Inches (`in`) or Millimeters (`mm`) |
| **Elements**: 100% Pure Vectors (`<path>`, `<circle>`) | Mixed Vectors + Embedded Bitmaps |
| **Colors**: Dynamic Two-Tone (`currentColor` + secondary) | Fixed CMYK / RGB print colors |
| **Animation**: Grouped layers with scoped CSS | Flattened static objects |

---

## 2. Document & Canvas Setup in CorelDRAW

1. **Page Units**: Set ruler and document units to **Pixels (`px`)**.  
   *Never use inches, millimeters, or points.*
2. **Canvas Sizing**:
   - Recommended dimensions: **`800 × 600 px`**, **`600 × 400 px`**, or **`500 × 500 px`**.
3. **Fill the Canvas (Tight Framing)**:
   - Your illustration should fill **~80% to 90%** of the canvas.
   - Leave a clean **10px to 25px** padding around the edges so floating/breathing animations do not clip outside the viewport.
   - Avoid leaving giant empty margins around the illustration.

---

## 3. Typography: Are Texts Allowed? Should They Be in Curves?

### Rule: Use Minimal, Symbolic Text Only

Illustrations in Memy are meant to be **symbolic UI graphics** (e.g., empty states, error pages, security badges):

- ❌ **Do NOT include long paragraphs or multi-line body text.**
  - If you convert paragraphs to curves in CorelDRAW, it creates hundreds of individual letter paths (like in `president_letter_head.svg`), resulting in a 1 MB file that chokes web browsers.
  - For UI representations of documents, use stylized vector bars (`rect` lines) or abstract placeholders.
- ✅ **Short Labels & Digits (e.g., `404`, `403`, `500`, `ERR`)**:
  - Keep short labels (1 to 5 characters).
  - **Convert to Curves (`Ctrl + Q`)** so the typography renders identically on any user's device without requiring custom web fonts.
  - **Weld / Combine (`Ctrl + L`)** overlapping letter shapes so they form clean, single vector paths.

---

## 4. Shadows: Are Shadows Allowed?

### YES — But ONLY Pure Vector Shadows!

### ❌ What is NOT Allowed:
- **CorelDRAW's "Drop Shadow Tool" (Gaussian Blur Shadows)**:
  - CorelDRAW's interactive drop shadow tool exports bitmap PNG images (`<image xlink:href="data:image/png;base64,...">`).
  - This severely bloats the SVG, breaks responsiveness, and prevents colors from changing dynamically.

### ✅ What IS Allowed (Best Practices):
1. **Contact Ground Shadows**:
   - Draw an `<ellipse>` or smooth curved vector shape beneath the character or object.
   - Fill with dark color (`#000000` or `#111928`) with an opacity between **`0.15` and `0.3`**.
   - These animate beautifully in Memy (`scaleX` breathing).
2. **Isometric 3D Extrusion Shadows**:
   - Sharp, angled vector bevels offset by `dx=12px, dy=10px` down-right.
   - Fill with `#111928` or a linear opacity gradient (`opacity="0.35"`).
3. **Soft Depth Gradients**:
   - Use CorelDRAW's **Interactive Fill Tool (`G`)** to apply linear gradients fading from solid to transparent.

---

## 5. Color Strategy: How to Color in CorelDRAW Before Exporting

**YES, always design in full color in CorelDRAW!** Designing in full color lets you verify visual contrast, lighting, and hierarchy while drawing.

To make your artwork compatible with Memy's dynamic recoloring engine, follow this **4-Role Color Palette System**:

### Role 1: Primary Brand Accent (`color` prop)
- **In CorelDRAW**: Pick a single vibrant accent color across your main artwork (e.g. Cyan `#00D4FF`, Emerald `#10B981`, or Orange `#F97316`).
- **Where to apply**: Main character elements, focal digits (like the `4` in 404), primary buttons, and active action items.
- **How Memy uses it**: In the exported SVG, this color is mapped to `currentColor`. Developers can then recolor it on the fly:
  ```tsx
  <MyIllustration color="#A855F7" />
  ```

### Role 2: Secondary Tone (`secondaryColor` prop)
- **In CorelDRAW**: Pick a dark, sleek surface color from the slate/navy family (e.g., `#1E293B`, `#0F172A`, `#1F2A37`, `#334155`).
- **Where to apply**: Laptop chassis, backdrop blobs, shadow discs, metallic visor glass, or secondary card surfaces.
- **How Memy uses it**: Tagged with `data-memy-secondary="true"`. Developers can dynamically swap this surface tone:
  ```tsx
  <MyIllustration color="#00D4FF" secondaryColor="#0B132B" />
  ```

### Role 3: Fixed Neutrals (White Highlights & Black Accents)
- **Pure White (`#FFFFFF`)**: Eye sclera, pupil glare glints, specular glass reflections, knuckle creases, and teeth.
  - *These always stay `#FFFFFF` and are never recolored.*
- **Deep Black (`#111928` / `#0B1120`)**: Pupil centers, fine shadow grooves, and 3D extrusion underlayers.
  - *These preserve structural depth regardless of user theme.*

### Role 4: Gradients & Shading (Interactive Fill `G`)
- **Use Black/White-to-Transparent Gradients**:
  - In CorelDRAW's **Interactive Fill Tool (`G`)**, create linear gradients that fade from **Black `#000000` (opacity 30–50%) to Transparent Black `#000000` (opacity 0%)**, or **White `#FFFFFF` (opacity 15%) to Transparent White (opacity 0%)**.
  - **Why this is a superpower**: Because the gradient uses transparent black/white overlay stops, it will automatically shade *any* custom color the user chooses without breaking the gradient!

---

### Practical CorelDRAW Palette Swatch Recommendation
When opening a new CorelDRAW document, set up this 5-color palette on your screen:
1. `Primary Accent`: `#00D4FF` (or your chosen brand color)
2. `Secondary Dark`: `#1F2A37`
3. `Secondary Muted`: `#334155`
4. `Highlight White`: `#FFFFFF`
5. `Deep Extrusion Black`: `#111928`

Sticking to these roles guarantees your illustration looks stunning out of the box and seamlessly recolors in any framework!

---

## 6. Layer Organization for Animation (Objects Docker)

In CorelDRAW, open the **Objects Docker** (`Object > Objects` or `Window > Dockers > Objects`):

1. **Group Parts that Animate Together**:
   - Group the head + eyes together (`Ctrl + G`).
   - Group the front rolling wheel separately.
   - Group floating elements (sparkles, speech bubbles, coins) separately.
2. **Name Objects & Groups Descriptively**:
   - Right-click an object/group in the Objects Docker and rename it:
     - `hand-main`
     - `floating-bubble`
     - `ground-shadow`
     - `number-left`
     - `wheel-front`
   - CorelDRAW exports these names directly as `<g id="hand-main">`, making it effortless to attach CSS `@keyframes` in Memy!

---

## 7. Vector Hygiene (Clean Up Before Exporting)

Before exporting your SVG:
1. **No Embedded Bitmaps**: Check the **Document Information** panel to confirm bitmap count is **0**.
2. **Weld Overlapping Shapes (`Weld` / `Ctrl + L`)**:
   - Combine adjacent vector segments sharing the same color into a single compound path.
3. **Delete Hidden Objects**:
   - Remove unused drafts, test palettes, and background guide rectangles outside the page area.

---

## 8. Exporting SVG from CorelDRAW (Step-by-Step)

When exporting from CorelDRAW:

1. Select your completed artwork on the page (or group it with `Ctrl + G`).
2. Go to **File > Export (`Ctrl + E`)**.
3. In the Windows file dialog, **CHECK the box: ☑ Selected only** (at the bottom right next to the file name).  
   > **Why this matters**: If "Selected only" is unchecked, CorelDRAW exports everything on your entire workspace, including reference bitmaps, test sketches, and rough work sitting far outside the page on the desktop!
4. Select **SVG - Scalable Vector Graphics (`.svg`)** and click **Export**.
5. In the **Export to SVG dialog**, configure the following options:

| Setting | Recommended Value | Why |
| :--- | :--- | :--- |
| **Compatibility** | **SVG 1.1** (or SVG 2.0) | Standard W3C web specification |
| **Character Encoding** | **UTF-8** ⚠️ | **CRITICAL**: Never leave as UTF-16 (Windows default breaks bundlers) |
| **Styling Options** | **Presentation Attributes** | Generates clean `fill="..."` and `stroke="..."` for component generation |
| **Export Text As** | **Curves** | Outlines short digits/labels so they render reliably on all systems |
| **Drawing Units** | **Pixels (`px`)** | Prevents fractional inch/millimeter scaling glitches |
| **Bitmap Handling** | **Link** (or 0 bitmaps) | Prevents base64 image bloat |
| **Decimal Precision** | **2 to 3 decimals** | Keeps file sizes small and coordinates crisp |

---

## 9. Contributor Checklist

Before adding a new `.svg` file to `packages/svg/src/`:

- [ ] File size is under **35 KB**.
- [ ] Encoding is **UTF-8** (opens cleanly in VS Code / IDE).
- [ ] Contains **zero `<image>` tags** (100% vector).
- [ ] viewBox uses **unitless pixel coordinates** (e.g. `viewBox="0 0 682 382"`).
- [ ] Artwork fills **80–90%** of the viewBox (no oversized margins).
- [ ] Author and source comments are included at the top:
  ```xml
  <!--
    Author: your-name
    Source: https://github.com/your-username
  -->
  ```
- [ ] Metadata entry added to [packages/svg/src/manifest.json](manifest.json).
- [ ] Test the build with `pnpm --filter @memy/react generate` and `pnpm --filter playground build`.
