# Superside Website Clone

## Overview

This is a modern creative agency website clone inspired by Superside's design aesthetic. The application is a full-stack TypeScript/React project that showcases creative work through an elegant, portfolio-first interface. It features a dark mode design with bold typography, smooth animations, and a professional minimalist approach that lets creative work take center stage.

The application serves as a marketing website for a creative agency, highlighting services, client portfolio work, testimonials, and calls-to-action for booking demos.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- **React 18** with TypeScript for UI components
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- File-based routing with pages in `client/src/pages/`

**Styling Approach:**
- **Tailwind CSS** for utility-first styling with custom design tokens
- **shadcn/ui** component library ("new-york" style variant) for pre-built UI primitives
- **Dark mode** as the default theme with carefully crafted color palette
- Custom CSS variables for consistent theming across components
- **Framer Motion** for scroll-based animations and micro-interactions

**Design System:**
- Typography: Inter font family from Google Fonts for all text
- Color palette: Deep charcoal backgrounds with vibrant purple accents (270° 70% 60%)
- Spacing system based on Tailwind's default scale (4px increments)
- Component-level design guidelines in `design_guidelines.md`

**State Management:**
- **TanStack Query (React Query)** for server state management and data fetching
- Query client configured with infinite stale time and disabled automatic refetching
- Local component state using React hooks

**UI Components:**
- Comprehensive shadcn/ui component library including:
  - Navigation components (menubar, navigation-menu, dropdown)
  - Data display (cards, tables, avatars, badges)
  - Forms (inputs, selects, checkboxes, radio groups)
  - Overlays (dialogs, sheets, popovers, tooltips)
  - Feedback (toasts, alerts, progress)
- Custom marketing components:
  - Hero section with gradient overlays
  - Portfolio grid with hover effects
  - Service cards with icons
  - Client logo showcase
  - Testimonial cards
  - Footer with multi-column links

### Backend Architecture

**Server Framework:**
- **Express.js** with TypeScript for HTTP server
- Middleware for JSON parsing and URL-encoded bodies
- Custom logging middleware for API request tracking
- Error handling middleware for consistent error responses

**Development Setup:**
- Vite integration in development mode for HMR (Hot Module Replacement)
- Middleware mode with custom Vite server for seamless frontend/backend development
- Static file serving in production

**API Design:**
- RESTful API endpoints under `/api` prefix
- Portfolio item CRUD operations:
  - `GET /api/portfolio` - List all portfolio items
  - `GET /api/portfolio/:id` - Get single portfolio item
  - `POST /api/portfolio` - Create new portfolio item
- Request validation using Zod schemas
- Consistent JSON response format

**Data Layer:**
- Interface-based storage abstraction (`IStorage`) for flexibility
- In-memory storage implementation (`MemStorage`) for development/demo
- Seeded portfolio data with sample creative work examples
- Prepared for database integration via Drizzle ORM

### Database Design (Prepared)

**ORM Configuration:**
- **Drizzle ORM** configured for PostgreSQL
- Schema definition in `shared/schema.ts` for shared types
- **Drizzle Kit** for migrations in `./migrations` directory
- **Neon Database** serverless PostgreSQL driver ready for integration

**Database Schema:**

**Portfolio Items Table:**
- `id` (varchar, primary key, UUID)
- `title` (text, required)
- `client` (text, required)
- `category` (text, required)
- `imageUrl` (text, required)
- `aspectRatio` (text, required)

**Users Table:**
- `id` (varchar, primary key, UUID)
- `username` (text, unique, required)
- `password` (text, required)

**Type Safety:**
- Zod schemas derived from Drizzle table definitions using `drizzle-zod`
- Shared TypeScript types for Insert and Select operations
- Type inference ensures consistency between frontend and backend

### Project Structure

```
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   │   └── ui/      # shadcn/ui components
│   │   ├── pages/       # Route pages
│   │   ├── lib/         # Utilities and helpers
│   │   └── hooks/       # Custom React hooks
│   └── index.html       # HTML entry point
├── server/              # Backend application
│   ├── index.ts         # Express server setup
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data storage layer
│   └── vite.ts          # Vite development integration
├── shared/              # Shared code between frontend/backend
│   └── schema.ts        # Database schema and types
└── migrations/          # Database migrations (Drizzle)
```

## External Dependencies

### Frontend Libraries

**UI & Styling:**
- `@radix-ui/*` - Headless UI primitives (26+ component packages)
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Utility for component variant styling
- `clsx` & `tailwind-merge` - Class name utilities
- `framer-motion` - Animation library
- `embla-carousel-react` - Carousel/slider component
- `lucide-react` - Icon library
- `react-icons` - Additional icons (simple-icons for brand logos)

**Forms & Validation:**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolvers
- `zod` - Schema validation

**Data Fetching:**
- `@tanstack/react-query` - Server state management
- Custom fetch wrapper in `lib/queryClient.ts`

### Backend Libraries

**Core Server:**
- `express` - Web framework
- `tsx` - TypeScript execution for development

**Database & ORM:**
- `drizzle-orm` - TypeScript ORM
- `drizzle-zod` - Zod schema generation
- `@neondatabase/serverless` - Neon PostgreSQL driver
- `drizzle-kit` - Database migrations CLI

**Build & Development:**
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `esbuild` - JavaScript bundler for production
- `@replit/vite-plugin-*` - Replit-specific Vite plugins

### External Services (Ready for Integration)

**Database:**
- Neon Database (serverless PostgreSQL) via `DATABASE_URL` environment variable
- Connection pooling handled by `@neondatabase/serverless`

**Fonts:**
- Google Fonts API for Inter font family
- Preconnect hints for performance optimization

**Future Integration Points:**
- Authentication system (users table prepared)
- Image hosting service for portfolio images
- Analytics tracking
- Email service for demo booking forms