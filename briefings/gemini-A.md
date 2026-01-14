# GEMINI-A BRIEFING: Core Pages & Infrastructure

**Instance:** A (of 2 Gemini instances)
**Focus:** Main pages, navigation, newsletter, contact, blog listing
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

---

## CONSTRAINTS
- Vanilla HTML5, CSS3, JS only - NO frameworks
- Use existing CSS variables from `style.css`
- Match aesthetic: dark glassmorphism, gold (#ffd700), Outfit/Inter fonts
- All pages must have consistent nav and footer

---

## TASK 1: Navigation System

### 1.1 Create navigation HTML component

Add to `index.html` after `<body>`, before `<main>`:

```html
<nav class="main-nav">
    <a href="index.html" class="nav-logo">Wunderwelt</a>
    <button class="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="blog.html">Journal</a></li>
        <li><a href="contact.html">Connect</a></li>
        <li><a href="about.html">About</a></li>
    </ul>
</nav>
```

### 1.2 Create `includes/nav.html` for reuse reference

```html
<!-- Navigation Component - Copy to all pages -->
<nav class="main-nav">
    <a href="/index.html" class="nav-logo">Wunderwelt</a>
    <button class="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/blog.html">Journal</a></li>
        <li><a href="/contact.html">Connect</a></li>
        <li><a href="/about.html">About</a></li>
    </ul>
</nav>
```

---

## TASK 2: Footer Component

### 2.1 Create footer HTML

Add before `</body>` on all pages:

```html
<footer class="site-footer">
    <div class="footer-content">
        <div class="footer-brand">
            <h3>Wunderwelt</h3>
            <p>Reimagining urban existence through science, design, and collective action.</p>
        </div>
        <div class="footer-links">
            <h4>Explore</h4>
            <ul>
                <li><a href="/blog.html">Journal</a></li>
                <li><a href="/blog/urban-architecture/">Urban Architecture</a></li>
                <li><a href="/blog/education/">Education</a></li>
                <li><a href="/blog/rewilding/">Rewilding</a></li>
                <li><a href="/blog/governance/">Governance</a></li>
                <li><a href="/blog/resilience/">Resilience</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <h4>Connect</h4>
            <ul>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/about.html">About Us</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
            </ul>
        </div>
        <div class="footer-social">
            <h4>Follow</h4>
            <div class="social-icons">
                <a href="#" aria-label="Mastodon" class="social-link">
                    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.432 4.014.535c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.41 2.405 1.228l.518.869.519-.869c.533-.818 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"/></svg>
                </a>
                <a href="#" aria-label="GitHub" class="social-link">
                    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Wunderwelt Collective. Open source, open future.</p>
    </div>
</footer>
```

### 2.2 Create `includes/footer.html` for reference

Save the footer component for copy-paste to other pages.

---

## TASK 3: Newsletter Section

### 3.1 Add newsletter to index.html

Insert before footer, after `.science-grid` section:

```html
<!-- Newsletter Section -->
<section class="newsletter-section fade-in" id="newsletter">
    <div class="newsletter-box">
        <div class="newsletter-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
                <path fill="var(--accent-color)" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
        </div>
        <h2>Dispatches from the Urban Paradise</h2>
        <p class="newsletter-subtitle">Monthly insights on regenerative cities, alternative education, and collective futures. No spam, just signal.</p>
        <form class="newsletter-form" id="newsletter-form" action="#" method="POST">
            <div class="form-row">
                <input type="email" name="email" placeholder="your@email.com" required aria-label="Email address">
                <button type="submit" class="btn-subscribe">Subscribe</button>
            </div>
            <p class="newsletter-note">Join 0 dreamers building tomorrow. Unsubscribe anytime.</p>
        </form>
    </div>
</section>
```

### 3.2 Create standalone newsletter widget for blog posts

```html
<!-- Compact Newsletter CTA - for end of blog posts -->
<aside class="post-newsletter">
    <h3>Stay in the loop</h3>
    <p>Get notified when we publish new research.</p>
    <form class="newsletter-form-compact" action="#" method="POST">
        <input type="email" name="email" placeholder="your@email.com" required>
        <button type="submit">Join</button>
    </form>
</aside>
```

---

## TASK 4: Contact Page

### 4.1 Create `contact.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Connect with Wunderwelt - collaborate on urban paradise projects, media inquiries, or join the movement.">
    <title>Connect | Wunderwelt</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- NAV (copy from includes/nav.html) -->
    <nav class="main-nav">
        <a href="index.html" class="nav-logo">Wunderwelt</a>
        <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html">Journal</a></li>
            <li><a href="contact.html" class="active">Connect</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>

    <main class="container">
        <!-- Hero -->
        <header class="contact-hero fade-in">
            <h1>Join the <span class="highlight">Movement</span></h1>
            <p class="subtitle">COLLABORATE · INQUIRE · CONNECT</p>
        </header>

        <!-- Contact Form -->
        <section class="contact-form-container fade-in delay-1">
            <form class="contact-form" id="contact-form" action="#" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your name">
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <select id="subject" name="subject" required>
                        <option value="" disabled selected>Choose a topic...</option>
                        <option value="collaboration">Collaboration Inquiry</option>
                        <option value="media">Media & Press</option>
                        <option value="research">Research Partnership</option>
                        <option value="speaking">Speaking & Events</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Tell us about your vision..." rows="6"></textarea>
                </div>

                <div class="form-group form-checkbox">
                    <input type="checkbox" id="newsletter-opt" name="newsletter" value="yes">
                    <label for="newsletter-opt">Also subscribe me to the newsletter</label>
                </div>

                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </section>

        <!-- Alternative Contact Methods -->
        <section class="contact-alternatives fade-in delay-2">
            <div class="contact-card">
                <h3>Direct Email</h3>
                <p>For urgent matters:</p>
                <a href="mailto:hello@wunderwelt.earth" class="contact-link">hello@wunderwelt.earth</a>
            </div>
            <div class="contact-card">
                <h3>Social</h3>
                <p>Follow the conversation:</p>
                <div class="social-links">
                    <a href="#" class="social-link">Mastodon</a>
                    <a href="#" class="social-link">GitHub</a>
                </div>
            </div>
            <div class="contact-card">
                <h3>Location</h3>
                <p>Based in Vienna, thinking globally.</p>
                <span class="location-text">Vienna, Austria</span>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="newsletter-section fade-in delay-3" id="newsletter">
            <div class="newsletter-box">
                <h2>Prefer to just listen?</h2>
                <p class="newsletter-subtitle">Subscribe for monthly dispatches—no reply needed.</p>
                <form class="newsletter-form" action="#" method="POST">
                    <div class="form-row">
                        <input type="email" name="email" placeholder="your@email.com" required>
                        <button type="submit" class="btn-subscribe">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- FOOTER (copy from includes/footer.html) -->
    <footer class="site-footer">
        <!-- ... footer content ... -->
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

## TASK 5: Blog Listing Page

### 5.1 Create `blog.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Wunderwelt Journal - Research-backed insights on urban design, alternative education, rewilding, governance, and resilient systems.">
    <title>Journal | Wunderwelt</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- NAV -->
    <nav class="main-nav">
        <a href="index.html" class="nav-logo">Wunderwelt</a>
        <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html" class="active">Journal</a></li>
            <li><a href="contact.html">Connect</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>

    <main class="container">
        <!-- Hero -->
        <header class="blog-header fade-in">
            <h1>The <span class="highlight">Journal</span></h1>
            <p class="blog-intro">Research-backed explorations of regenerative cities, alternative education, and collective futures.</p>
        </header>

        <!-- Category Filters -->
        <nav class="blog-filters fade-in delay-1">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="urban-architecture">Urban Architecture</button>
            <button class="filter-btn" data-filter="education">Education</button>
            <button class="filter-btn" data-filter="rewilding">Rewilding</button>
            <button class="filter-btn" data-filter="governance">Governance</button>
            <button class="filter-btn" data-filter="resilience">Resilience</button>
        </nav>

        <!-- Featured Post -->
        <section class="featured-post fade-in delay-1">
            <article class="blog-card featured" data-tags="urban-architecture,resilience">
                <div class="blog-card-image-container">
                    <img src="assets/images/blog/urban-autarky-hero.png" alt="Urban Autarky" class="blog-card-image" loading="lazy">
                    <span class="featured-badge">Featured</span>
                </div>
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <span class="blog-card-category">Urban Architecture</span>
                    <h2 class="blog-card-title">The Urban Autarky Manifesto</h2>
                    <p class="blog-card-excerpt">What if your city produced 80% of its food within its borders? The future of urban resilience starts with radical self-sufficiency.</p>
                    <a href="blog/urban-autarky-manifesto.html" class="read-more">Read Article →</a>
                </div>
            </article>
        </section>

        <!-- Blog Grid -->
        <section class="blog-grid fade-in delay-2">

            <!-- Urban Architecture Posts -->
            <article class="blog-card" data-tags="urban-architecture">
                <img src="assets/images/blog/15-minute-city.png" alt="15-Minute City" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">The 15-Minute City: From Theory to Practice</h3>
                    <p class="blog-card-excerpt">Carlos Moreno's revolutionary concept is reshaping urban planning worldwide.</p>
                    <a href="blog/urban-architecture/15-minute-city.html" class="read-more">Read →</a>
                </div>
            </article>

            <article class="blog-card" data-tags="urban-architecture">
                <img src="assets/images/blog/superblocks.png" alt="Barcelona Superblocks" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Superblocks: Barcelona's Quiet Revolution</h3>
                    <p class="blog-card-excerpt">How one city reclaimed streets from cars and gave them back to people.</p>
                    <a href="blog/urban-architecture/superblocks-barcelona.html" class="read-more">Read →</a>
                </div>
            </article>

            <article class="blog-card" data-tags="urban-architecture">
                <img src="assets/images/blog/dunbar.png" alt="Dunbar Scale" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Designing for 150: Dunbar-Scale Neighborhoods</h3>
                    <p class="blog-card-excerpt">Why our brains can only handle communities of a certain size—and how to design for it.</p>
                    <a href="blog/urban-architecture/dunbar-scale-neighborhoods.html" class="read-more">Read →</a>
                </div>
            </article>

            <!-- Education Posts -->
            <article class="blog-card" data-tags="education">
                <img src="assets/images/blog/forest-school.png" alt="Forest School" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Forest Schools and the Neuroscience of Play</h3>
                    <p class="blog-card-excerpt">The science behind outdoor learning and its profound effects on child development.</p>
                    <a href="blog/education/forest-schools-neuroscience.html" class="read-more">Read →</a>
                </div>
            </article>

            <article class="blog-card" data-tags="education">
                <img src="assets/images/blog/democratic-schools.png" alt="Democratic Schools" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Democratic Schools: Self-Direction at Scale</h3>
                    <p class="blog-card-excerpt">What happens when students govern their own education? 50 years of evidence.</p>
                    <a href="blog/education/democratic-schools.html" class="read-more">Read →</a>
                </div>
            </article>

            <!-- Rewilding Posts -->
            <article class="blog-card" data-tags="rewilding">
                <img src="assets/images/blog/miyawaki.png" alt="Miyawaki Forest" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Miyawaki Forests: Urban Wilderness in 20 Years</h3>
                    <p class="blog-card-excerpt">The Japanese method creating dense native forests 10x faster than nature.</p>
                    <a href="blog/rewilding/miyawaki-forests.html" class="read-more">Read →</a>
                </div>
            </article>

            <article class="blog-card" data-tags="rewilding">
                <img src="assets/images/blog/pollinators.png" alt="Pollinator Pathways" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Pollinator Pathways: Designing for Bees</h3>
                    <p class="blog-card-excerpt">Creating connected corridors for the insects our food systems depend on.</p>
                    <a href="blog/rewilding/pollinator-pathways.html" class="read-more">Read →</a>
                </div>
            </article>

            <!-- Governance Posts -->
            <article class="blog-card" data-tags="governance">
                <img src="assets/images/blog/ostrom.png" alt="Ostrom's Principles" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Ostrom's Principles for Urban Commons</h3>
                    <p class="blog-card-excerpt">Nobel-winning insights on governing shared resources without tragedy.</p>
                    <a href="blog/governance/ostrom-principles.html" class="read-more">Read →</a>
                </div>
            </article>

            <article class="blog-card" data-tags="governance">
                <img src="assets/images/blog/liquid-democracy.png" alt="Liquid Democracy" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Liquid Democracy Tools: A Practical Guide</h3>
                    <p class="blog-card-excerpt">Software and protocols for community decision-making beyond voting.</p>
                    <a href="blog/governance/liquid-democracy-guide.html" class="read-more">Read →</a>
                </div>
            </article>

            <!-- Resilience Posts -->
            <article class="blog-card" data-tags="resilience">
                <img src="assets/images/blog/urban-food.png" alt="Urban Food" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Urban Food Sovereignty: The 80% Challenge</h3>
                    <p class="blog-card-excerpt">Can cities really feed themselves? The math, the methods, the movement.</p>
                    <a href="blog/resilience/urban-food-sovereignty.html" class="read-more">Read →</a>
                </div>
            </article>

            <article class="blog-card" data-tags="resilience">
                <img src="assets/images/blog/circular.png" alt="Circular Districts" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <span class="blog-card-date">January 2025</span>
                    <h3 class="blog-card-title">Circular Districts: Zero Waste at Scale</h3>
                    <p class="blog-card-excerpt">How entire neighborhoods are eliminating the concept of garbage.</p>
                    <a href="blog/resilience/circular-districts.html" class="read-more">Read →</a>
                </div>
            </article>

        </section>

        <!-- Load More -->
        <div class="blog-load-more fade-in">
            <button class="btn-load-more" id="load-more">Load More Articles</button>
        </div>

        <!-- Newsletter -->
        <section class="newsletter-section fade-in" id="newsletter">
            <div class="newsletter-box">
                <h2>Never miss an insight</h2>
                <p class="newsletter-subtitle">Monthly research roundups delivered to your inbox.</p>
                <form class="newsletter-form" action="#" method="POST">
                    <div class="form-row">
                        <input type="email" name="email" placeholder="your@email.com" required>
                        <button type="submit" class="btn-subscribe">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
        <!-- ... -->
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

## TASK 6: About Page

### 6.1 Create `about.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="About Wunderwelt - A collective reimagining urban existence through science, design, and radical cooperation.">
    <title>About | Wunderwelt</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- NAV -->
    <nav class="main-nav">
        <a href="index.html" class="nav-logo">Wunderwelt</a>
        <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html">Journal</a></li>
            <li><a href="contact.html">Connect</a></li>
            <li><a href="about.html" class="active">About</a></li>
        </ul>
    </nav>

    <main class="container">
        <header class="about-hero fade-in">
            <h1>About <span class="highlight">Wunderwelt</span></h1>
            <p class="subtitle">THE URBAN PARADISE PROJECT</p>
        </header>

        <section class="about-content fade-in delay-1">
            <div class="about-intro">
                <p class="lead-text">
                    <strong>Projekt: Kindergarten</strong> is not a childcare facility. It is a metaphorical playground for the future of humanity.
                </p>
                <p>
                    We are a research collective translating cutting-edge science into actionable blueprints for urban transformation. Our work bridges sociology, cognitive psychology, political economy, and systems biology to design cities that nurture human flourishing.
                </p>
            </div>

            <div class="about-mission">
                <h2>The Mission</h2>
                <p>
                    To shift humanity from unexpected dependency to empowered autarky, from isolation to radical cooperation. We believe cities can be redesigned as living systems that regenerate rather than extract.
                </p>
            </div>

            <div class="about-pillars">
                <h2>Our Pillars</h2>
                <div class="pillars-grid">
                    <div class="pillar-card">
                        <h3>Science-First</h3>
                        <p>Every proposal is grounded in peer-reviewed research. We cite our sources and show our work.</p>
                    </div>
                    <div class="pillar-card">
                        <h3>Action-Oriented</h3>
                        <p>Theory without practice is philosophy. We create tools, guides, and replicable models.</p>
                    </div>
                    <div class="pillar-card">
                        <h3>Open Source</h3>
                        <p>All our work is freely available. Knowledge shouldn't be paywalled.</p>
                    </div>
                    <div class="pillar-card">
                        <h3>Prefigurative</h3>
                        <p>We embody the future we advocate. Our process reflects our values.</p>
                    </div>
                </div>
            </div>

            <div class="about-team">
                <h2>The Collective</h2>
                <p>
                    Wunderwelt is a distributed network of researchers, designers, and practitioners. We operate without hierarchy, using liquid democracy tools to make decisions and allocate resources.
                </p>
                <p>
                    Based in Vienna, connected globally. If you share our vision, <a href="contact.html">reach out</a>.
                </p>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="newsletter-section fade-in" id="newsletter">
            <div class="newsletter-box">
                <h2>Join the network</h2>
                <p class="newsletter-subtitle">Monthly dispatches from the collective.</p>
                <form class="newsletter-form" action="#" method="POST">
                    <div class="form-row">
                        <input type="email" name="email" placeholder="your@email.com" required>
                        <button type="submit" class="btn-subscribe">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
        <!-- ... -->
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

## TASK 7: Update index.html

### 7.1 Add navigation to index.html
### 7.2 Add newsletter section before </main>
### 7.3 Add footer before </body>
### 7.4 Update hero section with subtle animation trigger

---

## TASK 8: Create includes folder

```
/includes/
├── nav.html
├── footer.html
├── newsletter.html
└── newsletter-compact.html
```

These are reference files for copy-paste consistency.

---

## TASK 9: Create Blog Post Template

### 9.1 Create `blog/post-template.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[POST_EXCERPT]">
    <meta property="og:title" content="[POST_TITLE] | Wunderwelt">
    <meta property="og:description" content="[POST_EXCERPT]">
    <meta property="og:image" content="/assets/images/blog/[POST_IMAGE]">
    <meta property="og:type" content="article">
    <title>[POST_TITLE] | Wunderwelt</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <!-- NAV -->
    <nav class="main-nav">
        <a href="/index.html" class="nav-logo">Wunderwelt</a>
        <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        <ul class="nav-links">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/blog.html" class="active">Journal</a></li>
            <li><a href="/contact.html">Connect</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>

    <main class="post-container">
        <!-- Post Header -->
        <header class="post-header fade-in">
            <div class="post-meta">
                <a href="/blog.html?filter=[CATEGORY_SLUG]" class="post-category">[CATEGORY]</a>
                <span class="post-date">[DATE]</span>
                <span class="post-reading-time">[X] min read</span>
            </div>
            <h1 class="post-title">[POST_TITLE]</h1>
            <p class="post-subtitle">[POST_SUBTITLE]</p>
        </header>

        <!-- Hero Image -->
        <figure class="post-hero fade-in delay-1">
            <img src="/assets/images/blog/[POST_IMAGE]" alt="[IMAGE_ALT]" class="post-hero-image">
            <figcaption>[IMAGE_CAPTION]</figcaption>
        </figure>

        <!-- Post Content -->
        <article class="post-content fade-in delay-2">

            <p class="post-lead">[LEAD_PARAGRAPH]</p>

            <h2>[SECTION_1_TITLE]</h2>
            <p>[CONTENT]</p>

            <blockquote>
                <p>"[QUOTE]"</p>
                <cite>— [AUTHOR], [SOURCE]</cite>
            </blockquote>

            <h2>[SECTION_2_TITLE]</h2>
            <p>[CONTENT]</p>

            <h3>[SUBSECTION_TITLE]</h3>
            <p>[CONTENT]</p>

            <figure class="post-figure">
                <img src="/assets/images/blog/[INLINE_IMAGE]" alt="[ALT]" loading="lazy">
                <figcaption>[CAPTION]</figcaption>
            </figure>

            <h2>[SECTION_3_TITLE]</h2>
            <p>[CONTENT]</p>

            <!-- Action Box -->
            <aside class="action-module">
                <h3>Action Module</h3>
                <p>[PRACTICAL_TAKEAWAY]</p>
                <ul>
                    <li>[ACTION_1]</li>
                    <li>[ACTION_2]</li>
                    <li>[ACTION_3]</li>
                </ul>
            </aside>

            <h2>References</h2>
            <ol class="references">
                <li id="ref-1">[AUTHOR] ([YEAR]). [TITLE]. <em>[JOURNAL]</em>, [VOLUME]([ISSUE]), [PAGES]. <a href="[DOI_URL]">DOI</a></li>
                <li id="ref-2">[...]</li>
            </ol>

        </article>

        <!-- Tags -->
        <div class="post-tags">
            <a href="/blog.html?tag=[TAG_1]" class="post-tag">[TAG_1]</a>
            <a href="/blog.html?tag=[TAG_2]" class="post-tag">[TAG_2]</a>
            <a href="/blog.html?tag=[TAG_3]" class="post-tag">[TAG_3]</a>
        </div>

        <!-- Share -->
        <div class="post-share">
            <span>Share:</span>
            <a href="#" class="share-link" data-platform="mastodon">Mastodon</a>
            <a href="#" class="share-link" data-platform="twitter">Twitter</a>
            <a href="#" class="share-link" data-platform="linkedin">LinkedIn</a>
            <button class="share-link" data-platform="copy">Copy Link</button>
        </div>

        <!-- Newsletter CTA -->
        <aside class="post-newsletter">
            <h3>Enjoyed this article?</h3>
            <p>Get monthly research roundups in your inbox.</p>
            <form class="newsletter-form-compact" action="#" method="POST">
                <input type="email" name="email" placeholder="your@email.com" required>
                <button type="submit">Subscribe</button>
            </form>
        </aside>

        <!-- Related Posts -->
        <section class="related-posts">
            <h2>Continue Reading</h2>
            <div class="related-grid">
                <a href="[RELATED_1_URL]" class="related-card">
                    <img src="[RELATED_1_IMG]" alt="" loading="lazy">
                    <h3>[RELATED_1_TITLE]</h3>
                </a>
                <a href="[RELATED_2_URL]" class="related-card">
                    <img src="[RELATED_2_IMG]" alt="" loading="lazy">
                    <h3>[RELATED_2_TITLE]</h3>
                </a>
                <a href="[RELATED_3_URL]" class="related-card">
                    <img src="[RELATED_3_IMG]" alt="" loading="lazy">
                    <h3>[RELATED_3_TITLE]</h3>
                </a>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
        <!-- ... -->
    </footer>

    <script src="/js/main.js"></script>
</body>
</html>
```

---

## TASK 10: Image Prompts for Asset Generation

Create `/briefings/assets/image-prompts.md`:

```markdown
# Image Generation Prompts

## Style Guide
- Solarpunk aesthetic
- Golden hour lighting
- Lush greenery + sleek glass
- High-tech sustainable
- Aspect: 16:9 for heroes, 4:3 for cards

## Blog Heroes

### 15-Minute City
Aerial view of a compact neighborhood at golden hour, mixed-use buildings with ground-floor shops, tree-lined pedestrian streets, people cycling and walking, rooftop gardens visible, no cars, solarpunk architecture, warm optimistic lighting, 16:9

### Superblocks Barcelona
Bird's eye view of Barcelona-style superblock, interior courtyard with playground and greenery, surrounding buildings with balconies full of plants, people gathering in shared space, filtered sunlight, photorealistic, 16:9

### Forest School
Children exploring a sunlit forest clearing, natural play structures made of logs, adult observing from distance, dappled golden light through trees, sense of wonder and discovery, soft focus background, 16:9

### Miyawaki Forest
Dense young forest in urban setting, diverse native plants at various heights, city buildings visible in background, morning mist, biodiversity visible (birds, butterflies), solarpunk hope aesthetic, 16:9

### Ostrom Commons
Diverse community members gathered around a shared garden plot, people of all ages tending vegetables, transparent greenhouse structure, collaborative atmosphere, warm afternoon light, 16:9

### Urban Food Sovereignty
Vertical farm integrated into residential building, multiple levels of growing systems visible through glass, people harvesting produce, solarpunk high-tech organic fusion, golden hour, 16:9

### Liquid Democracy
Circular meeting space under geodesic dome, diverse group using tablets/holographic displays to vote, bioluminescent plants, evening atmosphere with warm artificial lighting, futuristic but cozy, 16:9
```

---

## DELIVERABLES CHECKLIST

- [ ] Navigation added to `index.html`
- [ ] Footer added to `index.html`
- [ ] Newsletter section added to `index.html`
- [ ] `contact.html` created with full form
- [ ] `blog.html` created with grid and filters
- [ ] `about.html` created
- [ ] `blog/post-template.html` created
- [ ] `/includes/` folder with reusable components
- [ ] `/briefings/assets/image-prompts.md` created
- [ ] All pages have consistent nav, footer, newsletter

---

## HANDOFF

After completing:
1. Signal CODEX to style all new components
2. Signal COPILOT to add JavaScript functionality

**Status:** READY FOR EXECUTION
