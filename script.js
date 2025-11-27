// Top 10 Board Games Data
const boardGames = [
    {
        id: 1,
        rank: 1,
        emoji: "🏰",
        title: "Brass: Birmingham",
        players: "2-4 Players",
        duration: "60-120 min",
        complexity: "Heavy",
        rating: "8.6",
        description: "Build networks, develop industries, and navigate the Industrial Revolution in this strategic masterpiece. Every decision matters as you compete to build the most successful business empire.",
        tags: ["Strategy", "Economic", "Industrial Age"],
        detailedDescription: "Brass: Birmingham is an economic strategy game set during the Industrial Revolution in Birmingham, England. Players compete to build networks, develop industries, and navigate the canals and railroads of the era. The game features two distinct eras - the Canal Era and the Rail Era - each with unique opportunities and challenges.",
        howToPlay: "Players take turns performing two actions from a selection including: building industries, developing networks, selling cotton, taking loans, and scouting new locations. The key is to carefully balance building your economic engine with scoring points through flipping your industry tiles. Wild location and industry cards provide flexibility, but planning your moves several turns ahead is crucial.",
        whyItsGreat: "Brass: Birmingham improves upon the original Brass with more strategic depth, better balance, and additional player interaction. The beer mechanic creates interesting dependencies between players, and the dual-era structure ensures the game stays fresh throughout. Every decision is agonizing in the best way possible!",
        funFacts: ["Designed by Martin Wallace, one of the most acclaimed board game designers", "Set in Birmingham during 1770-1870", "Features a unique economic system where helping opponents can benefit you", "Winner of numerous awards including the 2019 Golden Geek"]
    },
    {
        id: 2,
        rank: 2,
        emoji: "🌌",
        title: "Gloomhaven",
        players: "1-4 Players",
        duration: "60-120 min",
        complexity: "Heavy",
        rating: "8.6",
        description: "A massive tactical combat game in a persistent world of shifting motives. Take on the role of a wandering adventurer with your own special set of skills and explore a dark, mysterious world.",
        tags: ["Adventure", "Fantasy", "Tactical Combat"],
        detailedDescription: "Gloomhaven is a campaign-driven dungeon crawler where your choices have real consequences. Players will assume the roles of wandering mercenaries with their own special abilities, exploring a dark world of mystery and danger. The game features a branching narrative with 95 unique scenarios, 17 playable character classes, and a world that changes based on your decisions.",
        howToPlay: "Each scenario presents tactical combat challenges where players use hand management and card play to determine their actions. Choose two cards each round - one for the top action and one for the bottom action. Combat has no dice - everything is driven by your card choices and positioning. Between scenarios, players can shop, level up, and unlock new abilities.",
        whyItsGreat: "Gloomhaven offers an unparalleled campaign experience with meaningful progression and a living, breathing world. The tactical combat is puzzle-like and deeply satisfying, requiring careful planning and teamwork. With hundreds of hours of gameplay and a story that adapts to your choices, it's truly an epic adventure.",
        funFacts: ["Contains 1,700+ cards and 95 scenarios", "Weighs nearly 22 pounds!", "Started as a Kickstarter that raised over $4 million", "Topped BoardGameGeek rankings for years"]
    },
    {
        id: 3,
        rank: 3,
        emoji: "🎭",
        title: "Pandemic Legacy: Season 1",
        players: "2-4 Players",
        duration: "60 min",
        complexity: "Medium",
        rating: "8.5",
        description: "Save humanity in this thrilling campaign game. As you play through the months, the game evolves and your decisions permanently shape the game world. Work together to find cures before time runs out!",
        tags: ["Cooperative", "Legacy", "Strategy"],
        detailedDescription: "Pandemic Legacy: Season 1 revolutionized board gaming by introducing permanent consequences to a beloved cooperative game. Play through a year-long campaign (12-24 games) where diseases mutate, cities fall, and characters develop. You'll make permanent changes to the board, tear up cards, and unlock secret compartments as the story unfolds.",
        howToPlay: "Based on the classic Pandemic, players work together to treat diseases and find cures. Each turn, perform four actions like moving, treating diseases, or trading cards. After your turn, new infections spread. The legacy twist means each game builds on the last - your victories and defeats shape future scenarios. Some rules change permanently based on your choices.",
        whyItsGreat: "This game creates unforgettable moments and genuine emotional investment. The thrill of uncovering new plot twists, the agony of tough decisions with lasting consequences, and the satisfaction of collaborative problem-solving make every session memorable. It's designed to be played with the same group, creating shared stories you'll talk about for years.",
        funFacts: ["Won the 2016 Golden Geek Game of the Year", "Designed by Rob Daviau and Matt Leacock", "Story changes based on your wins and losses", "Most groups finish the campaign in 12-18 sessions"]
    },
    {
        id: 4,
        rank: 4,
        emoji: "🐉",
        title: "Terraforming Mars",
        players: "1-5 Players",
        duration: "120 min",
        complexity: "Medium",
        rating: "8.4",
        description: "Compete to transform Mars into a habitable planet. Play project cards, build up production, and race to complete milestones and awards while making Mars livable for future generations.",
        tags: ["Space", "Engine Building", "Competitive"],
        detailedDescription: "In Terraforming Mars, mega-corporations compete to transform the Red Planet into a breathable, warm, and watery world suitable for human habitation. As you terraform the planet, you'll increase your production of resources, place cities and greenery, and work on ambitious projects that bring Mars to life.",
        howToPlay: "Each player represents a corporation with unique abilities. Play project cards to develop your infrastructure, raise global parameters (temperature, oxygen, and ocean coverage), and earn Terraform Rating (victory points). Balance immediate gains with long-term engine building. Standard projects are always available, but specialized project cards create unique strategies each game.",
        whyItsGreat: "With 200+ unique project cards, every game tells a different story of Mars colonization. The engine-building is deeply satisfying as your production increases and your corporation's strategy comes together. Multiple paths to victory ensure varied gameplay, and the theme is wonderfully integrated - you really feel like you're transforming a planet!",
        funFacts: ["Features real science-based terraforming concepts", "Over 200 unique project cards", "Creator Jacob Fryxelius is a scientist", "Multiple expansions add even more variety"]
    },
    {
        id: 5,
        rank: 5,
        emoji: "🗡️",
        title: "Twilight Imperium",
        players: "3-6 Players",
        duration: "240-480 min",
        complexity: "Heavy",
        rating: "8.3",
        description: "The ultimate epic space opera! Command your civilization, negotiate treaties, wage wars, and claim your place among the stars. A legendary experience that creates unforgettable stories.",
        tags: ["Space", "Epic", "Negotiation"],
        detailedDescription: "Twilight Imperium is the definitive epic space opera board game. Command one of 17 unique factions vying for galactic domination through military might, political maneuvering, economic bargaining, and strategic planning. Build your empire, form and break alliances, and engage in epic space battles across a modular galaxy.",
        howToPlay: "Players take turns performing strategic actions: moving fleets, producing units, researching technology, or playing action cards. The political phase lets players vote on galactic laws. Score victory points by completing public and secret objectives. The first to 10 points triggers the end game. Negotiation and diplomacy are as important as military strategy.",
        whyItsGreat: "Twilight Imperium creates legendary gaming sessions full of dramatic moments, clever negotiations, and epic battles. Each faction plays completely differently, ensuring high replayability. The game rewards both long-term planning and opportunistic tactical plays. It's not just a game - it's an EVENT that your gaming group will talk about for months.",
        funFacts: ["Can take 6-8 hours for a full game", "17 unique asymmetric factions", "4th edition streamlined the classic gameplay", "Known for creating legendary betrayals and alliances"]
    },
    {
        id: 6,
        rank: 6,
        emoji: "🌾",
        title: "Agricola",
        players: "1-4 Players",
        duration: "30-120 min",
        complexity: "Medium-Heavy",
        rating: "8.2",
        description: "Build and manage a prosperous farm in medieval times. Balance feeding your family with growing your farm, raising livestock, and improving your modest dwelling into a stone house.",
        tags: ["Farming", "Worker Placement", "Family"],
        detailedDescription: "Agricola is a worker placement game where you develop a medieval farm over 14 rounds. Start with a wooden hut and two family members, then expand your family, plow fields, plant crops, build fences, raise animals, and renovate your home. The challenge lies in doing everything with limited actions while feeding your growing family.",
        howToPlay: "Each round, players take turns placing family members on action spaces to gather resources, improve their farm, or expand their family. Used action spaces are blocked until next round, creating competition for key actions. Every few rounds is a harvest where you must feed your family. Points come from diversification - you need crops, animals, improvements, and a good house.",
        whyItsGreat: "Agricola is renowned for its tight resource management and satisfying puzzle-solving. Every action matters, and you'll always want to do more than you can. The occupation and improvement cards (over 300 unique cards) ensure tremendous replayability, with each game presenting different strategic opportunities. It's challenging but incredibly rewarding!",
        funFacts: ["Designed by Uwe Rosenberg in 2007", "Over 360 unique cards for variety", "One of the original 'heavy Euro' games", "Farming theme perfectly integrated into mechanics"]
    },
    {
        id: 7,
        rank: 7,
        emoji: "🏛️",
        title: "7 Wonders Duel",
        players: "2 Players",
        duration: "30 min",
        complexity: "Medium-Light",
        rating: "8.2",
        description: "Build your civilization and outshine your opponent in this perfect two-player game. Draft cards to develop your civilization through three ages while pursuing multiple paths to victory.",
        tags: ["Civilization", "Card Drafting", "Two Player"],
        detailedDescription: "7 Wonders Duel brings the civilization-building excitement of 7 Wonders to head-to-head play. Over three ages, players draft cards from a cleverly arranged display to build their ancient civilization. Develop science, strengthen your military, construct wonders, and accumulate wealth while keeping an eye on your opponent's strategy.",
        howToPlay: "Cards are arranged face-up and face-down in a pyramid structure. On your turn, take an accessible card to build it, discard it for coins, or use it to construct a wonder. Some cards are only revealed after others are taken, creating suspense. Watch for three victory conditions: military supremacy (advance your conflict pawn), scientific supremacy (collect six different science symbols), or points at game end.",
        whyItsGreat: "7 Wonders Duel is widely considered one of the best two-player games ever designed. Quick to play but full of meaningful decisions, it offers perfect information with hidden possibilities. The multiple victory paths create tension throughout, and the card drafting system ensures player interaction every turn. Games are tight, tense, and incredibly satisfying!",
        funFacts: ["Won the 2016 Golden Geek Best 2-Player Game", "Plays in just 30 minutes", "Features 7 wonders to construct", "Multiple expansions add even more depth"]
    },
    {
        id: 8,
        rank: 8,
        emoji: "🎪",
        title: "Ticket to Ride",
        players: "2-5 Players",
        duration: "30-60 min",
        complexity: "Light",
        rating: "7.9",
        description: "A cross-country train adventure! Collect cards, claim railway routes, and connect cities across the map. Simple to learn but offers strategic depth that keeps everyone engaged.",
        tags: ["Family", "Route Building", "Gateway Game"],
        detailedDescription: "Ticket to Ride is the perfect gateway game that has introduced millions to modern board gaming. Players collect train cards to claim railway routes connecting cities across North America. Complete your destination tickets for big points, build the longest route, and block your opponents' plans in this accessible yet strategic game.",
        howToPlay: "On your turn, either draw train cards, claim a route by playing matching colored cards, or draw destination tickets. Destination tickets show two cities you must connect for points (or lose points if you fail). Plan your routes carefully - longer continuous routes score exponentially more points, but they require more cards and can be blocked by opponents.",
        whyItsGreat: "Ticket to Ride perfectly balances simplicity with strategy. Non-gamers can learn in 5 minutes, while experienced players appreciate the route planning and tactical blocking. The beautiful board and tactile train pieces create an inviting table presence. It scales well from 2-5 players and has spawned numerous maps and expansions for endless variety.",
        funFacts: ["Won the 2004 Spiel des Jahres (Game of the Year)", "Sold over 8 million copies worldwide", "Available on 15+ different maps globally", "Perfect for families and game nights"]
    },
    {
        id: 9,
        rank: 9,
        emoji: "🏝️",
        title: "Catan",
        players: "3-4 Players",
        duration: "60-120 min",
        complexity: "Light-Medium",
        rating: "7.8",
        description: "Settle the island of Catan! Trade resources, build settlements and roads, and become the dominant force. A modern classic that introduced millions to modern board gaming.",
        tags: ["Trading", "Resource Management", "Classic"],
        detailedDescription: "The Settlers of Catan revolutionized board gaming when it was released in 1995. Players settle the island of Catan by building roads, settlements, and cities. Collect resources (wood, brick, wheat, sheep, ore) from dice rolls, trade with opponents, and expand your territory. The modular board ensures every game is different.",
        howToPlay: "Roll dice to determine which hexes produce resources this turn. Collect resources from your adjacent settlements and cities. Use resources to build more structures, upgrade settlements to cities, or buy development cards. Trade with opponents to get what you need. First to 10 victory points wins! Position your initial settlements wisely - they determine your resource income for the entire game.",
        whyItsGreat: "Catan is a modern classic for good reason. The trading mechanic creates constant player interaction and negotiation. The modular board and dice rolls ensure high replayability and prevent the game from being 'solved.' It's accessible enough for newcomers but strategic enough for experienced players. More than 30 million copies sold worldwide prove its enduring appeal!",
        funFacts: ["Originally published in Germany in 1995", "Sold over 30 million copies", "Sparked the modern board game renaissance", "Countless expansions and variants available"]
    },
    {
        id: 10,
        rank: 10,
        emoji: "👑",
        title: "Wingspan",
        players: "1-5 Players",
        duration: "40-70 min",
        complexity: "Medium-Light",
        rating: "8.1",
        description: "Attract beautiful birds to your wildlife preserve! This award-winning game features stunning artwork and engaging gameplay as you collect birds, lay eggs, and draw from hundreds of unique bird cards.",
        tags: ["Nature", "Engine Building", "Beautiful Art"],
        detailedDescription: "Wingspan is a competitive, medium-weight, card-driven engine-building game about attracting birds to your wildlife preserves. Each bird you play triggers different actions and combos. The game features 170 unique bird cards with stunning artwork and fascinating facts about each species.",
        howToPlay: "Choose one of four actions each turn: play a bird card, gain food from the bird feeder, lay eggs, or draw more bird cards. Birds are played in one of three habitats (forest, grassland, wetland), and each habitat's birds activate when you choose that action, creating powerful engine-building combos. Score points for birds, eggs, bonus cards, and end-of-round goals.",
        whyItsGreat: "Wingspan combines gorgeous production with smooth gameplay and educational content. The bird facts are accurate and interesting, the artwork is breathtaking, and the 3D bird feeder tower is delightful. It's engaging enough for experienced gamers while remaining accessible to newcomers. The solo mode is excellent too! It's proof that games can be beautiful, educational, and deeply fun all at once.",
        funFacts: ["Won the 2019 Kennerspiel des Jahres", "Features real bird species with accurate facts", "Designed by Elizabeth Hargrave", "Over 1 million copies sold"]
    }
];

// Function to create game cards
function createGameCard(game) {
    return `
        <div class="game-card" data-game-id="${game.id}" onclick="navigateToDetails(${game.id})">
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
            <div class="click-hint">Click to learn more →</div>
        </div>
    `;
}

// Navigate to details page
function navigateToDetails(gameId) {
    window.location.href = `details.html?id=${gameId}`;
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
            this.style.cursor = 'pointer';
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

