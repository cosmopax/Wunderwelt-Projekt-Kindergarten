document.addEventListener('DOMContentLoaded', () => {
    const playground = document.getElementById('playground');
    const token = document.getElementById('draggable-token');
    const svgLayer = document.getElementById('connection-layer');
    const capWarning = document.getElementById('cap-warning');
    const giniDisplay = document.getElementById('gini-val');
    const riskDisplay = document.getElementById('risk-val');

    // Simulation State
    const nodes = [
        { id: 'user', name: 'You', type: 'user', x: 50, y: 80, power: 1, avatar: '👤' },
        { id: 'peer1', name: 'Engineer', type: 'expert', x: 20, y: 30, power: 5, avatar: '🔧' },
        { id: 'peer2', name: 'Biologist', type: 'expert', x: 50, y: 20, power: 3, avatar: '🌿' },
        { id: 'peer3', name: 'Teacher', type: 'expert', x: 80, y: 30, power: 4, avatar: '📚' },
        { id: 'peer4', name: 'Neighbor', type: 'citizen', x: 85, y: 70, power: 1, avatar: '👋' }
    ];

    let currentDelegation = null;
    const MAX_POWER_CAP = 10; // Oligarchy Cap

    // Initialize Nodes
    function initNodes() {
        nodes.forEach(node => {
            const el = document.createElement('div');
            el.className = `node ${node.type}`;
            el.id = node.id;
            el.style.left = `${node.x}%`;
            el.style.top = `${node.y}%`;
            el.innerHTML = `
                <div class="node-avatar">${node.avatar}</div>
                <div class="node-name">${node.name}</div>
                <div class="node-power">${node.power} VP</div>
            `;
            
            // Drop Zone Logic
            el.addEventListener('dragover', (e) => {
                e.preventDefault(); // Allow drop
                if(node.id !== 'user') el.style.transform = 'scale(1.2)';
            });

            el.addEventListener('dragleave', () => {
                el.style.transform = '';
            });

            el.addEventListener('drop', (e) => {
                e.preventDefault();
                el.style.transform = '';
                handleDelegation(node.id);
            });

            playground.appendChild(el);
        });
    }

    // Drag Logic
    token.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'vote');
        token.style.opacity = '0.5';
    });

    token.addEventListener('dragend', () => {
        token.style.opacity = '1';
    });

    // Delegation Handler
    function handleDelegation(targetId) {
        if (targetId === 'user') return;
        if (currentDelegation === targetId) return;

        // Reset previous delegation effects
        if (currentDelegation) {
            updateNodePower(currentDelegation, -1);
            removeConnection();
        }

        // Apply new
        currentDelegation = targetId;
        const targetNode = nodes.find(n => n.id === targetId);
        
        // Cap Check
        if (targetNode.power + 1 > MAX_POWER_CAP) {
            capWarning.classList.add('visible');
            setTimeout(() => capWarning.classList.remove('visible'), 3000);
            return; // Delegation rejected by protocol
        }

        updateNodePower(targetId, 1);
        drawConnection('user', targetId);
        updateStats();
        
        // Visual Feedback
        const tokenContainer = document.querySelector('.token-container');
        tokenContainer.innerHTML = `<p style="color:var(--accent-green); font-weight:bold;">Vote Delegated to ${targetNode.name}</p>`;
    }

    function updateNodePower(id, change) {
        const node = nodes.find(n => n.id === id);
        node.power += change;
        const el = document.getElementById(id);
        el.querySelector('.node-power').textContent = `${node.power} VP`;
        
        // Size Pulse
        const scale = 1 + (node.power * 0.05);
        el.style.width = `${100 * scale}px`;
        el.style.height = `${100 * scale}px`;
    }

    function drawConnection(sourceId, targetId) {
        const source = nodes.find(n => n.id === sourceId);
        const target = nodes.find(n => n.id === targetId);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', `${source.x}%`);
        line.setAttribute('y1', `${source.y}%`);
        line.setAttribute('x2', `${target.x}%`);
        line.setAttribute('y2', `${target.y}%`);
        line.setAttribute('stroke', '#FFD700');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '5,5');
        line.classList.add('fade-in');
        
        // Animate Line
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('from', '100');
        animate.setAttribute('to', '0');
        animate.setAttribute('dur', '2s');
        animate.setAttribute('repeatCount', 'indefinite');
        
        line.appendChild(animate);
        svgLayer.appendChild(line);
    }

    function removeConnection() {
        svgLayer.innerHTML = '';
    }

    function updateStats() {
        // Simple Gini calc simulation
        const powers = nodes.map(n => n.power);
        const max = Math.max(...powers);
        
        if (max > 8) {
            riskDisplay.textContent = "High (Oligarchy Warning)";
            riskDisplay.style.color = "#ff4444";
        } else if (max > 5) {
            riskDisplay.textContent = "Moderate";
            riskDisplay.style.color = "#FFD700";
        } else {
            riskDisplay.textContent = "Low (Healthy)";
            riskDisplay.style.color = "#4ade80";
        }
    }

    window.resetSimulation = function() {
        location.reload();
    };

    initNodes();
});
