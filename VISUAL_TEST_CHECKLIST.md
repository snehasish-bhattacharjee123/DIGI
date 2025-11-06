# Visual Testing Checklist

## Overview
This checklist ensures all color combinations and responsive design changes are working correctly across all devices.

---

## Testing Instructions

### 1. Test on Multiple Screen Sizes
- **Mobile**: 320px, 375px, 414px
- **Tablet**: 768px, 1024px
- **Desktop**: 1280px, 1440px, 1920px, 2560px

### 2. Test in Different Browsers
- Chrome
- Firefox
- Safari
- Edge

---

## OurWork.tsx Page Testing

### ✅ Hero Section
**Background**: Should be **blue** (`brand-blue-900`)
**Text Colors**: 
- [ ] "OUR WORK" label is **green**
- [ ] Main heading "Creative that" is **white**
- [ ] Word "works" is **green** and italic
- [ ] Subtitle text is **white** with good contrast
- [ ] All text is clearly visible on blue background

**Responsive Checks**:
- [ ] Mobile (320px-767px): Text scales down appropriately
- [ ] Tablet (768px-1023px): Layout remains centered
- [ ] Desktop (1024px+): Large text displays correctly without overflow

---

### ✅ Client Results Statistics Section
**Background**: Should be **white**
**Text Colors**:
- [ ] Section heading is **blue** (`brand-blue-900`)
- [ ] "Real Results" accent is **green** and italic
- [ ] Descriptions are **blue** with 70% opacity
- [ ] Links are **blue**, hover turns **green**
- [ ] Large percentage numbers are **green**

**Responsive Checks**:
- [ ] Mobile: Stats stack in 1 column
- [ ] Tablet: 2 columns
- [ ] Desktop: 3 columns side by side
- [ ] All text remains readable at all sizes
- [ ] Underline animation on links works on hover

---

### ✅ Portfolio Grid Section
**Background**: Should be **light gray** (`gray-50`)
**Text Colors**:
- [ ] "Featured" text is **green** and italic
- [ ] Section heading "Work" is **blue**
- [ ] Project titles are **blue** and italic
- [ ] Descriptions are **blue** with 70% opacity
- [ ] Arrow icons are **blue**

**Responsive Checks**:
- [ ] Mobile: Single column, images scale correctly
- [ ] Tablet: 2 columns
- [ ] Desktop: Variable grid with different column spans
- [ ] Images maintain aspect ratio
- [ ] Hover effects work (image scale, arrow movement)
- [ ] Video play buttons are visible

---

### ✅ Accelerate Business Section
**Background**: Should be **blue** (`brand-blue-900`)
**Text Colors**:
- [ ] "Accelerate" text is **green** and italic
- [ ] Main heading is **white**
- [ ] Subtitle is **white** with 90% opacity
- [ ] Body text is **white** with 80% opacity
- [ ] Green italic words in body text are **green**
- [ ] CTA button is clearly visible

**Responsive Checks**:
- [ ] Mobile: Content and carousel stack vertically
- [ ] Tablet: 2-column layout starts to appear
- [ ] Desktop: Side-by-side layout with carousel
- [ ] Carousel navigation buttons work
- [ ] All text is readable against blue background

---

### ✅ Stats Section (Bottom)
**Background**: Should be **blue** (`brand-blue-900`)
**Text Colors**:
- [ ] Large numbers are **green**
- [ ] Labels below numbers are **white** with 80% opacity
- [ ] All text is clearly visible

**Responsive Checks**:
- [ ] Mobile: 2x2 grid
- [ ] Tablet/Desktop: 1x4 horizontal row
- [ ] Number sizes scale appropriately
- [ ] Spacing between items is comfortable

---

### ✅ Testimonial Section
**Background**: Should be **white**
**Text Colors**:
- [ ] Quote marks are **green**
- [ ] Quote text is **blue**
- [ ] Author name is **blue**
- [ ] Author title is **blue** with 70% opacity

**Responsive Checks**:
- [ ] Quote text scales down on mobile
- [ ] Quote marks size adjusts
- [ ] Content remains centered
- [ ] Text remains readable at all sizes

---

### ✅ CTA Section
**Background**: Gradient from **light gray to white**
**Card Background**: **Blue** (`brand-blue-900`)
**Text Colors**:
- [ ] Main heading is **white**
- [ ] "Success Story" is **green**
- [ ] Description text is **white** with 80% opacity
- [ ] Card border is **green** with transparency
- [ ] Primary button has green background
- [ ] Secondary button has white border and text

**Responsive Checks**:
- [ ] Mobile: Buttons stack vertically, full width
- [ ] Tablet: Buttons remain stacked or start horizontal
- [ ] Desktop: Buttons side by side
- [ ] Card padding adjusts for screen size
- [ ] Border radius scales appropriately
- [ ] Green glow effect is subtle and visible

