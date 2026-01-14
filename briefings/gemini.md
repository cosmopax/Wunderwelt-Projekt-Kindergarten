# GEMINI AGENT BRIEFING: Core Architecture & Backend Systems

**Priority:** HIGHEST - You handle the heavy lifting.
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

## Mission

Build the core architecture for Contact, Newsletter, and Blog systems. You create the structural foundation that other agents will style and enhance.

## Constraints

- **NO frameworks** - Vanilla HTML5, CSS3, JS only
- Match existing aesthetic: dark glassmorphism, gold accents (#ffd700)
- All new pages must link back to index.html
- Use CSS variables from existing `style.css`

---

## TASK 1: Create Blog System

### 1.1 Create `blog.html`

```
Location: /blog.html
```

Structure:
- Header with nav (link to index, contact)
- Blog grid (reuse `.science-grid` pattern)
- Each post = `.feature-card` style article preview
- Include: title, date, excerpt, read-more link
- Footer with newsletter signup CTA

### 1.2 Create `blog/` folder with template

```
Location: /blog/post-template.html
```

Single article page template:
- Full-width hero image slot
- Article title + metadata (date, author, tags)
- Content area with typography for `<h2>`, `<h3>`, `<p>`, `<blockquote>`
- Related posts section at bottom
- Share buttons placeholder (social icons)

### 1.3 Create 3 sample posts

Create in `/blog/`:
- `urban-autarky-manifesto.html` - About self-sufficient cities
- `biophilic-design-science.html` - Cognitive benefits of green spaces
- `liquid-democracy-tools.html` - Tech for community governance

Each ~300 words placeholder content referencing the scientific concepts from AGENT_BRIEFING.md.

---

## TASK 2: Create Contact Page

### 2.1 Create `contact.html`

Structure:
- Hero section: "Join the Movement" + subtitle
- Contact form with fields:
  - Name (required)
  - Email (required, validated)
  - Subject (dropdown: General, Collaboration, Media, Other)
  - Message (textarea, required)
  - Submit button (gold accent)
- Location info section (placeholder address)
- Social links row

Form should POST to `#` (Copilot will add JS validation, Qwen researches backend options).

---

## TASK 3: Newsletter Component

### 3.1 Create reusable newsletter signup block

Add to bottom of `index.html` before `</main>`:

```html
<section class="newsletter-section fade-in">
    <div class="newsletter-box">
        <h2>Stay Connected</h2>
        <p>Monthly dispatches from the Urban Paradise.</p>
        <form class="newsletter-form" id="newsletter-form">
            <input type="email" placeholder="your@email.com" required>
            <button type="submit">Subscribe</button>
        </form>
        <p class="newsletter-note">No spam. Unsubscribe anytime.</p>
    </div>
</section>
```

### 3.2 Add newsletter to all new pages

Include same component in blog.html and contact.html footer area.

---

## TASK 4: Navigation System

### 4.1 Add nav to index.html

Insert after `<body>`, before `<main>`:

```html
<nav class="main-nav">
    <a href="index.html" class="nav-logo">Wunderwelt</a>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Journal</a></li>
        <li><a href="contact.html">Connect</a></li>
    </ul>
</nav>
```

### 4.2 Add same nav to all pages

Ensure consistent navigation across blog.html, contact.html, and all blog posts.

---

## Deliverables Checklist

- [ ] `blog.html` - Blog listing page
- [ ] `blog/post-template.html` - Article template
- [ ] `blog/urban-autarky-manifesto.html`
- [ ] `blog/biophilic-design-science.html`
- [ ] `blog/liquid-democracy-tools.html`
- [ ] `contact.html` - Contact page with form
- [ ] Newsletter section added to index.html
- [ ] Navigation added to all pages

---

## Handoff Notes

After completing:
1. Signal **Codex** to style new components (nav, newsletter, contact form, blog cards)
2. Signal **Copilot** to add JS validation and interactivity
3. Signal **Mistral** to update file index

**Status:** AWAITING EXECUTION
