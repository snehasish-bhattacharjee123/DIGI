# Work Carousel - Quick Start Guide

## ✨ What You Get

A beautiful, infinite auto-playing carousel showcasing your portfolio work. It's already set up and running on your homepage!

## 🚀 It's Already Working!

The carousel is live at: **Home Page → After Global Team Section**

Visit your site and scroll down to see it in action!

## 📸 Current Placeholders

Right now, the carousel shows 7 work items with SVG placeholders:
- Reddit (Peach background)
- Shopify (Mint green)
- Opa! (Stone gray)
- GoHenry (Mint green)
- Suzanne Kalan (Cloudy blue)
- Amazon Pharmacy (Sky blue)
- Marqeta (Spark pink)

## 🎯 Replace Images (3 Easy Steps)

### Step 1: Create Your Images
- Size: **544 x 601 pixels** (portrait)
- Format: PNG or SVG
- Background: Transparent or matching the color mood

### Step 2: Save to Folder
Place your images here:
```
DIGI/client/public/images/work/
```

Keep the same filenames:
- `reddit.svg` → your image
- `shopify.svg` → your image
- `opa.svg` → your image
- etc.

### Step 3: That's It!
Refresh your browser. Your images are now live! ✅

## 🎨 Customize Content

Open: `DIGI/client/src/components/WorkCarouselSection.tsx`

Find the `workItems` array (around line 16):

```typescript
const workItems: WorkItem[] = [
  {
    id: "1",
    title: "How Reddit maximises creative production",
    company: "Reddit",              // ← Change this
    industry: "SAAS",               // ← And this
    colorMood: "peach",             // ← Choose a color
    image: "/images/work/reddit.svg",
    tags: ["Motion Design", "Social Media Creative"], // ← Your tags
    link: "/our-work/reddit",       // ← Your link
  },
  // ... more items
];
```

## 🎨 Available Colors

Choose from these `colorMood` options:
- `peach` - Warm orange/pink (#FFE5D9)
- `minty-leaf` - Fresh green (#D4F4DD)
- `stone` - Neutral gray (#E8E4DF)
- `cloudy` - Light blue-gray (#E5E9F0)
- `sky` - Sky blue (#D4E4F7)
- `spark` - Soft pink (#FFE8E8)

## ⚙️ Quick Settings

### Change Auto-Play Speed
Line 111: Change `3000` to your preferred milliseconds
```typescript
const autoPlaySpeed = 3000; // 3 seconds
```

### Change Animation Speed
Line 112: Change `0.8` to your preferred seconds
```typescript
const animationDuration = 0.8; // 0.8 seconds
```

### Disable Auto-Play
Line 99: Change to `true`
```typescript
const [isPaused, setIsPaused] = useState(true); // Always paused
```

## 🎭 How It Works

1. **Auto-plays** every 3 seconds
2. **Pauses** when you hover over it
3. **Drag** to scroll manually
4. **Click arrows** to navigate
5. **Loops infinitely** - never ends!

## 📱 Responsive Design

- **Mobile**: 260px cards
- **Desktop**: 450px cards
- **XL screens**: 700px tall cards

## 🔥 Pro Tips

### Add a New Work Item
Just add another object to the `workItems` array:
```typescript
{
  id: "8",
  title: "Your New Project",
  company: "New Company",
  industry: "Tech",
  colorMood: "peach",
  image: "/images/work/new-company.svg",
  tags: ["Design", "Development"],
  link: "/our-work/new-company",
}
```

### Remove a Work Item
Delete the entire object from the array. Done!

### Change Card Size
Line 285: Adjust these values:
```typescript
className="block w-[260px] h-[380px] lg:w-[450px] lg:h-[600px]"
//                 ↑ mobile       ↑ tablet     ↑ desktop
```

## 🐛 Common Issues

**Images not showing?**
- Check file names match exactly (case-sensitive!)
- Verify files are in `client/public/images/work/`
- Clear browser cache (Ctrl+Shift+R)

**Carousel not moving?**
- Check browser console for errors
- Make sure `isPaused` is not stuck as `true`

**Jerky animations?**
- Reduce image file sizes
- Lower `animationDuration` to `0.5`

## 📚 Need More Help?

See the full documentation: `CAROUSEL_DOCUMENTATION.md`

## ✅ Checklist

- [ ] Carousel is visible on homepage
- [ ] Auto-play is working
- [ ] Hover pauses the carousel
- [ ] Drag to scroll works
- [ ] Navigation arrows work
- [ ] Images are replaced with your work
- [ ] Content is updated with your projects
- [ ] Links point to your work pages

---

**That's it! Your infinite carousel is ready to impress visitors! 🎉**