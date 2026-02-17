# GrowthxAILabs Website - PRD

## Original Problem Statement
User wanted to add Career section (from prodgain.ai structure) and Pricing page (from make.com/en/pricing layout) to their GrowthxAILabs website from GitHub repo https://github.com/aiiqlabs-lang/growthxaiilabs

## User Choices
1. Career: Use prodgain.ai content structure with own styling
2. Pricing: Use make.com design layout with own pricing details
3. Navigation: Separate pages (/careers and /pricing)
4. Branding: Match current website dark styling

## Architecture
- **Frontend**: React + Tailwind CSS + shadcn/ui components
- **Backend**: FastAPI (basic setup, not utilized for this feature)
- **Styling**: Dark theme (#0f0f10), Space Grotesk headings, Inter body text

## Core Requirements
- Careers page with: Hero, Mission, Tech Stack, Ideal Candidate, Open Positions, Interview Process
- Pricing page with: Hero, 5-tier pricing cards, Monthly/Annual toggle, Feature comparison table, FAQ accordion
- Navigation with Home, Careers, Pricing links
- Footer with links and branding

## What's Been Implemented (Jan 2026)
- [x] Home page with hero, services, products, and CTA sections
- [x] Careers page (`/careers`) with full content structure from prodgain.ai
- [x] Pricing page (`/pricing`) with make.com inspired layout
- [x] Navigation component with mobile responsiveness
- [x] Footer component
- [x] Dark theme styling throughout
- [x] Monthly/Annual billing toggle
- [x] FAQ accordion functionality
- [x] All data-testid attributes for testing

## User Personas
1. **Business Decision Makers**: Looking for AI solutions for their companies
2. **Job Seekers**: Engineers interested in AI/ML positions
3. **Potential Customers**: Evaluating pricing plans

## Prioritized Backlog
### P0 (Critical) - DONE
- [x] Careers page
- [x] Pricing page
- [x] Navigation

### P1 (High)
- [ ] Contact form integration
- [ ] Blog/Articles section
- [ ] Newsletter signup

### P2 (Medium)
- [ ] Team member profiles
- [ ] Case studies/Portfolio
- [ ] Client testimonials

## Next Tasks
1. Add functional contact form (backend integration)
2. Add individual job listing pages
3. Implement actual pricing payment flow (Stripe integration)
