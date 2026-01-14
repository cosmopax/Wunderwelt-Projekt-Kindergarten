# CODEX AGENT BRIEFING: CSS & Styling

**Priority:** HIGH - Second wave after Gemini creates structure.
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

## Mission

Extend `css/style.css` with styles for all new components. Maintain solarpunk glassmorphism aesthetic. Gold accents. Premium feel.

## Design System Reference

```css
/* Existing variables - USE THESE */
--bg-color: #0d0d0ed3;
--text-color: #e0e0e0;
--accent-color: #ffd700;
--tag-bg: rgba(255, 215, 0, 0.1);
--card-bg: rgba(255, 255, 255, 0.03);
--card-border: rgba(255, 255, 255, 0.08);
--font-heading: 'Outfit', sans-serif;
--font-body: 'Inter', sans-serif;
```

---

## TASK 1: Navigation Styles

Add to `css/style.css`:

```css
/* Navigation */
.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    position: sticky;
    top: 0;
    background: rgba(13, 13, 14, 0.9);
    backdrop-filter: blur(10px);
    z-index: 100;
    border-bottom: 1px solid var(--card-border);
}

.nav-logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-color);
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-color);
}

/* Mobile nav */
@media (max-width: 600px) {
    .main-nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    .nav-links {
        gap: 1rem;
    }
}
```

---

## TASK 2: Newsletter Component Styles

```css
/* Newsletter Section */
.newsletter-section {
    margin: 4rem 0;
    text-align: center;
}

.newsletter-box {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 3rem 2rem;
    max-width: 600px;
    margin: 0 auto;
    backdrop-filter: blur(10px);
}

.newsletter-box h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: #fff;
    margin-bottom: 0.5rem;
}

.newsletter-box > p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
}

.newsletter-form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.newsletter-form input[type="email"] {
    padding: 0.875rem 1.25rem;
    border: 1px solid var(--card-border);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-size: 1rem;
    min-width: 280px;
    outline: none;
    transition: border-color 0.3s ease;
}

.newsletter-form input[type="email"]:focus {
    border-color: var(--accent-color);
}

.newsletter-form input[type="email"]::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.newsletter-form button {
    padding: 0.875rem 2rem;
    background: var(--accent-color);
    color: #000;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.newsletter-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
}

.newsletter-note {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 1rem;
}
```

---

## TASK 3: Contact Form Styles

```css
/* Contact Page */
.contact-hero {
    text-align: center;
    padding: 4rem 0 2rem;
}

.contact-form-container {
    max-width: 700px;
    margin: 0 auto 4rem;
}

.contact-form {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
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
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--card-border);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-family: var(--font-body);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--accent-color);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23ffd700' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
}

.submit-btn {
    width: 100%;
    padding: 1rem;
    background: var(--accent-color);
    color: #000;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```

---

## TASK 4: Blog Styles

```css
/* Blog Page */
.blog-header {
    text-align: center;
    padding: 4rem 0 2rem;
}

.blog-header h1 {
    font-size: 3rem;
}

.blog-intro {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    max-width: 600px;
    margin: 1rem auto 0;
}

/* Blog Cards */
.blog-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
}

.blog-card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.blog-card-content {
    padding: 1.5rem;
}

.blog-card-date {
    font-size: 0.8rem;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.blog-card-title {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: #fff;
    margin: 0.5rem 0;
}

.blog-card-excerpt {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
    line-height: 1.5;
}

.read-more {
    display: inline-block;
    margin-top: 1rem;
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;
}

.read-more:hover {
    opacity: 0.8;
}

/* Single Post */
.post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.post-hero-image {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 2rem;
}

.post-meta {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
}

.post-meta .date {
    color: var(--accent-color);
}

.post-content h2 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    color: #fff;
    margin: 2rem 0 1rem;
}

.post-content h3 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    color: #fff;
    margin: 1.5rem 0 0.75rem;
}

.post-content p {
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.8;
}

.post-content blockquote {
    border-left: 3px solid var(--accent-color);
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
}

/* Post Tags */
.post-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--card-border);
}

.post-tag {
    background: var(--tag-bg);
    color: var(--tag-text);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    text-transform: uppercase;
}
```

---

## TASK 5: Media Gallery Styles (for future use)

```css
/* Media Gallery */
.media-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.media-item {
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 16/9;
}

.media-item img,
.media-item video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media-item iframe {
    width: 100%;
    height: 100%;
    border: none;
}

/* Social Links */
.social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
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
    transition: border-color 0.3s ease, color 0.3s ease;
}

.social-link:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
}
```

---

## Deliverables Checklist

- [ ] Navigation styles (.main-nav)
- [ ] Newsletter component styles
- [ ] Contact form styles
- [ ] Blog listing page styles
- [ ] Single blog post styles
- [ ] Media gallery styles
- [ ] Social links styles
- [ ] Mobile responsive adjustments

---

## Execution Note

Wait for Gemini to create HTML structure first. Then apply these styles to `css/style.css`.

**Status:** AWAITING GEMINI COMPLETION
