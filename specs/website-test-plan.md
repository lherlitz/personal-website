# Personal Website Test Plan

## Application Overview

Comprehensive test plan for the personal portfolio website at /Users/lucasherlitz/Code/personal-website. The website consists of two pages: main portfolio page (index.html) with hero, about, experience, projects, skills, testimonials, and contact sections; and a contact card page (contact/index.html). CRITICAL: Tests must verify Lucide icons are rendering correctly across the site, as this was a previously reported issue.

## Test Scenarios

### 1. Main Page - External Resources

**Seed:** `seed.spec.ts`

#### 1.1. Verify external CDN resources load successfully

**File:** `tests/main-page/external-resources.spec.ts`

**Steps:**
  1. Navigate to index.html page; Check console for font loading errors
    - expect: Google Fonts CSS loads from fonts.googleapis.com without errors
  2. Check console for Lucide script loading errors
    - expect: Lucide icons library loads from unpkg.com without errors
  3. Check network requests for external resources
    - expect: No CORS or network errors in console

#### 1.2. Verify font families are applied correctly

**File:** `tests/main-page/external-resources.spec.ts`

**Steps:**
  1. Check computed styles for body element - font-family includes Inter
    - expect: Inter font family is available and applied to body text
  2. Check computed styles for hero-badge element - font-family includes JetBrains Mono
    - expect: JetBrains Mono font is available and applied to code/mono elements

### 2. Main Page - Icon Rendering (CRITICAL)

**Seed:** `seed.spec.ts`

#### 2.1. Verify Lucide icons render in navigation toggle

**File:** `tests/main-page/icon-rendering.spec.ts`

**Steps:**
  1. Find element with data-lucide='menu' and verify it's rendered as an SVG element
    - expect: Navigation toggle icon is visible (menu icon)
  2. Check that the icon SVG has proper attributes: viewBox, data-lucide attr, or converted to svg tag
    - expect: Icon SVG has correct viewBox and content

#### 2.2. Verify Lucide icons render in hero section

**File:** `tests/main-page/icon-rendering.spec.ts`

**Steps:**
  1. Find the primary button icon in hero section, check it's an SVG element
    - expect: Email icon button in hero has visible SVG icon
  2. Find element with data-lucide='arrow-down' in hero-actions
    - expect: Arrow-down icon is present in 'See My Work' button

#### 2.3. Verify Lucide icons render in Projects section

**File:** `tests/main-page/icon-rendering.spec.ts`

**Steps:**
  1. Find project-icon with data-lucide='music', verify SVG renders
    - expect: Music icon displays for Echo Worship project
  2. Find project-icon with data-lucide='layout-dashboard', verify SVG renders
    - expect: Layout dashboard icon displays for Shepboard project
  3. Find project-icon with data-lucide='type', verify SVG renders
    - expect: Type icon displays for Lumon Ipsum project
  4. Find project-link with data-lucide='external-link', verify SVG renders
    - expect: External link icon displays on Lumon Ipsum project link

#### 2.4. Verify Lucide icons render in Skills section

**File:** `tests/main-page/icon-rendering.spec.ts`

**Steps:**
  1. Verify data-lucide='test-tubes' renders as SVG
    - expect: Test tubes icon in Testing & QA skill group
  2. Verify data-lucide='code-2' renders as SVG
    - expect: Code icon in Languages & Frameworks skill group
  3. Verify data-lucide='git-branch' renders as SVG
    - expect: Git branch icon in DevOps & Tools skill group
  4. Verify data-lucide='presentation' renders as SVG
    - expect: Presentation icon in Training & Enablement skill group
  5. Verify data-lucide='award' renders as SVG
    - expect: Award icon in Certifications skill group
  6. Verify data-lucide='users' renders as SVG
    - expect: Users icon in Leadership skill group

#### 2.5. Verify inline SVG icons render (not using Lucide)

**File:** `tests/main-page/icon-rendering.spec.ts`

**Steps:**
  1. Verify GitHub icon SVG in contact-links is visible
    - expect: Email icon in Contact section is visible (inline SVG)
  2. Verify LinkedIn icon SVG exists in contact section
    - expect: LinkedIn icon is visible in contact section
  3. Verify email link icon is rendered
    - expect: Envelope/email icon visible in email contact card

### 3. Main Page - Navigation & Scroll

**Seed:** `seed.spec.ts`

