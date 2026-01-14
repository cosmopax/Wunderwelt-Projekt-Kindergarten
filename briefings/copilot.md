# COPILOT BRIEFING: Complete JavaScript System

**Priority:** HIGH - After Codex CSS
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

---

## CONSTRAINTS
- Vanilla JS only - NO jQuery, NO frameworks
- Progressive enhancement - site works without JS
- ES6+ syntax
- Accessible - keyboard nav, ARIA
- All code goes in `js/main.js`

---

## TASK 1: Core Initialization

Replace contents of `js/main.js`:

```javascript
/**
 * Wunderwelt - Projekt Kindergarten
 * Main JavaScript Module
 */

'use strict';

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Wunderwelt initialized');

    // Core modules
    initNavigation();
    initScrollEffects();
    initAnimations();

    // Forms
    initContactForm();
    initNewsletterForms();

    // Blog features
    initBlogFilters();
    initReadingTime();
    initShareButtons();

    // Utilities
    initSmoothScroll();
    initLazyLoading();
});
```

---

## TASK 2: Navigation System

```javascript
// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (!nav) return;

    // Mobile toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('active');
            document.body.classList.toggle('nav-open');

            // Accessibility
            const isOpen = links.classList.contains('active');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Close on link click (mobile)
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                links.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && links.classList.contains('active')) {
                toggle.classList.remove('active');
                links.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }

    // Scroll behavior
    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > scrollThreshold) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Active link highlighting
    highlightActiveLink();
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        const linkFile = href.split('/').pop();

        if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
            link.classList.add('active');
        }
    });
}
```

---

## TASK 3: Contact Form Validation

```javascript
// ========================================
// CONTACT FORM
// ========================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleContactSubmit);

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validate all fields
    const errors = validateContactForm(data);

    if (errors.length > 0) {
        showFormErrors(form, errors);
        return;
    }

    // Disable submit
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('loading');

    try {
        // Get form action (set by Qwen's research - Formspree, Web3Forms, etc.)
        const action = form.getAttribute('action');

        if (action && action !== '#') {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) throw new Error('Submission failed');
        } else {
            // Simulate submission for demo
            await simulateSubmit();
        }

        showFormSuccess(form, 'Message sent successfully! We\'ll be in touch soon.');
        form.reset();

        // Track submission (if analytics available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', { form_name: 'contact' });
        }

    } catch (err) {
        console.error('Form submission error:', err);
        showFormErrors(form, ['Failed to send message. Please try again or email us directly.']);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('loading');
    }
}

function validateContactForm(data) {
    const errors = [];

    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter your name (at least 2 characters)');
    }

    if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!data.subject) {
        errors.push('Please select a subject');
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }

    // Honeypot check (if field exists)
    if (data.website && data.website.length > 0) {
        errors.push('Spam detected');
    }

    return errors;
}

function validateField(input) {
    const name = input.name;
    const value = input.value;
    let error = null;

    switch (name) {
        case 'name':
            if (!value || value.trim().length < 2) {
                error = 'Name is required';
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                error = 'Valid email is required';
            }
            break;
        case 'message':
            if (!value || value.trim().length < 10) {
                error = 'Message must be at least 10 characters';
            }
            break;
    }

    if (error) {
        input.classList.add('error');
        showFieldError(input, error);
    } else {
        input.classList.remove('error');
        clearFieldError(input);
    }
}

function showFieldError(input, message) {
    clearFieldError(input);
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = message;
    input.parentNode.appendChild(error);
}

function clearFieldError(input) {
    const existing = input.parentNode.querySelector('.field-error');
    if (existing) existing.remove();
    input.classList.remove('error');
}

function showFormErrors(form, errors) {
    removeFormMessages(form);

    const container = document.createElement('div');
    container.className = 'form-errors';
    container.setAttribute('role', 'alert');
    container.innerHTML = errors.map(e => `<p>${escapeHtml(e)}</p>`).join('');

    form.prepend(container);
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showFormSuccess(form, message) {
    removeFormMessages(form);

    const container = document.createElement('div');
    container.className = 'form-success';
    container.setAttribute('role', 'status');
    container.textContent = message;

    form.prepend(container);
}

function removeFormMessages(form) {
    form.querySelectorAll('.form-errors, .form-success').forEach(el => el.remove());
}
```

