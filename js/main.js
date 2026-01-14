document.addEventListener('DOMContentLoaded', () => {
    console.log('Projekt: Kindergarten initialized.');

    initCalculator();
    initResourceMap();
    initExpandableCards();
    initSmoothScroll();
    initParallaxEffect();
});

function initCalculator() {
    const foodInput = document.getElementById('food-production');
    const energyInput = document.getElementById('energy-indep');
    const communityInput = document.getElementById('community-hours');
    
    const foodVal = document.getElementById('food-val');
    const energyVal = document.getElementById('energy-val');
    const communityVal = document.getElementById('community-val');
    
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('result-display');
    const scoreNum = document.getElementById('score-number');
    const scoreMsg = document.getElementById('score-message');

    if (!foodInput) return;

    // Update display values on input with real-time feedback
    foodInput.addEventListener('input', (e) => {
        foodVal.textContent = `${e.target.value}%`;
        updateSliderProgress(foodInput);
    });
    energyInput.addEventListener('input', (e) => {
        energyVal.textContent = `${e.target.value}%`;
        updateSliderProgress(energyInput);
    });
    communityInput.addEventListener('input', (e) => {
        communityVal.textContent = `${e.target.value}h`;
        updateSliderProgress(communityInput);
    });

    calculateBtn.addEventListener('click', () => {
        const food = parseInt(foodInput.value);
        const energy = parseInt(energyInput.value);
        const community = parseInt(communityInput.value);
        
        const communityScore = Math.min((community / 40) * 100, 100);
        const totalScore = Math.round((food * 0.35) + (energy * 0.35) + (communityScore * 0.30));

        resultBox.classList.remove('hidden');
        resultBox.classList.add('visible');
        
        animateScore(scoreNum, totalScore);
        scoreMsg.textContent = getInterpretation(totalScore);
        scoreMsg.style.color = getScoreColor(totalScore);
        
        // Add visual feedback
        calculateBtn.textContent = '✓ Calculated!';
        setTimeout(() => {
            calculateBtn.textContent = 'Calculate Score';
        }, 2000);
    });
}

function updateSliderProgress(slider) {
    const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #ffd700 0%, #ffd700 ${percent}%, rgba(255, 255, 255, 0.1) ${percent}%, rgba(255, 255, 255, 0.1) 100%)`;
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

function getInterpretation(score) {
    if (score < 30) return "Seedling Phase. Begin by planting a window garden and meeting one neighbor.";
    if (score < 60) return "Sprouting Community. You have the basics. Focus on energy resilience.";
    if (score < 85) return "Canopy Level. Highly resilient. Consider sharing resources with other nodes.";
    return "Utopian Node. You are a fully autarkic, regenerative paradise.";
}

function getScoreColor(score) {
    if (score < 30) return "#e0e0e0";
    if (score < 60) return "#ffd700"; 
    if (score < 85) return "#4caf50"; 
    return "#00e676"; 
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
        energy: '#FF6B6B',
        food: '#5FAD61',
        social: '#FFE66D',
        tech: '#4ECDC4'
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