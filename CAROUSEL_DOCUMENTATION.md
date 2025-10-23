# Work Carousel Section Documentation

## Overview

The Work Carousel Section is an infinite, auto-playing carousel component that showcases portfolio work items. It features smooth animations, drag-to-scroll functionality, and automatic looping for a seamless user experience.

## Features

✅ **Infinite Loop**: Carousel continuously loops without jumping or gaps  
✅ **Auto-Play**: Automatically advances every 3 seconds  
✅ **Pause on Hover**: Hovering over the carousel pauses auto-play  
✅ **Drag to Scroll**: Users can drag horizontally to browse items  
✅ **Manual Navigation**: Previous/Next arrow buttons for precise control  
✅ **Responsive Design**: Adapts from mobile (260px cards) to desktop (450px cards)  
✅ **Color Moods**: Each card has a unique background color theme  
✅ **Smooth Animations**: Powered by Framer Motion for fluid transitions  
✅ **SEO Friendly**: Uses semantic HTML with proper links

## Location

- **Component**: `DIGI/client/src/components/WorkCarouselSection.tsx`
- **Used In**: `DIGI/client/src/pages/Home.tsx` (after GlobalTeamSection)
- **Images**: `DIGI/client/public/images/work/`

## How It Works

### Infinite Loop Mechanism

The carousel creates a seamless infinite loop by:

1. **Tripling Items**: The `workItems` array is duplicated three times
   ```typescript
   const infiniteItems = [...workItems, ...workItems, ...workItems];
   ```

2. **Starting Position**: Carousel starts at the middle set
   ```typescript
   await controls.set({ x: -totalWidth });
   ```

3. **Loop Detection**: When scrolling past the second set, it jumps back to the middle set without animation
   ```typescript
   if (Math.abs(nextX) >= totalWidth * 2) {
     await controls.set({ x: -totalWidth });
   }
   ```

### Auto-Play System

- Advances one card every 3 seconds (configurable)
- Pauses when user hovers over carousel
- Pauses during drag interactions
- Resumes after user interaction ends

## Configuration

### Adjusting Auto-Play Speed

Edit line 111 in `WorkCarouselSection.tsx`:

```typescript
const autoPlaySpeed = 3000; // milliseconds (3 seconds)
```

### Adjusting Animation Duration

Edit line 112:

```typescript
const animationDuration = 0.8; // seconds for smooth transition
```

### Card Dimensions

Edit lines 104-105:

```typescript
const cardWidth = 280; // mobile: base width + gap
const cardWidthLg = 480; // desktop: base width + gap
```

Adjust card size in JSX (line 285):

```typescript
className="block w-[260px] h-[380px] lg:w-[450px] lg:h-[600px] xl:h-[700px]"
```

## Adding or Removing Work Items

### Adding a New Work Item

1. **Create the image** in `client/public/images/work/`
   - Format: SVG or PNG
   - Recommended size: 544x601px
   - Name: `company-name.svg`

2. **Add to workItems array** (line 16):

```typescript
{
  id: "8",
  title: "Your Project Title",
  company: "Company Name",
  industry: "Industry Type",
  colorMood: "peach", // choose from available moods
  image: "/images/work/company-name.svg",
  tags: ["Tag 1", "Tag 2"],
  link: "/our-work/company-name",
}
```

### Removing a Work Item

Simply delete the item object from the `workItems` array. The carousel will automatically adjust.

## Color Moods

Available color moods and their values:

| Mood        | Background | Text Color | Use Case           |
|-------------|------------|------------|-------------------|
| `peach`     | #FFE5D9    | #2D1B12    | Warm, friendly     |
| `minty-leaf`| #D4F4DD    | #0D3B1A    | Fresh, growth      |
| `stone`     | #E8E4DF    | #2C2822    | Neutral, elegant   |
| `cloudy`    | #E5E9F0    | #1A1F2E    | Cool, professional |
| `sky`       | #D4E4F7    | #0F2847    | Trust, healthcare  |
| `spark`     | #FFE8E8    | #3D1616    | Energy, passion    |

### Adding a New Color Mood

Edit the `moodColors` object (line 88):

```typescript
const moodColors: Record<string, { bg: string; text: string }> = {
  // ... existing moods
  "new-mood": { bg: "bg-[#HEXCODE]", text: "text-[#HEXCODE]" },
};
```

## Image Specifications

### Recommended Specs

- **Format**: SVG (vector, scales perfectly) or PNG (high quality)
- **Dimensions**: 544x601px (portrait orientation)
- **Aspect Ratio**: ~9:10
- **Background**: Transparent or matching colorMood
- **File Size**: < 200KB for optimal loading