---

## TASK 4: Newsletter Subscription

```javascript
// ========================================
// NEWSLETTER
// ========================================

function initNewsletterForms() {
    const forms = document.querySelectorAll('.newsletter-form, .newsletter-form-compact');

    forms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });
}

async function handleNewsletterSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const button = form.querySelector('button');

    // Validate
    if (!isValidEmail(email)) {
        showNewsletterMessage(form, 'Please enter a valid email address', 'error');
        emailInput.focus();
        return;
    }

    // Disable
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Subscribing...';

    try {
        // Get form action (set by Qwen's research - Buttondown, Mailchimp, etc.)
        const action = form.getAttribute('action');

        if (action && action !== '#') {
            const formData = new FormData(form);
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) throw new Error('Subscription failed');
        } else {
            // Simulate for demo
            await simulateSubmit();
        }

        showNewsletterMessage(form, 'Welcome to the movement! Check your inbox.', 'success');
        emailInput.value = '';

        // Track
        if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup');
        }

    } catch (err) {
        console.error('Newsletter error:', err);
        showNewsletterMessage(form, 'Subscription failed. Please try again.', 'error');
    } finally {
        button.disabled = false;
        button.textContent = originalText;
    }
}

function showNewsletterMessage(form, message, type) {
    // Remove existing
    const parent = form.parentElement;
    const existing = parent.querySelector('.newsletter-message');
    if (existing) existing.remove();

    // Create new
    const msg = document.createElement('p');
    msg.className = `newsletter-message ${type}`;
    msg.textContent = message;
    msg.setAttribute('role', type === 'error' ? 'alert' : 'status');

    form.after(msg);

    // Auto-remove success messages
    if (type === 'success') {
        setTimeout(() => msg.remove(), 5000);
    }
}
```

---

## TASK 5: Blog Filters

```javascript
// ========================================
// BLOG FILTERS
// ========================================

function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.blog-card[data-tags]');

    if (!filterBtns.length || !posts.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter posts
            posts.forEach(post => {
                const tags = post.dataset.tags?.split(',') || [];

                if (filter === 'all' || tags.includes(filter)) {
                    post.style.display = '';
                    post.classList.add('fade-in');
                    requestAnimationFrame(() => post.classList.add('visible'));
                } else {
                    post.style.display = 'none';
                    post.classList.remove('visible');
                }
            });

            // Update URL without reload
            const url = new URL(window.location);
            if (filter === 'all') {
                url.searchParams.delete('filter');
            } else {
                url.searchParams.set('filter', filter);
            }
            history.replaceState(null, '', url);
        });
    });

    // Check URL for initial filter
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter');
    if (initialFilter) {
        const btn = document.querySelector(`.filter-btn[data-filter="${initialFilter}"]`);
        if (btn) btn.click();
    }
}
```

---

## TASK 6: Reading Time Calculator

```javascript
// ========================================
// READING TIME
// ========================================

function initReadingTime() {
    const content = document.querySelector('.post-content');
    const display = document.querySelector('.post-reading-time');

    if (!content || !display) return;

    const text = content.textContent || content.innerText;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Average reading speed

    display.textContent = `${minutes} min read`;
}
```

---

## TASK 7: Share Buttons