#### 3.1. Verify main navigation links work

**File:** `tests/main-page/navigation.spec.ts`

**Steps:**
  1. Click nav link for About; verify URL hash changes to #about
    - expect: Clicking 'About' link scrolls to #about section
  2. Click nav link for Experience; verify URL hash changes to #experience
    - expect: Clicking 'Experience' link scrolls to #experience section
  3. Click nav link for Projects; verify URL hash changes to #projects
    - expect: Clicking 'Projects' link scrolls to #projects section
  4. Click nav link for Skills; verify URL hash changes to #skills
    - expect: Clicking 'Skills' link scrolls to #skills section
  5. Click nav link for Testimonials; verify URL hash changes to #testimonials
    - expect: Clicking 'Testimonials' link scrolls to #testimonials section
  6. Click nav link for Contact; verify URL hash changes to #contact
    - expect: Clicking 'Contact' link scrolls to #contact section

#### 3.2. Verify navigation sticky behavior

**File:** `tests/main-page/navigation.spec.ts`

**Steps:**
  1. Scroll down 400px; verify nav element has class 'scrolled' or style changes
    - expect: Navigation shows sticky style after scrolling
  2. Scroll to top; verify nav does not have 'scrolled' class
    - expect: Navigation returns to transparent when at top

#### 3.3. Verify mobile navigation toggle

**File:** `tests/main-page/navigation.spec.ts`

**Steps:**
  1. Set viewport to mobile size (e.g., 375x667); verify toggle button visible
    - expect: Mobile nav toggle button is visible on small viewport
  2. Click nav-toggle button; verify nav-links has 'open' class or menu displays
    - expect: Clicking toggle opens mobile menu
  3. Click toggle button twice; verify nav-links no longer has 'open' class
    - expect: Clicking toggle again closes mobile menu

### 4. Main Page - Hero Section

**Seed:** `seed.spec.ts`

#### 4.1. Verify hero content displays correctly

**File:** `tests/main-page/hero.spec.ts`

**Steps:**
  1. Check hero-badge element contains correct text
    - expect: Hero badge shows 'Engineer · Builder · Advocate'
  2. Check hero-title element contains 'Luc Herlitz'
    - expect: Hero title shows 'Luc Herlitz'
  3. Check hero-subtitle element exists
    - expect: Hero subtitle is visible

#### 4.2. Verify hero CTA buttons

**File:** `tests/main-page/hero.spec.ts`

**Steps:**
  1. Click Get in Touch button; verify URL includes #contact
    - expect: Get in Touch button is clickable and navigates to contact
  2. Click See My Work button; verify URL includes #experience
    - expect: See My Work button is clickable and navigates to experience

### 5. Main Page - About Section

**Seed:** `seed.spec.ts`

#### 5.1. Verify about section content

**File:** `tests/main-page/about.spec.ts`

**Steps:**
  1. Check section-tag in #about section shows 'About'
    - expect: Section tag shows 'About'
  2. Check h2 element in #about section
    - expect: About heading shows 'The short version'
  3. Check about-text element has paragraph content
    - expect: About description text is present

#### 5.2. Verify about statistics cards

**File:** `tests/main-page/about.spec.ts`

**Steps:**
  1. Find stat-card with '15+' and verify label shows 'Years in Tech'
    - expect: Stat card shows '15+ Years in Tech'
  2. Find stat-card with '35%' and verify label
    - expect: Stat card shows '35% Certification Rate Improvement'
  3. Find stat-card with '4' and verify label
    - expect: Stat card shows '4 Industries Spanned'
  4. Find stat-card with '20+' and verify label
    - expect: Stat card shows '20+ Years of Leadership'

### 6. Main Page - Experience Section

**Seed:** `seed.spec.ts`

#### 6.1. Verify experience timeline entries

**File:** `tests/main-page/experience.spec.ts`

**Steps:**
  1. Find timeline entry for 'Camping World'; verify role 'Sales Consultant' and date '2026'
    - expect: Camping World entry is present with correct details
  2. Find timeline entry for 'Planning Center'; verify multiple roles mentioned
    - expect: Planning Center entry is present
  3. Find timeline entry for 'Arise Virtual Solutions'; verify role includes 'Manager'
    - expect: Arise entry is present
  4. Find timeline entry for 'Ministry'; verify role includes 'Pastor'
    - expect: Ministry entry is present