---

## WhyUs.tsx Page Testing

### ✅ Our People Section
- [ ] Check that component colors follow theme
- [ ] Test responsiveness

### ✅ Team Section
- [ ] Check that component colors follow theme
- [ ] Test responsiveness

### ✅ Stats Section
**Background**: Should be **white**
**Colors**:
- [ ] Icons are **green**
- [ ] Numbers are **blue** (`brand-blue-900`)
- [ ] Labels are **blue** with 70% opacity

**Responsive Checks**:
- [ ] Mobile: 2x2 grid
- [ ] Desktop: 1x4 row
- [ ] Icons and text scale properly

---

### ✅ Benefits Grid Section
**Background**: Gradient from **light gray to white**
**Colors**:
- [ ] "What Sets Us Apart" label is **green**
- [ ] Main heading is **blue**
- [ ] "Perfect Creative Partner" is **green**
- [ ] Description is **blue** with 70% opacity
- [ ] Card backgrounds are **white**
- [ ] Card borders are gray, hover is **green**
- [ ] Card titles are **blue**
- [ ] Card text is **blue** with 70% opacity
- [ ] Icon backgrounds are light gray
- [ ] Icon colors vary per card

**Responsive Checks**:
- [ ] Mobile: Single column
- [ ] Tablet: 2 columns
- [ ] Desktop: 4 columns
- [ ] Cards have hover effects (lift up, border color change)
- [ ] Icons scale with hover

---

### ✅ Our Process Section
**Background**: Should be **blue** (`brand-blue-900`)
**Colors**:
- [ ] "Our Process" label is **green**
- [ ] Main heading is **white**
- [ ] "Exceptional Results" is **green**
- [ ] Description is **white** with 80% opacity
- [ ] Step numbers are **green** with 20% opacity (large background numbers)
- [ ] Step titles are **white**
- [ ] Step descriptions are **white** with 80% opacity
- [ ] Arrow icons between steps are **green** with transparency

**Responsive Checks**:
- [ ] Mobile: Steps stack vertically, no arrows
- [ ] Tablet: 2x2 grid
- [ ] Desktop: 1x4 row with arrows between steps
- [ ] Large background numbers display correctly

---

### ✅ Additional Sections
- [ ] Global Team Section colors are correct
- [ ] How We Work Section colors are correct
- [ ] Creative Power Section colors are correct
- [ ] All components are responsive

---

## Cross-Browser Testing

### Chrome
- [ ] All sections display correctly
- [ ] Colors render as expected
- [ ] Animations smooth
- [ ] Responsive breakpoints work

### Firefox
- [ ] All sections display correctly
- [ ] Colors render as expected
- [ ] Animations smooth
- [ ] Responsive breakpoints work

### Safari (if available)
- [ ] All sections display correctly
- [ ] Colors render as expected
- [ ] Animations smooth
- [ ] Responsive breakpoints work
- [ ] Text rendering is crisp

### Edge
- [ ] All sections display correctly
- [ ] Colors render as expected
- [ ] Animations smooth
- [ ] Responsive breakpoints work

---

## Accessibility Testing

### Color Contrast
- [ ] All text on blue background has sufficient contrast (WCAG AA minimum)
- [ ] All text on white background has sufficient contrast
- [ ] Hover states maintain good contrast
- [ ] Links are distinguishable from body text

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] Buttons can be activated with Enter/Space
- [ ] No keyboard traps

### Screen Reader
- [ ] Headings have proper hierarchy
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Sections have proper ARIA labels

---

## Performance Testing

### Page Load
- [ ] Images load efficiently
- [ ] No layout shift on load
- [ ] Fonts load smoothly
- [ ] Animations don't cause lag

### Responsive Images
- [ ] Images are appropriately sized for viewport
- [ ] No unnecessarily large images on mobile
- [ ] Images maintain quality at all sizes

---

## Common Issues to Watch For

### Text Visibility
- ❌ Text too light on light background
- ❌ Text too dark on dark background
- ❌ Insufficient contrast between text and background
- ❌ Text overlapping with images

### Responsive Issues
- ❌ Horizontal scrolling on mobile
- ❌ Text overflowing containers
- ❌ Images not scaling properly
- ❌ Buttons too small for touch targets
- ❌ Overlapping elements at certain breakpoints

### Color Issues
- ❌ Wrong brand colors being used
- ❌ Inconsistent color usage across sections
- ❌ Hover states not changing color correctly
- ❌ Links not visible or distinguishable

---

## Sign-Off

Once all items are checked:

**Tester Name**: _________________
**Date**: _________________
**Browser/Device**: _________________

**Overall Assessment**:
- [ ] All color combinations are correct
- [ ] All sections are responsive
- [ ] No visual bugs found
- [ ] Ready for production

**Notes**:
_______________________________________
_______________________________________
_______________________________________