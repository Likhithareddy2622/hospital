# MANTRA 2026 Summer School | Frontend Website Assignment

## Assignment 1: Frontend Website Design, SEO, Responsiveness & Netlify Hosting
* **Maximum Marks:** 10
* **Student Name:** [Your Name]
* **Registration / Roll Number:** [Your Roll Number]
* **Selected Website Topic:** Health Care Website (Hospital)
* **Submission Date:** 2nd July 2026

---

## 1. Project Overview: AuraCare Hospital & Research Centre
**AuraCare Hospital** is a premium, modern, responsive static multi-page website designed to serve as a comprehensive medical portal. Built using clean **semantic HTML5**, customized **CSS3 grid/flexbox variables**, and **Vanilla JavaScript** to provide full interactivity.

The site is designed with rich medical aesthetics (Deep Teal, Navy, and Soft Mint/Coral Highlights), modern typography (Outfit & Inter fonts via Google Fonts), and interactive states.

---

## 2. Directory Structure
```
hospital/
├── index.html          # Home Page (Hero, Stats, Services Summary, Reviews)
├── about.html          # About Page (Mission, Core Values, Historical Milestone Timeline)
├── services.html       # Services & Doctors Directory (Dynamic Name/Dept Search & Filter)
├── gallery.html        # Interactive Media Gallery (Categorized Grid, Lightbox Modal)
├── contact.html        # Contact Page (Office Hours, Interactive FAQs, Form + Modal)
├── README.md           # Documentation for Assignment Submission (this file)
├── styles/
│   └── main.css        # Unified Design System, Variables, Layouts, & Animations
└── js/
    ├── main.js         # Navigation Drawer, Sticky Nav, IntersectionObserver Animations
    ├── gallery.js      # Gallery Filter Subset & Fullscreen Lightbox Arrow Navigation
    └── appointment.js  # RegEx Form Field Validation, Modal Trigger, FAQ Accordion
```

---

## 3. Implemented Mandatory Requirements

### A. Frontend Design
* **Consistent Color Palette:** HSL variables represent cleanliness, hygiene, and stability (Primary Teal: `hsl(182, 94%, 32%)`, Trust Navy: `hsl(215, 60%, 16%)`).
* **Visual Polish:** Glassmorphism overlay panels (`backdrop-filter`), subtle shadows (`box-shadow`), floating care helpline banner, dynamic transitions, and key entry fade-up scroll animations.
* **Navigation:** Structured header containing desktop navbar links and mobile toggles. Footer includes site links, social handles (custom SVGs), and email subscription.

### B. Responsive Design
* CSS Media Queries handle seamless adjustments on three main screen brackets:
  1. **Mobile (<768px):** Hamburger menu activates drawer slide-out; layout collapses into single column; statistics align vertically.
  2. **Tablet (768px - 1024px):** Layout grid adjusts items from 3/4 columns down to 2 columns.
  3. **Desktop (>1024px):** Implements modern side-by-side grids, hover cards, and rotate animations.

### C. Basic SEO Implementation
* **Descriptive Titles:** Unique, descriptive `<title>` tag for every page.
* **Metadata:** `<meta name="description">` and `<meta name="keywords">` included on each page for indexing.
* **Structured Headers:** Exactly one `<h1>` header tag per page representing the page title, followed by `<h2>` and `<h3>` tags for subsections.
* **Image Alt Text:** All images have descriptive, contextual alt texts for screen readers and search ranking.
* **Simple File Names:** Low-case clean filenames (`index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`).

### D. Vanilla JavaScript Interactivity
1. **Sticky Header:** Automatically transitions color and applies shadow on user scroll.
2. **Mobile Menu:** Handles hamburger menu click events, toggling active animations and drawer slides.
3. **Scroll Animations:** Utilizes `IntersectionObserver` to trigger fade-up animations on grid elements on scroll.
4. **Doctor Directory Search:** Live text filtering and category clicks to search doctors by name or specialty in real-time.
5. **Photo Gallery Lightbox:** Image filtering by category with complete modal viewing, key bindings (Left, Right, Escape), and click overlay closures.
6. **Form Validation:** Performs validation on Name, Email, Phone, Department, and Appointment Date. Shows custom error messages and toggles valid/invalid state borders.
7. **Success Modal:** Triggers a stylized overlay confirmation dialog upon successful validation checks.
8. **FAQ Accordion:** Toggles dropdown questions and rotates indicator icons smoothly.

---

## 4. How to Host & Deploys on Netlify

### Step 1: Push Code to GitHub
1. Create a new public repository on GitHub named `hospital-frontend-assignment`.
2. Open terminal in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AuraCare Hospital Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hospital-frontend-assignment.git
   git push -u origin main
   ```

### Step 2: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** -> **Import an existing project**.
3. Choose **GitHub** as the provider and authorize your account.
4. Select the `hospital-frontend-assignment` repository.
5. Leave the **Build command** and **Publish directory** blank (since this is a static HTML/CSS/JS website).
6. Click **Deploy Site**.
7. Netlify will generate a live URL (e.g., `https://auracare-hospital.netlify.app/`). Copy this link for your final assignment submission sheet!