#### 6.2. Verify experience timeline styling

**File:** `tests/main-page/experience.spec.ts`

**Steps:**
  1. Check timeline element has ::before pseudo-element styling
    - expect: Timeline has vertical line connector
  2. Verify timeline-marker elements exist for each entry
    - expect: Each entry has marker dot
  3. Hover over a timeline-content card; verify border color changes
    - expect: Entry cards have hover state

### 7. Main Page - Projects Section

**Seed:** `seed.spec.ts`

#### 7.1. Verify projects display

**File:** `tests/main-page/projects.spec.ts`

**Steps:**
  1. Find project-card with title 'Echo Worship'
    - expect: Echo Worship project card is present
  2. Find project-card with title 'Shepboard'
    - expect: Shepboard project card is present
  3. Find project-card with title 'Lumon Ipsum'; verify external-link icon present
    - expect: Lumon Ipsum project card is present with link

#### 7.2. Verify project card interactions

**File:** `tests/main-page/projects.spec.ts`

**Steps:**
  1. Hover over a project-card; verify transform or border change
    - expect: Project cards have hover effect
  2. Click Lumon Ipsum 'Visit Site' link; verify new tab opens to lumonipsum.com
    - expect: Lumon Ipsum external link works

### 8. Main Page - Skills Section

**Seed:** `seed.spec.ts`

#### 8.1. Verify all skill groups display

**File:** `tests/main-page/skills.spec.ts`

**Steps:**
  1. Find skill-group for 'Testing & QA'; verify contains Cypress, Playwright, Selenium
    - expect: Testing & QA skill group present with tools
  2. Find skill-group for 'Languages & Frameworks'; verify contains JavaScript, TypeScript, React
    - expect: Languages & Frameworks group present
  3. Find skill-group for 'DevOps & Tools'; verify contains GitHub Actions, Docker
    - expect: DevOps & Tools group present
  4. Find skill-group for 'Training & Enablement'; verify contains Curriculum Design
    - expect: Training & Enablement group present
  5. Find skill-group for 'Certifications'; verify contains ISTQB
    - expect: Certifications group present
  6. Find skill-group for 'Leadership'; verify contains Team Leadership
    - expect: Leadership group present

### 9. Main Page - Testimonials Section

**Seed:** `seed.spec.ts`

#### 9.1. Verify testimonials content loads

**File:** `tests/main-page/testimonials.spec.ts`

**Steps:**
  1. Check section-tag in #testimonials shows 'Testimonials'
    - expect: Section shows 'Testimonials' tag
  2. Find rec-card elements; verify at least one rec-quote text exists
    - expect: At least one testimonial quote is visible
  3. Verify rec-author with name and title exists
    - expect: Testimonial author info present
  4. Find and click 'View All on LinkedIn' button; verify opens LinkedIn URL
    - expect: LinkedIn link works

#### 9.2. Verify marquee animation

**File:** `tests/main-page/testimonials.spec.ts`

**Steps:**
  1. Find marquee-wrapper element; verify marquee-columns exist
    - expect: Marquee wrapper is present with scroll elements
  2. Check marquee-scroll has animation or keyframes defined
    - expect: Testimonial cards animate (CSS animation exists)

### 10. Main Page - Contact Section

**Seed:** `seed.spec.ts`

#### 10.1. Verify contact section displays

**File:** `tests/main-page/contact.spec.ts`

**Steps:**
  1. Check section-tag in #contact section
    - expect: Section tag shows 'Contact'
  2. Find h2 in #contact section; verify text is 'Let's connect'
    - expect: Heading shows 'Let's connect'
  3. Check contact-block paragraph text exists
    - expect: Contact description text present

#### 10.2. Verify contact links

**File:** `tests/main-page/contact.spec.ts`

**Steps:**
  1. Find 'GitHub' contact-card; click; verify new tab opens to github.com/lherlitz
    - expect: GitHub contact card is clickable and opens GitHub
  2. Find 'LinkedIn' contact-card; click; verify new tab opens to linkedin.com/in/lucherlitz
    - expect: LinkedIn contact card is clickable and opens LinkedIn
  3. Find 'Email' contact-card with id 'email-link'
    - expect: Email contact card is clickable

### 11. Main Page - Footer

**Seed:** `seed.spec.ts`

#### 11.1. Verify footer content

**File:** `tests/main-page/footer.spec.ts`

