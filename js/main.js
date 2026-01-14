document.addEventListener('DOMContentLoaded', () => {
    console.log('Wunderwelt initialized.');

    initNavigation();
    initScrollEffects();
    initAnimations();
    initCalculator();
    initResourceMap();
    initExpandableCards();
    initFAQ();
    initContactForm();
    initNewsletterForms();
    initBlogFilters();
    initReadingTime();
    initShareButtons();
    initSmoothScroll();
    initLazyLoading();
    initLoadMore();
});

function initCalculator() {
    const sliders = [
        { id: 'food-production', valueId: 'food-val', unit: '%' },
        { id: 'energy-indep', valueId: 'energy-val', unit: '%' },
        { id: 'water-self', valueId: 'water-val', unit: '%' },
        { id: 'waste-loop', valueId: 'waste-val', unit: '%' },
        { id: 'community-hours', valueId: 'community-val', unit: 'h' }
    ];

    const primaryInput = document.getElementById(sliders[0].id);
    if (!primaryInput) return;

    sliders.forEach((slider) => {
        const input = document.getElementById(slider.id);
        const valueEl = document.getElementById(slider.valueId);
        const updateValue = () => {
            valueEl.textContent = `${input.value}${slider.unit}`;
            updateSliderProgress(input);
        };
        input.addEventListener('input', updateValue);
        updateValue();
    });

    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('result-display');
    const scoreNum = document.getElementById('score-number');
    const scoreMsg = document.getElementById('score-message');
    const scoreLabel = document.getElementById('score-label');
    const recommendationsList = document.getElementById('recommendations-list');

    const breakdown = {
        energy: {
            bar: document.getElementById('bar-energy'),
            value: document.getElementById('bar-energy-val')
        },
        food: {
            bar: document.getElementById('bar-food'),
            value: document.getElementById('bar-food-val')
        },
        water: {
            bar: document.getElementById('bar-water'),
            value: document.getElementById('bar-water-val')
        },
        waste: {
            bar: document.getElementById('bar-waste'),
            value: document.getElementById('bar-waste-val')
        },
        community: {
            bar: document.getElementById('bar-community'),
            value: document.getElementById('bar-community-val')
        }
    };

    calculateBtn.addEventListener('click', () => {
        const food = parseInt(document.getElementById('food-production').value, 10);
        const energy = parseInt(document.getElementById('energy-indep').value, 10);
        const water = parseInt(document.getElementById('water-self').value, 10);
        const waste = parseInt(document.getElementById('waste-loop').value, 10);
        const community = parseInt(document.getElementById('community-hours').value, 10);

        const communityScore = Math.min((community / 40) * 100, 100);
        const baseScore = (food + energy + water + waste) / 4;
        const totalScore = Math.min(Math.round(baseScore * (1 + (communityScore / 100) * 0.2)), 100);

        resultBox.classList.remove('hidden');
        resultBox.classList.add('visible');
        
        animateScore(scoreNum, totalScore);
        scoreMsg.textContent = getInterpretation(totalScore);
        scoreMsg.style.color = getScoreColor(totalScore);
        if (scoreLabel) {
            scoreLabel.textContent = `Status: ${getRating(totalScore)}`;
        }

        updateBreakdown({
            energy,
            food,
            water,
            waste,
            community: communityScore
        }, breakdown);

        updateRecommendations(recommendationsList, getRecommendations({
            food,
            energy,
            water,
            waste,
            community: communityScore
        }));
        
        // Add visual feedback
        calculateBtn.textContent = '✓ Calculated!';
        setTimeout(() => {
            calculateBtn.textContent = 'Calculate Score';
        }, 2000);
    });
}

function updateSliderProgress(slider) {
    const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #FFD700 0%, #FFD700 ${percent}%, rgba(255, 255, 255, 0.1) ${percent}%, rgba(255, 255, 255, 0.1) 100%)`;
}

function updateBreakdown(values, elements) {
    Object.keys(values).forEach((key) => {
        const entry = elements[key];
        if (!entry || !entry.bar || !entry.value) return;
        const clamped = Math.max(0, Math.min(100, values[key]));
        entry.bar.style.width = `${clamped}%`;
        entry.value.textContent = `${Math.round(clamped)}%`;
    });
}

function updateRecommendations(listEl, recommendations) {
    if (!listEl) return;
    listEl.innerHTML = '';
    recommendations.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        listEl.appendChild(li);
    });
}

function animateScore(element, target) {
    let current = 0;
    const increment = target > 0 ? Math.ceil(target / 50) : 1;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current;
    }, 20);
}

function getRating(score) {
    if (score < 25) return "Dependent";
    if (score < 50) return "Emerging";
    if (score < 75) return "Resilient";
    return "Autarkic";
}

