# 🚀 QUICK REFERENCE GUIDE

**DIGITELLER CREATIVE Website Development**  
**Last Updated**: January 2025

---

## 📁 PROJECT STRUCTURE

```
DIGI/
├── client/                    # Frontend React app
│   ├── public/
│   │   ├── generated_images/  # Local portfolio images
│   │   └── images/work/       # Client logos (SVG)
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── data/             # Data & asset manifests
│   │   ├── pages/            # Main page components
│   │   ├── lib/              # Utilities & helpers
│   │   └── hooks/            # Custom React hooks
│   └── index.html
├── server/                    # Backend (if applicable)
├── shared/                    # Shared types & schemas
└── Documentation files        # *.md files
```

---

## ⚡ ESSENTIAL COMMANDS

```bash
# Development
npm run dev              # Start dev server (Vite)
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript checks

# Testing (if configured)
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
```

---

## 🎨 KEY COMPONENTS

### Pages
- **Home** (`pages/Home.tsx`) - Main landing page
- **WhyUs** (`pages/WhyUs.tsx`) - Why choose us page (NEWLY OPTIMIZED ✨)
- **Contact** (`pages/Contact.tsx`) - Contact form
- **Enterprise** (`pages/Enterprise.tsx`) - Enterprise solutions
- **OurWork** (`pages/OurWork.tsx`) - Portfolio showcase

### Major Components
- **Hero** - Hero section with scrolling images
- **Navigation** - Top navigation bar
- **Footer** - Site footer
- **StatsSection** - Statistics display
- **SuccessStoriesSection** - Video success stories
- **TechEnabledSection** - Technology features
- **WorkWithTheBestSection** - Team showcase

---

## 🖼️ ASSET MANAGEMENT

### Import Assets (NEW SYSTEM!)

```typescript
// Import from centralized manifest
import { 
  portfolioImages, 
  clientLogos, 
  videoAssets,
  sectionImages 
} from '@/data/portfolio-assets';

// Use in components
const heroImages = portfolioImages.hero;
const logos = clientLogos.work;
const video = videoAssets.newEra.desktop;
```

### Asset Locations

```
Local Images:
- /generated_images/              Portfolio images
- /images/work/                   Client logos (SVG)

External CDN:
- Sanity CDN                      Videos & some images
- pravatar.cc                     Avatar placeholders
```

---

## 🎯 COMMON TASKS

### 1. Add a New Section to a Page

```tsx
// 1. Create component in /components/
export function MyNewSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  );
}

// 2. Import in page
import { MyNewSection } from "@/components/MyNewSection";

// 3. Add to page with ErrorBoundary
<ErrorBoundary>
  <MyNewSection />
</ErrorBoundary>
```

### 2. Add New Images

```bash
# 1. Copy image to public folder
cp my-image.png client/public/generated_images/

# 2. Add to portfolio-assets.ts
export const portfolioImages = {
  hero: [
    '/generated_images/my-image.png',
    // ...
  ],
};

# 3. Use in component
import { portfolioImages } from '@/data/portfolio-assets';
<img src={portfolioImages.hero[0]} alt="Description" />
```

### 3. Update Copy/Text

```tsx
// Find section in component file
// Update text directly in JSX
<h2 className="text-4xl font-bold">
  Your New Headline
</h2>
```

### 4. Add a New CTA Button

```tsx
import { LiquidButton } from "@/components/LiquidButton";

<a href="https://wa.me/917998596948" target="_blank">
  <LiquidButton
    label="Book a Demo"
    color="#22c55e"
    duration={700}
  />
</a>
```

---

## 🎨 DESIGN SYSTEM

### Colors (Tailwind Classes)

```css
/* Brand Colors */
brand-blue-900       /* Primary dark blue (#0d123c) */
brand-beige-100      /* Light beige background */
brand-green          /* Success/CTA green (#22c55e) */
brand-orange         /* Accent orange (#ff751f) */
brand-gray-400       /* Muted text */

/* Usage */
<div className="bg-brand-blue-900 text-brand-beige-100">
```

### Spacing

```css
/* Section Padding */
py-20 md:py-28 lg:py-40   /* Vertical section spacing */

/* Container Padding */
px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16

/* Container Max Width */
max-w-[1680px] mx-auto     /* Standard container */
```

### Typography

```css
/* Headings */
text-4xl md:text-5xl lg:text-6xl    /* H1 */
text-3xl md:text-4xl lg:text-5xl    /* H2 */
text-2xl md:text-3xl                /* H3 */

/* Body */
text-base md:text-lg                /* Paragraph */
text-sm                             /* Small text */

/* Font Weights */
font-bold                           /* 700 */
font-semibold                       /* 600 */
font-medium                         /* 500 */
```

