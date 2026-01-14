# CODEX BRIEFING: Complete CSS System

**Priority:** HIGH - After Gemini-A creates HTML structure
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

---

## DESIGN SYSTEM

### Existing Variables (USE THESE)
```css
--bg-color: #0d0d0ed3;
--text-color: #e0e0e0;
--accent-color: #ffd700;
--tag-bg: rgba(255, 215, 0, 0.1);
--tag-text: #ffd700;
--card-bg: rgba(255, 255, 255, 0.03);
--card-border: rgba(255, 255, 255, 0.08);
--hover-effect: rgba(255, 255, 255, 0.08);
--font-heading: 'Outfit', sans-serif;
--font-body: 'Inter', sans-serif;
```

### New Variables to Add
```css
--success-color: #4ade80;
--error-color: #f87171;
--warning-color: #fbbf24;
--link-color: var(--accent-color);
--gradient-gold: linear-gradient(135deg, #ffd700 0%, #ffb700 100%);
--shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 30px rgba(255, 215, 0, 0.2);
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--transition-fast: 0.2s ease;
--transition-med: 0.3s ease;
```

---

## TASK 1: Navigation System

Add to `css/style.css`:

```css
/* ========================================
   NAVIGATION
   ======================================== */

.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(13, 13, 14, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1000;
    border-bottom: 1px solid var(--card-border);
    transition: background var(--transition-med), padding var(--transition-med);
}

.main-nav.scrolled {
    padding: 0.75rem 2rem;
    background: rgba(13, 13, 14, 0.98);
}

.nav-logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-color);
    text-decoration: none;
    letter-spacing: -0.02em;
    transition: opacity var(--transition-fast);
}

.nav-logo:hover {
    opacity: 0.8;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    position: relative;
    padding: 0.5rem 0;
    transition: color var(--transition-fast);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    transition: width var(--transition-med);
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--accent-color);
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

/* Mobile Toggle */
.nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.nav-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--text-color);
    transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }

    .nav-links {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background: rgba(13, 13, 14, 0.98);
        backdrop-filter: blur(20px);
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--transition-med), visibility var(--transition-med);
    }

    .nav-links.active {
        opacity: 1;
        visibility: visible;
    }

    .nav-links a {
        font-size: 1.25rem;
    }
}

/* Body padding for fixed nav */
body {
    padding-top: 70px;
}
```

---

## TASK 2: Footer System

```css
/* ========================================
   FOOTER
   ======================================== */

.site-footer {
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid var(--card-border);
    margin-top: 4rem;
    padding: 4rem 2rem 2rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
}

.footer-brand h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.footer-brand p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    line-height: 1.6;
    max-width: 300px;
}

.footer-links h4 {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-color);
    margin-bottom: 1.25rem;
}

.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 0.75rem;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color var(--transition-fast);
}

.footer-links a:hover {
    color: var(--accent-color);
}

.footer-social h4 {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-color);
    margin-bottom: 1.25rem;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 50%;
    color: var(--text-color);
    text-decoration: none;
    transition: border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}

.social-link:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-3px);
}

.footer-bottom {
    max-width: 1200px;
    margin: 3rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid var(--card-border);
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.85rem;
}

@media (max-width: 900px) {
    .footer-content {
        grid-template-columns: 1fr 1fr;
    }

    .footer-brand {
        grid-column: span 2;
    }
}

@media (max-width: 600px) {
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .footer-brand {
        grid-column: span 1;
    }

    .footer-brand p {
        max-width: none;
    }

    .social-icons {
        justify-content: center;
    }
}
```

---

## TASK 3: Newsletter Component