function getInterpretation(score) {
    if (score < 25) return "Dependent. Start with energy basics and a shared food pilot.";
    if (score < 50) return "Emerging. Stabilize local loops and expand cooperative capacity.";
    if (score < 75) return "Resilient. Strengthen water and waste recovery, then share surplus.";
    return "Autarkic. A regenerative node ready to mentor neighboring clusters.";
}

function getScoreColor(score) {
    if (score < 25) return "#9ca3af"; // Muted text
    if (score < 50) return "#FFD700"; // Gold
    if (score < 75) return "#4ade80"; // Neon Green
    return "#22d3ee"; // Cyan for Autarkic
}

function getRecommendations(metrics) {
    const recommendations = [];
    if (metrics.food < 50) {
        recommendations.push("Establish vertical farming, rooftop planters, and aquaponic pilots.");
    }
    if (metrics.energy < 50) {
        recommendations.push("Invest in solar rooftops, micro-wind, and shared battery storage.");
    }
    if (metrics.water < 60) {
        recommendations.push("Add rain harvesting, greywater reuse, and on-site filtration.");
    }
    if (metrics.waste < 40) {
        recommendations.push("Build repair cafes, compost hubs, and materials recovery points.");
    }
    if (metrics.community < 60) {
        recommendations.push("Run weekly skill shares and launch a local delegation registry.");
    }
    if (recommendations.length === 0) {
        recommendations.push("Maintain performance and mentor adjacent communities.");
    }
    return recommendations;
}

function initResourceMap() {
    const svg = document.getElementById('node-svg');
    if (!svg) return;

    const width = 800;
    const height = 500;

    const nodes = [
        { id: 'center', x: width/2, y: height/2, type: 'tech', label: 'Fab Lab & Hub', r: 30 },
        { id: 'energy1', x: 150, y: 150, type: 'energy', label: 'Solar Array', r: 20 },
        { id: 'energy2', x: 650, y: 350, type: 'energy', label: 'Battery Storage', r: 20 },
        { id: 'food1', x: 200, y: 350, type: 'food', label: 'Vertical Farm', r: 25 },
        { id: 'food2', x: 600, y: 150, type: 'food', label: 'Aquaponics', r: 25 },
        { id: 'social1', x: 400, y: 100, type: 'social', label: 'Commons Garden', r: 20 },
        { id: 'social2', x: 400, y: 400, type: 'social', label: 'Play Zone', r: 20 },
    ];

    const connections = [
        ['center', 'energy1'], ['center', 'energy2'],
        ['center', 'food1'], ['center', 'food2'],
        ['center', 'social1'], ['center', 'social2'],
        ['food1', 'social2'], ['food2', 'social1'],
        ['energy1', 'food1'], ['energy2', 'food2']
    ];

    const colors = {
        energy: '#ffaa00', // Amber/Orange
        food: '#4ade80',   // Neon Green
        social: '#FFD700', // Gold
        tech: '#22d3ee'    // Cyan
    };

    // Draw connections with animation
    connections.forEach((conn, index) => {
        const n1 = nodes.find(n => n.id === conn[0]);
        const n2 = nodes.find(n => n.id === conn[1]);
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", n1.x);
        line.setAttribute("y1", n1.y);
        line.setAttribute("x2", n2.x);
        line.setAttribute("y2", n2.y);
        line.setAttribute("stroke", "rgba(255,255,255,0.1)");
        line.setAttribute("stroke-width", "2");
        line.setAttribute("class", "connection");
        line.style.strokeDasharray = "5,5";
        line.style.animation = `dash 20s linear infinite`;
        line.style.animationDelay = `${index * 0.2}s`;
        svg.appendChild(line);
    });

    // Draw nodes with enhanced interactivity
    nodes.forEach(node => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", "node");
        g.style.cursor = "pointer";

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", node.r);
        circle.setAttribute("fill", colors[node.type]);
        circle.setAttribute("opacity", "0.8");
        circle.style.transition = "all 0.3s ease";
        
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y + node.r + 20);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#fff");
        text.setAttribute("font-size", "12");
        text.setAttribute("font-weight", "600");
        text.textContent = node.label;

        g.appendChild(circle);
        g.appendChild(text);
        
        g.addEventListener('mouseenter', () => {
            circle.setAttribute("opacity", "1");
            circle.setAttribute("r", node.r + 5);
            text.setAttribute("font-size", "14");
            text.setAttribute("fill", colors[node.type]);
        });
        
        g.addEventListener('mouseleave', () => {
            circle.setAttribute("opacity", "0.8");
            circle.setAttribute("r", node.r);
            text.setAttribute("font-size", "12");
            text.setAttribute("fill", "#fff");
        });

        g.addEventListener('click', () => {
            showNodeInfo(node);
        });

        svg.appendChild(g);
    });

    // Pulse animation for center node
    const centerCircle = svg.querySelector(`circle[cx="${width/2}"]`);
    if (centerCircle) {
        setInterval(() => {
            centerCircle.setAttribute("r", 35);
            setTimeout(() => centerCircle.setAttribute("r", 30), 500);
        }, 2000);
    }
}

