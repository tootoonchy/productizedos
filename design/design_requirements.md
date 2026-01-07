# Productized OS - Gemini-Style Design System

Based on the Gemini design aesthetic - clean, minimal, and modern.

## 1. Visual Aesthetic

The design follows a **clean, minimal aesthetic** with:
- Generous whitespace
- Light gray page backgrounds with white content cards
- Black primary actions (buttons, icons)
- Pill-shaped badges and tags
- Soft shadows and rounded corners
- Clear typography hierarchy

**Look & Feel**: Professional, modern, minimal
**Density**: Comfortable, not cramped

---

## 2. Color Palette

### Core Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F5F5` | Page background |
| Surface | `#FFFFFF` | Cards, panels, content areas |
| Primary | `#1A1A1A` | Primary buttons, key actions |
| Secondary | `#F5F5F5` | Secondary buttons |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1A1A1A` | Headings, important text |
| Secondary | `#666666` | Body text, descriptions |
| Tertiary | `#999999` | Meta text, hints |
| Muted | `#CCCCCC` | Disabled text |

### Border Colors

| Token | Value | Usage |
|-------|-------|-------|
| Default | `#E5E5E5` | Standard borders |
| Subtle | `#F0F0F0` | Subtle dividers |
| Strong | `#D0D0D0` | Emphasized borders |

### Status Colors

| Status | Background | Text |
|--------|------------|------|
| Success | `#DCFCE7` | `#166534` |
| Warning | `#FEF3C7` | `#92400E` |
| Error | `#FEE2E2` | `#991B1B` |
| Info | `#DBEAFE` | `#1E40AF` |

---

## 3. Typography

### Font Family
- **Primary**: Inter, system-ui, sans-serif
- **Monospace**: JetBrains Mono, Menlo, monospace

### Font Sizes

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 12px | 16px | Meta text, timestamps |
| sm | 14px | 20px | Body text, labels |
| base | 16px | 24px | Default body |
| lg | 18px | 28px | Large body |
| xl | 20px | 28px | Small headings |
| 2xl | 24px | 32px | Section headings |
| 3xl | 30px | 36px | Page titles |

### Font Weights

| Name | Value | Usage |
|------|-------|-------|
| Normal | 400 | Body text |
| Medium | 500 | Labels, emphasis |
| Semibold | 600 | Headings |
| Bold | 700 | Strong emphasis |

---

## 4. Spacing

### Base Scale (4px grid)

| Token | Value | Pixels |
|-------|-------|--------|
| 1 | 0.25rem | 4px |
| 2 | 0.5rem | 8px |
| 3 | 0.75rem | 12px |
| 4 | 1rem | 16px |
| 5 | 1.25rem | 20px |
| 6 | 1.5rem | 24px |
| 8 | 2rem | 32px |
| 10 | 2.5rem | 40px |
| 12 | 3rem | 48px |

### Semantic Spacing

| Usage | Value |
|-------|-------|
| Page padding (x) | 24px |
| Page padding (y) | 32px |
| Section gap | 40px |
| Card padding | 24px |
| Stack gap | 16px |
| Inline gap | 8px |

---

## 5. Border Radius

| Name | Value | Usage |
|------|-------|-------|
| sm | 4px | Small elements |
| md | 8px | Inputs, small cards |
| lg | 12px | Cards, containers |
| xl | 16px | Large cards, modals |
| 2xl | 24px | Hero sections |
| full | 9999px | Pills, avatars |

---

## 6. Shadows

Subtle, soft shadows are key to the Gemini aesthetic:

| Name | Value | Usage |
|------|-------|-------|
| card | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)` | Default cards |
| elevated | `0 4px 12px rgba(0,0,0,0.08)` | Hover state, elevated |
| dropdown | `0 4px 16px rgba(0,0,0,0.12)` | Dropdowns, popovers |

---

## 7. Components

### Cards

```css
.card-surface {
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
```

### Buttons

**Primary** (Black)
```css
.btn-primary {
  background: #1A1A1A;
  color: white;
  border-radius: 8px;
  font-weight: 500;
}
```

**Secondary** (Light gray)
```css
.btn-secondary {
  background: #F5F5F5;
  color: #1A1A1A;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
}
```

### Badges/Pills

```css
.badge-pill {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid #E5E5E5;
  font-size: 14px;
  font-weight: 500;
}
```

### Inputs

```css
.input {
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  padding: 10px 16px;
}
```

---

## 8. Layout

### Container Widths

| Name | Width |
|------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1400px |

### Common Patterns

**Page Container**
```css
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
}
```

**Content Grid**
```css
.content-grid {
  display: grid;
  gap: 24px;
}
```

---

## 9. Tailwind CSS Classes

### Quick Reference

```jsx
// Page background
<div className="bg-background">

// White card
<div className="bg-card rounded-xl border border-border shadow-card p-6">

// Primary button
<button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 font-medium">

// Secondary button
<button className="bg-secondary text-secondary-foreground border border-border rounded-lg px-4 py-2">

// Pill badge
<span className="inline-flex items-center rounded-full px-3 py-1 text-sm border border-border">

// Primary text
<h1 className="text-foreground font-semibold">

// Secondary text
<p className="text-muted-foreground">

// Input
<input className="bg-background border border-input rounded-lg px-4 py-2">
```

---

## 10. Implementation Files

| File | Purpose |
|------|---------|
| `src/styles/design-system.ts` | TypeScript design tokens |
| `tailwind.config.ts` | Tailwind configuration |
| `src/app/globals.css` | CSS variables & utilities |

---

## 11. Component Class Names

Use these utility classes throughout the app:

**Cards**
- `.card-surface` - Standard white card
- `.card-elevated` - Elevated card with stronger shadow
- `.card-interactive` - Card with hover effects

**Badges**
- `.badge-pill` - Base pill badge
- `.badge-pill-default` - Default gray badge
- `.badge-pill-outline` - Outline badge
- `.badge-pill-success` - Green success badge
- `.badge-pill-warning` - Yellow warning badge
- `.badge-pill-error` - Red error badge

**Buttons**
- `.btn-base` - Base button styles
- `.btn-primary` - Black primary button
- `.btn-secondary` - Gray secondary button
- `.btn-ghost` - Transparent ghost button
- `.btn-outline` - Bordered outline button

**Layout**
- `.page-container` - Page wrapper with max-width
- `.section-header` - Section title container
- `.section-title` - Section heading
- `.section-description` - Section description text
- `.content-grid` - Grid layout with gaps