```css
/* ========================================
   NEWSLETTER
   ======================================== */

.newsletter-section {
    padding: 4rem 0;
}

.newsletter-box {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: 3rem 2rem;
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.newsletter-box::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.03) 0%, transparent 70%);
    pointer-events: none;
}

.newsletter-icon {
    margin-bottom: 1.5rem;
}

.newsletter-icon svg {
    opacity: 0.9;
}

.newsletter-box h2 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    color: #fff;
    margin-bottom: 0.5rem;
}

.newsletter-subtitle {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.newsletter-form {
    position: relative;
    z-index: 1;
}

.newsletter-form .form-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.newsletter-form input[type="email"] {
    flex: 1;
    min-width: 250px;
    max-width: 320px;
    padding: 1rem 1.25rem;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-family: var(--font-body);
    font-size: 1rem;
    outline: none;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.newsletter-form input[type="email"]:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.newsletter-form input[type="email"]::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.btn-subscribe {
    padding: 1rem 2rem;
    background: var(--gradient-gold);
    color: #000;
    border: none;
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn-subscribe:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.btn-subscribe:active {
    transform: translateY(0);
}

.btn-subscribe:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.newsletter-note {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 1rem;
}

/* Compact version for blog posts */
.post-newsletter {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-md);
    padding: 2rem;
    margin: 3rem 0;
    text-align: center;
}

.post-newsletter h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    color: #fff;
    margin-bottom: 0.5rem;
}

.post-newsletter p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.newsletter-form-compact {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
}

.newsletter-form-compact input {
    padding: 0.75rem 1rem;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-size: 0.9rem;
    min-width: 200px;
    outline: none;
}

.newsletter-form-compact input:focus {
    border-color: var(--accent-color);
}

.newsletter-form-compact button {
    padding: 0.75rem 1.5rem;
    background: var(--accent-color);
    color: #000;
    border: none;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    transition: opacity var(--transition-fast);
}

.newsletter-form-compact button:hover {
    opacity: 0.9;
}

/* Newsletter messages */
.newsletter-message {
    font-size: 0.85rem;
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-sm);
}

.newsletter-message.success {
    color: var(--success-color);
    background: rgba(74, 222, 128, 0.1);
}

.newsletter-message.error {
    color: var(--error-color);
    background: rgba(248, 113, 113, 0.1);
}
```

---

## TASK 4: Contact Page

```css
/* ========================================
   CONTACT PAGE
   ======================================== */

.contact-hero {
    text-align: center;
    padding: 3rem 0 2rem;
}

.contact-hero h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.contact-form-container {
    max-width: 700px;
    margin: 0 auto 3rem;
}

.contact-form {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: 2.5rem;
    backdrop-filter: blur(10px);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-family: var(--font-body);
    font-size: 1rem;
    outline: none;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
    line-height: 1.6;
}

.form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23ffd700' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
}

.form-group select option {
    background: #1a1a1a;
    color: #fff;
}

.form-checkbox {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.form-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: var(--accent-color);
    cursor: pointer;
}

.form-checkbox label {
    margin: 0;
    text-transform: none;
    font-size: 0.9rem;
    cursor: pointer;
}

.submit-btn {
    width: 100%;
    padding: 1.125rem;
    background: var(--gradient-gold);
    color: #000;
    border: none;
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

/* Form messages */
.form-errors,
.form-success {
    padding: 1rem;
    border-radius: var(--radius-sm);
    margin-bottom: 1.5rem;
}

.form-errors {
    background: rgba(248, 113, 113, 0.1);
    border: 1px solid rgba(248, 113, 113, 0.3);
    color: var(--error-color);
}

.form-errors p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
}

.form-success {
    background: rgba(74, 222, 128, 0.1);
    border: 1px solid rgba(74, 222, 128, 0.3);
    color: var(--success-color);
    font-size: 0.9rem;
}

/* Alternative contact methods */
.contact-alternatives {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto 3rem;
}

.contact-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-md);
    padding: 1.5rem;
    text-align: center;
}

.contact-card h3 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 0.5rem;
}

.contact-card p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
}

.contact-link {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 500;
}

.contact-link:hover {
    text-decoration: underline;
}

.location-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .contact-alternatives {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 1.5rem;
    }
}
```

---

## TASK 5: Blog Listing Page

