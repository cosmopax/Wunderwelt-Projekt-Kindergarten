# COPILOT AGENT BRIEFING: JavaScript Functionality

**Priority:** HIGH - Third wave after structure and styling.
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

## Mission

Add JavaScript interactivity to all new components. Form validation, newsletter subscription handling, blog filtering, and smooth UX enhancements. Extend `js/main.js`.

## Constraints

- Vanilla JS only - NO jQuery, NO frameworks
- Progressive enhancement - site must work without JS
- Accessible - keyboard navigation, ARIA labels
- Use event delegation where sensible

---

## TASK 1: Contact Form Validation

Add to `js/main.js`:

```javascript
// Contact Form Validation
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validation
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters');
        }

        if (!isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters');
        }

        if (errors.length > 0) {
            showFormErrors(errors);
            return;
        }

        // Submit handling
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Simulate submission (replace with actual endpoint)
            await simulateSubmit(data);
            showFormSuccess('Message sent! We will respond soon.');
            form.reset();
        } catch (err) {
            showFormErrors(['Failed to send. Please try again.']);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormErrors(errors) {
    removeFormMessages();
    const container = document.createElement('div');
    container.className = 'form-errors';
    container.innerHTML = errors.map(e => `<p>${e}</p>`).join('');
    document.getElementById('contact-form').prepend(container);
}

function showFormSuccess(message) {
    removeFormMessages();
    const container = document.createElement('div');
    container.className = 'form-success';
    container.textContent = message;
    document.getElementById('contact-form').prepend(container);
}

function removeFormMessages() {
    document.querySelectorAll('.form-errors, .form-success').forEach(el => el.remove());
}

function simulateSubmit(data) {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
```

---

## TASK 2: Newsletter Subscription Handler

```javascript
// Newsletter Subscription
function initNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form');

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const button = form.querySelector('button');

            if (!isValidEmail(email)) {
                showNewsletterMessage(form, 'Please enter a valid email', 'error');
                return;
            }

            button.disabled = true;
            button.textContent = 'Subscribing...';

            try {
                // Simulate API call (Qwen will research actual service)
                await simulateSubscribe(email);
                showNewsletterMessage(form, 'Welcome to the movement!', 'success');
                emailInput.value = '';
            } catch (err) {
                showNewsletterMessage(form, 'Subscription failed. Try again.', 'error');
            } finally {
                button.disabled = false;
                button.textContent = 'Subscribe';
            }
        });
    });
}

function simulateSubscribe(email) {
    console.log('Newsletter subscription:', email);
    return new Promise((resolve) => setTimeout(resolve, 800));
}

function showNewsletterMessage(form, message, type) {
    const existing = form.parentElement.querySelector('.newsletter-message');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = `newsletter-message ${type}`;
    msg.textContent = message;
    form.after(msg);

    setTimeout(() => msg.remove(), 5000);
}
```

---

## TASK 3: Smooth Scroll & Active Nav

```javascript
// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Highlight active nav link
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}
```

---

## TASK 4: Blog Filtering (optional enhancement)

```javascript
// Blog tag filtering
function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const posts = document.querySelectorAll('.blog-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            posts.forEach(post => {
                const tags = post.dataset.tags?.split(',') || [];
                if (filter === 'all' || tags.includes(filter)) {
                    post.style.display = '';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
}
```

---

## TASK 5: Intersection Observer for Animations

```javascript
// Enhanced fade-in on scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}
```

---

## TASK 6: Initialize Everything

Update the DOMContentLoaded handler:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Projekt: Kindergarten initialized.');

    initContactForm();
    initNewsletter();
    initSmoothScroll();
    initActiveNav();
    initBlogFilters();
    initScrollAnimations();
});
```

---

## Additional CSS for JS States

Tell Codex to add these to `style.css`:

```css
/* Form messages */
.form-errors {
    background: rgba(255, 100, 100, 0.1);
    border: 1px solid rgba(255, 100, 100, 0.3);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #ff6b6b;
}

.form-success {
    background: rgba(100, 255, 100, 0.1);
    border: 1px solid rgba(100, 255, 100, 0.3);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #6bff6b;
}

.newsletter-message {
    font-size: 0.85rem;
    margin-top: 0.75rem;
}

.newsletter-message.success { color: #6bff6b; }
.newsletter-message.error { color: #ff6b6b; }

.nav-links a.active {
    color: var(--accent-color);
}

/* Scroll animation enhancement */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

---

## Deliverables Checklist

- [ ] Contact form validation
- [ ] Newsletter subscription handler
- [ ] Smooth scroll
- [ ] Active nav highlighting
- [ ] Blog filtering (if filter UI exists)
- [ ] Scroll-triggered animations
- [ ] Main initialization function

---

## Handoff

After completing, signal Mistral to test all forms and document any issues.

**Status:** AWAITING GEMINI + CODEX COMPLETION
