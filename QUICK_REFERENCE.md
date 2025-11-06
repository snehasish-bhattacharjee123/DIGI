# Quick Color Reference Guide

## Color Scheme Rules

### Rule 1: Blue Background Sections
```
Background: bg-brand-blue-900
Text: text-white
Accents: text-brand-green
Secondary text: text-white/80 or text-white/90
```

**Examples in OurWork.tsx**:
- Hero Section
- Accelerate Business Section  
- Stats Section (bottom)
- CTA Card (inner)

**Examples in WhyUs.tsx**:
- Our Process Section

---

### Rule 2: White/Gray Background Sections
```
Background: bg-white or bg-gray-50
Text: text-brand-blue-900
Accents: text-brand-green
Secondary text: text-brand-blue-900/70
```

**Examples in OurWork.tsx**:
- Client Results Statistics Section
- Portfolio Grid Section
- Testimonial Section

**Examples in WhyUs.tsx**:
- Stats Section
- Benefits Grid Section

---

## Responsive Pattern

### Font Sizes
```css
/* Mobile First */
text-xl                 /* Base: 1.25rem */
md:text-2xl            /* Tablet: 1.5rem */
lg:text-3xl            /* Desktop: 1.875rem */
xl:text-4xl            /* Large: 2.25rem */
```

### Spacing
```css
/* Mobile First */
py-16                  /* Base padding */
md:py-20              /* Tablet padding */
lg:py-24              /* Desktop padding */

gap-6                 /* Base gap */
md:gap-8              /* Tablet gap */
lg:gap-12             /* Desktop gap */
```

### Grid Layouts
```css
/* Mobile First */
grid-cols-1           /* Single column */
md:grid-cols-2        /* 2 columns on tablet */
lg:grid-cols-3        /* 3 columns on desktop */
lg:grid-cols-4        /* 4 columns on large desktop */
```

---

## Text Opacity Guide

```css
text-white/90         /* Primary text on blue (very readable) */
text-white/80         /* Secondary text on blue (good readability) */
text-white/70         /* Tertiary text on blue (subtle) */

text-brand-blue-900/70  /* Secondary text on white (subtle but readable) */
```

---

## Common Patterns

### Section Header (on white)
```jsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900">
  <span className="font-serif italic text-brand-green">Accent</span>{" "}
  Normal Text
</h2>
```

### Section Header (on blue)
```jsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
  <span className="font-serif italic text-brand-green">Accent</span>{" "}
  Normal Text
</h2>
```

### Description Text (on white)
```jsx
<p className="text-base md:text-lg text-brand-blue-900/70">
  Your description here
</p>
```

### Description Text (on blue)
```jsx
<p className="text-base md:text-lg text-white/80">
  Your description here
</p>
```

### Button (Primary)
```jsx
<Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
  Button Text
</Button>
```

### Button (Secondary on blue)
```jsx
<Button 
  variant="outline" 
  size="lg"
  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
>
  Button Text
</Button>
```

---

## Quick Checklist

When adding a new section:

1. ✅ Choose background color (blue or white/gray)
2. ✅ Apply appropriate text colors based on background
3. ✅ Add green accents for emphasis (italic text)
4. ✅ Use opacity for text hierarchy
5. ✅ Make font sizes responsive (base, md, lg)
6. ✅ Make spacing responsive (py-16 md:py-20 lg:py-24)
7. ✅ Make grids responsive (cols-1 md:cols-2 lg:cols-3)
8. ✅ Test on mobile, tablet, desktop
9. ✅ Verify contrast ratios
10. ✅ Check hover states

---

## Color Contrast Ratios

### For WCAG AA Compliance:
- Normal text: At least 4.5:1
- Large text (18px+): At least 3:1

### Our Combinations:
- ✅ `text-white` on `bg-brand-blue-900` = High contrast
- ✅ `text-brand-blue-900` on `bg-white` = High contrast
- ✅ `text-brand-green` visible on both backgrounds
- ✅ `text-white/80` on blue = Good contrast
- ✅ `text-brand-blue-900/70` on white = Good contrast

---

## Need Help?

Refer to:
- `COLOR_FIXES_SUMMARY.md` for detailed changes
- `VISUAL_TEST_CHECKLIST.md` for testing procedures
- `CHANGES_SUMMARY.md` for quick overview