**Steps:**
  1. Find footer element; verify includes '2026'
    - expect: Footer shows current year 2026
  2. Verify footer text includes name
    - expect: Footer shows name 'Luc Herlitz'
  3. Check footer-note shows 'Built with purpose'
    - expect: Footer shows built message

### 12. Main Page - Responsive Behavior

**Seed:** `seed.spec.ts`

#### 12.1. Verify mobile layout at 375px width

**File:** `tests/main-page/responsive.spec.ts`

**Steps:**
  1. Set viewport to 375x667; verify nav-links has display:none or hidden state
    - expect: Navigation menu hidden by default on mobile
  2. Verify nav-toggle button is visible
    - expect: Nav toggle visible on mobile
  3. Check hero-title is visible and readable
    - expect: Hero still readable on small screens

#### 12.2. Verify tablet layout at 768px width

**File:** `tests/main-page/responsive.spec.ts`

**Steps:**
  1. Set viewport to 768x1024; check about-grid is 1 column
    - expect: About grid switches to single column on tablet
  2. Check project-grid displays in single column
    - expect: Project grid switches to single column
  3. Check skills-grid displays in single column
    - expect: Skills grid is single column

#### 12.3. Verify desktop layout at 1200px width

**File:** `tests/main-page/responsive.spec.ts`

**Steps:**
  1. Set viewport to 1200x800; verify nav-links is visible (not hidden)
    - expect: Navigation links visible on desktop
  2. Verify nav-toggle is not visible or hidden
    - expect: Nav toggle hidden on desktop

### 13. Contact Page - Basic Tests

**Seed:** `seed.spec.ts`

#### 13.1. Verify contact page loads

**File:** `tests/contact-page/basic.spec.ts`

**Steps:**
  1. Navigate to contact/index.html; check page title includes 'Contact'
    - expect: Contact page loads without errors
  2. Find h1 element; verify shows 'Luc Herlitz'
    - expect: Profile header displays name 'Luc Herlitz'
  3. Find title element; verify text matches
    - expect: Title shows 'Product Specialist'

#### 13.2. Verify contact page links

**File:** `tests/contact-page/basic.spec.ts`

**Steps:**
  1. Find call quick action button; verify href starts with 'tel:'
    - expect: Call button links to tel:+15673360945
  2. Find email quick action button; verify href includes 'mailto:'
    - expect: Email button links to correct email
  3. Find map quick action button; verify href includes 'maps.google.com'
    - expect: Map button links to Google Maps
  4. Find Add Contact button; verify href ends with '.vcf'
    - expect: Add Contact downloads vCard file

#### 13.3. Verify contact information list

**File:** `tests/contact-page/basic.spec.ts`

**Steps:**
  1. Find contact-item with label 'text'; verify value shows '(567) 229-2466'
    - expect: Text message link contains phone number
  2. Find contact-item with label 'call'; verify value
    - expect: Call contact shows correct number
  3. Find contact-item with label 'email'; verify value
    - expect: Email contact shows correct email
  4. Find contact-item with label 'website'; verify URL shows 'campingworldoftoledo.com'
    - expect: Website shows Camping World URL

#### 13.4. Verify location section

**File:** `tests/contact-page/basic.spec.ts`

**Steps:**
  1. Find location-label element in location-section
    - expect: Location label shows 'Location'
  2. Verify address text contains 'Rossford, OH'
    - expect: Address shows correct city/state
  3. Find 'Show on Map' link; verify href includes Google Maps URL
    - expect: Map link functional

#### 13.5. Verify organization section

**File:** `tests/contact-page/basic.spec.ts`

**Steps:**
  1. Find org-btn; verify org-name shows 'Camping World of Toledo'
    - expect: Organization button shows company name
  2. Verify org-btn href goes to campingworldoftoledo.com
    - expect: Organization link works

### 14. Cross-Page - Integration Tests

**Seed:** `seed.spec.ts`

#### 14.1. Verify navigation between pages

**File:** `tests/cross-page/navigation-flows.spec.ts`

**Steps:**
  1. Navigate to index.html; verify contact/index.html exists and loads
    - expect: Can navigate from main page to contact page via URL

#### 14.2. Verify cross-browser page behavior

**File:** `tests/cross-page/navigation-flows.spec.ts`

**Steps:**
  1. Test in multiple browsers (chromium, firefox, webkit) if available
    - expect: Both pages load in different browsers