```javascript
// ========================================
// SHARE BUTTONS
// ========================================

function initShareButtons() {
    const shareLinks = document.querySelectorAll('.share-link');

    if (!shareLinks.length) return;

    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    shareLinks.forEach(link => {
        const platform = link.dataset.platform;

        link.addEventListener('click', (e) => {
            e.preventDefault();

            let shareUrl;

            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
                    break;
                case 'mastodon':
                    // Prompt for instance
                    const instance = prompt('Enter your Mastodon instance (e.g., mastodon.social):');
                    if (instance) {
                        shareUrl = `https://${instance}/share?text=${pageTitle}%20${pageUrl}`;
                    }
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
                    break;
                case 'copy':
                    copyToClipboard(window.location.href);
                    showCopyFeedback(link);
                    return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

function showCopyFeedback(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');

    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2000);
}
```

---

## TASK 8: Scroll Effects & Animations

```javascript
// ========================================
// SCROLL EFFECTS
// ========================================

function initScrollEffects() {
    // Parallax for hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            heroImage.style.transform = `translateY(${scroll * 0.3}px)`;
        }, { passive: true });
    }
}

function initAnimations() {
    // Intersection Observer for fade-in elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}
```

---

## TASK 9: Smooth Scroll

```javascript
// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();

                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL
                history.pushState(null, '', targetId);
            }
        });
    });
}
```

---

## TASK 10: Lazy Loading

```javascript
// ========================================
// LAZY LOADING
// ========================================

function initLazyLoading() {
    // Native lazy loading fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
        // Native support exists, nothing to do
        return;
    }

    // Fallback with IntersectionObserver
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.removeAttribute('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}
```

---

## TASK 11: Utility Functions

```javascript
// ========================================
// UTILITIES
// ========================================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function simulateSubmit(delay = 1000) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

---

## TASK 12: Load More Posts (Blog)

```javascript
// ========================================
// LOAD MORE
// ========================================

function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    if (!loadMoreBtn) return;

    const hiddenPosts = document.querySelectorAll('.blog-card.hidden');

    if (hiddenPosts.length === 0) {
        loadMoreBtn.style.display = 'none';
        return;
    }

    let currentlyVisible = 0;
    const postsPerLoad = 6;

    loadMoreBtn.addEventListener('click', () => {
        const postsToShow = Array.from(hiddenPosts).slice(currentlyVisible, currentlyVisible + postsPerLoad);

        postsToShow.forEach((post, index) => {
            post.classList.remove('hidden');
            post.style.animationDelay = `${index * 0.1}s`;
            post.classList.add('fade-in', 'visible');
        });

        currentlyVisible += postsPerLoad;

        if (currentlyVisible >= hiddenPosts.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
}
```

---

## TASK 13: Additional CSS for JS States

Add to Codex's list - these CSS rules support JS functionality:

```css
/* JS-dependent states */
body.nav-open {
    overflow: hidden;
}

.field-error {
    display: block;
    color: var(--error-color);
    font-size: 0.8rem;
    margin-top: 0.375rem;
}

.form-group input.error,
.form-group textarea.error,
.form-group select.error {
    border-color: var(--error-color);
}

.share-link.copied {
    background: var(--success-color);
    border-color: var(--success-color);
    color: #000;
}

.blog-card.hidden {
    display: none;
}

.loading {
    position: relative;
    pointer-events: none;
}

.loading::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
    border-radius: inherit;
}
```

---

## DELIVERABLES CHECKLIST

- [ ] Navigation (mobile toggle, scroll behavior, active link)
- [ ] Contact form validation (field-level + form-level)
- [ ] Newsletter subscription (multiple forms)
- [ ] Blog filters (URL state management)
- [ ] Reading time calculator
- [ ] Share buttons (Twitter, Mastodon, LinkedIn, Copy)
- [ ] Scroll effects (parallax, sticky nav)
- [ ] Fade-in animations (IntersectionObserver)
- [ ] Smooth scroll
- [ ] Lazy loading fallback
- [ ] Load more posts
- [ ] Utility functions

---

## INTEGRATION NOTES

After Qwen research completes:
1. Update form `action` attributes with actual endpoints
2. Replace `simulateSubmit()` calls with real API calls
3. Add any required hidden fields for spam protection

**Status:** COMPLETED - navigation, forms, filters, and utility JS integrated