```css
/* ========================================
   BLOG LISTING
   ======================================== */

.blog-header {
    text-align: center;
    padding: 3rem 0 2rem;
}

.blog-header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.blog-intro {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    max-width: 550px;
    margin: 0 auto;
}

/* Blog Filters */
.blog-filters {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    padding: 0 1rem;
}

.filter-btn {
    padding: 0.625rem 1.25rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.7);
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.filter-btn:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
}

.filter-btn.active {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: #000;
}

/* Featured Post */
.featured-post {
    margin-bottom: 3rem;
}

.blog-card.featured {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 0;
    overflow: hidden;
}

.blog-card.featured .blog-card-image-container {
    position: relative;
    height: 100%;
    min-height: 350px;
}

.blog-card.featured .blog-card-image {
    height: 100%;
}

.featured-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--accent-color);
    color: #000;
    padding: 0.375rem 0.875rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.blog-card.featured .blog-card-content {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.blog-card.featured .blog-card-title {
    font-size: 1.75rem;
}

/* Blog Grid */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.blog-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: transform var(--transition-med), border-color var(--transition-med), box-shadow var(--transition-med);
}

.blog-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: var(--shadow-soft);
}

.blog-card-image-container {
    position: relative;
    overflow: hidden;
}

.blog-card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform var(--transition-med);
}

.blog-card:hover .blog-card-image {
    transform: scale(1.05);
}

.blog-card-content {
    padding: 1.5rem;
}

.blog-card-date {
    font-size: 0.75rem;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.blog-card-category {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-left: 1rem;
}

.blog-card-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    color: #fff;
    margin: 0.75rem 0;
    line-height: 1.3;
}

.blog-card-excerpt {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.read-more {
    display: inline-block;
    margin-top: 1rem;
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: opacity var(--transition-fast);
}

.read-more:hover {
    opacity: 0.8;
}

/* Load More */
.blog-load-more {
    text-align: center;
    margin-bottom: 3rem;
}

.btn-load-more {
    padding: 1rem 2.5rem;
    background: transparent;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-sm);
    color: var(--text-color);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.btn-load-more:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
}

@media (max-width: 900px) {
    .blog-card.featured {
        grid-template-columns: 1fr;
    }

    .blog-card.featured .blog-card-image-container {
        min-height: 250px;
    }
}

@media (max-width: 600px) {
    .blog-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## TASK 6: Single Blog Post

```css
/* ========================================
   SINGLE POST
   ======================================== */

.post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.post-header {
    text-align: center;
    margin-bottom: 2rem;
}

.post-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    flex-wrap: wrap;
}

.post-category {
    color: var(--accent-color);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
}

.post-category:hover {
    text-decoration: underline;
}

.post-date,
.post-reading-time {
    color: rgba(255, 255, 255, 0.5);
}

.post-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.post-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    font-weight: 300;
}

/* Post Hero */
.post-hero {
    margin-bottom: 3rem;
}

.post-hero-image {
    width: 100%;
    border-radius: var(--radius-md);
    margin-bottom: 0.75rem;
}

.post-hero figcaption {
    text-align: center;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
}

/* Post Content */
.post-content {
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
}

.post-lead {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin-bottom: 2rem;
}

.post-content h2 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    color: #fff;
    margin: 2.5rem 0 1rem;
}

.post-content h3 {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    color: #fff;
    margin: 2rem 0 0.75rem;
}

.post-content p {
    margin-bottom: 1.25rem;
}

.post-content a {
    color: var(--accent-color);
    text-decoration: underline;
    text-underline-offset: 3px;
}

.post-content a:hover {
    opacity: 0.8;
}

.post-content strong {
    color: #fff;
    font-weight: 600;
}

.post-content blockquote {
    border-left: 3px solid var(--accent-color);
    padding: 1rem 0 1rem 1.5rem;
    margin: 2rem 0;
    background: rgba(255, 215, 0, 0.03);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.post-content blockquote p {
    font-size: 1.1rem;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
}

.post-content blockquote cite {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: normal;
}

.post-content ul,
.post-content ol {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
}

.post-content li {
    margin-bottom: 0.5rem;
}

/* Post Figures */
.post-figure {
    margin: 2rem 0;
}

.post-figure img {
    width: 100%;
    border-radius: var(--radius-sm);
}

.post-figure figcaption {
    text-align: center;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.75rem;
    font-style: italic;
}

/* Action Module */
.action-module {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-left: 3px solid var(--accent-color);
    border-radius: var(--radius-sm);
    padding: 1.5rem;
    margin: 2rem 0;
}

.action-module h3 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    color: var(--accent-color);
    margin: 0 0 0.75rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.action-module p {
    margin-bottom: 1rem;
}

.action-module ul {
    margin: 0;
    padding-left: 1.25rem;
}

.action-module li {
    margin-bottom: 0.375rem;
}

/* References */
.references {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    padding-left: 1.5rem;
}

.references li {
    margin-bottom: 0.75rem;
    line-height: 1.5;
}

.references a {
    color: var(--accent-color);
}

/* Post Tags */
.post-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding: 2rem 0;
    border-top: 1px solid var(--card-border);
    margin-top: 2rem;
}

