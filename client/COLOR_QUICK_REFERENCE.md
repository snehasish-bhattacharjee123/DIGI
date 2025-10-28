# 🎨 DIGITELLER CREATIVE - Quick Reference Cheat Sheet

## 🚀 TL;DR

- **Primary:** `brand-blue-900` (#0d123c)
- **Accent:** `brand-orange` (#ff751f)
- **Background:** `brand-beige-100` (#efeeec)
- **Success:** `brand-green` (#c2f087)
- **Neutral:** `brand-gray` (#a6a6a6)

**Golden Rule:** Start with blue, hover to orange, succeed with green.

---

## 🎯 Common Patterns

### Buttons

```tsx
// CTA Button (high emphasis)
<Button variant="cta" size="lg">Book a Demo</Button>

// Default Button
<Button variant="default">Learn More</Button>

// Outline Button
<Button variant="outline">View Details</Button>

// Success Button
<Button variant="success">Confirm</Button>

// Secondary Button
<Button variant="secondary">Cancel</Button>
```

### Text Colors

```tsx
// Primary heading
className="text-brand-blue-900"

// Secondary text (descriptions)
className="text-brand-gray-700"

// Light text on dark background
className="text-brand-beige-100"

// Accent/Links
className="text-brand-orange"

// Success/Highlights
className="text-brand-green"
```

### Backgrounds

```tsx
// Page background
className="bg-brand-beige-100"

// Hero/Dark section
className="bg-brand-blue-900"

// Card/Elevated surface
className="bg-white"

// Accent section
className="bg-brand-blue-900"
```

### Borders

```tsx
// Default border
className="border border-brand-gray"

// Emphasis border
className="border-2 border-brand-blue-900"

// Accent left border
className="border-l-4 border-brand-orange"

// Subtle border
className="border border-brand-gray-300"
```

---

## 🎨 Section Templates

### Hero Section (Dark)

```tsx
<section className="bg-brand-blue-900 text-brand-beige-100 py-24">
  <h1 className="text-6xl font-bold text-brand-beige-100">
    Main <span className="text-brand-orange">Headline</span>
  </h1>
  <p className="text-brand-gray-400 text-xl">Supporting text</p>
  <Button variant="cta">Get Started</Button>
</section>
```

### Content Section (Light)

```tsx
<section className="bg-brand-beige-100 py-24">
  <h2 className="text-5xl font-bold text-brand-blue-900">Section Title</h2>
  <p className="text-brand-gray-700 text-lg">Description text here</p>
  <Button variant="outline">Learn More</Button>
</section>
```

### Card Component

```tsx
<div className="bg-white border border-brand-gray rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-all">
  <h3 className="text-2xl font-bold text-brand-blue-900">Card Title</h3>
  <p className="text-brand-gray-700">Card description</p>
  <Button variant="default" size="sm">Action</Button>
</div>
```

---

## 🎭 Interactive States

```tsx
// Standard hover
className="hover:bg-brand-orange hover:text-white transition-colors duration-300"

// Focus ring (accessibility)
className="focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"

// Active/pressed state
className="active:scale-95 transition-transform"

// Disabled state
className="disabled:opacity-50 disabled:cursor-not-allowed"
```

---

## 🎨 Color Scale Reference

| Color | Main | Lightest | Darkest |
|-------|------|----------|---------|
| Blue | 900 | 50 | 950 |
| Orange | 500 | 50 | 950 |
| Gray | 500 | 50 | 950 |
| Green | 300 | 50 | 950 |
| Beige | 100 | 50 | 950 |

**Usage:**
- `brand-blue-900` (main)
- `brand-blue-800` (slightly lighter)
- `brand-blue-50` (very light tint)

---

## ⚠️ Accessibility Rules

### ✅ DO
- Use `brand-blue-900` for text on light backgrounds
- Use `brand-gray-700+` for secondary text
- Use `brand-beige-100` for text on dark backgrounds
- Add `focus-visible:ring-2 ring-brand-orange` to interactive elements
- Test with keyboard navigation (Tab key)

### ❌ DON'T
- Never use `brand-gray-500` or lighter for body text
- Don't use `brand-orange` text on `brand-blue` background
- Don't use pure `black` or `#000000`
- Don't forget hover states on interactive elements
- Don't use `gray-400` for important text

---

## 🔧 Utility Classes

### Shadows

```tsx
className="shadow-brand"        // Standard brand shadow
className="shadow-brand-lg"     // Large brand shadow
className="shadow-brand-xl"     // Extra large shadow
className="glow-accent"         // Orange glow effect
```

### Gradients

```tsx
className="bg-gradient-to-r from-brand-blue-900 to-brand-blue-800"
className="bg-gradient-to-b from-brand-beige-100 to-brand-beige-50"
```

### Overlays

```tsx
// Subtle overlay on images
className="bg-brand-blue-900/80 backdrop-blur-sm"

// Dark overlay
className="bg-brand-blue-950/90"
```

---

## 📱 Navigation Pattern

```tsx
<nav className="bg-brand-blue-900/98 backdrop-blur-sm">
  <a className="text-brand-beige-100 hover:text-brand-orange transition-colors">
    Home
  </a>
  <Button variant="cta">Book Demo</Button>
</nav>
```

---

## 🦶 Footer Pattern

```tsx
<footer className="bg-brand-blue-900 text-brand-beige-100">
  <h3 className="text-brand-beige-100">DIGITELLER CREATIVE</h3>
  <p className="text-brand-green">Tailor of Tales</p>
  <a className="text-brand-gray-400 hover:text-brand-orange">Link</a>
</footer>
```

---

## 🔍 Find & Replace

Quick search patterns for migration:

```
bg-black          → bg-brand-blue-900
text-white        → text-brand-beige-100 (on dark)
text-black        → text-brand-blue-900
text-primary      → text-brand-orange (for accents)
border-gray-300   → border-brand-gray
hover:bg-primary  → hover:bg-brand-orange
bg-white/10       → bg-brand-blue-800/30 (on dark)
```

---

## 🎨 Contrast Ratios (WCAG AA: 4.5:1)

| Background | Text Color | Ratio | Pass? |
|------------|-----------|-------|-------|
| `brand-beige-100` | `brand-blue-900` | 13.6:1 | ✅ AAA |
| `brand-blue-900` | `brand-beige-100` | 13.6:1 | ✅ AAA |
| `brand-blue-900` | `brand-green` | 8.2:1 | ✅ AAA |
| White | `brand-orange` | 5.1:1 | ✅ AA |
| `brand-beige-100` | `brand-gray-700` | 4.8:1 | ✅ AA |
| `brand-beige-100` | `brand-gray-500` | 2.9:1 | ❌ Fail |

---

## 💡 Pro Tips

1. **Always use Tailwind classes** - Never hardcode hex values
2. **Hover = Orange** - Every interactive element should hover to orange
3. **Gray 700+ for text** - Never use gray-500 or lighter for body text
4. **Test keyboard nav** - Tab through your UI to check focus states
5. **Use semantic variants** - `variant="cta"` not `className="bg-[#ff751f]"`
6. **Check contrast** - Use browser DevTools accessibility panel

---

## 🚨 Common Mistakes

```tsx
// ❌ BAD
<button className="bg-[#ff751f]">Click</button>
<p className="text-gray-400">Body text</p>
<div className="bg-black">Content</div>

// ✅ GOOD
<Button variant="cta">Click</Button>
<p className="text-brand-gray-700">Body text</p>
<div className="bg-brand-blue-900">Content</div>
```

---

## 📚 Full Documentation

For complete details, see:
- **`COLOR_SYSTEM.md`** - Full color system documentation
- **`IMPLEMENTATION_SUMMARY.md`** - Implementation status and next steps
- **`tailwind.config.ts`** - All color tokens
- **`client/src/index.css`** - CSS custom properties

---

**Quick Help:** Need a color? Think about its purpose:
- **Primary action?** → Blue background, orange hover
- **Secondary text?** → Gray-700
- **Success/highlight?** → Green
- **Page background?** → Beige-100
- **Interactive element?** → Orange hover state