### Creating Placeholder Images

SVG placeholders are already created. To create custom ones:

```html
<svg width="544" height="601" xmlns="http://www.w3.org/2000/svg">
  <rect width="544" height="601" fill="#FFE5D9"/>
  <text x="272" y="320" font-family="serif" font-size="72" 
        font-weight="bold" fill="#2D1B12" text-anchor="middle">
    Company Name
  </text>
</svg>
```

## Customization Examples

### Disable Auto-Play

Set `isPaused` to always true:

```typescript
const [isPaused, setIsPaused] = useState(true);
```

### Change Hover Behavior

Remove hover pause by deleting lines 227-230:

```typescript
// Delete these lines
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => setIsPaused(false)}
```

### Adjust Number of Visible Cards

This requires changing the overflow behavior and responsive widths. Consider using `gap` and container width adjustments.

### Change Animation Easing

Edit line 126:

```typescript
transition: {
  duration: animationDuration,
  ease: "easeInOut", // try: "linear", "easeOut", "anticipate"
}
```

## Responsive Breakpoints

| Breakpoint | Card Width | Card Height | Gap  |
|------------|------------|-------------|------|
| Mobile     | 260px      | 380px       | 16px |
| Desktop    | 450px      | 600px       | 24px |
| XL         | 450px      | 700px       | 24px |

## Accessibility Features

- ✅ ARIA labels on navigation buttons
- ✅ Keyboard-accessible links
- ✅ Semantic HTML structure
- ✅ Alt text on images
- ✅ Clear focus indicators

## Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Hardware Acceleration**: Uses `transform` for smooth animations
- **Optimized Re-renders**: React state management prevents unnecessary updates
- **Drag Optimization**: `dragElastic={0.1}` for responsive feel

## Troubleshooting

### Carousel Not Moving

**Issue**: Auto-play not working  
**Solution**: Check if `isPaused` is stuck as `true`. Inspect browser console for errors.

### Images Not Loading

**Issue**: Broken image icons appearing  
**Solution**: 
1. Verify image paths match exactly (case-sensitive)
2. Check images exist in `client/public/images/work/`
3. Clear browser cache

### Jerky Animations

**Issue**: Animations are not smooth  
**Solution**: 
1. Reduce `animationDuration` to `0.5` or lower
2. Check system performance (hardware acceleration)
3. Reduce image file sizes

### Cards Not Dragging

**Issue**: Drag functionality not working  
**Solution**:
1. Ensure Framer Motion is installed: `npm install framer-motion`
2. Check for JavaScript errors in console
3. Verify `dragConstraints` are set correctly

### Infinite Loop Breaking

**Issue**: Gap appears when looping  
**Solution**:
1. Ensure all cards have identical widths
2. Verify `totalWidth` calculation matches actual rendered width
3. Check for CSS that might affect card dimensions

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: IE11 not supported due to modern JavaScript features.

## Dependencies

```json
{
  "framer-motion": "^10.x.x",
  "lucide-react": "^0.x.x",
  "react": "^18.x.x"
}
```

## Future Enhancements

Potential improvements:

- [ ] Touch swipe gestures for mobile
- [ ] Video preview on hover
- [ ] Filter by industry/tag
- [ ] View transition API integration
- [ ] Keyboard arrow navigation
- [ ] Accessibility improvements (screen reader announcements)
- [ ] Analytics tracking for clicks
- [ ] A/B testing different layouts

## Code Structure

```
WorkCarouselSection.tsx
├── Imports (Framer Motion, React, Icons)
├── Interfaces (WorkItem)
├── Data (workItems array)
├── Color Mappings (moodColors)
├── Component Function
│   ├── State Management
│   ├── Auto-Play Effect
│   ├── Navigation Handlers
│   └── JSX Render
│       ├── Header Section
│       ├── Navigation Buttons
│       ├── Carousel Container
│       │   └── Motion Div (animated)
│       │       └── Work Item Cards
│       ├── Progress Indicator
│       └── Status Message
```

## Support

For issues or questions:

1. Check this documentation
2. Review component source code comments
3. Test in browser DevTools
4. Check Framer Motion docs: https://www.framer.com/motion/

## Version History

- **v1.0** (2024-10-23): Initial infinite carousel implementation
  - Infinite loop mechanism
  - Auto-play with pause on hover
  - Drag-to-scroll
  - Responsive design
  - 7 work items with placeholder images

---

**Last Updated**: October 23, 2024  
**Component Author**: DIGI Team  
**Framework**: React + Framer Motion