.post-tag {
    background: var(--tag-bg);
    color: var(--tag-text);
    padding: 0.4rem 0.875rem;
    border-radius: 50px;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    transition: background var(--transition-fast);
}

.post-tag:hover {
    background: rgba(255, 215, 0, 0.2);
}

/* Share */
.post-share {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--card-border);
}

.post-share span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
}

.share-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.85rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-sm);
    background: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: all var(--transition-fast);
}

.share-link:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
}

/* Related Posts */
.related-posts {
    margin-top: 3rem;
}

.related-posts h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.related-card {
    text-decoration: none;
    display: block;
}

.related-card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: var(--radius-sm);
    margin-bottom: 0.75rem;
    transition: opacity var(--transition-fast);
}

.related-card:hover img {
    opacity: 0.8;
}

.related-card h3 {
    font-family: var(--font-heading);
    font-size: 1rem;
    color: #fff;
    line-height: 1.3;
    transition: color var(--transition-fast);
}

.related-card:hover h3 {
    color: var(--accent-color);
}

@media (max-width: 768px) {
    .post-title {
        font-size: 2rem;
    }

    .related-grid {
        grid-template-columns: 1fr;
    }

    .post-share {
        flex-wrap: wrap;
    }
}
```

---

## TASK 7: About Page

```css
/* ========================================
   ABOUT PAGE
   ======================================== */

.about-hero {
    text-align: center;
    padding: 3rem 0 2rem;
}

.about-hero h1 {
    font-size: 3rem;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-intro {
    margin-bottom: 3rem;
}

.about-intro .lead-text {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
}

.about-intro p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.05rem;
    line-height: 1.7;
}

.about-mission,
.about-pillars,
.about-team {
    margin-bottom: 3rem;
}

.about-mission h2,
.about-pillars h2,
.about-team h2 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    color: #fff;
    margin-bottom: 1rem;
}

.about-mission p,
.about-team p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.05rem;
    line-height: 1.7;
}

.about-team a {
    color: var(--accent-color);
}

.pillars-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.pillar-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-md);
    padding: 1.5rem;
}

.pillar-card h3 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
}

.pillar-card p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    line-height: 1.5;
}

@media (max-width: 600px) {
    .pillars-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## TASK 8: Utility Classes & Animations

```css
/* ========================================
   UTILITIES & ANIMATIONS
   ======================================== */

/* Spacing */
.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }
.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

/* Text */
.text-center { text-align: center; }
.text-accent { color: var(--accent-color); }
.text-muted { color: rgba(255, 255, 255, 0.5); }

/* Visibility */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Animations */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
}

.fade-in.visible,
.fade-in.animate {
    animation: fadeInUp 0.6s ease forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.loading {
    animation: pulse 1.5s ease-in-out infinite;
}

/* Focus states */
:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

/* Selection */
::selection {
    background: rgba(255, 215, 0, 0.3);
    color: #fff;
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}
```

---

## DELIVERABLES CHECKLIST

- [ ] New CSS variables added
- [ ] Navigation (desktop + mobile)
- [ ] Footer (all breakpoints)
- [ ] Newsletter (full + compact versions)
- [ ] Contact form (all states)
- [ ] Blog listing (filters, grid, featured)
- [ ] Single post (all elements)
- [ ] About page
- [ ] Utility classes
- [ ] Animations
- [ ] Responsive breakpoints for all

---

## HANDOFF

After completing, signal COPILOT to add:
- Mobile nav toggle JS
- Form validation
- Newsletter handlers
- Scroll animations

**Status:** WAITING FOR GEMINI-A HTML
