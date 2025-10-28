# ServicesSection Component

A modern, responsive services showcase section with side-by-side layout displaying service images alongside descriptive content.

## Overview

The `ServicesSection` component displays your service offerings in a clean, traditional layout. Each service features an image on the left and detailed content on the right (or stacked vertically on mobile). This matches the original ScrollMagic-based design but with modern React and smooth animations.

## Features

✅ **Side-by-Side Layout** - Image left, content right on desktop
✅ **Responsive Stack** - Vertical layout on mobile devices
✅ **Smooth Animations** - Framer Motion entrance animations
✅ **Numbered Services** - Circular badges with service numbers
✅ **Category Tags** - Service category labels
✅ **Hover Effects** - Subtle image scale on hover
✅ **SEO Friendly** - Semantic HTML with proper structure
✅ **Accessibility** - ARIA labels and keyboard navigation
✅ **Performance** - Lazy loaded images

## Usage

```tsx
import { ServicesSection } from "@/components/ServicesSection";

function Page() {
  return (
    <div>
      <ServicesSection />
    </div>
  );
}
```

## Component Structure

```
ServicesSection (main container)
├── Header (title and subtitle)
└── Services List (vertical stack)
    └── ServiceItem[] (repeating layout)
        ├── Image (left side)
        └── Content (right side)
            ├── Number Badge + Category
            ├── Title
            ├── Description
            └── "Know More" Button
```

## Layout Pattern

Each service follows this structure:

**Desktop (>1024px):**
```
┌─────────────────┬──────────────────────┐
│                 │  [01] Category       │
│     Image       │  Service Title       │
│   (Aspect 3:2)  │  Description text... │
│                 │  [Know More Button]  │
└─────────────────┴──────────────────────┘
```

**Mobile (<1024px):**
```
┌─────────────────────────┐
│        Image            │
│      (Aspect 4:3)       │
├─────────────────────────┤
│  [01] Category          │
│  Service Title          │
│  Description text...    │
│  [Know More Button]     │
└─────────────────────────┘
```

## Service Data Structure

```typescript
interface Service {
  id: string;          // Unique identifier
  number: string;      // Display number (01-09)
  category: string;    // Service category
  title: string;       // Service name
  description: string; // Full description
  link: string;        // Target URL
  image: string;       // Image path
  imageAlt: string;    // Alt text for accessibility
}
```

## Services Included

1. **Websites** - Design & Development
2. **Email Marketing** - Design & Development  
3. **Social Media** - Content & Design
4. **ORM** - Strategy
5. **Video Marketing** - Filming & Editing
6. **Programmatic Advertising** - Strategy & Marketing
7. **Search Engine Marketing** - Strategy & Marketing
8. **Content Marketing** - Strategy & Marketing
9. **SEO** - Strategy & Marketing

## Customization

### Updating Services

Edit the `servicesData` array in `ServicesSection.tsx`:

```typescript
const servicesData: Service[] = [
  {
    id: "your-service-id",
    number: "01",
    category: "Your Category",
    title: "Service Title",
    description: "Full service description...",
    link: "/services/your-service",
    image: "/path/to/image.webp",
    imageAlt: "Alt text for accessibility",
  },
  // ... more services
];
```

### Adjusting Spacing

Modify spacing between services:

```typescript
// Current: 16-20-24 spacing
<div className="space-y-16 md:space-y-20 lg:space-y-24">

// Tighter spacing
<div className="space-y-12 md:space-y-16 lg:space-y-20">

// Looser spacing
<div className="space-y-20 md:space-y-24 lg:space-y-32">
```

### Image Aspect Ratios

Change image proportions:

```typescript
// Current mobile: 4:3, desktop: 3:2
<div className="relative aspect-[4/3] lg:aspect-[3/2]">

// Square images
<div className="relative aspect-square">

// Widescreen
<div className="relative aspect-video">
```

### Button Styling

Customize the "Know More" button:

```typescript
// Current: Solid primary button
className="bg-primary text-white hover:bg-primary/90"

// Outline style
className="border-2 border-primary text-primary hover:bg-primary hover:text-white"

// Ghost style
className="text-primary hover:bg-primary/10"
```

## Responsive Breakpoints

- **Mobile**: < 1024px - Vertical stack, image on top
- **Desktop**: ≥ 1024px - Side-by-side, image on left

## Animation Details

### Entry Animation
- Services fade in and slide up (30px)
- Staggered delay (index * 0.1s)
- Triggers when scrolled into view
- Only animates once (`viewport: { once: true }`)

### Image Hover Effect
- Scales to 1.02x on hover
- 400ms transition duration
- Gradient overlay fades in
- Smooth transform animation

### Button Hover
- Arrow icon slides right
- Gap increases from 2 to 3
- Background darkens slightly
- 300ms transition

## Performance Optimization

- **Lazy Loading**: All images use `loading="lazy"`
- **Code Splitting**: Component lazy loaded in Home.tsx
- **GPU Acceleration**: CSS transforms for smooth animations
- **Viewport Detection**: Animations only trigger when visible

## Accessibility

- ✅ Semantic HTML (`<section>`, `<h2>`, `<h3>`)
- ✅ Proper heading hierarchy
- ✅ Alt text for all images
- ✅ Descriptive link text
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ ARIA landmarks

## SEO Considerations

- Descriptive service titles in `<h3>` tags
- Full-text descriptions for search engines
- Semantic HTML structure
- Optimized image alt text
- Internal linking to service pages

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Chrome Mobile (latest)

## Dependencies

- `framer-motion` - For scroll animations and transitions
- `react` - Core library
- Tailwind CSS - For styling

## File Location

```
DIGI/client/src/components/ServicesSection.tsx
```

## Integration

Added to Home.tsx after FaqSection:

```tsx
{/* FAQ Section */}
<FaqSection />

{/* Services Section */}
<ServicesSection />

{/* How We Work Section */}
<HowWeWorkSection />
```

## Comparison to Original

| Feature | Original HTML | New Component |
|---------|--------------|---------------|
| Layout | ScrollMagic pinned | Natural scroll |
| Animation | Manual scroll control | Framer Motion |
| Structure | Fixed HTML | Dynamic React |
| Responsive | Bootstrap grid | Tailwind grid |
| Images | jQuery lazy load | Native lazy load |
| Performance | Heavy JS | Optimized React |

## Troubleshooting

### Images not loading
- Verify image paths in `servicesData`
- Check images exist in `/public/assets/images/`
- Ensure correct file extensions (.webp, .jpg)

### Layout broken on mobile
- Check Tailwind breakpoints are correct
- Verify grid classes: `grid-cols-1 lg:grid-cols-2`
- Test responsive design in DevTools

### Animations not triggering
- Ensure Framer Motion is installed
- Check `viewport` settings in motion components
- Verify `whileInView` is configured correctly

### Button links not working
- Check `link` values in service data
- Verify routes exist in your application
- Update links to match your routing structure

---

**Created:** 2024  
**Last Updated:** 2024  
**Status:** Production Ready ✅