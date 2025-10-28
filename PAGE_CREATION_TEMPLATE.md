# 📄 Page Creation Template & Guide - DIGITELLER CREATIVE

## Overview

This document provides templates and guidelines for creating all remaining pages with consistent brand colors, responsive design, and professional animations.

---

## 🎨 Brand Colors Reference

```tsx
// Primary Colors
bg-brand-blue-900      // #0d123c - Dark backgrounds, primary text
bg-brand-beige-100     // #efeeec - Light backgrounds
bg-brand-orange        // #ff751f - CTAs, hover states
bg-brand-green         // #c2f087 - Success, highlights
bg-brand-gray          // #a6a6a6- Borders, secondary elements

// Text Colors
text-brand-blue-900    // Primary text on light backgrounds
text-brand-beige-100   // Light text on dark backgrounds
text-brand-gray-700    // Secondary text (accessible)
text-brand-orange      // Accent text, links
text-brand-green       // Success messages, metrics

// Borders
border-brand-gray-300  // Default borders
border-brand-orange    // Accent borders
```

---

## 📋 Complete Page Template Structure

```tsx
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  // Import relevant Lucide icons
  Icon1,
  Icon2,
  CheckCircle2,
} from "lucide-react";

export default function PageName() {
  // Data arrays for services/features/benefits
  const services = [
    {
      icon: Icon1,
      title: "Service Title",
      description: "Description of the service or feature.",
    },
    // ... more items
  ];

  const process = [
    {
      step: "01",
      title: "Step Title",
      description: "Description of this step in the process.",
    },
    // ... more steps
  ];

  const benefits = [
    "Benefit statement one",
    "Benefit statement two",
    // ... more benefits
  ];

  const portfolioItems = [
    {
      title: "Project Title",
      category: "Industry",
      result: "Measurable result",
      image: "https://images.unsplash.com/...",
    },
    // ... more items
  ];

  return (
    <>
      <Helmet>
        <title>Page Title - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Page description for SEO"
        />
      </Helmet>
      <Navigation />

      {/* Hero Section - Dark Background */}
      <section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,117,31,0.08),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 mb-6">
                <span className="text-brand-orange font-semibold">Category Label</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Main Headline <span className="text-brand-orange">With Accent</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-gray-400 mb-8 leading-relaxed">
                Supporting description text that explains the value proposition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Primary CTA
                  </Button>
                </a>
                <a href="#section">
                  <Button variant="outline" size="lg" className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900">
                    Secondary CTA
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-green/20 rounded-3xl border border-brand-orange/30 flex items-center justify-center">
                <Icon1 className="w-32 h-32 text-brand-orange" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light Background */}
      <section className="py-16 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "50+", label: "Awards" },
              { number: "30+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-gray-700 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Features Grid - Light Background */}
      <section className="py-24 bg-brand-beige-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
              Section Label
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
              Section Title <span className="text-brand-orange">With Accent</span>
            </h2>
            <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
              Supporting description for this section
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-brand-gray-300 rounded-2xl p-8 hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Background */}
      <section className="py-24 bg-brand-blue-900">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-4">
              How We <span className="text-brand-orange">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-blue-800/50 border border-brand-blue-700 rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-brand-orange/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-brand-beige-100 mb-3">{item.title}</h3>
                <p className="text-brand-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-beige-100 to-brand-beige-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 border border-brand-orange/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,31,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-6">
                Ready to <span className="text-brand-orange">Get Started?</span>
              </h2>
              <p className="text-xl text-brand-gray-400 mb-8 max-w-2xl mx-auto">
                CTA supporting text
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Primary CTA
                  </Button>
                </a>
                <a href="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900">
                    Secondary CTA
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

---

## 📝 Pages to Create

### Services (3 remaining)

#### 1. VideoProduction.tsx
```
- Hero: Camera icon, video-focused imagery
- Services: Pre-production, Filming, Post-production, Motion Graphics, Color Grading, Sound Design
- Process: 6 steps from concept to delivery
- Portfolio: 3 video projects with view counts
- Stats: Production time, video views, conversion rates
```

#### 2. Animation.tsx
```
- Hero: Sparkles icon, animation-focused
- Services: 2D Animation, 3D Animation, Motion Graphics, Character Design, Explainer Videos, Logo Animation
- Process: Storyboarding, Asset Creation, Animation, Review, Final Export
- Portfolio: Animation showcases
- Stats: Animations created, average watch time, engagement rates
```

#### 3. Photography.tsx
```
- Hero: Camera icon
- Services: Product Photography, Corporate Headshots, Event Coverage, Commercial, Food Photography, Real Estate
- Process: Planning, Shoot, Editing, Delivery
- Portfolio: Photo galleries by category
- Stats: Photo sessions, images delivered, client satisfaction
```

### Legal (2 remaining)

#### 4. Security.tsx
```tsx
import { Shield, Lock, Eye, Database, Key, AlertTriangle } from "lucide-react";