---

## 🔧 TROUBLESHOOTING

### Issue: Images Not Loading

```bash
# Check if images exist
ls client/public/generated_images/

# Copy from attached_assets if missing
cp attached_assets/generated_images/* client/public/generated_images/
```

### Issue: TypeScript Errors

```bash
# Run type check
npm run type-check

# Common fixes:
# 1. Check import paths (@ alias = src/)
# 2. Named vs default exports
# 3. Missing type definitions
```

### Issue: Components Not Rendering

```tsx
// 1. Check ErrorBoundary wrapper
// 2. Verify import path
// 3. Check component export type (default vs named)

// Named export
export function MyComponent() {}
import { MyComponent } from './MyComponent';

// Default export
export default function MyComponent() {}
import MyComponent from './MyComponent';
```

### Issue: Styling Not Applied

```bash
# Restart dev server
npm run dev

# Check Tailwind config
# Verify className syntax
# Use browser DevTools to inspect
```

---

## 📝 BEST PRACTICES

### 1. Component Structure

```tsx
// ✅ Good
export function MyComponent() {
  // 1. Hooks first
  const [state, setState] = useState();
  
  // 2. Derived values
  const computed = useMemo(() => {}, []);
  
  // 3. Effects
  useEffect(() => {}, []);
  
  // 4. Handlers
  const handleClick = () => {};
  
  // 5. Return JSX
  return <div>...</div>;
}
```

### 2. Responsive Design

```tsx
// ✅ Mobile-first approach
<div className="
  text-base        /* Mobile */
  md:text-lg       /* Tablet */
  lg:text-xl       /* Desktop */
">
```

### 3. Animations

```tsx
// ✅ Use Framer Motion for complex animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### 4. Performance

```tsx
// ✅ Lazy load heavy components
const HeavyComponent = lazy(() => import('./Heavy'));

// ✅ Use loading states
<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>

// ✅ Optimize images
<img loading="lazy" alt="Description" />
```

### 5. Accessibility

```tsx
// ✅ Always include
- Semantic HTML (section, nav, main)
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
```

---

## 🎯 RECENTLY OPTIMIZED

### WhyUs Page (January 2025)
✅ Complete rebuild with unique content  
✅ 6 major sections added  
✅ Enhanced copy with specific benefits  
✅ Professional testimonials  
✅ Responsive design  
✅ SEO optimized  

**File**: `client/src/pages/WhyUs.tsx`

### Asset Management System
✅ Centralized manifest created  
✅ Type-safe imports  
✅ Utility functions  

**File**: `client/src/data/portfolio-assets.ts`

---

## 📚 DOCUMENTATION

### Main Docs
- **PAGE_ANALYSIS_AND_OPTIMIZATION.md** - Comprehensive analysis
- **OPTIMIZATION_COMPLETED.md** - Phase 1 summary
- **design_guidelines.md** - Design standards
- **QUICK_REFERENCE.md** - This file!

### Component-Specific
- Check README files in component folders
- Inline comments in complex components

---

## 🆘 NEED HELP?

### For Code Issues:
1. Check inline comments in files
2. Review PAGE_ANALYSIS_AND_OPTIMIZATION.md
3. Check TypeScript errors with `npm run type-check`

### For Design Questions:
1. Review design_guidelines.md
2. Check Tailwind config (tailwind.config.ts)
3. Inspect with browser DevTools

### For Content Updates:
1. Locate component in /components or /pages
2. Update JSX directly
3. Test responsive behavior

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Test all pages manually
- [ ] Check mobile responsiveness
- [ ] Verify all CTAs work
- [ ] Run Lighthouse audit
- [ ] Check for console errors
- [ ] Verify images load correctly
- [ ] Test form submissions
- [ ] Check cross-browser compatibility

---

## 📊 KEY METRICS TO MONITOR

- **Performance**: Lighthouse score 90+
- **SEO**: All pages have proper meta tags
- **Accessibility**: WCAG 2.1 AA compliance
- **Load Time**: < 3s initial load
- **Bundle Size**: < 300KB gzipped

---

**Quick Links:**
- [Home Page Analysis](./PAGE_ANALYSIS_AND_OPTIMIZATION.md)
- [Design Guidelines](./design_guidelines.md)
- [Asset Manifest](./client/src/data/portfolio-assets.ts)
- [WhyUs Page](./client/src/pages/WhyUs.tsx)

**Last Updated**: January 2025  
**Version**: 1.0