function showNodeInfo(node) {
    const info = {
        'center': 'Central fabrication hub with 3D printers, laser cutters, and community workshop space.',
        'energy1': 'Solar panel array generating 50kW peak capacity for local grid.',
        'energy2': 'Community battery storage system enabling 24/7 renewable energy.',
        'food1': 'Vertical hydroponic farm producing 2 tons of vegetables monthly.',
        'food2': 'Closed-loop aquaponics: fish + plants in symbiotic ecosystem.',
        'social1': 'Community garden and gathering space for events and education.',
        'social2': 'Car-free play zone with art installations and performance space.'
    };
    
    alert(`${node.label}\n\n${info[node.id] || 'Collaborative resource node'}`);
}

// Expandable principle cards
function initExpandableCards() {
    const cards = document.querySelectorAll('.principle-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}

// Smooth scroll for anchor links
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
            }
        });
    });
}

// Add SVG dash animation CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes dash {
        to {
            stroke-dashoffset: -100;
        }
    }
`;
document.head.appendChild(style);
// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Navigation
function initNavigation() {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (!nav) return;

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('active');
            document.body.classList.toggle('nav-open');

            const isOpen = links.classList.contains('active');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                links.classList.remove('active');
                document.body.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', false);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && links.classList.contains('active')) {
                toggle.classList.remove('active');
                links.classList.remove('active');
                document.body.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', false);
            }
        });
    }

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

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

// Scroll effects
function initScrollEffects() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            heroImage.style.transform = `translateY(${scroll * 0.3}px) scale(1.05)`;
        }, { passive: true });
    }
}

function initAnimations() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        return;
    }

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

// Contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleContactSubmit);

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

    const errors = validateContactForm(data);
    if (errors.length > 0) {
        showFormErrors(form, errors);
        return;
    }

    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('loading');

    try {
        const action = form.getAttribute('action');
        if (action && action !== '#') {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) throw new Error('Submission failed');
        } else {
            await simulateSubmit();
        }

        showFormSuccess(form, 'Message sent successfully. We will be in touch soon.');
        form.reset();
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
        errors.push('Please enter your name (at least 2 characters).');
    }

    if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address.');
    }

    if (!data.subject) {
        errors.push('Please select a subject.');
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters).');
    }

    if (data.website && data.website.length > 0) {
        errors.push('Spam detected.');
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
                error = 'Name is required.';
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                error = 'Valid email is required.';
            }
            break;
        case 'message':
            if (!value || value.trim().length < 10) {
                error = 'Message must be at least 10 characters.';
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

// Newsletter
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

    if (!isValidEmail(email)) {
        showNewsletterMessage(form, 'Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Subscribing...';

    try {
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
            await simulateSubmit();
        }

        showNewsletterMessage(form, 'Welcome to the movement. Check your inbox.', 'success');
        emailInput.value = '';
    } catch (err) {
        console.error('Newsletter error:', err);
        showNewsletterMessage(form, 'Subscription failed. Please try again.', 'error');
    } finally {
        button.disabled = false;
        button.textContent = originalText;
    }
}

function showNewsletterMessage(form, message, type) {
    const parent = form.parentElement;
    const existing = parent.querySelector('.newsletter-message');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = `newsletter-message ${type}`;
    msg.textContent = message;
    msg.setAttribute('role', type === 'error' ? 'alert' : 'status');

    form.after(msg);

    if (type === 'success') {
        setTimeout(() => msg.remove(), 5000);
    }
}

// Blog features
function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.blog-card[data-tags]');

    if (!filterBtns.length || !posts.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

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

            const url = new URL(window.location);
            if (filter === 'all') {
                url.searchParams.delete('filter');
            } else {
                url.searchParams.set('filter', filter);
            }
            history.replaceState(null, '', url);
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter');
    if (initialFilter) {
        const btn = document.querySelector(`.filter-btn[data-filter="${initialFilter}"]`);
        if (btn) btn.click();
    }
}

function initReadingTime() {
    const content = document.querySelector('.post-content');
    const display = document.querySelector('.post-reading-time');

    if (!content || !display) return;

    const text = content.textContent || content.innerText;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);

    display.textContent = `${minutes} min read`;
}

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
                case 'mastodon': {
                    const instance = prompt('Enter your Mastodon instance (e.g., mastodon.social):');
                    if (instance) {
                        shareUrl = `https://${instance}/share?text=${pageTitle}%20${pageUrl}`;
                    }
                    break;
                }
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
                    break;
                case 'copy':
                    copyToClipboard(window.location.href);
                    showCopyFeedback(link);
                    return;
                default:
                    shareUrl = '';
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

// Lazy loading fallback
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        return;
    }

    const lazyImages = document.querySelectorAll('img[loading=\"lazy\"]');
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

// Load more posts
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

// Utilities
function isValidEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function simulateSubmit(delay = 1000) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
