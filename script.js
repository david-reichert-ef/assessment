document.addEventListener('DOMContentLoaded', function () {
    const sortableContainers = document.querySelectorAll('.sortable-container');

    sortableContainers.forEach(container => {
        Sortable.create(container, { animation: 150 });
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
            <div class="result-item">Doer: ${totalScores.A} points</div>
            <div class="result-item">Thinker: ${totalScores.B} points</div>
            <div class="result-item">Feeler: ${totalScores.C} points</div>
            <div class="result-item">Planner: ${totalScores.D} points</div>
        `;
    });
});