// Sections:
- Data Encryption
- Secure Infrastructure
- Access Controls
- Compliance Standards
- Incident Response
- Security Audits

// Light background throughout
// Shield icon in hero
```

#### 5. Cookies.tsx
```tsx
import { Cookie, Settings, Eye, X } from "lucide-react";

// Sections:
- What Are Cookies
- Types of Cookies We Use (Essential, Analytics, Marketing)
- Third-Party Cookies
- How to Control Cookies
- Cookie Policy Updates

// Similar layout to Privacy Policy
// Cookie icon in hero
```

### Resources (4 pages)

#### 6. Blog.tsx
```tsx
// Blog listing page with:
- Search and filter functionality
- Categories (Design, Marketing, Technology, Business)
- Featured posts
- Pagination
- Subscribe newsletter CTA

// Light background with white cards
// Grid layout: 3 columns on desktop
```

#### 7. CaseStudies.tsx
```tsx
// Case study listings:
- Industry filters
- Challenge, Solution, Results format
- Before/After comparisons
- Client testimonials
- Download PDF option

// Similar to portfolio but more detailed
```

#### 8. HelpCenter.tsx
```tsx
// Help center with:
- Search functionality
- FAQ categories
- Popular articles
- Video tutorials section
- Contact support CTA

// Light background
// Accordion-style FAQs
```

#### 9. APIDocs.tsx
```tsx
// API documentation:
- Getting Started
- Authentication
- Endpoints reference
- Code examples (multiple languages)
- Rate limits
- Changelog

// Code-focused layout
// Dark code blocks on light background
```

### Company (4 pages)

#### 10. About.tsx
```tsx
// Company about page:
- Hero: Company mission and vision
- Our Story timeline
- Leadership team grid
- Company values
- Office locations
- Awards and recognition

// Mix of light and dark sections
// Team photos in grid
```

#### 11. Careers.tsx
```tsx
// Careers page:
- Hero: Join our team message
- Benefits and perks grid
- Company culture
- Open positions list with apply buttons
- Employee testimonials
- Application process

// Mostly light background
// Job cards with apply CTA
```

#### 12. Press.tsx
```tsx
// Press/Media page:
- Press releases chronological
- Media coverage
- Brand assets download
- Press contact information
- Featured in logos

// Clean, professional layout
// Downloadable press kit
```

#### 13. CompanyContact.tsx (if different from main Contact)
```tsx
// Specific company inquiries contact
// Or can redirect to main /contact page
```

---

## 🎨 Section Pattern Reference

### Dark Hero Pattern
```tsx
<section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,117,31,0.08),transparent_50%)]" />
  {/* Content */}
</section>
```

### Light Content Pattern
```tsx
<section className="py-24 bg-brand-beige-100">
  {/* Content with white cards */}
</section>
```

### Grid Cards Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-brand-gray-300 rounded-2xl p-8 hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300 group"
    >
      {/* Card content */}
    </motion.div>
  ))}
</div>
```

---

## 📱 Responsive Guidelines

```tsx
// Container widths
className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"

// Text sizing
className="text-4xl sm:text-5xl md:text-6xl" // Headings
className="text-lg sm:text-xl" // Body

// Grid responsiveness
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Spacing
className="py-16 md:py-24 lg:py-32" // Vertical padding
className="gap-4 sm:gap-6 lg:gap-8" // Grid gaps
```

---

## ✅ Quality Checklist

For each page, ensure:

- [ ] Uses brand colors (no black/white except where specified)
- [ ] Framer Motion animations on scroll
- [ ] Responsive on mobile (320px+), tablet, desktop
- [ ] Helmet with proper title and meta description
- [ ] Navigation and Footer components included
- [ ] CTA buttons use `variant="cta"` for primary actions
- [ ] Icons from Lucide React
- [ ] Hover states transition to orange
- [ ] Focus states have orange ring
- [ ] Text contrast meets WCAG AA (4.5:1 minimum)
- [ ] Images use Unsplash with proper dimensions
- [ ] All sections have motion animations
- [ ] WhatsApp link: https://wa.me/917998596948

---

## 🚀 Quick Start Commands

```bash
# Create new service page
npm run create-page services/ServiceName

# Test page
npm run dev

# Check for errors
npm run lint

# Build for production
npm run build
```

---

## 📞 Need Help?

Refer to existing pages for examples:
- `pages/WhyUs.tsx` - Full page with testimonials
- `pages/OurWork.tsx` - Portfolio with filters
- `pages/Contact.tsx` - Form with validation
- `pages/services/ContentMarketing.tsx` - Complete service page

---

**Remember:** Consistency is key. Follow the brand color system, use animations thoughtfully, and ensure every page is mobile-responsive.