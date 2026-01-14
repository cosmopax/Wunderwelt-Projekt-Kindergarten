document.addEventListener('DOMContentLoaded', () => {
    console.log('Projekt: Kindergarten initialized.');

    initCalculator();
    initResourceMap();
    initExpandableCards();
    initSmoothScroll();
    initParallaxEffect();
    initFAQ();
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
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Subtle parallax effect on hero image
function initParallaxEffect() {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        heroImage.style.transform = `translateY(${parallax}px) scale(1.1)`;
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
