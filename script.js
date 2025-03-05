document.addEventListener('DOMContentLoaded', function () {
    const sortableContainers = document.querySelectorAll('.sortable-container');

    sortableContainers.forEach((container, index) => {
        const savedOrder = JSON.parse(localStorage.getItem(`sortableOrder-${index}`)) || [];
        const items = Array.from(container.children);
    
        // Reorder elements based on saved order
        savedOrder.forEach(text => {
            const item = items.find(el => el.textContent.trim() === text.trim());
            if (item) container.appendChild(item);
        });
    
        // Initialize Sortable.js
        Sortable.create(container, {
            animation: 150,
            onEnd: () => localStorage.setItem(`sortableOrder-${index}`, JSON.stringify(
                Array.from(container.children).map(el => el.textContent.trim())
            ))
        });
    });    

    document.getElementById('submit-btn').addEventListener('click', function () {
        const calculateScores = (containers) => {
            const scores = { A: 0, B: 0, C: 0, D: 0 };
            containers.forEach(container => {
                const items = Array.from(container.children);
                items.forEach((item, index) => {
                    const category = item.getAttribute('data-category');
                    scores[category] += (items.length - index); // 4 points for the top item, 3 for the next, etc.
                });
            });
            return scores;
        };

        const totalScores = calculateScores(sortableContainers);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <div class="result-item ${totalScores.A === Math.max(...Object.values(totalScores))?"primaryLeadershipStyle":"secondaryLeadershipStyle"}">Doer: ${totalScores.A} points</div>
            <div class="result-item ${totalScores.B === Math.max(...Object.values(totalScores))?"primaryLeadershipStyle":"secondaryLeadershipStyle"}">Thinker: ${totalScores.B} points</div>
            <div class="result-item ${totalScores.C === Math.max(...Object.values(totalScores))?"primaryLeadershipStyle":"secondaryLeadershipStyle"}">Feeler: ${totalScores.C} points</div>
            <div class="result-item ${totalScores.D === Math.max(...Object.values(totalScores))?"primaryLeadershipStyle":"secondaryLeadershipStyle"}">Planner: ${totalScores.D} points</div>
            <a href="./LeadershipStyleDescriptions.pdf" target="_blank" class="button">Explore your leadership style</a>
        `;
    });
});
