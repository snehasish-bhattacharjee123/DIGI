# Superside Website Clone - Design Guidelines

## Design Approach
**Reference-Based Approach**: Direct inspiration from Superside's modern creative agency aesthetic, combining elements from leading design platforms (Behance, Dribbble showcases) with SaaS product sophistication (Linear, Notion).

**Key Design Principles**:
- Bold, confident typography with italicized brand elements
- Portfolio-first visual hierarchy showcasing creative work
- Professional minimalism with strategic use of vibrant accents
- Clean, uncluttered layouts that let work speak for itself

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark Mode - Default)**:
- Background: 10 8% 8% (Deep charcoal/near-black)
- Surface: 10 6% 12% (Slightly lighter charcoal)
- Text Primary: 0 0% 98% (Crisp white)
- Text Secondary: 0 0% 65% (Medium gray)

**Brand/Accent Colors**:
- Primary Purple: 270 70% 60% (Vibrant purple for CTAs and highlights)
- Secondary Accent: 280 60% 55% (Deep purple for gradients/overlays)

**Light Mode** (if needed):
- Background: 0 0% 100%
- Surface: 0 0% 97%
- Text: 0 0% 10%

### B. Typography

**Font Families**:
- Primary: Inter (headings, body text) - Google Fonts
- Display: Use Inter with varying weights for hierarchy

**Type Scale**:
- Hero Headline: text-6xl lg:text-7xl xl:text-8xl font-bold
- Section Headings: text-4xl lg:text-5xl font-bold
- Subheadings: text-xl lg:text-2xl font-medium
- Body: text-base lg:text-lg
- Small/Caption: text-sm

**Special Treatment**: Italicize brand tagline elements (e.g., "creative team's" and "creative team™")

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8
- Section spacing: py-20 to py-32
- Grid gaps: gap-4 to gap-8

**Container Strategy**:
- Max-width: max-w-7xl mx-auto
- Padding: px-6 lg:px-8
- Full-bleed sections for portfolio grid

### D. Component Library

**Navigation**:
- Sticky header with blur backdrop (backdrop-blur-lg)
- Logo left, menu center, CTA button right
- Menu items: Services, Solutions, Work, Resources, Company
- "Book a demo" button in primary purple

**Hero Section**:
- Large hero image or animated portfolio grid background
- Centered content with max-w-4xl
- Hero headline with bold typography and italic accent
- Dual CTA buttons (primary filled, secondary outline with blur background)
- Height: min-h-screen with proper vertical centering

**Portfolio Grid**:
- Masonry-style grid or CSS Grid with varying heights
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Image cards with subtle hover lift effect (hover:scale-105 transition)
- Overlay on hover showing client name and project type
- Portfolio images should maintain aspect ratios (portrait and landscape mix)

**Service Cards/Features**:
- 3-4 column grid on desktop
- Icon or illustration + heading + brief description
- Minimal borders, focus on whitespace

**Client Logos Section**:
- Horizontal scrolling or grid of grayscale logos
- Famous brands: Amazon, Reddit, Airbnb, etc.
- Subtle opacity: opacity-60 hover:opacity-100

**Testimonials/Social Proof**:
- Card-based layout with quotes
- Client photo, quote, name, company
- Subtle background cards with rounded-2xl borders

**Footer**:
- Multi-column layout (Company, Services, Resources, Social)
- Newsletter signup form
- Social media icons
- Copyright and legal links

### E. Images

**Hero Section**: 
- Large, high-impact hero image OR animated portfolio grid as background
- If single image: Full-width, high-quality creative work sample
- If grid: 4-8 portfolio pieces in dynamic arrangement

**Portfolio Cards**: 
- Creative work samples (designs, videos, campaigns)
- Mixed aspect ratios (vertical phone mockups, horizontal web designs)
- High-quality screenshots from major brands (Amazon Pharmacy, Reddit, Pernod Ricard work)

**Client Logos**:
- Grayscale versions of major tech/brand logos
- SVG format for crisp rendering

**Background Elements**:
- Subtle gradient overlays on dark backgrounds
- Optional: Subtle grid pattern or texture

### F. Interactions & Animations

**Minimalist Approach** - Use sparingly:
- Smooth scroll behavior
- Portfolio card hover: subtle scale + overlay fade-in
- Button hovers: slight color shift (built-in)
- Page load: Fade-in for hero content
- NO complex scroll-triggered animations

**Transitions**: All transitions use duration-300 ease-in-out

## Specific Layout Sections

1. **Navigation Header** (h-20): Logo, menu, Book demo CTA
2. **Hero** (min-h-screen): Bold headline, dual CTAs, background visual
3. **Portfolio Grid** (py-32): 4-column masonry showcasing work
4. **Services Overview** (py-24): 3-4 column feature grid
5. **Client Logos** (py-16): Horizontal layout or grid
6. **Testimonials** (py-24): 2-3 column cards
7. **CTA Section** (py-20): Final conversion with demo booking
8. **Footer** (py-16): Multi-column with links and newsletter

**Total Sections**: 8 comprehensive, fully-designed sections creating a complete, polished landing page experience.