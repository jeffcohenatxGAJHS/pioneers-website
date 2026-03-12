# PIONEERSDEV Build Log

> **MVP Framework** - This is the initial development framework with placeholders for content. All sections marked with `PLACEHOLDER:` comments need to be replaced with actual content.

## Project Overview

This is the Pioneers website, built using the same layout structure as austinjewishhistory.org. The site provides a framework for content including archival materials, educational programs, community events, and research resources.

### Built With

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ADA Compliant** - WCAG 2.1 AA accessibility standards

## Features

### Core Functionality
- Responsive, mobile-first design
- Sticky header with navigation
- Multi-level dropdown menus
- Header slideshow with auto-advance (7 seconds)
- Hero content boxes with colored sidebars
- Search widget in navigation
- Footer with contact info and legal links
- Full ADA/WCAG 2.1 AA compliance

### Site Structure

#### Main Navigation
1. **About Us**
   - Mission and History
   - Leadership
   - Partners
   - Contact

2. **History**
   - Timeline
   - Archive
   - Historical Sites

3. **Programs**
   - Lecture Series
   - Events Calendar
   - Past Programs

4. **Get Involved**
   - Volunteer
   - Committees
   - Support Us

5. **Resources**
   - Publications
   - Archives
   - Research Tools

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pioneers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
pioneers-website/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Sticky header with slideshow
│   │   ├── Navigation.tsx   # Dropdown navigation menu
│   │   └── Footer.tsx       # Footer with contact info
│   └── sections/            # Page sections
│       └── Hero.tsx         # Hero content boxes
├── lib/                     # Utility functions
├── public/                  # Static assets
│   └── images/              # Image files
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Content Placeholders

All content placeholders are marked with comments in the format:
```tsx
{/* PLACEHOLDER: IDENTIFIER_NAME */}
```

### Key Placeholders to Replace

#### Images
- `PLACEHOLDER: Logo` - Organization logo (header and footer)
- `PLACEHOLDER: Slide 1/2/3` - Header slideshow images

#### Text Content
- Mission statement (header and footer)
- Organization name
- Contact information (email, phone)
- Hero box titles and content
- Navigation menu items (customize as needed)

#### Pages to Create
- `/about` - About Us page
- `/about/mission` - Mission and History
- `/about/leadership` - Leadership page
- `/about/partners` - Partners page
- `/contact` - Contact page
- `/history` - History overview
- `/history/timeline` - Timeline page
- `/history/archive` - Archive page
- `/history/sites` - Historical sites
- `/programs` - Programs overview
- `/programs/lectures` - Lecture series
- `/programs/calendar` - Events calendar
- `/programs/past` - Past programs
- `/get-involved` - Get Involved overview
- `/get-involved/volunteer` - Volunteer page
- `/get-involved/committees` - Committees page
- `/get-involved/support` - Support/Donate page
- `/resources` - Resources overview
- `/resources/publications` - Publications
- `/resources/archives` - Archival resources
- `/resources/research` - Research tools
- `/search` - Search results page
- `/privacy` - Privacy policy
- `/terms` - Terms of use
- `/accessibility` - Accessibility statement

## Accessibility (ADA Compliance)

This site is built to WCAG 2.1 AA standards:

- Semantic HTML
- Keyboard navigation support
- ARIA labels and roles
- Focus visible indicators
- Skip to main content link
- Sufficient color contrast
- Form labels
- Responsive text sizing

### Brand Colors
- **Primary Blue:** `#006699` (WCAG AA compliant with white text)
- **Primary Dark:** `#005580` (hover states)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Session Notes

### Session 1 - Project Initialization & Layout Scaffolding
**Date:** March 12, 2026

**What Was Done:**
- Initialized Next.js 16 project with TypeScript and Tailwind CSS
- Layout scaffolded from austinjewishhistory.org structure
- Created modular component structure

**Components Created/Updated:**

1. **Header.tsx** - Sticky header with:
   - Logo placeholder (centered)
   - Mission statement box with border
   - 3-slide rotating banner (7-second intervals)
   - Photo citations
   - Sky blue background

2. **Navigation.tsx** - Navigation bar with:
   - 5 main nav items with dropdown submenus
   - Search widget on right
   - Mobile hamburger menu
   - Bold white text on blue background (#006699)

3. **Hero.tsx** - Hero section with:
   - 4 stacked content boxes
   - Alternating colored sidebars (blue/light blue)
   - Placeholder titles and content
   - Image placeholders
   - Call-to-action buttons

4. **Footer.tsx** - Footer with:
   - Large logo placeholder
   - Organization name
   - Mission statement
   - Contact info (email, phone)
   - Privacy/Terms/Accessibility links
   - Copyright

**Layout Features:**
- Responsive mobile-first design
- Lora font for content
- System fonts for UI
- WCAG 2.1 AA accessibility compliance
- Skip to main content link

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lora font (Google Fonts)

**Development Server:**
- Running on: http://localhost:3000
- Status: Active

---

## Next Steps / To-Do List

### Content
- [ ] Replace logo placeholder with actual logo
- [ ] Add slideshow images
- [ ] Update mission statement
- [ ] Add contact information
- [ ] Customize navigation menu items
- [ ] Fill in hero box content

### Pages
- [ ] Create all subpages listed above
- [ ] Build search functionality
- [ ] Create privacy policy page
- [ ] Create terms of use page
- [ ] Create accessibility statement page

### Features
- [ ] Implement search functionality
- [ ] Add form handling (contact forms)
- [ ] Set up deployment (Vercel/Firebase)
- [ ] Add analytics

### Integration
- [ ] Connect to CMS or database (if needed)
- [ ] Set up email service for contact forms
- [ ] Configure newsletter signup (if needed)

---

## Support

For questions or issues, contact the development team or create an issue in the GitHub repository.

---

**Remember:** When you come back to this project, review this README to understand what was built and what placeholders need to be filled in!
