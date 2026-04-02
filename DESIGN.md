```markdown
# Design System Document

## 1. Overview & Creative North Star: "The Cinematic Catalyst"

This design system is engineered to transform a standard agency interface into a high-stakes, editorial experience. Our Creative North Star is **"The Cinematic Catalyst."** We do not merely present information; we stage it. By utilizing high-contrast lighting, deep tonal layering, and "luminous" focal points, the interface should feel like a premium digital gallery in a state of constant, purposeful growth.

To break the "template" look, we move away from rigid, boxed grids. We embrace **intentional asymmetry**, where large-scale typography overlaps subtle 3D forms, and **layered spacing** creates a sense of infinite depth. The goal is a "Sartorial Tech" aesthetic—sharp, bespoke, and authoritative.

---

## 2. Colors

The palette is anchored in deep obsidian and charcoal tones, punctuated by a high-energy "Ignition Orange."

### Core Palette (Material Design Mapping)
- **Primary (Ignition Orange):** `#f36904` (Token: `primary_container`) — Use for high-impact CTAs, vital metrics, and glowing focal points.
- **Secondary (Deep Orchid):** `#683b77` (Token: `secondary_container`) — Reserved for subtle accents or complex gradients to add depth to the orange.
- **Surface (The Void):** `#0a0a0a` to `#131313` (Tokens: `surface_container_lowest` to `surface`) — The canvas for all cinematic elements.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Traditional borders "choke" a high-end layout. Instead, define boundaries through:
1.  **Background Color Shifts:** Moving from `surface_container_low` to `surface_container` to indicate a new section.
2.  **Tonal Transitions:** Using subtle gradients to bleed one section into another.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent layers.
- **Base Layer:** `surface_container_lowest` (#0e0e0e).
- **Secondary Content:** `surface_container_low` (#1c1b1b).
- **Floating Cards/Interactive Elements:** `surface_container_highest` (#353534).

### The "Glass & Gradient" Rule
To achieve the "Cinematic" mood, any element that floats (modals, navigation bars, dropdowns) must utilize **Glassmorphism**. Use `surface_variant` at 40% opacity with a `backdrop-blur` of 20px. 

For Primary CTAs, never use a flat color. Apply a subtle linear gradient from `primary_container` (#f36904) to `on_primary_fixed_variant` (#793000) at a 135-degree angle to provide a tactile, "lit from within" quality.

---

## 3. Typography

The typography system uses a high-contrast scale to emphasize an editorial feel. We pair the authoritative weight of **Inter** with intentional tracking and leading.

- **Display (The Hero Statement):** `display-lg` (3.5rem). Use for core value propositions. Set with `-0.02em` letter spacing and `1.1` line height for a tight, aggressive impact.
- **Headlines (The Narrative):** `headline-lg` (2rem) in Pure White (#FFFFFF). These must feel like book titles—grand and spacious.
- **Body (The Detail):** `body-lg` (1rem). Use Soft Off-White (#F0F0F5) at 85% opacity. This reduces eye strain against the dark background while maintaining premium readability.
- **Labels (The Metadata):** `label-md` (0.75rem). Use **Manrope** with `0.1em` letter spacing in all-caps to denote technical data or small tags.

---

## 4. Elevation & Depth

In this system, depth is a product of light and shadow, not lines.

### The Layering Principle
Stack tiers to create natural lift. Place a `surface_container_high` card on a `surface_dim` background. The subtle 2-3% difference in lightness is enough for the eye to perceive hierarchy without visual "noise."

### Ambient Shadows & Halos
When a component must "hover" (e.g., a featured case study card):
- **Shadow:** Use a large, diffused shadow (Blur: 40px) with 8% opacity using the `on_secondary_fixed` (#310441) color to create a "cool" ambient glow.
- **The Halo:** For primary elements, use a "Secondary Glow"—a soft, 150px radial gradient of `primary_container` at 10% opacity positioned behind the component to simulate a backlight.

### The "Ghost Border" Fallback
If a divider is essential for accessibility, use a **Ghost Border**: `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons: The Tactile Trigger
- **Primary:** Gradient-filled (#f36904 to #793000), `xl` (0.75rem) corner radius. On hover: Increase the `glow` (shadow) intensity and slightly shift the gradient angle.
- **Secondary (Ghost):** A `Ghost Border` with `primary` text. No background color until hover, then a 5% `primary` tint.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines.
- **Implementation:** Separate list items using the `3` spacing scale (1rem). Use `surface_container_low` backgrounds that transition to `surface_container_high` on hover to indicate interactivity.

### Inputs & Glass Fields
- **Text Fields:** Use `surface_container_lowest` with a `Ghost Border`. Upon focus, the border transitions to 50% `primary_container` and a subtle orange "halo" appears behind the input field.

### Signature Component: The "Luminous Arc"
A decorative UI element used to draw the eye toward a CTA or headline. A thin, 1px-wide curved vector using a gradient from `primary` to transparent, acting as a visual "pathway" for the user’s gaze.

---

## 6. Do's and Don'ts

### Do:
- **Use Whitespace as a Luxury:** Give elements room to breathe. Use the `16` (5.5rem) and `24` (8.5rem) spacing tokens for vertical sectioning.
- **Embrace Grain:** Apply a subtle 2% noise texture overlay to the entire background to eliminate "banding" in gradients and add a filmic quality.
- **Intentional Asymmetry:** Align a headline to the left and a supporting body paragraph to the right of the container to create dynamic tension.

### Don't:
- **No Pure Black (#000000):** It kills the depth. Always use our `surface` tokens which have a hint of warmth or cool graphite.
- **No Standard Shadows:** Never use the default "black-at-25%" drop shadow. It looks cheap. Use our tinted Ambient Shadows.
- **No Sharp Corners:** Avoid the `none` roundedness token unless it’s for a full-bleed cinematic image. Stick to `md` and `xl` to keep the interface feeling "tactile" and modern.

---
*End of Design System Document*```