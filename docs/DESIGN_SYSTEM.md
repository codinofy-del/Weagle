# Weagle Design System

## 1. PRINCIPLES

- Inter is the only typeface.
- Orange = brand accent: CTAs, active/selected states, small highlights. NEVER large surfaces or heading backgrounds.
- Neutrals carry the layout: white surfaces on light neutral app bg.
- Exactly ONE shadow style for all floating elements.
- Every color/spacing/type value in code must reference a token.

## 2. COLOR

Primary — Orange ramp: primary/100 ~#FBDCD0, /200 ~#F29A79, /300 ~#F07E52, /400 ~#F25A1F (brand), /500 ~#D9531F (hover/pressed), /600 ~#F4581C.

Semantic text: text/base/primary #131313; text/base/secondary ~#9A9A9A; text/base/tertiary ~#7A7A7A.

Surfaces: background/surface/default #FFFFFF; app bg ~#F5F6F8; border/base/divider ~#E4E5E9.

Status: success #22C55E, warning #FFD102, error #FA5252.

## 3. TYPOGRAPHY (Inter)

Only these styles exist:

- H1 24/600/28
- H2 20/600/24
- H3 16/600/22
- B1 14/400/150%
- B2 13/400/130%

KPI numbers = H1 + font-variant-numeric: tabular-nums.

## 4. SPACING

Layout scale: 0 / 16 / 24 / 32 / 80 (padding, margin, gap).

Finer component-internal steps (4/8/12) are PROPOSED additions: add them to this doc before using; never improvise.

Proposed component-internal tokens now approved for UI components:

- 4px: compact chip, badge, heatmap, and control internals.
- 8px: icon/text gaps, compact vertical rhythm, and small control padding.
- 12px: component row gaps, badge padding, and compact card internals.

## 5. ELEVATION

One token: shadow/soft-tic = drop shadow 1px 2px 3px rgba(19,19,19,~0.08) + backdrop blur 12px. Used on cards, modals, dropdowns, floating elements. Nothing else, no custom shadows.

## 6. RADIUS

Provisional until design confirms: card 16, control 10, pill 999.

## 7. ICONS

Single library (Lucide), 20px, stroke 2. No emoji, no mixed sets. Status dots = 8px circles using status tokens.

## 8. DO'S

- Reference token aliases in components, never raw values.
- Reserve orange for CTA / active state / brand accent.
- Use only the five text styles above.
- Use the spacing scale for every gap, padding, margin.
- Use shadow/soft-tic on all floating surfaces.
- Use status tokens consistently for chips, dots, badges, deltas.
- Missing token? Propose the token addition to this doc FIRST.

## 9. DON'TS

- No raw hex or default-palette classes (text-gray-500, shadow-md, p-3).
- No off-scale font size/weight/line-height.
- No arbitrary spacing (p-[13px], mt-13).
- No orange as large surface, heading background, or heading pill.
- No stacked/custom shadows, gradients, or glassmorphism.
- No emoji or mixed icon sets as UI icons.
- No placeholder/duplicate content in review builds (identical KPI cards, "24% 24%", mismatched legend vs series colors).

## 10. PR COMPLIANCE CHECKLIST

1. Confirm `docs/DESIGN_SYSTEM.md` is the source cited for any new token or token change.
2. Run `npm run lint` from `weagle-dashboard` and confirm no raw hex, default-palette utility, arbitrary spacing, or emoji UI icon violations are reported.
3. Run `npm run typecheck` from `weagle-dashboard` and confirm the production bundle compiles.
4. Search changed UI files for raw color values and confirm all colors reference CSS variables or Tailwind token aliases.
5. Search changed UI files for spacing literals and confirm every gap, padding, and margin uses the documented spacing tokens.
6. Inspect text styles and confirm each maps to H1, H2, H3, B1, or B2 only.
7. Confirm orange appears only on CTAs, active/selected states, badges, or small brand highlights.
8. Confirm floating elements use only `shadow/soft-tic` and no custom shadows, gradients, or glassmorphism.
9. Confirm UI icons come from Lucide at 20px stroke 2, and status indicators are 8px token-colored circles.
10. Confirm review builds contain no placeholder/duplicate content, repeated KPI cards, duplicated deltas, or mismatched chart legends.
