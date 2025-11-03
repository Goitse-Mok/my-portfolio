# Portfolio Website - Replit Configuration

## Overview

This is a personal portfolio website for Goitsemodimo Gaone Mokgethi, a frontend and backend developer at Techno Fairy. The site showcases professional information, technical skills, projects, and contact details with a vibrant "woman in tech" design aesthetic featuring pink, purple, and fuchsia gradients, 3D animations, and modern visual effects. Built with modern web technologies, it serves as a digital resume and professional online presence.

## Recent Changes (November 3, 2025)

**Complete Portfolio Transformation - Modern "Woman in Tech" Design**: Vibrant color overhaul with 3D animations and professional rebranding
- **Vibrant Color Scheme**: Completely replaced all cyan/blue colors with vibrant pink, purple, magenta, and fuchsia gradients throughout the entire portfolio
- **Job Title Update**: Changed from "Junior Software Developer" to "Frontend and Backend Developer" across all pages
- **New 3D Logo**: Generated and integrated modern "GGM" logo with pink-purple-fuchsia gradient, replacing previous logo
- **3D Animations**: Added comprehensive 3D CSS animations (rotate3D, flipIn, tilt3D) with perspective effects throughout

**Migration to Replit**: Successfully migrated project from Vercel to Replit environment
- Updated package.json scripts to bind to 0.0.0.0:5000 for Replit compatibility
- Configured Next.js development workflow
- Set up deployment configuration for autoscale

**Professional Photo Integration & Design Enhancement**: Completely redesigned portfolio with modern aesthetics
- Full-body graduation photo in modern rounded frames
- Home page: Two-column responsive hero section with 3:4 aspect ratio photo display
- About page: Centered header with full-body photo in modern rounded frame
- All images optimized using Next.js Image component with proper `fill`, `sizes`, and `priority` props
- Photo file: `/public/profile-photo.jpg`

**Design System - Vibrant Theme with 3D Effects**: Implemented comprehensive animation and color system
- **Vibrant Colors**: Pink (#ec4899), Purple (#a855f7), Fuchsia (#d946ef), Magenta accents
- **Navbar**: Gradient from pink-600 via purple-600 to fuchsia-600 with shadow effects
- **Photo Effects**: Dual-color pink-purple pulsing glow, 3D tilt animation, floating effect, hover scale transforms
- **3D CSS Animations**: rotate3D (20s continuous rotation), flipIn (3D flip entrance), tilt3D (subtle 3D perspective tilt)
- **Button Animations**: Shimmer effect on hover, 1.1x scale transform, rotate-2 tilt effects, vibrant pink-purple-fuchsia gradients
- **Card Animations**: Staggered flip-in entrance animations (3D effect), perspective-card with rotateX(5deg) on hover, pink-purple glow shadows
- **Gradient Text**: Pink-purple-violet gradient on ALL major headings (About Me, My Expertise, Technical Skills, Work Experience, Projects, Education, Soft Skills)
- **Hero Names**: "Goitsemodimo" in pink-purple gradient, "Gaone Mokgethi" in purple-fuchsia gradient
- **Card Backgrounds**: Alternating gradients from pink-50, purple-50, and fuchsia-50 to white for visual variety
- **Modern Aesthetics**: Vibrant gradient backgrounds, enhanced borders, pink-purple glow effects, contemporary color scheme
- **Performance Optimized**: Smooth 60fps animations, efficient CSS transforms, no layout shift issues

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
**Technology**: Next.js 15.3.3 with React 19

**Rationale**: Next.js provides server-side rendering, static site generation, and optimized routing out of the box. The App Router architecture (using the `/app` directory) enables modern React features and better performance.

**Key Features**:
- File-based routing system (pages in `/app` directory)
- Client-side interactivity with `'use client'` directive where needed
- Built-in font optimization using `next/font/google` (Geist Sans and Geist Mono)
- Image optimization through `next/image` component

### Styling Architecture
**Technology**: Tailwind CSS v4.1.10 with PostCSS

**Rationale**: Utility-first CSS framework enables rapid development with consistent design patterns and responsive layouts without writing custom CSS.

**Design System**:
- Custom CSS variables for theming (background, foreground colors)
- Dark mode support via `prefers-color-scheme` media query
- Inline theme configuration using `@theme inline` directive
- Color scheme: Primary cyan (#054160 blue, cyan accents), neutral grays
- Responsive breakpoints for mobile-first design

### Component Architecture
**Pattern**: Modular, reusable React components

**Structure**:
- `/app/components/` directory for shared UI components
- `Navbar.js`: Global navigation with active route highlighting using `usePathname` hook
- `Footer.js`: Simple copyright footer component
- Page components use these shared components for consistency

**Navigation Design**:
- Sticky navbar with shadow effect
- Logo with circular ring animation effect
- Dynamic active link styling based on current route
- Hover states with smooth transitions

### Routing Structure
**Pages**:
- `/` (Home): Hero section with CTAs, modal for quick connect
- `/about`: Professional background, skills, education details
- `/projects`: Portfolio of completed projects
- `/contact`: Contact information with email/phone links
- Note: Duplicate `/pages/index.js` exists but is unused (App Router uses `/app` structure)

**Client-Side Features**:
- Modal state management using React hooks (`useState`)
- Interactive buttons and navigation
- Smooth animations using Tailwind utility classes

### Development Configuration
**Port Configuration**: Custom port 5000 (instead of default 3000)
- Development: `--turbopack -p 5000 -H 0.0.0.0` (Turbopack for faster builds)
- Production: `next start -p 5000 -H 0.0.0.0`

**Path Aliases**: `@/*` configured in `jsconfig.json` for cleaner imports

**Build Tools**:
- Turbopack enabled for faster development builds
- ESLint with Next.js config for code quality
- Autoprefixer for CSS vendor prefixes

### Asset Management
**Static Assets**:
- Logo stored in `/public/logo2.png`
- Professional graduation photo: `/public/profile-photo.jpg` (displayed on home and about pages)
- Images optimized via Next.js Image component with specified dimensions and sizes prop
- SVG icons embedded inline for contact links

### Accessibility & UX Patterns
- Semantic HTML structure
- ARIA-friendly navigation
- Responsive grid layouts (1/2/3 column grids)
- Hover states and visual feedback on interactive elements
- Anti-aliased text rendering for better readability

## External Dependencies

### Core Framework Dependencies
- **next** (15.3.3): React framework for production
- **react** (19.0.0): UI library
- **react-dom** (19.0.0): React rendering for web

### Development & Build Tools
- **@tailwindcss/postcss** (v4): PostCSS integration for Tailwind CSS v4
- **tailwindcss** (4.1.10): Utility-first CSS framework
- **postcss** (8.5.5): CSS transformation tool
- **autoprefixer** (10.4.21): Automatic vendor prefix addition
- **eslint** (v9): JavaScript linting
- **eslint-config-next** (15.3.3): Next.js ESLint configuration
- **@eslint/eslintrc** (v3): ESLint configuration utilities

### Font Services
- **Google Fonts**: Geist and Geist Mono font families loaded via `next/font/google`

### Hosting & Deployment
- **Deployment Target**: Replit (migrated from Vercel on November 3, 2025)
- **Deployment Type**: Autoscale deployment for optimal performance
- **Build Command**: `npm run build`
- **Build Output**: Optimized static/server-side rendered pages

### No Current Database or Backend
The application is currently a static/client-side portfolio site with no:
- Database connections
- External APIs
- Authentication systems
- Backend services or API routes

All content is hardcoded in the React components. Future enhancements could include a CMS or database for dynamic content management.