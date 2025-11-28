// Get game ID from URL parameter
function getGameIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Find game by ID
function findGameById(id) {
    return boardGames.find(game => game.id === id);
}

// Populate the page with game details
function populateGameDetails() {
    const gameId = getGameIdFromURL();
    const game = findGameById(gameId);

    if (!game) {
        // If game not found, redirect to home
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${game.title} - Top Board Games`;

    // Populate header
    const gameHeader = document.getElementById('gameHeader');
    gameHeader.innerHTML = `
        <div class="header-background" style="background: linear-gradient(135deg, ${getGradientColors(game.rank)});">
            <div class="header-image-overlay" style="background-image: url('${game.image}');"></div>
            <div class="header-content">
                <div class="header-layout">
                    <div class="header-image-box">
                        <img src="${game.image}" alt="${game.title}" class="detail-game-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="detail-image-fallback">${game.emoji}</div>
                    </div>
                    <div class="header-info">
                        <div class="rank-badge">🏆 Rank #${game.rank}</div>
                        <h1 class="game-title-large">${game.title}</h1>
                        <div class="quick-stats">
                            <span class="quick-stat">👥 ${game.players}</span>
                            <span class="quick-stat">⏱️ ${game.duration}</span>
                            <span class="quick-stat">🧩 ${game.complexity}</span>
                            <span class="quick-stat rating-large">⭐ ${game.rating}/10</span>
                        </div>
                        <div class="header-tags">
                            ${game.tags.map(tag => `<span class="header-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Populate content sections
    document.getElementById('detailedDescription').textContent = game.detailedDescription;
    document.getElementById('howToPlay').textContent = game.howToPlay;
    document.getElementById('whyGreat').textContent = game.whyItsGreat;

    // Populate fun facts
    const funFactsList = document.getElementById('funFactsList');
    funFactsList.innerHTML = game.funFacts.map(fact => `<li class="fun-fact-item">${fact}</li>`).join('');

    // Populate specs
    const specsGrid = document.getElementById('specsGrid');
    specsGrid.innerHTML = `
        <div class="spec-card">
            <div class="spec-icon">👥</div>
            <div class="spec-label">Players</div>
            <div class="spec-value">${game.players}</div>
        </div>
        <div class="spec-card">
            <div class="spec-icon">⏱️</div>
            <div class="spec-label">Duration</div>
            <div class="spec-value">${game.duration}</div>
        </div>
        <div class="spec-card">
            <div class="spec-icon">🧩</div>
            <div class="spec-label">Complexity</div>
            <div class="spec-value">${game.complexity}</div>
        </div>
        <div class="spec-card">
            <div class="spec-icon">⭐</div>
            <div class="spec-label">Rating</div>
            <div class="spec-value">${game.rating}/10</div>
        </div>
    `;

    // Add animation classes
    animateElements();
}

// Get gradient colors based on rank
function getGradientColors(rank) {
    const gradients = [
        '#FF6B6B, #FF8E53',  // Red-Orange
        '#4ECDC4, #44A08D',  // Teal-Green
        '#A78BFA, #7C3AED',  // Purple
        '#F472B6, #EC4899',  // Pink
        '#FB923C, #F97316',  // Orange
        '#FBBF24, #F59E0B',  // Yellow
        '#34D399, #10B981',  // Green
        '#60A5FA, #3B82F6',  // Blue
        '#F472B6, #DB2777',  // Pink-Red
        '#A78BFA, #C084FC'   // Light Purple
    ];
    return gradients[rank - 1] || gradients[0];
}

// Animate elements on page load
function animateElements() {
    const sections = document.querySelectorAll('.content-section, .game-specs');
    sections.forEach((section, index) => {
        section.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
    });
}

// Initialize page when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    populateGameDetails();

    // Add smooth scroll behavior
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

    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header-background');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});

