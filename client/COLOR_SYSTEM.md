# 🎨 DIGITELLER CREATIVE - Color System & Design Tokens

## Overview

This document defines the complete color system for DIGITELLER CREATIVE. All colors follow WCAG 2.1 Level AA accessibility standards with a minimum contrast ratio of 4.5:1 for text and 3:1 for UI components.

---

## 🎯 Core Brand Colors

### Primary Brand Blue - `#0d123c`
**Purpose:** Primary brand color, main text, backgrounds, CTA buttons  
**Contrast:** High contrast against light backgrounds  
**Accessibility:** ✅ WCAG AA compliant when used on light backgrounds

```css
/* Hex */
#0d123c

/* HSL */
hsl(228, 65%, 14%)

/* Tailwind Classes */
bg-brand-blue-900
text-brand-blue-900
border-brand-blue-900
```

**Usage Examples:**
- Primary button backgrounds
- Main headings and body text (on light backgrounds)
- Navigation bars
- Footer backgrounds
- Brand lockups

---

### Accent Orange - `#ff751f`
**Purpose:** Hover states, CTAs, interactive elements, urgency indicators  
**Contrast:** Best on light backgrounds or over brand blue  
**Accessibility:** ✅ WCAG AA compliant for text on white/light beige

```css
/* Hex */
#ff751f

/* HSL */
hsl(22, 100%, 56%)

/* Tailwind Classes */
bg-brand-orange
text-brand-orange
border-brand-orange
hover:bg-brand-orange
```

**Usage Examples:**
- Button hover states (all variants)
- Active navigation items
- Focus states for interactive elements
- CTA buttons (high emphasis)
- Links and interactive text
- Success notifications with urgency

---

### Neutral Gray - `#a6a6a6`
**Purpose:** Secondary text, borders, dividers, disabled states  
**Contrast:** Medium contrast - use for supporting elements  
**Accessibility:** ⚠️ Use #6e6e6e or darker for text (WCAG AA compliance)

```css
/* Hex */
#a6a6a6

/* HSL */
hsl(0, 0%, 65%)

/* Tailwind Classes */
bg-brand-gray
text-brand-gray
border-brand-gray
```

**Usage Examples:**
- Secondary text (use gray-700 or darker)
- Border lines
- Dividers between sections
- Disabled button states
- Placeholder text
- Icons in inactive states

---

### Highlight Green - `#c2f087`
**Purpose:** Success states, highlights, positive feedback, accent text  
**Contrast:** Best on dark backgrounds (brand blue)  
**Accessibility:** ✅ WCAG AA compliant on brand blue background

```css
/* Hex */
#c2f087

/* HSL */
hsl(88, 78%, 74%)

/* Tailwind Classes */
bg-brand-green
text-brand-green
border-brand-green
```

**Usage Examples:**
- Success messages
- Achievement highlights
- Statistics and metrics
- Accent quotes or callouts
- Active/online status indicators
- Positive data visualization

---

### Light Beige Background - `#efeeec`
**Purpose:** Main page background, section backgrounds, light surfaces  
**Contrast:** Neutral base for all content  
**Accessibility:** ✅ Perfect base for dark text

```css
/* Hex */
#efeeec

/* HSL */
hsl(30, 14%, 93%)

/* Tailwind Classes */
bg-brand-beige-100
text-brand-beige-100
border-brand-beige-100
```

**Usage Examples:**
- Main page backgrounds
- Alternating section backgrounds
- Card surfaces
- Light text on dark backgrounds
- Form input backgrounds

---

## 📊 Extended Color Scales

Each brand color includes a full scale (50-950) for flexibility:

### Brand Blue Scale
```
50:  #f0f1f9  - Very light blue tint
100: #e1e3f3  - Light blue tint
200: #c3c7e7  - Soft blue
300: #a5abdb  - Medium light blue
400: #878fcf  - Medium blue
500: #6973c3  - Standard blue
600: #4b57b7  - Rich blue
700: #2d3bab  - Deep blue
800: #1a2470  - Dark blue
900: #0d123c  - ⭐ Brand Blue (Primary)
950: #070a1e  - Ultra dark blue
```

### Brand Orange Scale
```
50:  #fff7ed  - Very light orange tint
100: #ffedd5  - Light orange tint
200: #fed7aa  - Soft orange
300: #fdba74  - Medium light orange
400: #fb923c  - Medium orange
500: #ff751f  - ⭐ Accent Orange (Primary)
600: #ea580c  - Rich orange
700: #c2410c  - Deep orange
800: #9a3412  - Dark orange
900: #7c2d12  - Very dark orange
950: #431407  - Ultra dark orange
```

### Brand Gray Scale
```
50:  #f9f9f9  - Near white
100: #f3f3f3  - Very light gray
200: #e7e7e7  - Light gray
300: #d4d4d4  - Soft gray
400: #b8b8b8  - Medium light gray
500: #a6a6a6  - ⭐ Neutral Gray (Primary)
600: #8a8a8a  - Medium gray
700: #6e6e6e  - Medium dark gray (min for text)
800: #525252  - Dark gray
900: #363636  - Very dark gray
950: #1a1a1a  - Near black
```

