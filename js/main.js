document.addEventListener('DOMContentLoaded', () => {
    console.log('Projekt: Kindergarten initialized.');

    initCalculator();
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

    // Update display values on input
    foodInput.addEventListener('input', (e) => foodVal.textContent = `${e.target.value}%`);
    energyInput.addEventListener('input', (e) => energyVal.textContent = `${e.target.value}%`);
    communityInput.addEventListener('input', (e) => communityVal.textContent = `${e.target.value}h`);

    calculateBtn.addEventListener('click', () => {
        const food = parseInt(foodInput.value);
        const energy = parseInt(energyInput.value);
        const community = parseInt(communityInput.value);
        
        // Normalize community hours (max 40) to 100 scale
        const communityScore = Math.min((community / 40) * 100, 100);
        
        // Weighted Average
        // Food: 35%, Energy: 35%, Community: 30%
        const totalScore = Math.round((food * 0.35) + (energy * 0.35) + (communityScore * 0.30));

        // Animate Result
        resultBox.classList.remove('hidden');
        resultBox.classList.add('visible');
        
        animateScore(scoreNum, totalScore);
        scoreMsg.textContent = getInterpretation(totalScore);
        scoreMsg.style.color = getScoreColor(totalScore);
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

function getInterpretation(score) {
    if (score < 30) return "Seedling Phase. Begin by planting a window garden and meeting one neighbor.";
    if (score < 60) return "Sprouting Community. You have the basics. Focus on energy resilience.";
    if (score < 85) return "Canopy Level. Highly resilient. Consider sharing resources with other nodes.";
    return "Utopian Node. You are a fully autarkic, regenerative paradise.";
}

function getScoreColor(score) {
    if (score < 30) return "#e0e0e0";
    if (score < 60) return "#ffd700"; // Gold
    if (score < 85) return "#4caf50"; // Green
    return "#00e676"; // Bright Green
}