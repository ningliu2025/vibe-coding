// Top 10 Board Games Data
const boardGames = [
    {
        rank: 1,
        emoji: "🏰",
        title: "Brass: Birmingham",
        players: "2-4 Players",
        duration: "60-120 min",
        complexity: "Heavy",
        rating: "8.6",
        description: "Build networks, develop industries, and navigate the Industrial Revolution in this strategic masterpiece. Every decision matters as you compete to build the most successful business empire.",
        tags: ["Strategy", "Economic", "Industrial Age"]
    },
    {
        rank: 2,
        emoji: "🌌",
        title: "Gloomhaven",
        players: "1-4 Players",
        duration: "60-120 min",
        complexity: "Heavy",
        rating: "8.6",
        description: "A massive tactical combat game in a persistent world of shifting motives. Take on the role of a wandering adventurer with your own special set of skills and explore a dark, mysterious world.",
        tags: ["Adventure", "Fantasy", "Tactical Combat"]
    },
    {
        rank: 3,
        emoji: "🎭",
        title: "Pandemic Legacy: Season 1",
        players: "2-4 Players",
        duration: "60 min",
        complexity: "Medium",
        rating: "8.5",
        description: "Save humanity in this thrilling campaign game. As you play through the months, the game evolves and your decisions permanently shape the game world. Work together to find cures before time runs out!",
        tags: ["Cooperative", "Legacy", "Strategy"]
    },
    {
        rank: 4,
        emoji: "🐉",
        title: "Terraforming Mars",
        players: "1-5 Players",
        duration: "120 min",
        complexity: "Medium",
        rating: "8.4",
        description: "Compete to transform Mars into a habitable planet. Play project cards, build up production, and race to complete milestones and awards while making Mars livable for future generations.",
        tags: ["Space", "Engine Building", "Competitive"]
    },
    {
        rank: 5,
        emoji: "🗡️",
        title: "Twilight Imperium",
        players: "3-6 Players",
        duration: "240-480 min",
        complexity: "Heavy",
        rating: "8.3",
        description: "The ultimate epic space opera! Command your civilization, negotiate treaties, wage wars, and claim your place among the stars. A legendary experience that creates unforgettable stories.",
        tags: ["Space", "Epic", "Negotiation"]
    },
    {
        rank: 6,
        emoji: "🌾",
        title: "Agricola",
        players: "1-4 Players",
        duration: "30-120 min",
        complexity: "Medium-Heavy",
        rating: "8.2",
        description: "Build and manage a prosperous farm in medieval times. Balance feeding your family with growing your farm, raising livestock, and improving your modest dwelling into a stone house.",
        tags: ["Farming", "Worker Placement", "Family"]
    },
    {
        rank: 7,
        emoji: "🏛️",
        title: "7 Wonders Duel",
        players: "2 Players",
        duration: "30 min",
        complexity: "Medium-Light",
        rating: "8.2",
        description: "Build your civilization and outshine your opponent in this perfect two-player game. Draft cards to develop your civilization through three ages while pursuing multiple paths to victory.",
        tags: ["Civilization", "Card Drafting", "Two Player"]
    },
    {
        rank: 8,
        emoji: "🎪",
        title: "Ticket to Ride",
        players: "2-5 Players",
        duration: "30-60 min",
        complexity: "Light",
        rating: "7.9",
        description: "A cross-country train adventure! Collect cards, claim railway routes, and connect cities across the map. Simple to learn but offers strategic depth that keeps everyone engaged.",
        tags: ["Family", "Route Building", "Gateway Game"]
    },
    {
        rank: 9,
        emoji: "🏝️",
        title: "Catan",
        players: "3-4 Players",
        duration: "60-120 min",
        complexity: "Light-Medium",
        rating: "7.8",
        description: "Settle the island of Catan! Trade resources, build settlements and roads, and become the dominant force. A modern classic that introduced millions to modern board gaming.",
        tags: ["Trading", "Resource Management", "Classic"]
    },
    {
        rank: 10,
        emoji: "👑",
        title: "Wingspan",
        players: "1-5 Players",
        duration: "40-70 min",
        complexity: "Medium-Light",
        rating: "8.1",
        description: "Attract beautiful birds to your wildlife preserve! This award-winning game features stunning artwork and engaging gameplay as you collect birds, lay eggs, and draw from hundreds of unique bird cards.",
        tags: ["Nature", "Engine Building", "Beautiful Art"]
    }
];

// Function to create game cards
function createGameCard(game) {
    return `
        <div class="game-card">
            <div class="game-rank">#${game.rank}</div>
            <span class="game-emoji">${game.emoji}</span>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-players">${game.players}</p>
            <p class="game-description">${game.description}</p>
            <div class="game-stats">
                <span class="stat-badge">⏱️ ${game.duration}</span>
                <span class="stat-badge">🧩 ${game.complexity}</span>
                <span class="game-rating">⭐ ${game.rating}/10</span>
            </div>
            <div class="game-tags">
                ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    // Render all games
    boardGames.forEach(game => {
        gamesGrid.innerHTML += createGameCard(game);
    });

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all game cards
    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });

    // Add parallax effect to hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add hover sound effect (visual feedback)
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
    });

    // Smooth scroll for all internal links
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

    // Add fun console message
    console.log('%c🎲 Welcome to Top Board Games! 🎮', 'font-size: 20px; font-weight: bold; color: #FF6B6B;');
    console.log('%cReady to discover your next favorite game?', 'font-size: 14px; color: #4ECDC4;');
});

// Add sparkle effect on card click
document.addEventListener('click', function(e) {
    if (e.target.closest('.game-card')) {
        const card = e.target.closest('.game-card');
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = '';
        }, 10);
    }
});

// Easter egg: Konami code for confetti
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        celebrateWithEmojis();
        konamiCode = [];
    }
});

function celebrateWithEmojis() {
    const emojis = ['🎲', '🎮', '🎯', '🎪', '🏆', '⭐', '🎉'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = '-50px';
            emoji.style.fontSize = '40px';
            emoji.style.zIndex = '9999';
            emoji.style.transition = 'all 3s ease-out';
            emoji.style.pointerEvents = 'none';
            document.body.appendChild(emoji);
            
            setTimeout(() => {
                emoji.style.top = '120vh';
                emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
                emoji.style.opacity = '0';
            }, 10);
            
            setTimeout(() => emoji.remove(), 3000);
        }, i * 100);
    }
}