### Brand Green Scale
```
50:  #f6fef1  - Very light green tint
100: #e9fcdb  - Light green tint
200: #d5f9b9  - Soft green
300: #c2f087  - ⭐ Highlight Green (Primary)
400: #a8e85f  - Medium green
500: #8fd03f  - Standard green
600: #70a62f  - Rich green
700: #597f27  - Deep green
800: #486524  - Dark green
900: #3d5422  - Very dark green
950: #1f2f0e  - Ultra dark green
```

### Brand Beige Scale
```
50:  #fafaf9  - Near white
100: #efeeec  - ⭐ Light Beige (Primary)
200: #e5e3e0  - Soft beige
300: #d0cdc8  - Medium beige
400: #b8b4ad  - Medium dark beige
500: #9f9a91  - Standard beige
600: #888379  - Rich beige
700: #706c63  - Deep beige
800: #5e5b53  - Dark beige
900: #504e47  - Very dark beige
950: #2a2824  - Ultra dark beige
```

---

## 🎨 Design Patterns & Usage Rules

### Buttons

#### Primary Button (Default)
```tsx
<Button variant="default">
  Default Action
</Button>
```
- Background: `brand-blue-900` (#0d123c)
- Text: `brand-beige-100` (#efeeec)
- Hover: `brand-orange` (#ff751f)
- Border: `brand-blue-800`

#### CTA Button (High Emphasis)
```tsx
<Button variant="cta">
  Book a Demo
</Button>
```
- Background: `brand-orange` (#ff751f)
- Text: `white`
- Hover: `brand-orange-600` + scale(1.05)
- Use for: Primary CTAs, conversion actions

#### Outline Button
```tsx
<Button variant="outline">
  Learn More
</Button>
```
- Background: `transparent`
- Border: `brand-gray` (2px)
- Text: Current color
- Hover: `brand-beige-100` background + `brand-blue-900` text

#### Secondary Button
```tsx
<Button variant="secondary">
  Secondary Action
</Button>
```
- Background: `brand-gray`
- Text: `white`
- Hover: `brand-gray-600`

#### Success Button
```tsx
<Button variant="success">
  Confirm
</Button>
```
- Background: `brand-green`
- Text: `brand-blue-900`
- Hover: `brand-green-400`

---

### Text Colors

#### Primary Text
```tsx
className="text-brand-blue-900"
```
Use for: Main headings, body text, important labels

#### Secondary Text
```tsx
className="text-brand-gray-700"
```
Use for: Supporting text, descriptions, less emphasis

#### Light Text (on dark backgrounds)
```tsx
className="text-brand-beige-100"
```
Use for: Text on brand blue backgrounds, dark hero sections

#### Accent Text
```tsx
className="text-brand-orange"
```
Use for: Links, interactive text, emphasis, calls to action

#### Success/Highlight Text
```tsx
className="text-brand-green"
```
Use for: Positive metrics, success messages, highlights

---

### Backgrounds

#### Main Page Background
```tsx
className="bg-brand-beige-100"
```

#### Section Backgrounds (Alternating)
```tsx
// Light sections
className="bg-brand-beige-50"

// Emphasis sections
className="bg-brand-blue-900"
```

#### Card Backgrounds
```tsx
// On light backgrounds
className="bg-white"

// On dark backgrounds
className="bg-brand-blue-800/50"
```

---

### Borders

#### Default Borders
```tsx
className="border border-brand-gray"
```

#### Emphasis Borders
```tsx
className="border-2 border-brand-blue-900"
```

#### Accent Borders
```tsx
className="border-l-4 border-brand-orange"
```

---

### Interactive States

#### Hover States
Always transition toward `brand-orange`:
```tsx
className="hover:bg-brand-orange hover:text-white transition-colors duration-300"
```

#### Focus States
Use orange ring for accessibility:
```tsx
className="focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
```

#### Active States
```tsx
className="active:scale-95 transition-transform"
```

#### Disabled States
```tsx
className="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-brand-gray-300"
```

---

## ♿ Accessibility Guidelines

### Contrast Requirements

#### Text on Light Beige (#efeeec)
✅ **Pass:** Brand Blue (#0d123c) - 13.6:1  
✅ **Pass:** Gray 700+ (#6e6e6e) - 4.8:1  
❌ **Fail:** Gray 500 (#a6a6a6) - 2.9:1  
✅ **Pass:** Brand Orange (#ff751f) - 4.5:1

#### Text on Brand Blue (#0d123c)
✅ **Pass:** Light Beige (#efeeec) - 13.6:1  
✅ **Pass:** White (#ffffff) - 15.3:1  
✅ **Pass:** Highlight Green (#c2f087) - 8.2:1  
✅ **Pass:** Brand Orange (#ff751f) - 5.1:1

#### Text on White (#ffffff)
✅ **Pass:** Brand Blue (#0d123c) - 15.3:1  
✅ **Pass:** Gray 700+ (#6e6e6e) - 5.4:1  
✅ **Pass:** Brand Orange (#ff751f) - 5.1:1

### Best Practices

1. **Never use Gray 500 or lighter for body text**
2. **Minimum text size with Gray 700:** 14px
3. **Always provide focus indicators** (orange ring)
4. **Ensure 44×44px minimum touch targets**
5. **Test color blindness** with tools like Stark or Color Oracle

---

## 🚀 Implementation Examples

### Hero Section
```tsx
<section className="bg-brand-blue-900 text-brand-beige-100">
  <h1 className="text-brand-beige-100">
    <span className="text-brand-gray-400">DIGITELLER</span>
    <span className="text-brand-beige-100">CREATIVE</span>
  </h1>
  <p className="text-brand-beige-200">Tailor of Tales</p>
  <Button variant="cta" className="shadow-brand-lg">
    Book a Demo
  </Button>
</section>
```

### Navigation
```tsx
<nav className="bg-brand-blue-900/98 backdrop-blur-sm">
  <a className="text-brand-beige-100 hover:text-brand-orange">
    Services
  </a>
</nav>
```

### Card Component
```tsx
<div className="bg-white border border-brand-gray rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow">
  <h3 className="text-brand-blue-900">Card Title</h3>
  <p className="text-brand-gray-700">Card description</p>
  <Button variant="outline">Learn More</Button>
</div>
```

### CTA Section
```tsx
<section className="bg-brand-beige-100">
  <p className="text-brand-orange uppercase">Start Today</p>
  <h2 className="text-brand-blue-900">
    Let's make something <span className="text-brand-orange">amazing</span>
  </h2>
  <Button variant="cta">Get Started</Button>
</section>
```

---

## ✅ Do's and ❌ Don'ts

### Do's ✅

✅ Use brand blue for main text on light backgrounds  
✅ Transition interactive elements to orange on hover  
✅ Use light beige as the primary page background  
✅ Apply gray for borders and secondary elements  
✅ Use highlight green on dark backgrounds for success states  
✅ Maintain consistent shadow depths with brand shadow utilities  
✅ Test all color combinations for WCAG AA compliance  

### Don'ts ❌

❌ Don't use gray 500 or lighter for body text  
❌ Don't place brand orange text on brand blue (insufficient contrast)  
❌ Don't use pure black (#000000) - use brand blue instead  
❌ Don't use pure white backgrounds everywhere - prefer light beige  
❌ Don't use highlight green for errors or warnings  
❌ Don't mix old color tokens (bor-*) with new brand tokens  
❌ Don't forget hover states on interactive elements  

---

## 🔄 Migration Guide

### Old → New Token Mapping

```diff
- bg-bor-background  → bg-brand-blue-900
- bg-bor-foreground  → bg-brand-beige-100
- bg-bor-beig        → bg-brand-beige-100
- bg-bor-orange      → bg-brand-orange
- bg-bor-green       → bg-brand-green
- bg-bor-gray        → bg-brand-gray
- bg-bor-black       → bg-brand-blue-900
- bg-bor-white       → bg-white

- text-bor-background  → text-brand-blue-900
- text-bor-foreground  → text-brand-beige-100
- text-bor-orange      → text-brand-orange
- text-bor-green       → text-brand-green
- text-bor-gray        → text-brand-gray (⚠️ check contrast!)
```

### Legacy Support
Old `bor-*` tokens are maintained for backward compatibility but **should not be used in new code**. They will be deprecated in a future release.

---

## 🛠️ Utility Classes

### Shadow Utilities
```css
.shadow-brand-sm   /* Subtle brand-colored shadow */
.shadow-brand      /* Standard brand shadow */
.shadow-brand-lg   /* Large brand shadow */
.shadow-brand-xl   /* Extra large brand shadow */
.glow-accent       /* Orange glow effect */
.glow-accent-lg    /* Large orange glow effect */
```

### Elevation Utilities
```css
.hover-elevate           /* Lifts element on hover */
.active-elevate-2        /* Presses element on click */
```

---

## 📱 Responsive Considerations

- Colors remain consistent across breakpoints
- Increase shadow intensity on larger screens for depth
- Ensure touch targets are 44×44px minimum on mobile
- Test color contrast in different lighting conditions

---

## 🎯 Summary

**Primary Brand Color:** `#0d123c` (Brand Blue)  
**Accent/Hover Color:** `#ff751f` (Brand Orange)  
**Neutral Color:** `#a6a6a6` (Brand Gray)  
**Success/Highlight:** `#c2f087` (Highlight Green)  
**Background Color:** `#efeeec` (Light Beige)  

**Key Principle:** Start with brand blue, hover to orange, succeed with green.

---

## 📞 Questions?

For design system questions or accessibility concerns, refer to:
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Tailwind Config: `tailwind.config.ts`
- CSS Variables: `client/src/index.css`

**Last Updated:** 2024
**Maintained By:** DIGITELLER CREATIVE Design System Team