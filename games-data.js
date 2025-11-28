// Board Games Database - Organized by Categories
const gameCategories = [
    {
        id: "strategy",
        name: "Strategy Games",
        emoji: "♟️",
        description: "Deep thinking, careful planning, and outsmarting your opponents",
        color: "#667eea"
    },
    {
        id: "family",
        name: "Family Games",
        emoji: "👨‍👩‍👧‍👦",
        description: "Fun for all ages, easy to learn, great for game nights",
        color: "#4ECDC4"
    },
    {
        id: "party",
        name: "Party Games",
        emoji: "🎉",
        description: "Laugh, compete, and create memories with friends",
        color: "#FF6B6B"
    },
    {
        id: "cooperative",
        name: "Cooperative Games",
        emoji: "🤝",
        description: "Work together as a team to beat the game",
        color: "#A78BFA"
    },
    {
        id: "thematic",
        name: "Thematic & Adventure",
        emoji: "🐉",
        description: "Immersive stories, epic quests, and rich worlds",
        color: "#FB923C"
    },
    {
        id: "twoplayer",
        name: "Two-Player Games",
        emoji: "⚔️",
        description: "Perfect head-to-head competition for couples and rivals",
        color: "#F472B6"
    }
];

// All Games Data
const allGames = [
    // ==================== STRATEGY GAMES ====================
    {
        id: 1, category: "strategy", rank: 1, emoji: "🏰", title: "Brass: Birmingham",
        image: "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__opengraph/img/giCEySk2Thh_rotzAP5g7b5VaXA=/fit-in/1200x630/filters:strip_icc()/pic3490053.jpg",
        players: "2-4 Players", duration: "60-120 min", complexity: "Heavy", rating: "8.6",
        description: "Build networks and industries during the Industrial Revolution. Every decision matters in this economic masterpiece.",
        tags: ["Economic", "Network Building", "Industrial"],
        detailedDescription: "Brass: Birmingham is an economic strategy game set during the Industrial Revolution in Birmingham, England. Players compete to build networks, develop industries, and navigate the canals and railroads of the era.",
        howToPlay: "Players take turns performing two actions including building industries, developing networks, selling cotton, and taking loans. Balance building your economic engine with scoring points.",
        whyItsGreat: "Every decision is agonizing in the best way possible! The dual-era structure and beer mechanic create incredible strategic depth.",
        funFacts: ["Designed by Martin Wallace", "Set in Birmingham during 1770-1870", "Winner of 2019 Golden Geek"]
    },
    {
        id: 2, category: "strategy", rank: 2, emoji: "🔴", title: "Terraforming Mars",
        image: "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__opengraph/img/BTxqxgYay4C20SYPi2NoKkKj7Mw=/fit-in/1200x630/filters:strip_icc()/pic3536616.jpg",
        players: "1-5 Players", duration: "120 min", complexity: "Medium", rating: "8.4",
        description: "Compete to transform Mars into a habitable planet. Build your engine and race to complete milestones.",
        tags: ["Space", "Engine Building", "Competitive"],
        detailedDescription: "Mega-corporations compete to transform the Red Planet into a habitable world. Increase production, place cities, and work on ambitious terraforming projects.",
        howToPlay: "Play project cards to raise global parameters (temperature, oxygen, oceans) and earn Terraform Rating points.",
        whyItsGreat: "With 200+ unique cards, every game tells a different story. The theme is wonderfully integrated!",
        funFacts: ["Features real science concepts", "Creator is a scientist", "Multiple expansions available"]
    },
    {
        id: 3, category: "strategy", rank: 3, emoji: "🗡️", title: "Twilight Imperium",
        image: "https://cf.geekdo-images.com/op7arfF2szSxi1LPYKTHHA__opengraph/img/E48-8EPL8Nm-K0hxIwBY3Sd2-x8=/fit-in/1200x630/filters:strip_icc()/pic3727516.jpg",
        players: "3-6 Players", duration: "240-480 min", complexity: "Heavy", rating: "8.3",
        description: "The ultimate epic space opera! Command civilizations, negotiate, and wage galactic war.",
        tags: ["Space", "Epic", "Negotiation"],
        detailedDescription: "Command one of 17 unique factions vying for galactic domination through military, politics, and economics.",
        howToPlay: "Take strategic actions, vote on galactic laws, and complete objectives to score victory points.",
        whyItsGreat: "Creates legendary gaming sessions full of dramatic moments and epic battles.",
        funFacts: ["Can take 6-8 hours", "17 asymmetric factions", "Known for legendary betrayals"]
    },
    {
        id: 4, category: "strategy", rank: 4, emoji: "🌾", title: "Agricola",
        image: "https://cf.geekdo-images.com/dDDo2Hexl80ucK1IlqTk-g__opengraph/img/TRVxGiXLpE0PE0VpC4Y8zznJrLw=/fit-in/1200x630/filters:strip_icc()/pic831744.jpg",
        players: "1-4 Players", duration: "30-120 min", complexity: "Medium-Heavy", rating: "8.0",
        description: "Build a prosperous medieval farm. Balance feeding your family with farm expansion.",
        tags: ["Farming", "Worker Placement", "Resource Management"],
        detailedDescription: "Develop a medieval farm over 14 rounds. Expand family, plow fields, raise animals, and renovate your home.",
        howToPlay: "Place workers on action spaces to gather resources and improve your farm. Feed family at harvest.",
        whyItsGreat: "Tight resource management where every action matters. Over 300 unique cards for variety.",
        funFacts: ["Designed by Uwe Rosenberg", "Over 360 unique cards", "Original heavy Euro game"]
    },
    {
        id: 5, category: "strategy", rank: 5, emoji: "⚙️", title: "Scythe",
        image: "https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__opengraph/img/HWGsS31u2-g0gnLb18KxVstZW90=/fit-in/1200x630/filters:strip_icc()/pic3163924.jpg",
        players: "1-5 Players", duration: "90-120 min", complexity: "Medium", rating: "8.2",
        description: "Alternate 1920s Europe with mechs. Conquer territory and build your engine.",
        tags: ["Engine Building", "Area Control", "Alternate History"],
        detailedDescription: "Lead your faction in an alternate 1920s Eastern Europe. Deploy mechs, build structures, and control resources.",
        howToPlay: "Take turns selecting actions to move, produce, trade, or deploy. Achieve objectives and trigger the end game.",
        whyItsGreat: "Beautiful art, asymmetric factions, and satisfying engine building with minimal luck.",
        funFacts: ["Art by Jakub Rozalski", "5 unique factions", "Won numerous awards"]
    },
    {
        id: 6, category: "strategy", rank: 6, emoji: "🏛️", title: "Through the Ages",
        image: "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__opengraph/img/1SJiShX5H-4ynGQDxKv-S46YjVw=/fit-in/1200x630/filters:strip_icc()/pic2663291.jpg",
        players: "2-4 Players", duration: "120-240 min", complexity: "Heavy", rating: "8.3",
        description: "Guide your civilization from antiquity to modern times. Manage culture, science, and military.",
        tags: ["Civilization", "Card Drafting", "Economic"],
        detailedDescription: "Build a civilization through the ages by managing resources, developing technologies, and building wonders.",
        howToPlay: "Draft cards to add to your civilization, manage population, and balance military with culture.",
        whyItsGreat: "The deepest civilization-building experience in card game form.",
        funFacts: ["No map or board", "Spans human history", "Digital version highly rated"]
    },
    {
        id: 7, category: "strategy", rank: 7, emoji: "🎭", title: "Puerto Rico",
        image: "https://cf.geekdo-images.com/QFiIRd2kimaMqTyWsX0aUg__opengraph/img/8Mj-pzCbAU0MsECdQEFHL-2nHJs=/fit-in/1200x630/filters:strip_icc()/pic158548.jpg",
        players: "2-5 Players", duration: "90-150 min", complexity: "Medium", rating: "8.0",
        description: "Colonial Puerto Rico - produce goods, construct buildings, and ship for victory points.",
        tags: ["Economic", "Role Selection", "Colonial"],
        detailedDescription: "Players select roles each round that all players can use, but the selector gets a bonus.",
        howToPlay: "Choose roles like Mayor, Builder, or Captain. Produce goods and ship them for points.",
        whyItsGreat: "Elegant role selection mechanism that influenced countless games.",
        funFacts: ["Released in 2002", "Genre-defining game", "Multiple editions"]
    },
    {
        id: 8, category: "strategy", rank: 8, emoji: "🌸", title: "Spirit Island",
        image: "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__opengraph/img/iiYG9mI38R48PGxVKdLMqZzDK7E=/fit-in/1200x630/filters:strip_icc()/pic3615739.png",
        players: "1-4 Players", duration: "90-120 min", complexity: "Heavy", rating: "8.5",
        description: "As island spirits, drive away colonizers using unique elemental powers.",
        tags: ["Cooperative", "Asymmetric", "Fantasy"],
        detailedDescription: "Play as spirits defending your island from colonial invaders. Each spirit has unique powers and playstyle.",
        howToPlay: "Gain energy, play power cards, and coordinate with other spirits to generate fear and destroy invaders.",
        whyItsGreat: "Deep cooperative strategy with wildly different spirit powers and high replayability.",
        funFacts: ["Anti-colonial theme", "8+ unique spirits", "Highly variable difficulty"]
    },
    {
        id: 9, category: "strategy", rank: 9, emoji: "🦁", title: "Great Western Trail",
        image: "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__opengraph/img/F0dJ1Zr28lJl8LPnBkKkvlVP-Wk=/fit-in/1200x630/filters:strip_icc()/pic4887376.jpg",
        players: "2-4 Players", duration: "75-150 min", complexity: "Medium-Heavy", rating: "8.3",
        description: "Drive cattle from Texas to Kansas City. Build your deck and develop the trail.",
        tags: ["Deck Building", "Point-to-Point", "Western"],
        detailedDescription: "Hire cowboys, craftsmen, and engineers while driving cattle to market and building train station connections.",
        howToPlay: "Move along the trail, perform building actions, and deliver cattle at Kansas City for points.",
        whyItsGreat: "Brilliantly interlocking systems with deck building, route building, and economic management.",
        funFacts: ["Designed by Alexander Pfister", "Second edition released 2021", "Multiple expansions"]
    },
    {
        id: 10, category: "strategy", rank: 10, emoji: "🏰", title: "Castles of Burgundy",
        image: "https://cf.geekdo-images.com/5CFwjd8zTcGYVUnkXh04hw__opengraph/img/i0eXylW_bRjIWfwqj0Y6jiHsmAI=/fit-in/1200x630/filters:strip_icc()/pic6601622.jpg",
        players: "2-4 Players", duration: "30-90 min", complexity: "Medium", rating: "8.1",
        description: "Medieval estate building with dice. Collect tiles and complete regions for points.",
        tags: ["Dice", "Tile Placement", "Medieval"],
        detailedDescription: "Roll dice to acquire settlement tiles and add them to your estate, scoring for completed regions.",
        howToPlay: "Use dice to take tiles from the central board and place them in matching colored regions of your estate.",
        whyItsGreat: "Elegant dice usage with many mitigation options. Quick turns but deep decisions.",
        funFacts: ["Designed by Stefan Feld", "20th anniversary edition", "Over 1 million sold"]
    },
    {
        id: 11, category: "strategy", rank: 11, emoji: "⭐", title: "Gaia Project",
        image: "https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__opengraph/img/tjuLUOT5-IVCRh7K-9jY6Q8fUvo=/fit-in/1200x630/filters:strip_icc()/pic5375625.png",
        players: "1-4 Players", duration: "60-150 min", complexity: "Heavy", rating: "8.5",
        description: "Terraform planets and expand across the galaxy with unique alien factions.",
        tags: ["Space", "Engine Building", "Asymmetric"],
        detailedDescription: "Successor to Terra Mystica set in space. Each faction terraforms different planet types.",
        howToPlay: "Colonize planets, upgrade structures, research technologies, and form federations.",
        whyItsGreat: "Deep asymmetric gameplay with 14 unique factions and variable setup.",
        funFacts: ["Spiritual successor to Terra Mystica", "14 factions", "Modular galaxy board"]
    },
    {
        id: 12, category: "strategy", rank: 12, emoji: "🏗️", title: "Barrage",
        image: "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__opengraph/img/X87M-2dMSQR8LBlFGLBfZfZo1b0=/fit-in/1200x630/filters:strip_icc()/pic4336469.png",
        players: "1-4 Players", duration: "60-120 min", complexity: "Heavy", rating: "8.1",
        description: "Build dams and manage water flow to generate power in this tense economic game.",
        tags: ["Economic", "Area Control", "Resource Management"],
        detailedDescription: "Build a network of dams, conduits, and powerhouses to control water flow and generate electricity.",
        howToPlay: "Place structures to capture water as it flows downstream and convert it to energy for contracts.",
        whyItsGreat: "Unique water flow mechanism creates incredible spatial puzzles and player interaction.",
        funFacts: ["Set in alternate 1930s", "Water physically flows on board", "Kickstarter success"]
    },
    {
        id: 13, category: "strategy", rank: 13, emoji: "🚂", title: "Age of Steam",
        image: "https://cf.geekdo-images.com/PDKWK7sXXsGg3pEbklOGhQ__opengraph/img/QXPdLwrcmUvCT0H-2xoLr-ER1f4=/fit-in/1200x630/filters:strip_icc()/pic6061597.jpg",
        players: "3-6 Players", duration: "120 min", complexity: "Heavy", rating: "7.9",
        description: "Classic train game of network building and goods delivery. Brutal and unforgiving.",
        tags: ["Trains", "Network Building", "Economic"],
        detailedDescription: "Build railroad networks, take loans, and deliver goods in this cutthroat economic train game.",
        howToPlay: "Auction for turn order and actions, build track, and deliver cubes to cities for income.",
        whyItsGreat: "Pure economic gameplay with meaningful player interaction and high stakes.",
        funFacts: ["100+ expansion maps", "Designed by Martin Wallace", "Influenced many train games"]
    },
    {
        id: 14, category: "strategy", rank: 14, emoji: "🎪", title: "Concordia",
        image: "https://cf.geekdo-images.com/E8F5-BuJYjT_92E3WERNcQ__opengraph/img/q5b1fQVlNH-0YaIlZG_b7Q3qxhk=/fit-in/1200x630/filters:strip_icc()/pic3453267.jpg",
        players: "2-5 Players", duration: "100 min", complexity: "Medium", rating: "8.1",
        description: "Ancient Mediterranean trading and colonization with elegant card-driven gameplay.",
        tags: ["Hand Management", "Network Building", "Ancient"],
        detailedDescription: "Expand your trading network around the Mediterranean by playing cards that determine your actions.",
        howToPlay: "Play personality cards for actions like moving colonists, building houses, or producing goods.",
        whyItsGreat: "Elegant card play with hidden scoring that rewards different strategies.",
        funFacts: ["Designed by Mac Gerdts", "Multiple map expansions", "No random elements"]
    },
    {
        id: 15, category: "strategy", rank: 15, emoji: "🌍", title: "Dominant Species",
        image: "https://cf.geekdo-images.com/_slPErKLd9mdaHXnx5_4TQ__opengraph/img/n_OvFq3DLnwwGN-hZZXRTM_oYUA=/fit-in/1200x630/filters:strip_icc()/pic784193.jpg",
        players: "2-6 Players", duration: "120-240 min", complexity: "Heavy", rating: "8.0",
        description: "Ice Age survival as different animal classes compete for dominance on a changing Earth.",
        tags: ["Area Control", "Worker Placement", "Evolution"],
        detailedDescription: "Control mammals, reptiles, birds, amphibians, arachnids, or insects fighting for survival.",
        howToPlay: "Place action pawns to adapt, migrate, and dominate terrain tiles as glaciation reshapes the world.",
        whyItsGreat: "Epic scope with tough decisions and dramatic swings as ice ages change everything.",
        funFacts: ["6 animal classes", "Variable game length", "Highly thematic"]
    },
    {
        id: 16, category: "strategy", rank: 16, emoji: "🔮", title: "Mage Knight",
        image: "https://cf.geekdo-images.com/DUO2hz9AlLOH8p9ED-lCWg__opengraph/img/GUpHyYwMFM-fJcSFLSOi_BuBzeQ=/fit-in/1200x630/filters:strip_icc()/pic1083380.jpg",
        players: "1-4 Players", duration: "150-240 min", complexity: "Heavy", rating: "8.1",
        description: "Explore, conquer, and build your deck in this epic fantasy adventure.",
        tags: ["Deck Building", "Exploration", "Fantasy"],
        detailedDescription: "Explore a fantasy land, recruit units, learn spells, and conquer cities in this deck-building adventure.",
        howToPlay: "Build your deck while exploring, fighting enemies, and leveling up your Mage Knight.",
        whyItsGreat: "Unmatched depth in the deck-building adventure genre. Incredible solo experience.",
        funFacts: ["Top solo game", "Based on Mage Knight miniatures", "Ultimate Edition available"]
    },
    {
        id: 17, category: "strategy", rank: 17, emoji: "🎯", title: "Food Chain Magnate",
        image: "https://cf.geekdo-images.com/Wtxml94LAXsIWQCxGPS63Q__opengraph/img/uvggK5EzqJMvkx4K-CYgwlhOJNs=/fit-in/1200x630/filters:strip_icc()/pic2649434.png",
        players: "2-5 Players", duration: "120-240 min", complexity: "Heavy", rating: "8.2",
        description: "Build a fast-food empire with hiring, marketing, and ruthless competition.",
        tags: ["Economic", "Network Building", "Business"],
        detailedDescription: "Start a fast-food chain, hire and train employees, market your products, and crush the competition.",
        howToPlay: "Build an employee hierarchy, produce food, advertise to create demand, and deliver to customers.",
        whyItsGreat: "Brutally competitive with permanent consequences. No luck, pure skill.",
        funFacts: ["By Splotter Spellen", "No randomness", "Very unforgiving"]
    },
    {
        id: 18, category: "strategy", rank: 18, emoji: "🌊", title: "Ark Nova",
        image: "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__opengraph/img/aEwFm78SkYNOkN9abRWydl2SYkY=/fit-in/1200x630/filters:strip_icc()/pic6293412.jpg",
        players: "1-4 Players", duration: "90-150 min", complexity: "Medium-Heavy", rating: "8.5",
        description: "Build a modern zoo focused on conservation and scientific research.",
        tags: ["Card Drafting", "Tile Placement", "Animals"],
        detailedDescription: "Design a zoo, acquire animals, support conservation projects, and advance scientific research.",
        howToPlay: "Play action cards to build enclosures, acquire animals, and sponsor conservation projects.",
        whyItsGreat: "Satisfying puzzle of zoo building with 200+ unique animal cards.",
        funFacts: ["Over 200 animal cards", "Conservation theme", "Breakout hit of 2021"]
    },
    {
        id: 19, category: "strategy", rank: 19, emoji: "🏺", title: "Tzolk'in",
        image: "https://cf.geekdo-images.com/kXf7mDyDYuHg6oe8yTUIEA__opengraph/img/8pCZHZ6x6mI6hrx9FLlZO6ILDV4=/fit-in/1200x630/filters:strip_icc()/pic1413480.jpg",
        players: "2-4 Players", duration: "90 min", complexity: "Medium-Heavy", rating: "8.0",
        description: "Unique gear mechanism drives Mayan-themed worker placement and resource management.",
        tags: ["Worker Placement", "Gears", "Mayan"],
        detailedDescription: "Place workers on rotating gears that advance each round, making timing crucial.",
        howToPlay: "Place workers on gears and retrieve them later when they've moved to more valuable positions.",
        whyItsGreat: "The rotating gear mechanism creates unique timing puzzles unlike any other game.",
        funFacts: ["Real rotating gears", "Mayan calendar theme", "Expansion adds prophecies"]
    },
    {
        id: 20, category: "strategy", rank: 20, emoji: "🌲", title: "Everdell",
        image: "https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__opengraph/img/VxNV5YKzW9lw1T1vQ2FpOGzILNE=/fit-in/1200x630/filters:strip_icc()/pic3918905.png",
        players: "1-4 Players", duration: "40-80 min", complexity: "Medium", rating: "7.9",
        description: "Build a woodland city of critters in this charming worker placement game.",
        tags: ["Worker Placement", "Tableau Building", "Fantasy"],
        detailedDescription: "Gather resources and construct a city of critters and constructions through the seasons.",
        howToPlay: "Place workers to gather resources, then play cards to build your city tableau.",
        whyItsGreat: "Beautiful production with accessible yet strategic gameplay.",
        funFacts: ["Gorgeous 3D tree", "Woodland theme", "Multiple expansions"]
    },

    // ==================== FAMILY GAMES ====================
    {
        id: 21, category: "family", rank: 1, emoji: "🎪", title: "Ticket to Ride",
        image: "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__opengraph/img/enls9cKiEHKF48j8iWVYTnfCqz0=/fit-in/1200x630/filters:strip_icc()/pic38668.jpg",
        players: "2-5 Players", duration: "30-60 min", complexity: "Light", rating: "7.9",
        description: "Cross-country train adventure! Collect cards, claim routes, connect cities.",
        tags: ["Route Building", "Set Collection", "Trains"],
        detailedDescription: "Collect train cards to claim railway routes connecting cities across the map.",
        howToPlay: "Draw train cards, claim routes with matching colors, complete destination tickets.",
        whyItsGreat: "Perfect gateway game - simple to learn but strategic enough to engage everyone.",
        funFacts: ["2004 Spiel des Jahres", "8+ million sold", "15+ map versions"]
    },
    {
        id: 22, category: "family", rank: 2, emoji: "🏝️", title: "Catan",
        image: "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__opengraph/img/au7lBQ7eYScLlIWYGXE1hLVxLRo=/fit-in/1200x630/filters:strip_icc()/pic2419375.jpg",
        players: "3-4 Players", duration: "60-120 min", complexity: "Light-Medium", rating: "7.8",
        description: "Settle the island of Catan! Trade resources, build settlements, roads, and cities.",
        tags: ["Trading", "Resource Management", "Classic"],
        detailedDescription: "Collect resources from dice rolls, trade with opponents, and expand your settlements.",
        howToPlay: "Roll dice for resources, trade, build roads/settlements/cities, reach 10 points to win.",
        whyItsGreat: "Trading creates constant interaction. The modern classic that started it all.",
        funFacts: ["30+ million sold", "Published 1995", "Countless expansions"]
    },
    {
        id: 23, category: "family", rank: 3, emoji: "👑", title: "Wingspan",
        image: "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__opengraph/img/yS8aXfcVdSJ8JlUuAnumiY_npV8=/fit-in/1200x630/filters:strip_icc()/pic4458123.jpg",
        players: "1-5 Players", duration: "40-70 min", complexity: "Medium-Light", rating: "8.1",
        description: "Attract birds to your wildlife preserve with stunning artwork.",
        tags: ["Engine Building", "Nature", "Card Drafting"],
        detailedDescription: "Play bird cards to build engine combos in three habitats.",
        howToPlay: "Gain food, lay eggs, draw cards, and play birds to your preserve.",
        whyItsGreat: "Beautiful production meets smooth gameplay. Educational and fun!",
        funFacts: ["2019 Kennerspiel", "170 unique birds", "1+ million sold"]
    },
    {
        id: 24, category: "family", rank: 4, emoji: "🏰", title: "Carcassonne",
        image: "https://cf.geekdo-images.com/Z3upN53-fsVPUDimN9SpOA__opengraph/img/kPBAvZumYCLJrFkd-PoF_8u-Bh4=/fit-in/1200x630/filters:strip_icc()/pic2337577.jpg",
        players: "2-5 Players", duration: "35 min", complexity: "Light", rating: "7.4",
        description: "Build a medieval landscape one tile at a time and claim features with meeples.",
        tags: ["Tile Placement", "Area Control", "Medieval"],
        detailedDescription: "Draw and place tiles to build cities, roads, and monasteries, then claim them with followers.",
        howToPlay: "Draw a tile, place it adjacent to existing tiles, optionally place a meeple.",
        whyItsGreat: "Simple rules create surprising depth. Perfect introduction to modern gaming.",
        funFacts: ["2001 Spiel des Jahres", "Word 'meeple' originated here", "Many expansions"]
    },
    {
        id: 25, category: "family", rank: 5, emoji: "💎", title: "Azul",
        image: "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__opengraph/img/A5ducdG_hC1H9f7qKgWkPf_IZXE=/fit-in/1200x630/filters:strip_icc()/pic3718275.jpg",
        players: "2-4 Players", duration: "30-45 min", complexity: "Light", rating: "7.8",
        description: "Draft beautiful tiles to decorate your palace wall in this abstract puzzle.",
        tags: ["Abstract", "Drafting", "Puzzle"],
        detailedDescription: "Draft colored tiles from factory displays and place them on your board to score patterns.",
        howToPlay: "Take all tiles of one color from a factory, place in pattern lines, score when complete.",
        whyItsGreat: "Gorgeous tactile components with satisfying spatial puzzle gameplay.",
        funFacts: ["2018 Spiel des Jahres", "Based on Portuguese tiles", "Multiple sequels"]
    },
    {
        id: 26, category: "family", rank: 6, emoji: "🃏", title: "Splendor",
        image: "https://cf.geekdo-images.com/rwOMxx4q5yuElIvo-1-OFw__opengraph/img/3Qi-VuPtDzYjRllvAHyRvfTjO8Q=/fit-in/1200x630/filters:strip_icc()/pic1904079.jpg",
        players: "2-4 Players", duration: "30 min", complexity: "Light", rating: "7.4",
        description: "Collect gems and develop your gem trading empire to attract nobles.",
        tags: ["Engine Building", "Set Collection", "Renaissance"],
        detailedDescription: "Collect gem tokens to purchase development cards that give permanent gem bonuses.",
        howToPlay: "Take gems or spend gems to buy cards. Cards provide permanent gems and points.",
        whyItsGreat: "Elegant engine building that's easy to learn but offers interesting decisions.",
        funFacts: ["Heavy gem chips", "Renaissance theme", "Multiple versions"]
    },
    {
        id: 27, category: "family", rank: 7, emoji: "🦊", title: "Kingdomino",
        image: "https://cf.geekdo-images.com/4FrYzPrXqjkEgRpkLRvwmQ__opengraph/img/mq2OxD3mXjmPmFgbC0Z2vu_YCiE=/fit-in/1200x630/filters:strip_icc()/pic3132685.png",
        players: "2-4 Players", duration: "15-20 min", complexity: "Light", rating: "7.4",
        description: "Build a kingdom using domino-like tiles. Match terrain and grow your domain!",
        tags: ["Tile Placement", "Drafting", "Territory Building"],
        detailedDescription: "Draft domino tiles and add them to your 5x5 kingdom grid, matching terrain types.",
        howToPlay: "Select dominoes based on turn order, place them in your kingdom matching terrains.",
        whyItsGreat: "Quick, accessible, and perfect for families. Great introduction to drafting.",
        funFacts: ["2017 Spiel des Jahres", "Plays in 15 minutes", "Sequel: Queendomino"]
    },
    {
        id: 28, category: "family", rank: 8, emoji: "🌻", title: "Patchwork",
        image: "https://cf.geekdo-images.com/wLW7pFn0--20lEizEz5p3A__opengraph/img/P3s0C1bDnEYE8QDXNQH1bVzG94I=/fit-in/1200x630/filters:strip_icc()/pic2270442.jpg",
        players: "2 Players", duration: "15-30 min", complexity: "Light", rating: "7.7",
        description: "Two-player quilting puzzle where you fill your board with fabric patches.",
        tags: ["Puzzle", "Two Player", "Abstract"],
        detailedDescription: "Purchase tetris-like patches and fit them onto your quilt board.",
        howToPlay: "Spend buttons and time to buy patches, arrange them to fill your board.",
        whyItsGreat: "Perfect two-player puzzle with simple rules and satisfying spatial gameplay.",
        funFacts: ["By Uwe Rosenberg", "Time track mechanism", "Many themed versions"]
    },
    {
        id: 29, category: "family", rank: 9, emoji: "🎲", title: "Quacks of Quedlinburg",
        image: "https://cf.geekdo-images.com/pH5LgRL4mNRon-2NsSDb1Q__opengraph/img/4xTw8DJn0hnqFhb7xgclIHWOUjE=/fit-in/1200x630/filters:strip_icc()/pic6137509.png",
        players: "2-4 Players", duration: "45 min", complexity: "Light-Medium", rating: "7.8",
        description: "Push-your-luck potion brewing! Draw ingredients but don't let your pot explode.",
        tags: ["Push Your Luck", "Bag Building", "Fantasy"],
        detailedDescription: "Draw ingredient chips from your bag to brew potions, but too many cherry bombs explode!",
        howToPlay: "Draw chips from bag, add values to pot track. Stop or push on - explode at 7+ cherry bombs.",
        whyItsGreat: "Exciting push-your-luck tension with bag building progression.",
        funFacts: ["2018 Kennerspiel", "Bag building mechanism", "Multiple expansions"]
    },
    {
        id: 30, category: "family", rank: 10, emoji: "🦜", title: "Cascadia",
        image: "https://cf.geekdo-images.com/MjesQbX79Uk0T7Y_ggWkEA__opengraph/img/k4_mI_axPR0gqcA2epuU1MRu_MI=/fit-in/1200x630/filters:strip_icc()/pic5100691.jpg",
        players: "1-4 Players", duration: "30-45 min", complexity: "Light", rating: "8.0",
        description: "Build Pacific Northwest habitats and populate them with native wildlife.",
        tags: ["Tile Placement", "Pattern Building", "Nature"],
        detailedDescription: "Draft habitat tiles and wildlife tokens to create scoring patterns.",
        howToPlay: "Select a tile and animal token each turn, place them to score based on animal patterns.",
        whyItsGreat: "Relaxing puzzle with beautiful art and accessible gameplay.",
        funFacts: ["2022 Spiel des Jahres", "Pacific Northwest theme", "Excellent solo mode"]
    },
    {
        id: 31, category: "family", rank: 11, emoji: "🚀", title: "Galaxy Trucker",
        image: "https://cf.geekdo-images.com/dKpVRfEmLscsIfCfboL-Rg__opengraph/img/3aKA4w_fKoJA85_mDlWCkdJLJjQ=/fit-in/1200x630/filters:strip_icc()/pic3926631.jpg",
        players: "2-4 Players", duration: "60 min", complexity: "Medium-Light", rating: "7.6",
        description: "Build spaceships from junk and watch them fall apart during flight!",
        tags: ["Real-Time", "Space", "Humor"],
        detailedDescription: "Grab tiles in real-time to build your ship, then see if it survives the journey.",
        howToPlay: "Build ships from tiles simultaneously, then face hazards that destroy your creation.",
        whyItsGreat: "Hilarious chaos as poorly built ships fall apart. Embrace the destruction!",
        funFacts: ["Real-time building", "Embraces failure", "Anniversary edition"]
    },
    {
        id: 32, category: "family", rank: 12, emoji: "🌈", title: "Dixit",
        image: "https://cf.geekdo-images.com/J6fVIZE7x9D7NeKX2tKF7g__opengraph/img/mVZLH73FqzlcPXxd9QCFuKgOjDs=/fit-in/1200x630/filters:strip_icc()/pic3483909.jpg",
        players: "3-8 Players", duration: "30 min", complexity: "Light", rating: "7.2",
        description: "Give creative clues about dreamlike artwork. Be clever but not too obvious!",
        tags: ["Party", "Creative", "Deduction"],
        detailedDescription: "Give clues about surreal artwork cards; others try to find your card.",
        howToPlay: "Give a clue for your card, others add similar cards, everyone guesses which was yours.",
        whyItsGreat: "Sparks creativity and imagination with beautiful dreamy artwork.",
        funFacts: ["2010 Spiel des Jahres", "Dreamlike art", "Many expansions"]
    },
    {
        id: 33, category: "family", rank: 13, emoji: "🎨", title: "Sagrada",
        image: "https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__opengraph/img/o5fOzTnqZX8djLkD0emYQLyC2sU=/fit-in/1200x630/filters:strip_icc()/pic3525224.jpg",
        players: "1-4 Players", duration: "30-45 min", complexity: "Light-Medium", rating: "7.5",
        description: "Draft colorful dice to create stained glass windows.",
        tags: ["Dice Drafting", "Puzzle", "Abstract"],
        detailedDescription: "Draft dice and place them on your window pattern following color and shade rules.",
        howToPlay: "Draft dice from the pool, place them following adjacency restrictions.",
        whyItsGreat: "Beautiful components with satisfying puzzle-like gameplay.",
        funFacts: ["Gorgeous dice", "Gaudi inspiration", "Solo mode included"]
    },
    {
        id: 34, category: "family", rank: 14, emoji: "🏠", title: "Welcome To...",
        image: "https://cf.geekdo-images.com/g4XmxyKhNVdhC3QPd1purQ__opengraph/img/0WN_YgjJ7JJVvWkl8v-zCNsH_c0=/fit-in/1200x630/filters:strip_icc()/pic3761012.jpg",
        players: "1-100 Players", duration: "25 min", complexity: "Light", rating: "7.5",
        description: "Flip-and-write suburb building. Number your houses and add features!",
        tags: ["Flip and Write", "Simultaneous", "Suburban"],
        detailedDescription: "All players simultaneously choose from flipped cards to number houses on their street.",
        howToPlay: "Choose a house number and action from card pairs, write on your sheet.",
        whyItsGreat: "Plays any number of people simultaneously. Perfect for large groups!",
        funFacts: ["Unlimited players", "1950s suburb theme", "Many themed versions"]
    },
    {
        id: 35, category: "family", rank: 15, emoji: "🧱", title: "LEGO Games",
        image: "https://cf.geekdo-images.com/Dk1hnZl2vb8PO0xPbS2oHA__opengraph/img/S6YaZdUfpcYw5BHPVLrqB2L4z1s=/fit-in/1200x630/filters:strip_icc()/pic573987.jpg",
        players: "2-4 Players", duration: "20-30 min", complexity: "Light", rating: "6.5",
        description: "Build the game before you play it! Various themes and mechanics.",
        tags: ["Building", "Family", "Various"],
        detailedDescription: "Assemble LEGO boards and pieces, then play simple games with buildable rules.",
        howToPlay: "Build the game, then play using the assembled components. Change rules by rebuilding!",
        whyItsGreat: "Building the game is part of the fun. Great for younger kids.",
        funFacts: ["Buildable boards", "Changeable rules", "Various themes"]
    },
    {
        id: 36, category: "family", rank: 16, emoji: "🔍", title: "Mysterium",
        image: "https://cf.geekdo-images.com/evcAGDKZLHXBDJNvA2YPpA__opengraph/img/5IowWKJbXII0kSuWrVKSS2tn8h8=/fit-in/1200x630/filters:strip_icc()/pic2601683.jpg",
        players: "2-7 Players", duration: "45 min", complexity: "Light", rating: "7.2",
        description: "A ghost communicates through vision cards to help solve their murder.",
        tags: ["Cooperative", "Deduction", "Mystery"],
        detailedDescription: "One player is a ghost giving dreamlike vision cards; others interpret clues.",
        howToPlay: "Ghost gives vision cards, psychics discuss and guess suspect/location/weapon.",
        whyItsGreat: "Beautiful artwork creates memorable moments of interpretation and discussion.",
        funFacts: ["Asymmetric co-op", "Dreamlike art", "Clue meets Dixit"]
    },
    {
        id: 37, category: "family", rank: 17, emoji: "🏛️", title: "7 Wonders",
        image: "https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__opengraph/img/W7pJbH6Ri_vMgLfPmh6f6HwHBs8=/fit-in/1200x630/filters:strip_icc()/pic7149798.jpg",
        players: "2-7 Players", duration: "30 min", complexity: "Medium-Light", rating: "7.7",
        description: "Draft cards across three ages to build your ancient civilization.",
        tags: ["Card Drafting", "Civilization", "Ancient"],
        detailedDescription: "Simultaneously draft cards to develop resources, military, science, and wonders.",
        howToPlay: "Pick a card, pass the rest. Build with resources, military threatens neighbors.",
        whyItsGreat: "Quick playtime for the civilization building experience. Scales excellently.",
        funFacts: ["Plays in 30 minutes", "Up to 7 players", "Many expansions"]
    },
    {
        id: 38, category: "family", rank: 18, emoji: "🐻", title: "My City",
        image: "https://cf.geekdo-images.com/pHsNaSJ60MHfObCqfjcNCA__opengraph/img/xKY3Ep4aZHQ2wjHiqMaSAnGqeVQ=/fit-in/1200x630/filters:strip_icc()/pic5668384.png",
        players: "2-4 Players", duration: "30 min", complexity: "Light", rating: "7.6",
        description: "Legacy polyomino puzzle where your city evolves across 24 episodes.",
        tags: ["Legacy", "Polyomino", "Campaign"],
        detailedDescription: "Place polyomino tiles to build your city, with permanent changes across games.",
        howToPlay: "Flip cards and place matching building tiles. Score based on episode rules.",
        whyItsGreat: "Accessible legacy experience that any family can enjoy together.",
        funFacts: ["24 episode campaign", "Reiner Knizia design", "Replayable after campaign"]
    },
    {
        id: 39, category: "family", rank: 19, emoji: "🎪", title: "Sushi Go Party!",
        image: "https://cf.geekdo-images.com/rXGu-PcBlaFu0JV7D0dvog__opengraph/img/Yg1-qBW-UBZhX3WRkZ4pBDG-6EM=/fit-in/1200x630/filters:strip_icc()/pic2062497.jpg",
        players: "2-8 Players", duration: "20 min", complexity: "Light", rating: "7.5",
        description: "Draft sushi cards to make the best meal. Adorable and quick!",
        tags: ["Card Drafting", "Set Collection", "Quick"],
        detailedDescription: "Draft cards simultaneously, creating sets of sushi for points.",
        howToPlay: "Pick a card, pass the rest. Score sets at round end. Three rounds total.",
        whyItsGreat: "Teaches card drafting in 20 minutes with adorable art.",
        funFacts: ["Party version has menu boards", "Customizable card sets", "Great for kids"]
    },
    {
        id: 40, category: "family", rank: 20, emoji: "🎯", title: "Just One",
        image: "https://cf.geekdo-images.com/ocABRdX51qAXLNfoWt3mzA__opengraph/img/Z_6bB7jQwMUhNKbWRYJJY3_cJiU=/fit-in/1200x630/filters:strip_icc()/pic4268499.jpg",
        players: "3-7 Players", duration: "20 min", complexity: "Light", rating: "7.6",
        description: "Cooperative word game - give one-word clues without duplicating others!",
        tags: ["Cooperative", "Word Game", "Party"],
        detailedDescription: "Everyone writes one-word clues; duplicates are removed before the guesser sees them.",
        howToPlay: "Write a clue for the word, remove duplicates, guesser tries to identify the word.",
        whyItsGreat: "Creates hilarious moments when obvious clues collide.",
        funFacts: ["2019 Spiel des Jahres", "Cooperative word game", "Great for all ages"]
    },

    // ==================== PARTY GAMES ====================
    {
        id: 41, category: "party", rank: 1, emoji: "🕵️", title: "Codenames",
        image: "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__opengraph/img/r7V4YBSEV74EwHUXcBAzLI8S0c8=/fit-in/1200x630/filters:strip_icc()/pic2582929.jpg",
        players: "2-8 Players", duration: "15 min", complexity: "Light", rating: "7.6",
        description: "Give one-word clues to help your team find their agents. Don't hit the assassin!",
        tags: ["Word Game", "Teams", "Deduction"],
        detailedDescription: "Two spymasters give one-word clues linking multiple word cards their team must find.",
        howToPlay: "Spymaster gives a clue and number. Team guesses that many cards. Avoid opponent's cards and assassin!",
        whyItsGreat: "Perfect party game that creates intense collaboration and clever wordplay.",
        funFacts: ["2016 Spiel des Jahres", "Many themed versions", "Works great remotely"]
    },
    {
        id: 42, category: "party", rank: 2, emoji: "🤔", title: "Wavelength",
        image: "https://cf.geekdo-images.com/KQ1pXXUtdHvxEpXr0eR98A__opengraph/img/1K8aP6rqKQ1FRoJLT6Pwtt0YjN4=/fit-in/1200x630/filters:strip_icc()/pic4552555.png",
        players: "2-12 Players", duration: "30-45 min", complexity: "Light", rating: "7.5",
        description: "Give clues on a spectrum and see if your team can find the hidden target!",
        tags: ["Team", "Spectrum", "Discussion"],
        detailedDescription: "One player gives a clue for where the hidden target is on a spectrum (like Hot-Cold).",
        howToPlay: "Psychic gives clue for hidden target on spectrum. Team discusses and places guess.",
        whyItsGreat: "Sparks amazing debates about where concepts fall on spectrums.",
        funFacts: ["Physical dial component", "Creates debates", "Works with any group"]
    },
    {
        id: 43, category: "party", rank: 3, emoji: "😂", title: "Telestrations",
        image: "https://cf.geekdo-images.com/1CCOXXFliQSKGFsUZ5-c9w__opengraph/img/Hv-nT5XKXHjp4lAoxm8i3xJhqvg=/fit-in/1200x630/filters:strip_icc()/pic2452119.jpg",
        players: "4-8 Players", duration: "30 min", complexity: "Light", rating: "7.4",
        description: "Telephone meets Pictionary! Draw, guess, pass, and laugh at the results.",
        tags: ["Drawing", "Party", "Humor"],
        detailedDescription: "Draw a word, pass your book. Next person guesses, then draws what they guessed.",
        howToPlay: "Draw word, pass book. Guess drawing, draw guess. Reveal hilarious transformations!",
        whyItsGreat: "Guaranteed laughter as messages hilariously transform through drawings.",
        funFacts: ["No artistic skill needed", "Embrace bad drawings", "After Dark version exists"]
    },
    {
        id: 44, category: "party", rank: 4, emoji: "🎭", title: "The Resistance: Avalon",
        image: "https://cf.geekdo-images.com/LXYNq_-nWhALMzfSUStjlA__opengraph/img/hpZ2dPe_mTwqoAiUfnp4XRqFmZ0=/fit-in/1200x630/filters:strip_icc()/pic1398895.jpg",
        players: "5-10 Players", duration: "30 min", complexity: "Light", rating: "7.6",
        description: "Hidden roles in Arthurian legend. Merlin knows all, but must stay hidden!",
        tags: ["Social Deduction", "Hidden Roles", "Bluffing"],
        detailedDescription: "Good team must pass quests while evil tries to sabotage without being caught.",
        howToPlay: "Vote on team proposals, go on quests. Good passes, evil can fail. Deduce who's evil!",
        whyItsGreat: "Adds special roles to social deduction for incredible mind games.",
        funFacts: ["Merlin role is iconic", "No player elimination", "Many role combinations"]
    },
    {
        id: 45, category: "party", rank: 5, emoji: "🔫", title: "Secret Hitler",
        image: "https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__opengraph/img/ZXVv1Yz-PZT-OfTTavDuAQnrqp8=/fit-in/1200x630/filters:strip_icc()/pic5164305.jpg",
        players: "5-10 Players", duration: "45 min", complexity: "Light", rating: "7.5",
        description: "1930s political intrigue. Pass liberal policies or discover hidden fascists!",
        tags: ["Social Deduction", "Political", "Hidden Roles"],
        detailedDescription: "Liberals try to pass policies while fascists secretly try to elect Hitler as Chancellor.",
        howToPlay: "Elect governments, pass policies. Liberals win with 5 policies or shooting Hitler.",
        whyItsGreat: "Tense political gameplay with incredible moments of accusation and revelation.",
        funFacts: ["Print and play available", "Kickstarter hit", "Intense accusations"]
    },
    {
        id: 46, category: "party", rank: 6, emoji: "🐺", title: "One Night Ultimate Werewolf",
        image: "https://cf.geekdo-images.com/-E4ezrq1iiOAJm7lyc9lYQ__opengraph/img/eOfV0fKvsMCvHfRR1__4r_P5lZY=/fit-in/1200x630/filters:strip_icc()/pic1809823.jpg",
        players: "3-10 Players", duration: "10 min", complexity: "Light", rating: "7.1",
        description: "One night of werewolf madness! No elimination, just deduction and voting.",
        tags: ["Social Deduction", "Quick", "App-Driven"],
        detailedDescription: "Roles act during the night, then everyone has just minutes to find the werewolf.",
        howToPlay: "App guides night phase. Day: discuss and vote. Werewolves try to avoid detection.",
        whyItsGreat: "All the fun of Werewolf in 10 minutes with no player elimination!",
        funFacts: ["Free app required", "Many expansions", "Games take 10 minutes"]
    },
    {
        id: 47, category: "party", rank: 7, emoji: "🎪", title: "Coup",
        image: "https://cf.geekdo-images.com/a9wENKcI1IXb2HM12gOH3g__opengraph/img/Yk7DkVK6qZDXuLtSO5G9wJJgVio=/fit-in/1200x630/filters:strip_icc()/pic2016054.jpg",
        players: "2-6 Players", duration: "15 min", complexity: "Light", rating: "7.0",
        description: "Bluff your way to victory! Claim any role, but get caught and lose influence.",
        tags: ["Bluffing", "Quick", "Elimination"],
        detailedDescription: "Claim roles to take actions. Anyone can challenge - if you're bluffing, you lose!",
        howToPlay: "Claim a role, take its action. Get challenged and caught = lose a card. Last player wins.",
        whyItsGreat: "Pure bluffing in 15 minutes. Simple rules, deep mind games.",
        funFacts: ["Only 2 cards each", "Reformation expansion", "Under 15 minutes"]
    },
    {
        id: 48, category: "party", rank: 8, emoji: "📝", title: "Scattergories",
        image: "https://cf.geekdo-images.com/Ds2VW8KTnfxhYEadB7dV9A__opengraph/img/v2i8-OHIK5U8F1GY7oxjZUU8EFQ=/fit-in/1200x630/filters:strip_icc()/pic5311295.jpg",
        players: "2-6 Players", duration: "30 min", complexity: "Light", rating: "6.3",
        description: "Race to think of words starting with a letter for various categories.",
        tags: ["Word Game", "Party", "Timer"],
        detailedDescription: "Roll a letter die, then write words starting with that letter for 12 categories.",
        howToPlay: "Roll letter, start timer. Write unique answers. Score only for answers no one else wrote.",
        whyItsGreat: "Classic party game that rewards creativity and quick thinking.",
        funFacts: ["Classic party game", "Many themed versions", "Custom categories possible"]
    },
    {
        id: 49, category: "party", rank: 9, emoji: "🎤", title: "Wits & Wagers",
        image: "https://cf.geekdo-images.com/2u6m2TwjSjgPyHbKqsZTSg__opengraph/img/Kpn6QlgFz1-IxNAZJ_dvQBfqWHo=/fit-in/1200x630/filters:strip_icc()/pic2558555.jpg",
        players: "3-7 Players", duration: "25 min", complexity: "Light", rating: "7.0",
        description: "Trivia where you don't need to know answers - just bet on the best guess!",
        tags: ["Trivia", "Betting", "Party"],
        detailedDescription: "Everyone guesses a numerical answer, then bet chips on which guess is closest.",
        howToPlay: "Write guess, reveal all. Place bets on guesses. Closest without going over wins!",
        whyItsGreat: "Trivia game where even clueless players can win by betting smart!",
        funFacts: ["All answers are numbers", "Betting mechanism", "Vegas edition available"]
    },
    {
        id: 50, category: "party", rank: 10, emoji: "🎨", title: "A Fake Artist Goes to NY",
        image: "https://cf.geekdo-images.com/enPjxfUl5bLS2soqTI8O0w__opengraph/img/XAajGxVhj0q0JMRJiY_r11hxEjM=/fit-in/1200x630/filters:strip_icc()/pic3게182801.jpg",
        players: "5-10 Players", duration: "20 min", complexity: "Light", rating: "7.0",
        description: "Everyone draws together except one fake artist who doesn't know the subject!",
        tags: ["Drawing", "Social Deduction", "Collaborative"],
        detailedDescription: "All but one player know the subject. Draw one line at a time - find the fake!",
        howToPlay: "Each player adds one line to drawing. Vote on who's the fake artist.",
        whyItsGreat: "Combines drawing with deduction for unique hilarious moments.",
        funFacts: ["Tiny box game", "From Oink Games", "One line per turn"]
    },
    {
        id: 51, category: "party", rank: 11, emoji: "🎭", title: "The Chameleon",
        image: "https://cf.geekdo-images.com/MK5vZVdnV3mZqxc7lU1FNw__opengraph/img/4W3gxCHZJZGdQf2p-8jPvlG5Vlk=/fit-in/1200x630/filters:strip_icc()/pic4297430.jpg",
        players: "3-8 Players", duration: "15 min", complexity: "Light", rating: "6.9",
        description: "Everyone knows the secret word except the Chameleon. Find them out!",
        tags: ["Social Deduction", "Word Game", "Bluffing"],
        detailedDescription: "Give one-word clues about the secret word. The Chameleon must blend in without knowing it!",
        howToPlay: "Say one word related to secret word. Chameleon bluffs. Vote on who's the Chameleon.",
        whyItsGreat: "Simple rules create tense moments as the Chameleon tries to blend in.",
        funFacts: ["Big Potato Games", "Quick rounds", "Topic cards included"]
    },
    {
        id: 52, category: "party", rank: 12, emoji: "🔥", title: "Exploding Kittens",
        image: "https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__opengraph/img/ON23n00ol3pVMKRn8h-7O7mR5Jg=/fit-in/1200x630/filters:strip_icc()/pic2691976.png",
        players: "2-5 Players", duration: "15 min", complexity: "Light", rating: "6.1",
        description: "Russian roulette with kittens! Draw cards and try not to explode.",
        tags: ["Card Game", "Quick", "Humor"],
        detailedDescription: "Draw cards hoping not to get an Exploding Kitten. Use cards to avoid or redirect explosions!",
        howToPlay: "Play cards or draw. Exploding Kitten = out unless you have a Defuse!",
        whyItsGreat: "Quick, chaotic fun that's easy to teach and play anywhere.",
        funFacts: ["Kickstarter record holder", "Oatmeal artwork", "Many expansions"]
    },
    {
        id: 53, category: "party", rank: 13, emoji: "🃏", title: "Cards Against Humanity",
        image: "https://cf.geekdo-images.com/tMy37pLQbdsETHwnRMR5VA__opengraph/img/hLZFuoMDXlr87nTMsT3wHrm1VqU=/fit-in/1200x630/filters:strip_icc()/pic2909692.jpg",
        players: "4-20 Players", duration: "30-90 min", complexity: "Light", rating: "5.9",
        description: "A party game for horrible people. Fill in blanks with outrageous answers.",
        tags: ["Adult", "Humor", "Party"],
        detailedDescription: "One player reads a black card; others submit white cards to complete the phrase.",
        howToPlay: "Judge reads prompt. Others play answer cards. Judge picks funniest. Winner keeps black card.",
        whyItsGreat: "Consistently generates laughs (and gasps) with absurd combinations.",
        funFacts: ["Many expansion packs", "Adults only", "Free print and play"]
    },
    {
        id: 54, category: "party", rank: 14, emoji: "🕺", title: "Monikers",
        image: "https://cf.geekdo-images.com/4xU0BkESPJ-a8HOhGRdx9g__opengraph/img/mz_rkgQUc1VLAZCfF__8a7X6xb8=/fit-in/1200x630/filters:strip_icc()/pic2584586.png",
        players: "4-16 Players", duration: "30-60 min", complexity: "Light", rating: "7.7",
        description: "Three rounds of clues: describe it, one word, then charades only!",
        tags: ["Party", "Acting", "Teams"],
        detailedDescription: "Same cards used three rounds with increasingly difficult clue-giving rules.",
        howToPlay: "Round 1: describe. Round 2: one word. Round 3: charades. Same cards throughout!",
        whyItsGreat: "Builds hilarious inside jokes as the same cards return with harder rules.",
        funFacts: ["Based on Time's Up", "Celebrity cards", "Inside jokes develop"]
    },
    {
        id: 55, category: "party", rank: 15, emoji: "🎭", title: "Two Rooms and a Boom",
        image: "https://cf.geekdo-images.com/Wx0JEmBPl-TG6pnxFYSfRA__opengraph/img/0pnPT-qJ1hHPvqBbNh6jJLhKVFE=/fit-in/1200x630/filters:strip_icc()/pic2335221.png",
        players: "6-30 Players", duration: "15 min", complexity: "Light", rating: "6.9",
        description: "Two teams in separate rooms exchange hostages. Find or protect targets!",
        tags: ["Social Deduction", "Large Group", "Real-Time"],
        detailedDescription: "Teams in different rooms exchange players trying to get/keep key roles in their room.",
        howToPlay: "Negotiate and trade players between rooms. Blue wants President safe; Red wants Bomber with President.",
        whyItsGreat: "Unique large-group game that works with up to 30 players!",
        funFacts: ["Requires two rooms", "Up to 30 players", "Print and play available"]
    },
    {
        id: 56, category: "party", rank: 16, emoji: "🎲", title: "Captain Sonar",
        image: "https://cf.geekdo-images.com/wLW6BhHIkLfYy9p2XhYhjQ__opengraph/img/cFWihmHzO3i-bMNtYmkJjVrTs0Q=/fit-in/1200x630/filters:strip_icc()/pic3013621.png",
        players: "2-8 Players", duration: "45-60 min", complexity: "Medium-Light", rating: "7.4",
        description: "Real-time submarine hunt! Two teams track each other on hidden maps.",
        tags: ["Real-Time", "Teams", "Deduction"],
        detailedDescription: "Teams simultaneously operate submarines, tracking the enemy while managing systems.",
        howToPlay: "Captain moves, Radio Operator tracks enemy, Engineer manages damage, First Mate charges weapons.",
        whyItsGreat: "Intense real-time team coordination that's unlike anything else.",
        funFacts: ["Best at 8 players", "Real-time or turn-based", "Requires coordination"]
    },
    {
        id: 57, category: "party", rank: 17, emoji: "🤫", title: "Spyfall",
        image: "https://cf.geekdo-images.com/jHYPEBrXxT1hL1qV4YSXAQ__opengraph/img/dCNqRjATCAgnRTWe_9aPR1Oj49s=/fit-in/1200x630/filters:strip_icc()/pic2453926.jpg",
        players: "3-8 Players", duration: "15 min", complexity: "Light", rating: "6.9",
        description: "Everyone's at the same location except one spy. Ask questions to find them!",
        tags: ["Social Deduction", "Questions", "Bluffing"],
        detailedDescription: "All but the spy know the location. Ask questions to find the spy without revealing the location!",
        howToPlay: "Ask questions to others. Spy tries to figure out location while blending in.",
        whyItsGreat: "Creates hilarious moments as the spy desperately tries to figure out where they are.",
        funFacts: ["30 locations", "Spy must deduce location", "Many sequels"]
    },
    {
        id: 58, category: "party", rank: 18, emoji: "🎯", title: "Throw Throw Burrito",
        image: "https://cf.geekdo-images.com/i8HnJfkS2WWtzjYUqWLvDg__opengraph/img/bN0I9JfbEnxKTDdPZGQF5Y_7lJw=/fit-in/1200x630/filters:strip_icc()/pic4786370.jpg",
        players: "2-6 Players", duration: "15 min", complexity: "Light", rating: "6.6",
        description: "Card game meets dodgeball! Collect sets and throw foam burritos at friends.",
        tags: ["Action", "Real-Time", "Dexterity"],
        detailedDescription: "Collect card sets while burrito cards trigger real-time dodgeball battles!",
        howToPlay: "Pass cards, collect sets. Burrito cards trigger throwing foam burritos at opponents!",
        whyItsGreat: "Combines card games with actual throwing for chaotic fun.",
        funFacts: ["By Exploding Kittens creators", "Foam burritos included", "Active gameplay"]
    },
    {
        id: 59, category: "party", rank: 19, emoji: "🎭", title: "Deception: Murder in Hong Kong",
        image: "https://cf.geekdo-images.com/cTrAWasNHyKMcNs8Zrv5O7sKS6M=/fit-in/1200x630/pic2568916.jpg",
        players: "4-12 Players", duration: "20 min", complexity: "Light", rating: "7.4",
        description: "Forensic investigator gives silent clues while murderer hides among detectives.",
        tags: ["Social Deduction", "Murder Mystery", "Asymmetric"],
        detailedDescription: "Forensic Scientist gives clues through tiles while Murderer tries to avoid detection.",
        howToPlay: "Forensic Scientist places clue tiles. Detectives discuss. Murderer deflects suspicion.",
        whyItsGreat: "Unique clue-giving mechanism creates tense deduction moments.",
        funFacts: ["Silent Forensic Scientist", "Up to 12 players", "Clue tiles not words"]
    },
    {
        id: 60, category: "party", rank: 20, emoji: "🔍", title: "Decrypto",
        image: "https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__opengraph/img/u38X7xs0neR2yr30VIDXXjFE1JA=/fit-in/1200x630/filters:strip_icc()/pic3759421.jpg",
        players: "3-8 Players", duration: "30 min", complexity: "Light", rating: "7.7",
        description: "Give coded clues to your team while opponents try to intercept!",
        tags: ["Word Game", "Teams", "Deduction"],
        detailedDescription: "Give clues for numbered words. Your team decodes while opponents try to intercept.",
        howToPlay: "Give clues for your words. Team decodes the order. Opponents try to intercept over time.",
        whyItsGreat: "Evolving clues as opponents learn your words creates incredible tension.",
        funFacts: ["Better than Codenames for some", "Encrypted communication theme", "Two-sided screens"]
    },

    // ==================== COOPERATIVE GAMES ====================
    {
        id: 61, category: "cooperative", rank: 1, emoji: "🌌", title: "Gloomhaven",
        image: "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__opengraph/img/Fkq6AOVR2ScRRUoUk9gJk1GPlHY=/fit-in/1200x630/filters:strip_icc()/pic2437871.jpg",
        players: "1-4 Players", duration: "60-120 min", complexity: "Heavy", rating: "8.6",
        description: "Campaign dungeon crawler with tactical card combat and persistent world.",
        tags: ["Campaign", "Tactical", "Fantasy"],
        detailedDescription: "95 scenarios of tactical combat where your choices shape the world.",
        howToPlay: "Play two cards per round for actions. No dice - all card-driven combat.",
        whyItsGreat: "Hundreds of hours of meaningful choices with incredible tactical depth.",
        funFacts: ["22 pounds!", "95 scenarios", "1,700+ cards"]
    },
    {
        id: 62, category: "cooperative", rank: 2, emoji: "🎭", title: "Pandemic Legacy: Season 1",
        image: "https://cf.geekdo-images.com/cTrAWasNHyKMcNs8Zrv5O7sKS6M=/fit-in/1200x630/pic2452831.png",
        players: "2-4 Players", duration: "60 min", complexity: "Medium", rating: "8.5",
        description: "Campaign Pandemic with permanent consequences. Save humanity across 12 months!",
        tags: ["Legacy", "Campaign", "Disease"],
        detailedDescription: "Year-long campaign where diseases mutate and the world permanently changes.",
        howToPlay: "Classic Pandemic rules plus legacy changes that persist between games.",
        whyItsGreat: "Creates unforgettable stories with lasting consequences.",
        funFacts: ["Tear up cards", "Secret compartments", "12-24 game campaign"]
    },
    {
        id: 63, category: "cooperative", rank: 3, emoji: "🌸", title: "Spirit Island",
        image: "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__opengraph/img/iiYG9mI38R48PGxVKdLMqZzDK7E=/fit-in/1200x630/filters:strip_icc()/pic3615739.png",
        players: "1-4 Players", duration: "90-120 min", complexity: "Heavy", rating: "8.5",
        description: "As spirits, defend your island from colonizers using elemental powers.",
        tags: ["Asymmetric", "Fantasy", "Anti-Colonial"],
        detailedDescription: "Each spirit has unique powers. Coordinate to generate fear and destroy invaders.",
        howToPlay: "Gain energy, play power cards, target invaders before they ravage the land.",
        whyItsGreat: "Deep asymmetric cooperation with wildly different spirit experiences.",
        funFacts: ["8+ spirits", "Anti-colonial theme", "High replayability"]
    },
    {
        id: 64, category: "cooperative", rank: 4, emoji: "🦠", title: "Pandemic",
        image: "https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__opengraph/img/S2KWMmsoCdatC3QnBHsfHwPq_MI=/fit-in/1200x630/filters:strip_icc()/pic1534148.jpg",
        players: "2-4 Players", duration: "45 min", complexity: "Medium-Light", rating: "7.6",
        description: "Race against diseases spreading across the globe. Find cures before it's too late!",
        tags: ["Disease", "Set Collection", "Classic Co-op"],
        detailedDescription: "Travel the world treating diseases and collecting cards to discover cures.",
        howToPlay: "4 actions per turn. Treat diseases, share knowledge, build research stations, cure diseases.",
        whyItsGreat: "The game that popularized cooperative board gaming. Tense and satisfying.",
        funFacts: ["2008 classic", "Many versions", "Real disease consultant"]
    },
    {
        id: 65, category: "cooperative", rank: 5, emoji: "🚀", title: "The Crew",
        image: "https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__opengraph/img/GeTPIqMOdJm_gcIQvGYRRhnRwaU=/fit-in/1200x630/filters:strip_icc()/pic5687013.jpg",
        players: "2-5 Players", duration: "20 min", complexity: "Light-Medium", rating: "8.0",
        description: "Cooperative trick-taking! Complete missions through limited communication.",
        tags: ["Trick-Taking", "Campaign", "Communication"],
        detailedDescription: "50 missions of cooperative trick-taking where you must win specific cards.",
        howToPlay: "Play standard trick-taking but cooperate to win tricks containing task cards.",
        whyItsGreat: "Revolutionary cooperative trick-taking with escalating challenges.",
        funFacts: ["2020 Kennerspiel", "50 missions", "Sequel: Mission Deep Sea"]
    },
    {
        id: 66, category: "cooperative", rank: 6, emoji: "🏰", title: "Forbidden Desert",
        image: "https://cf.geekdo-images.com/rXsTss3vPLsq6KmbYIH5aw__opengraph/img/RkNVyYnPd2uxP8WTBGV0bgIsdRg=/fit-in/1200x630/filters:strip_icc()/pic1528722.jpg",
        players: "2-5 Players", duration: "45 min", complexity: "Light-Medium", rating: "7.2",
        description: "Excavate a buried airship before the sandstorm overwhelms your team!",
        tags: ["Survival", "Modular Board", "Adventure"],
        detailedDescription: "Dig through shifting sands to find parts of a legendary flying machine.",
        howToPlay: "Take actions to excavate, move, share water. Storm shifts tiles and buries you in sand.",
        whyItsGreat: "Dynamic sandstorm creates constantly evolving challenges.",
        funFacts: ["Sequel to Forbidden Island", "3D airship to build", "Shifting tiles"]
    },
    {
        id: 67, category: "cooperative", rank: 7, emoji: "👻", title: "Mysterium",
        image: "https://cf.geekdo-images.com/evcAGDKZLHXBDJNvA2YPpA__opengraph/img/5IowWKJbXII0kSuWrVKSS2tn8h8=/fit-in/1200x630/filters:strip_icc()/pic2601683.jpg",
        players: "2-7 Players", duration: "45 min", complexity: "Light", rating: "7.2",
        description: "A ghost sends dreamlike visions to help psychics solve a murder.",
        tags: ["Mystery", "Asymmetric", "Deduction"],
        detailedDescription: "Ghost player gives vision cards to help others identify the correct suspect, location, weapon.",
        howToPlay: "Ghost gives vision cards silently. Psychics discuss and guess. Progress through stages.",
        whyItsGreat: "Beautiful art creates memorable interpretation moments.",
        funFacts: ["Dixit meets Clue", "Beautiful artwork", "One silent player"]
    },
    {
        id: 68, category: "cooperative", rank: 8, emoji: "🔥", title: "Flash Point: Fire Rescue",
        image: "https://cf.geekdo-images.com/MfzZ9xkMakVRVhgDRu9vTQ__opengraph/img/KU7_lXAjH-bPZkGQ8MTpI7MSWkI=/fit-in/1200x630/filters:strip_icc()/pic1129370.jpg",
        players: "2-6 Players", duration: "45 min", complexity: "Medium-Light", rating: "7.0",
        description: "Rescue victims from a burning building before it collapses!",
        tags: ["Firefighting", "Rescue", "Action Points"],
        detailedDescription: "Fight fires, rescue victims, and prevent the building from structural collapse.",
        howToPlay: "Spend action points to move, extinguish, chop walls, rescue victims. Fire spreads each turn.",
        whyItsGreat: "Thematic firefighting with variable difficulty and roles.",
        funFacts: ["Specialist roles", "Multiple maps", "Family and advanced modes"]
    },
    {
        id: 69, category: "cooperative", rank: 9, emoji: "🏝️", title: "Robinson Crusoe",
        image: "https://cf.geekdo-images.com/FbFnaTx3aT5dM18K_bR_Pg__opengraph/img/hMz8nIJA-7hcPfCrR3zrPmE_a8Y=/fit-in/1200x630/filters:strip_icc()/pic3165731.jpg",
        players: "1-4 Players", duration: "60-120 min", complexity: "Heavy", rating: "7.8",
        description: "Survive on a deserted island! Explore, build shelter, and face countless dangers.",
        tags: ["Survival", "Adventure", "Exploration"],
        detailedDescription: "Manage hunger, shelter, weather, and morale while completing scenario objectives.",
        howToPlay: "Assign workers to actions. Roll to see if actions succeed. Handle event consequences.",
        whyItsGreat: "The most thematic survival experience with tough decisions everywhere.",
        funFacts: ["Very difficult", "Multiple scenarios", "Consequence chains"]
    },
    {
        id: 70, category: "cooperative", rank: 10, emoji: "🎃", title: "Betrayal at House on the Hill",
        image: "https://cf.geekdo-images.com/dbbLfMTtzhLJmPYL6g7jfg__opengraph/img/fFh9E8jl1CfcQ3YBRpC0qQyA6Oo=/fit-in/1200x630/filters:strip_icc()/pic4545498.jpg",
        players: "3-6 Players", duration: "60 min", complexity: "Medium-Light", rating: "7.1",
        description: "Explore a haunted house until one player becomes the traitor!",
        tags: ["Horror", "Exploration", "Traitor"],
        detailedDescription: "Build the house as you explore. At the haunt, one player might betray the rest!",
        howToPlay: "Explore rooms, trigger omens. Eventually the Haunt begins with traitor mechanics.",
        whyItsGreat: "50 different haunts create wildly different horror scenarios.",
        funFacts: ["50 haunts", "Traitor mechanic", "House changes every game"]
    },
    {
        id: 71, category: "cooperative", rank: 11, emoji: "🏔️", title: "K2",
        image: "https://cf.geekdo-images.com/PmLguGX1jIv1gr0zzI7gFA__opengraph/img/5YXHk4MX8N5S-8fNERIWN8i_HqE=/fit-in/1200x630/filters:strip_icc()/pic668065.jpg",
        players: "1-5 Players", duration: "60 min", complexity: "Medium-Light", rating: "7.1",
        description: "Climb the deadly K2 mountain and survive the brutal weather!",
        tags: ["Climbing", "Survival", "Hand Management"],
        detailedDescription: "Race to the summit while managing acclimatization and weather dangers.",
        howToPlay: "Play cards to climb and acclimatize. Weather changes daily. Survive and return!",
        whyItsGreat: "Tense push-your-luck climbing with real weather danger.",
        funFacts: ["Based on real K2", "Weather kills", "Two climbers per player"]
    },
    {
        id: 72, category: "cooperative", rank: 12, emoji: "🦇", title: "Arkham Horror: LCG",
        image: "https://cf.geekdo-images.com/B_TJqnAH93tkNLxXqZHJIg__opengraph/img/tDzWJf0xOvtWb-T_PKKJfzPJWB4=/fit-in/1200x630/filters:strip_icc()/pic3122349.jpg",
        players: "1-2 Players", duration: "60-120 min", complexity: "Medium-Heavy", rating: "8.2",
        description: "Lovecraftian horror card game with campaign-driven mysteries.",
        tags: ["Horror", "Deck Building", "Campaign"],
        detailedDescription: "Build investigator decks and play through branching campaign scenarios.",
        howToPlay: "Build decks, investigate locations, fight monsters, survive sanity loss.",
        whyItsGreat: "Deep deckbuilding meets incredible narrative campaigns.",
        funFacts: ["Living Card Game", "Many campaigns", "Deck construction"]
    },
    {
        id: 73, category: "cooperative", rank: 13, emoji: "🌊", title: "Sleeping Gods",
        image: "https://cf.geekdo-images.com/WN9-P20XLWb5dUwNNf8F-w__opengraph/img/NwKWYDCXg_L5j2wLGY__YoV1j5I=/fit-in/1200x630/filters:strip_icc()/pic5228287.jpg",
        players: "1-4 Players", duration: "60-1200 min", complexity: "Medium", rating: "8.2",
        description: "Open-world exploration game! Captain a ship through a strange new world.",
        tags: ["Exploration", "Campaign", "Storybook"],
        detailedDescription: "Explore a massive atlas, encounter stories, and find your way home.",
        howToPlay: "Choose destinations, resolve encounters, manage crew, discover secrets.",
        whyItsGreat: "True open-world feeling with meaningful exploration and discovery.",
        funFacts: ["Huge atlas book", "Save your progress", "Open world"]
    },
    {
        id: 74, category: "cooperative", rank: 14, emoji: "🏥", title: "Burgle Bros",
        image: "https://cf.geekdo-images.com/camo-uwMdCFMWVItQWzTlw__opengraph/img/KqXwQKQhZ_6Lm0FZWABUPZqTK8s=/fit-in/1200x630/filters:strip_icc()/pic2548838.jpg",
        players: "1-4 Players", duration: "90 min", complexity: "Medium", rating: "7.4",
        description: "Ocean's Eleven: The Board Game! Pull off a heist without getting caught.",
        tags: ["Heist", "Stealth", "Puzzle"],
        detailedDescription: "Navigate a multi-floor building, crack safes, and avoid guards.",
        howToPlay: "Move through tiles, hack alarms, crack safes, escape before guards catch you.",
        whyItsGreat: "Captures heist movie tension perfectly with clever puzzle mechanics.",
        funFacts: ["3D building", "Guards with patrol paths", "Escape by helicopter"]
    },
    {
        id: 75, category: "cooperative", rank: 15, emoji: "🏰", title: "Defenders of the Realm",
        image: "https://cf.geekdo-images.com/_n0OQ2DYXzLEpMdYnDM7tQ__opengraph/img/M6y-7JoXEj-Dz7UcK4RMphb-_hI=/fit-in/1200x630/filters:strip_icc()/pic717422.jpg",
        players: "1-4 Players", duration: "90 min", complexity: "Medium", rating: "7.3",
        description: "Fantasy Pandemic! Heroes defend the realm from four advancing generals.",
        tags: ["Fantasy", "Area Movement", "Adventure"],
        detailedDescription: "Move heroes, defeat minions, and stop generals from reaching the city.",
        howToPlay: "Move, fight minions, use abilities. Generals advance; defeat all before they reach capital.",
        whyItsGreat: "Fantasy theme elevates the Pandemic-style gameplay.",
        funFacts: ["4 unique generals", "Character abilities", "Fantasy theme"]
    },
    {
        id: 76, category: "cooperative", rank: 16, emoji: "🔬", title: "Pandemic: The Cure",
        image: "https://cf.geekdo-images.com/LF2D86PGX3hZKn1vQIoVVw__opengraph/img/_E-oxyQCR-2Jn1NHxvU3wfCgb08=/fit-in/1200x630/filters:strip_icc()/pic1846553.jpg",
        players: "2-5 Players", duration: "30 min", complexity: "Light-Medium", rating: "7.2",
        description: "Dice-based Pandemic! Roll dice to determine your actions against diseases.",
        tags: ["Dice", "Disease", "Push Your Luck"],
        detailedDescription: "Roll dice for actions and push your luck to find cures quickly.",
        howToPlay: "Roll dice, assign to actions. Collect samples, push luck for cures.",
        whyItsGreat: "Faster Pandemic with exciting dice-rolling tension.",
        funFacts: ["30 minute playtime", "Dice-based", "Push your luck element"]
    },
    {
        id: 77, category: "cooperative", rank: 17, emoji: "🌙", title: "Dead of Winter",
        image: "https://cf.geekdo-images.com/r4x8YF4H9a3dB-ZT4YgHlQ__opengraph/img/9cKZGvLfqq_dDLZjqE8DnUWKJkY=/fit-in/1200x630/filters:strip_icc()/pic2344284.jpg",
        players: "2-5 Players", duration: "100 min", complexity: "Medium", rating: "7.4",
        description: "Zombie survival with hidden traitor possibility and personal goals!",
        tags: ["Zombies", "Survival", "Semi-Cooperative"],
        detailedDescription: "Survive zombies while completing objectives. Someone might be a traitor!",
        howToPlay: "Control survivors, search for supplies, complete crisis cards, watch for betrayal.",
        whyItsGreat: "Crossroads cards create narrative moments; traitor paranoia adds tension.",
        funFacts: ["Crossroads cards", "Possible traitor", "Personal objectives"]
    },
    {
        id: 78, category: "cooperative", rank: 18, emoji: "⚗️", title: "Horrified",
        image: "https://cf.geekdo-images.com/gszjBj5xfSjjhNxsLPdLiA__opengraph/img/8I1oC-qjKpEXN1ohYs_vqM6eRQE=/fit-in/1200x630/filters:strip_icc()/pic4848330.jpg",
        players: "1-5 Players", duration: "60 min", complexity: "Light-Medium", rating: "7.3",
        description: "Classic monsters attack the village! Work together to defeat them.",
        tags: ["Horror", "Classic Monsters", "Gateway Co-op"],
        detailedDescription: "Fight Dracula, Frankenstein, and other Universal monsters threatening villagers.",
        howToPlay: "Collect items, guide villagers, defeat monsters using their unique weaknesses.",
        whyItsGreat: "Accessible cooperative gaming with beloved classic monsters.",
        funFacts: ["Universal Monsters", "Scalable difficulty", "Great gateway co-op"]
    },
    {
        id: 79, category: "cooperative", rank: 19, emoji: "🌲", title: "Oath of the Outcasts",
        image: "https://cf.geekdo-images.com/5B7Mz5UOoqqWS3-6_2CUQQ__opengraph/img/KrjIL1DVDh9RrADdT84uOflX9Ag=/fit-in/1200x630/filters:strip_icc()/pic4074580.jpg",
        players: "2-4 Players", duration: "60 min", complexity: "Medium-Light", rating: "7.2",
        description: "Fight for freedom against an evil empire in this asymmetric co-op.",
        tags: ["Fantasy", "Asymmetric", "Rebellion"],
        detailedDescription: "Each hero has unique abilities in the fight against tyranny.",
        howToPlay: "Use unique hero powers, complete quests, defeat the overlord's forces.",
        whyItsGreat: "Varied hero abilities create different cooperative experiences.",
        funFacts: ["Asymmetric heroes", "Fantasy rebellion", "Quest-based"]
    },
    {
        id: 80, category: "cooperative", rank: 20, emoji: "🚁", title: "Pandemic: Fall of Rome",
        image: "https://cf.geekdo-images.com/zVfpPK9EAgJn_tTMqRWCbg__opengraph/img/nMHLVDmzIi9TaLcpF5G7t32zLaY=/fit-in/1200x630/filters:strip_icc()/pic4546427.png",
        players: "1-5 Players", duration: "45-60 min", complexity: "Medium", rating: "7.6",
        description: "Defend Rome against barbarian invasions using legions and alliances!",
        tags: ["Historical", "Warfare", "Alliance"],
        detailedDescription: "Fight barbarian tribes or ally with them to save the Roman Empire.",
        howToPlay: "Move legions, battle barbarians, forge alliances, prevent sacking of cities.",
        whyItsGreat: "Combat and alliance mechanics add depth to the Pandemic system.",
        funFacts: ["Legions fight", "Forge alliances", "Historical theme"]
    },

    // ==================== THEMATIC & ADVENTURE GAMES ====================
    {
        id: 81, category: "thematic", rank: 1, emoji: "🌌", title: "Gloomhaven: Jaws of the Lion",
        image: "https://cf.geekdo-images.com/l4pOC6vLMKm0aYRzBEKQNg__opengraph/img/A3oZWvJpVqJ-u26hnm5O0qmFBOE=/fit-in/1200x630/filters:strip_icc()/pic5055631.jpg",
        players: "1-4 Players", duration: "60-120 min", complexity: "Medium-Heavy", rating: "8.4",
        description: "Accessible Gloomhaven! 25 scenarios with tutorial built into gameplay.",
        tags: ["Campaign", "Tactical", "Fantasy"],
        detailedDescription: "Streamlined Gloomhaven experience with learn-as-you-play tutorial.",
        howToPlay: "Same card-driven combat as Gloomhaven with integrated scenario book.",
        whyItsGreat: "All the depth of Gloomhaven in a more accessible package.",
        funFacts: ["25 scenarios", "Tutorial included", "4 new characters"]
    },
    {
        id: 82, category: "thematic", rank: 2, emoji: "⭐", title: "Star Wars: Rebellion",
        image: "https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__opengraph/img/LjW-RGNu39HaOMjsB6L46xExmOg=/fit-in/1200x630/filters:strip_icc()/pic4325841.jpg",
        players: "2-4 Players", duration: "180-240 min", complexity: "Medium-Heavy", rating: "8.4",
        description: "Epic Star Wars conflict! Empire hunts hidden Rebel base across the galaxy.",
        tags: ["Star Wars", "Asymmetric", "Hidden Movement"],
        detailedDescription: "Empire must find and destroy Rebel base. Rebels must survive and inspire hope.",
        howToPlay: "Send leaders on missions, move fleets, battle. Empire searches, Rebels hide.",
        whyItsGreat: "Captures the Star Wars saga perfectly in one epic game.",
        funFacts: ["150+ miniatures", "Asymmetric sides", "Hidden Rebel base"]
    },
    {
        id: 83, category: "thematic", rank: 3, emoji: "🏴‍☠️", title: "Merchants & Marauders",
        image: "https://cf.geekdo-images.com/aUFsO4Qzh7hdszJfbBMY9A__opengraph/img/xdEBn0xzFpDVrQPqTiGFVlpK8Vc=/fit-in/1200x630/filters:strip_icc()/pic738119.jpg",
        players: "2-4 Players", duration: "180 min", complexity: "Medium-Heavy", rating: "7.5",
        description: "Caribbean pirate sandbox! Trade goods, hunt pirates, or become one yourself.",
        tags: ["Pirates", "Sandbox", "Adventure"],
        detailedDescription: "Open-world pirating where you choose to trade peacefully or raid merchant ships.",
        howToPlay: "Move your ship, trade goods, complete missions, engage in naval combat, gain glory.",
        whyItsGreat: "True sandbox freedom with meaningful choices between merchant and pirate life.",
        funFacts: ["Open world", "Naval combat", "Multiple paths to victory"]
    },
    {
        id: 84, category: "thematic", rank: 4, emoji: "🦇", title: "Arkham Horror 3rd Edition",
        image: "https://cf.geekdo-images.com/ci1Ul2spDzh0WfQQR8b3Xw__opengraph/img/hcHIAL3lAhLMKvcH2A12TmTKqqs=/fit-in/1200x630/filters:strip_icc()/pic4242447.jpg",
        players: "1-6 Players", duration: "120-180 min", complexity: "Medium-Heavy", rating: "7.6",
        description: "Lovecraftian horror investigation. Stop the Ancient One before it's too late!",
        tags: ["Horror", "Investigation", "Lovecraft"],
        detailedDescription: "Investigate strange occurrences in 1920s Arkham and prevent cosmic horrors.",
        howToPlay: "Move investigators, gather clues, fight monsters, resolve scenarios.",
        whyItsGreat: "Streamlined Arkham experience with modular scenario system.",
        funFacts: ["Modular scenarios", "Streamlined rules", "12 investigators"]
    },
    {
        id: 85, category: "thematic", rank: 5, emoji: "🗡️", title: "Descent: Legends of the Dark",
        image: "https://cf.geekdo-images.com/qrJVP4ODzwljfEJLwShW3A__opengraph/img/LWZRUBQhQq-4hDG_xpG3y_U_6x0=/fit-in/1200x630/filters:strip_icc()/pic5983671.jpg",
        players: "1-4 Players", duration: "60-180 min", complexity: "Medium", rating: "8.0",
        description: "App-driven dungeon crawler with 3D terrain and campaign progression.",
        tags: ["App-Driven", "Dungeon Crawl", "Campaign"],
        detailedDescription: "Fully cooperative dungeon crawling with app handling enemies and story.",
        howToPlay: "App guides adventures. Heroes explore, fight, gain upgrades through campaign.",
        whyItsGreat: "Incredible 3D terrain with smooth app-driven gameplay.",
        funFacts: ["3D terrain", "Fully cooperative", "App-driven"]
    },
    {
        id: 86, category: "thematic", rank: 6, emoji: "🐲", title: "Mice and Mystics",
        image: "https://cf.geekdo-images.com/XI-Nk25J0Ev9x5RLxiNsHg__opengraph/img/K6pDqFNGw4XrFz2p6d_6E0xMeWw=/fit-in/1200x630/filters:strip_icc()/pic1312072.jpg",
        players: "1-4 Players", duration: "60-90 min", complexity: "Medium-Light", rating: "7.2",
        description: "Heroes turned into mice must save the kingdom from evil Vanestra!",
        tags: ["Fantasy", "Storybook", "Family Adventure"],
        detailedDescription: "Campaign adventure where heroes-turned-mice battle through a castle.",
        howToPlay: "Move through chapters, fight enemies, use cheese for abilities, tell the story.",
        whyItsGreat: "Perfect family adventure game with charming theme and story.",
        funFacts: ["Storybook campaign", "Great for families", "Adorable theme"]
    },
    {
        id: 87, category: "thematic", rank: 7, emoji: "🚀", title: "Nemesis",
        image: "https://cf.geekdo-images.com/X6aXdqt4DlmjPUbNZkTqPA__opengraph/img/5pplqDhO9r_hW_pJvX1r-6qhwVU=/fit-in/1200x630/filters:strip_icc()/pic5073276.jpg",
        players: "1-5 Players", duration: "90-180 min", complexity: "Medium-Heavy", rating: "8.0",
        description: "Sci-fi horror survival! Complete objectives while aliens hunt you.",
        tags: ["Sci-Fi Horror", "Survival", "Semi-Cooperative"],
        detailedDescription: "Survive alien infestation on a spaceship while completing secret objectives.",
        howToPlay: "Explore, fight aliens, complete objectives. Ship must survive or everyone dies!",
        whyItsGreat: "Incredible tension and theme with amazing alien miniatures.",
        funFacts: ["Amazing miniatures", "Personal objectives", "High tension"]
    },
    {
        id: 88, category: "thematic", rank: 8, emoji: "🗺️", title: "Mansions of Madness",
        image: "https://cf.geekdo-images.com/s7_sRqf8GnwmGPf8NfHZ9A__opengraph/img/IWyilZp2jtAb_QhLEH1IxHQjPuk=/fit-in/1200x630/filters:strip_icc()/pic3118622.jpg",
        players: "1-5 Players", duration: "120-180 min", complexity: "Medium", rating: "8.0",
        description: "App-driven Lovecraftian investigation in haunted mansions.",
        tags: ["Horror", "App-Driven", "Investigation"],
        detailedDescription: "App controls the scenario while investigators explore and solve mysteries.",
        howToPlay: "App guides exploration. Investigate rooms, solve puzzles, fight monsters.",
        whyItsGreat: "Immersive horror experience with atmospheric app integration.",
        funFacts: ["App handles monsters", "Puzzle solving", "Multiple scenarios"]
    },
    {
        id: 89, category: "thematic", rank: 9, emoji: "🧙", title: "Mage Knight Ultimate",
        image: "https://cf.geekdo-images.com/DUO2hz9AlLOH8p9ED-lCWg__opengraph/img/GUpHyYwMFM-fJcSFLSOi_BuBzeQ=/fit-in/1200x630/filters:strip_icc()/pic1083380.jpg",
        players: "1-4 Players", duration: "150-240 min", complexity: "Heavy", rating: "8.1",
        description: "Epic deck-building exploration with tactical combat.",
        tags: ["Deck Building", "Exploration", "Fantasy"],
        detailedDescription: "Explore, conquer cities, build your deck with spells and units.",
        howToPlay: "Build deck while exploring. Fight enemies with card combinations.",
        whyItsGreat: "Unmatched depth in adventure gaming. Best solo game for many.",
        funFacts: ["Ultimate Edition", "Great solo", "Deep deck building"]
    },
    {
        id: 90, category: "thematic", rank: 10, emoji: "👽", title: "XCOM: The Board Game",
        image: "https://cf.geekdo-images.com/1bMM0qHg3BiDqXOIqZpVBg__opengraph/img/kqnNH_J5_DCMC5UQS_O6gwQz_NY=/fit-in/1200x630/filters:strip_icc()/pic2201880.jpg",
        players: "1-4 Players", duration: "90 min", complexity: "Medium", rating: "7.0",
        description: "Real-time alien defense! App creates urgency as you save Earth.",
        tags: ["Real-Time", "Sci-Fi", "App-Driven"],
        detailedDescription: "Coordinate defense against alien invasion with app-driven real-time pressure.",
        howToPlay: "App creates timed phases. Assign soldiers, research tech, intercept UFOs.",
        whyItsGreat: "Captures XCOM video game tension in board game form.",
        funFacts: ["Real-time app", "Based on video game", "Timed decisions"]
    },
    {
        id: 91, category: "thematic", rank: 11, emoji: "🧛", title: "Fury of Dracula",
        image: "https://cf.geekdo-images.com/-sxKORiO6PSrCxMH35CMMQ__opengraph/img/bwMw7rpXvT4V0k0G-U2hQXCNPQM=/fit-in/1200x630/filters:strip_icc()/pic2939384.jpg",
        players: "2-5 Players", duration: "120-180 min", complexity: "Medium", rating: "7.6",
        description: "One player is Dracula hiding across Europe. Hunters must find and kill him!",
        tags: ["Hidden Movement", "Horror", "Deduction"],
        detailedDescription: "Dracula secretly moves across Europe while hunters track and confront him.",
        howToPlay: "Hunters move openly, searching. Dracula moves secretly, leaving trail. Combat when found.",
        whyItsGreat: "Incredible cat-and-mouse tension as Dracula eludes hunters.",
        funFacts: ["Hidden movement", "4th edition best", "Day/night cycle"]
    },
    {
        id: 92, category: "thematic", rank: 12, emoji: "⚔️", title: "War of the Ring",
        image: "https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__opengraph/img/R3fG8fCfW-CsXD7EBVpvsBf2ntw=/fit-in/1200x630/filters:strip_icc()/pic1215633.jpg",
        players: "2-4 Players", duration: "150-180 min", complexity: "Heavy", rating: "8.5",
        description: "The Lord of the Rings in one epic game! Fellowship vs Sauron's armies.",
        tags: ["Lord of the Rings", "War", "Hidden Movement"],
        detailedDescription: "One side controls Free Peoples and Fellowship; other commands Sauron's forces.",
        howToPlay: "Balance Fellowship's quest with military defense. Destroy Ring or conquer!",
        whyItsGreat: "The definitive Lord of the Rings board game experience.",
        funFacts: ["Incredible scope", "Military + Fellowship", "200+ miniatures"]
    },
    {
        id: 93, category: "thematic", rank: 13, emoji: "🌊", title: "Captain Sonar",
        image: "https://cf.geekdo-images.com/wLW6BhHIkLfYy9p2XhYhjQ__opengraph/img/cFWihmHzO3i-bMNtYmkJjVrTs0Q=/fit-in/1200x630/filters:strip_icc()/pic3013621.png",
        players: "2-8 Players", duration: "45-60 min", complexity: "Medium-Light", rating: "7.4",
        description: "Real-time submarine hunt! Teams track each other across hidden maps.",
        tags: ["Real-Time", "Teams", "Naval"],
        detailedDescription: "Two teams simultaneously operate submarines tracking the enemy.",
        howToPlay: "Four roles per team: Captain, Radio Operator, Engineer, First Mate.",
        whyItsGreat: "Unique real-time team experience unlike anything else.",
        funFacts: ["Best at 8 players", "Role-based", "Real-time chaos"]
    },
    {
        id: 94, category: "thematic", rank: 14, emoji: "🚂", title: "Ticket to Ride: Legacy",
        image: "https://cf.geekdo-images.com/VO1o6jvjNa0vPjnC3qEP8A__opengraph/img/V23VLlwVuZ1VVWwNQiEeVfaqKhw=/fit-in/1200x630/filters:strip_icc()/pic5378905.png",
        players: "2-5 Players", duration: "20-90 min", complexity: "Medium-Light", rating: "8.3",
        description: "12-game legacy campaign across American history!",
        tags: ["Legacy", "Trains", "Campaign"],
        detailedDescription: "Campaign through American history with permanent changes and unlocks.",
        howToPlay: "Ticket to Ride rules plus legacy elements that evolve the game.",
        whyItsGreat: "Adds campaign narrative to the beloved classic.",
        funFacts: ["12 game campaign", "Historical theme", "Legacy elements"]
    },
    {
        id: 95, category: "thematic", rank: 15, emoji: "🏴", title: "Forgotten Waters",
        image: "https://cf.geekdo-images.com/HRIqG6xeIuDHqeHQBoNKZA__opengraph/img/w9JfNwE2kpjQT1bz9H6WfP5-1OE=/fit-in/1200x630/filters:strip_icc()/pic5140906.png",
        players: "3-7 Players", duration: "120-240 min", complexity: "Medium-Light", rating: "7.7",
        description: "Comedic pirate adventure with app-driven storytelling!",
        tags: ["Pirates", "App-Driven", "Storytelling"],
        detailedDescription: "Crossroads-style pirate campaign with humorous app narration.",
        howToPlay: "App narrates. Make choices, manage ship, complete your pirate's story.",
        whyItsGreat: "Hilarious voice acting and engaging story choices.",
        funFacts: ["Voice acted app", "Comedic tone", "Personal stories"]
    },
    {
        id: 96, category: "thematic", rank: 16, emoji: "🏛️", title: "Clank! Legacy",
        image: "https://cf.geekdo-images.com/5LpInAi9MNGvGjTpAhyudA__opengraph/img/-lM8VWN2P4TRNaTxaelU12hF2Fw=/fit-in/1200x630/filters:strip_icc()/pic4857821.jpg",
        players: "2-4 Players", duration: "90 min", complexity: "Medium", rating: "8.5",
        description: "Deck-building dungeon delving with legacy campaign!",
        tags: ["Deck Building", "Dungeon", "Legacy"],
        detailedDescription: "10+ game campaign adding permanent changes to the dungeon.",
        howToPlay: "Build deck, delve dungeon, grab artifacts, escape before dragon attacks.",
        whyItsGreat: "Perfect blend of deck building excitement with legacy storytelling.",
        funFacts: ["10+ game campaign", "Permanent changes", "Story unlocks"]
    },
    {
        id: 97, category: "thematic", rank: 17, emoji: "🌲", title: "Root",
        image: "https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__opengraph/img/aGDcq2zq_HpFIpb_wjCaJtjVzZQ=/fit-in/1200x630/filters:strip_icc()/pic4254509.jpg",
        players: "2-4 Players", duration: "60-90 min", complexity: "Medium-Heavy", rating: "8.1",
        description: "Woodland creatures battle for control! Wildly asymmetric factions.",
        tags: ["Asymmetric", "Area Control", "Woodland"],
        detailedDescription: "Each faction plays completely differently in the battle for the forest.",
        howToPlay: "Every faction has unique rules, victory conditions, and strategies.",
        whyItsGreat: "Incredible asymmetry creates unique experiences every game.",
        funFacts: ["Adorable art", "Very asymmetric", "Multiple expansions"]
    },
    {
        id: 98, category: "thematic", rank: 18, emoji: "🐉", title: "Tainted Grail",
        image: "https://cf.geekdo-images.com/iDz5CHBVwBRWJxiO3mWMvg__opengraph/img/qqN2N8YSJHuRJx3s4SAxNi5O8YU=/fit-in/1200x630/filters:strip_icc()/pic4871783.png",
        players: "1-4 Players", duration: "120 min", complexity: "Medium-Heavy", rating: "7.9",
        description: "Dark Arthurian survival adventure with deep narrative.",
        tags: ["Dark Fantasy", "Survival", "Campaign"],
        detailedDescription: "Survive a dark Arthurian world while uncovering deep mysteries.",
        howToPlay: "Explore, manage resources, fight, make story choices in branching campaign.",
        whyItsGreat: "Incredible narrative depth with meaningful survival decisions.",
        funFacts: ["Dark tone", "Massive campaign", "Branching story"]
    },
    {
        id: 99, category: "thematic", rank: 19, emoji: "🎪", title: "Dungeon Petz",
        image: "https://cf.geekdo-images.com/8E5T_E_6rYNkBBhaBg67Dw__opengraph/img/2aF4ksyY5d0-0t27kI8r8YdJcjU=/fit-in/1200x630/filters:strip_icc()/pic1103979.jpg",
        players: "2-4 Players", duration: "90 min", complexity: "Medium-Heavy", rating: "7.5",
        description: "Raise monsters as pets for dungeon lords! Feed, clean, and show them off.",
        tags: ["Worker Placement", "Humor", "Pet Care"],
        detailedDescription: "Buy baby monsters, raise them, meet their needs, sell to dungeon lords.",
        howToPlay: "Worker placement to buy/care for pets. Match pet abilities to customer needs.",
        whyItsGreat: "Charming theme with clever pet-raising mechanics.",
        funFacts: ["Dungeon Lords spinoff", "Adorable monsters", "Pet show competition"]
    },
    {
        id: 100, category: "thematic", rank: 20, emoji: "🌟", title: "7th Continent",
        image: "https://cf.geekdo-images.com/yodKOX-u01xk12F4mGYFfQ__opengraph/img/mQl0R7_R7CkiHTmBBR-EoKw-RHg=/fit-in/1200x630/filters:strip_icc()/pic2648303.jpg",
        players: "1-4 Players", duration: "5-1000+ min", complexity: "Medium", rating: "7.8",
        description: "Explore a massive continent through choose-your-own-adventure cards!",
        tags: ["Exploration", "Survival", "Adventure"],
        detailedDescription: "Explore 1000+ terrain cards, survive dangers, lift a deadly curse.",
        howToPlay: "Explore cards, manage stamina, discover secrets, save your progress.",
        whyItsGreat: "Unprecedented exploration scope with save system.",
        funFacts: ["1000+ cards", "Save system", "Exploration focus"]
    },

    // ==================== TWO-PLAYER GAMES ====================
    {
        id: 101, category: "twoplayer", rank: 1, emoji: "🏛️", title: "7 Wonders Duel",
        image: "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__opengraph/img/HRTpJhPWfkLPLfl-NdGheeCKv8M=/fit-in/1200x630/filters:strip_icc()/pic2576399.jpg",
        players: "2 Players", duration: "30 min", complexity: "Medium-Light", rating: "8.2",
        description: "Perfect two-player civilization building with three paths to victory!",
        tags: ["Civilization", "Card Drafting", "Strategic"],
        detailedDescription: "Draft cards from pyramid display, build your civilization, pursue multiple victory conditions.",
        howToPlay: "Take cards to build, gain coins, or construct wonders. Win by military, science, or points.",
        whyItsGreat: "Widely considered the best two-player game ever designed.",
        funFacts: ["Golden Geek Best 2-Player", "3 victory conditions", "30 minutes"]
    },
    {
        id: 102, category: "twoplayer", rank: 2, emoji: "🌻", title: "Patchwork",
        image: "https://cf.geekdo-images.com/wLW7pFn0--20lEizEz5p3A__opengraph/img/P3s0C1bDnEYE8QDXNQH1bVzG94I=/fit-in/1200x630/filters:strip_icc()/pic2270442.jpg",
        players: "2 Players", duration: "15-30 min", complexity: "Light", rating: "7.7",
        description: "Quilting puzzle perfection! Fill your board with tetris-like patches.",
        tags: ["Puzzle", "Abstract", "Spatial"],
        detailedDescription: "Purchase patches using buttons and time, fit them onto your quilt board.",
        howToPlay: "Spend buttons and time to buy patches. Fill your board, score buttons minus gaps.",
        whyItsGreat: "Perfect two-player puzzle with simple rules and satisfying spatial gameplay.",
        funFacts: ["By Uwe Rosenberg", "Time track", "Many themed versions"]
    },
    {
        id: 103, category: "twoplayer", rank: 3, emoji: "⚔️", title: "Star Realms",
        image: "https://cf.geekdo-images.com/1eWS7X4eCAq1xB-EUfB6Yg__opengraph/img/L5ixvGRa91x-lJmS2qEV1SQzYIY=/fit-in/1200x630/filters:strip_icc()/pic1903816.jpg",
        players: "2 Players", duration: "20 min", complexity: "Light-Medium", rating: "7.5",
        description: "Fast deck-building space combat! Build your fleet and destroy opponents.",
        tags: ["Deck Building", "Combat", "Sci-Fi"],
        detailedDescription: "Buy ships and bases to build your deck, then attack to reduce opponent's authority.",
        howToPlay: "Play cards for combat and trade. Buy better cards. Reduce opponent to 0 authority.",
        whyItsGreat: "Quick, portable deck-building with satisfying combos.",
        funFacts: ["Fits in a pocket", "Many expansions", "App version too"]
    },
    {
        id: 104, category: "twoplayer", rank: 4, emoji: "🏰", title: "Castles of Burgundy: Duel",
        image: "https://cf.geekdo-images.com/aNaImKLLQ1z4ZK93MJ2V9A__opengraph/img/y2J2BqReWVYFEeK8rLwZCuVr5M4=/fit-in/1200x630/filters:strip_icc()/pic4298527.jpg",
        players: "2 Players", duration: "30 min", complexity: "Medium-Light", rating: "7.5",
        description: "Two-player estate building with dice. Strategic and quick.",
        tags: ["Dice", "Tile Placement", "Medieval"],
        detailedDescription: "Roll dice to acquire tiles and build your estate in this two-player adaptation.",
        howToPlay: "Roll shared dice pool, draft tiles, place in matching regions for points.",
        whyItsGreat: "All the strategic depth of the original in a tight two-player package.",
        funFacts: ["Card-based tiles", "Shared dice pool", "Quick setup"]
    },
    {
        id: 105, category: "twoplayer", rank: 5, emoji: "🎭", title: "Jaipur",
        image: "https://cf.geekdo-images.com/7Bt_bQzJGsLKBFb_MCM5hg__opengraph/img/O5cWZq1T0c2etJKtRl_lJ2PG0Uw=/fit-in/1200x630/filters:strip_icc()/pic7302020.jpg",
        players: "2 Players", duration: "30 min", complexity: "Light", rating: "7.5",
        description: "Trading and camels in India! Collect goods and sell for profit.",
        tags: ["Set Collection", "Trading", "Quick"],
        detailedDescription: "Collect sets of goods, sell them before prices drop, manage your camels.",
        howToPlay: "Take cards or sell sets. Larger sets score bonus chips. Win 2 rounds!",
        whyItsGreat: "Simple rules create tense decisions about when to sell.",
        funFacts: ["Camel cards", "Best of 3 rounds", "Portable"]
    },
    {
        id: 106, category: "twoplayer", rank: 6, emoji: "🌸", title: "Hanamikoji",
        image: "https://cf.geekdo-images.com/kLr0vG_6cRMiNXMDLiITRQ__opengraph/img/BvC9f8fKAPV1wZPvYiSHJMIGPzs=/fit-in/1200x630/filters:strip_icc()/pic2685417.jpg",
        players: "2 Players", duration: "15 min", complexity: "Light", rating: "7.4",
        description: "Win favor with geishas through offering gifts. Only 4 actions!",
        tags: ["Card Game", "Bluffing", "Japanese"],
        detailedDescription: "Win majority of geisha favor cards using only four different actions.",
        howToPlay: "Each round, perform 4 unique actions: secret, burn, gift, compete.",
        whyItsGreat: "Incredible depth from just 4 action types and 21 cards.",
        funFacts: ["Only 21 cards", "4 actions", "15 minutes"]
    },
    {
        id: 107, category: "twoplayer", rank: 7, emoji: "🏃", title: "Codenames Duet",
        image: "https://cf.geekdo-images.com/4g2BT4AjfYBCpLDNEaQ7uA__opengraph/img/n3Sg7RdW9jh3LuMBxYnT0lV5cFw=/fit-in/1200x630/filters:strip_icc()/pic3596681.jpg",
        players: "2 Players", duration: "15-30 min", complexity: "Light", rating: "7.6",
        description: "Cooperative Codenames! Work together to find all agents.",
        tags: ["Cooperative", "Word Game", "Deduction"],
        detailedDescription: "Both players are spymasters with different keys, working together.",
        howToPlay: "Take turns giving clues. Find all agents before running out of time or hitting assassins.",
        whyItsGreat: "Perfect cooperative adaptation of Codenames for two.",
        funFacts: ["Campaign mode", "Both are spymasters", "Different keys"]
    },
    {
        id: 108, category: "twoplayer", rank: 8, emoji: "🐉", title: "Unmatched",
        image: "https://cf.geekdo-images.com/X4FKmwLRMGPg1J8TjC7lvw__opengraph/img/BcLHHCqfmCmAzUUvlZfL_ZWjYxA=/fit-in/1200x630/filters:strip_icc()/pic4624794.jpg",
        players: "2-4 Players", duration: "20-40 min", complexity: "Light-Medium", rating: "7.5",
        description: "Legendary characters battle! King Arthur vs Bruce Lee? Yes!",
        tags: ["Combat", "Card Play", "Tactical"],
        detailedDescription: "Asymmetric fighters with unique decks battle on tactical maps.",
        howToPlay: "Play cards for movement and attacks. Each hero has unique deck and abilities.",
        whyItsGreat: "Dream matchups with elegant asymmetric combat.",
        funFacts: ["Many hero sets", "Cross-universe fights", "Unique decks"]
    },
    {
        id: 109, category: "twoplayer", rank: 9, emoji: "🌿", title: "Targi",
        image: "https://cf.geekdo-images.com/oP3yQ8D3_8xpiSnUZFqpnQ__opengraph/img/M8DRXRYD0gV1d4iAIqWP3ZaCZmQ=/fit-in/1200x630/filters:strip_icc()/pic4988498.jpg",
        players: "2 Players", duration: "60 min", complexity: "Medium", rating: "7.7",
        description: "Desert trading with worker placement on a grid system.",
        tags: ["Worker Placement", "Grid", "Trading"],
        detailedDescription: "Place workers on border cards, claim intersection cards. Block opponent!",
        howToPlay: "Place workers on edge. Get cards where your workers' lines intersect.",
        whyItsGreat: "Unique grid-based worker placement creates interesting blocking decisions.",
        funFacts: ["Grid intersection", "Blocking key", "Deep for 2 players"]
    },
    {
        id: 110, category: "twoplayer", rank: 10, emoji: "🎯", title: "Onitama",
        image: "https://cf.geekdo-images.com/8KVGaOxYMZsNgU4UHKbQtQ__opengraph/img/uu_KF1E8PVKNxtJHZLgB_XPFpIs=/fit-in/1200x630/filters:strip_icc()/pic2712189.jpg",
        players: "2 Players", duration: "15-20 min", complexity: "Light", rating: "7.4",
        description: "Abstract martial arts chess! Movement cards rotate between players.",
        tags: ["Abstract", "Chess-like", "Cards"],
        detailedDescription: "Move pawns using shared movement cards that swap between players.",
        howToPlay: "Use a movement card, pass it to opponent. Capture master or reach their temple.",
        whyItsGreat: "Chess-like depth with rotating movement options.",
        funFacts: ["5x5 grid", "Cards rotate", "Multiple expansions"]
    },
    {
        id: 111, category: "twoplayer", rank: 11, emoji: "⭐", title: "Twilight Struggle",
        image: "https://cf.geekdo-images.com/pNCiUUphnoeWOYfsWq0kng__opengraph/img/iXiBNO63mJWr16lXNH1L_EeEvz8=/fit-in/1200x630/filters:strip_icc()/pic361592.jpg",
        players: "2 Players", duration: "120-180 min", complexity: "Medium-Heavy", rating: "8.2",
        description: "Cold War card-driven conflict! USA vs USSR for global influence.",
        tags: ["Historical", "Area Control", "Card Driven"],
        detailedDescription: "Play cards for events or operations in the global Cold War struggle.",
        howToPlay: "Play cards for influence, coups, space race. Avoid nuclear war!",
        whyItsGreat: "The definitive two-player war game with incredible historical feel.",
        funFacts: ["BGG top game for years", "Historical events", "No actual war"]
    },
    {
        id: 112, category: "twoplayer", rank: 12, emoji: "🦁", title: "Raptor",
        image: "https://cf.geekdo-images.com/6YTcIJNbAhGbnE6DH-a7EQ__opengraph/img/oYfxkb8OvwqxAZjuxjOc-TZcsBM=/fit-in/1200x630/filters:strip_icc()/pic2614621.jpg",
        players: "2 Players", duration: "25 min", complexity: "Light-Medium", rating: "7.4",
        description: "Asymmetric chase! Scientists hunt raptor family, mother protects babies.",
        tags: ["Asymmetric", "Action Selection", "Dinosaurs"],
        detailedDescription: "Scientists try to capture babies or neutralize mother. Mother protects and escapes.",
        howToPlay: "Simultaneously select cards. Lower number acts first, higher gets special action.",
        whyItsGreat: "Tight asymmetric play with clever simultaneous selection.",
        funFacts: ["Asymmetric sides", "Card comparison", "Dinosaur theme"]
    },
    {
        id: 113, category: "twoplayer", rank: 13, emoji: "🎴", title: "Lost Cities",
        image: "https://cf.geekdo-images.com/B0Y9o1lO5pN0dGl4wmkOjA__opengraph/img/OWRr0GVq3e8QoV4ykamZ7IYCiLI=/fit-in/1200x630/filters:strip_icc()/pic5765448.jpg",
        players: "2 Players", duration: "30 min", complexity: "Light", rating: "7.1",
        description: "Expedition card game! Play cards in ascending order or discard carefully.",
        tags: ["Set Collection", "Risk Management", "Classic"],
        detailedDescription: "Play cards in ascending order on expeditions. Each expedition costs 20 to start!",
        howToPlay: "Play a card to your expedition or discard. Draw from deck or discards.",
        whyItsGreat: "Simple rules with agonizing decisions about when to start expeditions.",
        funFacts: ["By Reiner Knizia", "20 point investment", "Classic two-player"]
    },
    {
        id: 114, category: "twoplayer", rank: 14, emoji: "🃏", title: "Schotten Totten",
        image: "https://cf.geekdo-images.com/D_Rn2E4rdFmqOmudJMxDfg__opengraph/img/XGKhIVOBgqaUDWHJt4YgFhw9Ubo=/fit-in/1200x630/filters:strip_icc()/pic2932545.jpg",
        players: "2 Players", duration: "20 min", complexity: "Light", rating: "7.4",
        description: "Claim stones with poker-like formations in this Scottish card battle!",
        tags: ["Hand Management", "Set Collection", "Quick"],
        detailedDescription: "Play cards to stones, forming poker hands to claim them.",
        howToPlay: "Play one card per turn to a stone. Best formation claims the stone.",
        whyItsGreat: "Poker-like hand building with territory control.",
        funFacts: ["By Reiner Knizia", "9 stones to claim", "Also called Battle Line"]
    },
    {
        id: 115, category: "twoplayer", rank: 15, emoji: "🔮", title: "The Fox in the Forest",
        image: "https://cf.geekdo-images.com/IhBdPpIJyy4szmJLLIw4DQ__opengraph/img/qZqHf3P1lUWIhYbP2G5tAcAuqkM=/fit-in/1200x630/filters:strip_icc()/pic3496085.jpg",
        players: "2 Players", duration: "30 min", complexity: "Light", rating: "7.2",
        description: "Trick-taking for two with fairy tale powers! Win tricks, but not too many.",
        tags: ["Trick-Taking", "Fantasy", "Strategic"],
        detailedDescription: "Win tricks using special card abilities, but winning too many scores nothing!",
        howToPlay: "Standard trick-taking with special powers. Score for moderate trick counts.",
        whyItsGreat: "Finally, great trick-taking that works perfectly with two.",
        funFacts: ["Two-player trick-taking", "Don't be greedy", "Fairy tale art"]
    },
    {
        id: 116, category: "twoplayer", rank: 16, emoji: "🏛️", title: "Santorini",
        image: "https://cf.geekdo-images.com/ll6ijiyKU9xXnxrYr1RM4A__opengraph/img/U3M4EpBVFBmZJYj9sGa-3dSBPB4=/fit-in/1200x630/filters:strip_icc()/pic3283110.png",
        players: "2-4 Players", duration: "20 min", complexity: "Light", rating: "7.4",
        description: "Greek island building! Move up levels and reach the top to win.",
        tags: ["Abstract", "3D Building", "Greek"],
        detailedDescription: "Build towers and climb them. Reach the third level to win!",
        howToPlay: "Move a worker, then build. Step up one level at a time. Reach level 3 to win.",
        whyItsGreat: "Beautiful 3D construction with simple yet deep abstract gameplay.",
        funFacts: ["Beautiful 3D towers", "God power cards", "Very accessible"]
    },
    {
        id: 117, category: "twoplayer", rank: 17, emoji: "🐝", title: "Hive",
        image: "https://cf.geekdo-images.com/T49y-5Odgkbcjcjp6FMxCA__opengraph/img/cYMqXiMLTY4qfB_cGfGWdhLX3rE=/fit-in/1200x630/filters:strip_icc()/pic791151.jpg",
        players: "2 Players", duration: "20 min", complexity: "Light-Medium", rating: "7.3",
        description: "Chess-like bug battle with no board! Surround opponent's queen.",
        tags: ["Abstract", "Tile Placement", "Insects"],
        detailedDescription: "Place and move insect tiles with unique powers. Surround the enemy queen!",
        howToPlay: "Place or move tiles. Each bug moves differently. Surround opponent's queen bee.",
        whyItsGreat: "Portable abstract strategy with no board required.",
        funFacts: ["No board needed", "Bakelite pieces", "Many expansions"]
    },
    {
        id: 118, category: "twoplayer", rank: 18, emoji: "🎲", title: "Dice Throne",
        image: "https://cf.geekdo-images.com/Hgse5bSqK1y-I6FtXzpYPw__opengraph/img/18EG4FKXgN0fPLl-CG-e-vt4kOA=/fit-in/1200x630/filters:strip_icc()/pic4473154.jpg",
        players: "2-6 Players", duration: "20-40 min", complexity: "Light-Medium", rating: "7.6",
        description: "Yahtzee meets fighting game! Roll dice to activate hero abilities.",
        tags: ["Dice", "Combat", "Asymmetric"],
        detailedDescription: "Roll and manipulate dice to activate unique hero abilities and attacks.",
        howToPlay: "Roll dice Yahtzee-style to activate abilities on your hero board.",
        whyItsGreat: "Satisfying dice manipulation with unique asymmetric heroes.",
        funFacts: ["Many heroes", "Dice manipulation", "Tournament style"]
    },
    {
        id: 119, category: "twoplayer", rank: 19, emoji: "🌙", title: "Watergate",
        image: "https://cf.geekdo-images.com/F57Hx3Pf_BL2VgW_VT9nJg__opengraph/img/dxaJRl-0y6i8gQiN-8UfFKqPEMM=/fit-in/1200x630/filters:strip_icc()/pic4895698.jpg",
        players: "2 Players", duration: "30-60 min", complexity: "Medium-Light", rating: "7.8",
        description: "Nixon vs The Press! Tug-of-war over evidence and informants.",
        tags: ["Historical", "Tug of War", "Card Driven"],
        detailedDescription: "Editor builds evidence trail to Nixon; Nixon covers up and discredits.",
        howToPlay: "Play cards to move evidence tokens or gain initiative. Asymmetric goals.",
        whyItsGreat: "Brilliant asymmetric tug-of-war with historical theme.",
        funFacts: ["Historical accuracy", "Asymmetric sides", "Great production"]
    },
    {
        id: 120, category: "twoplayer", rank: 20, emoji: "🦊", title: "Air, Land & Sea",
        image: "https://cf.geekdo-images.com/3jvnwV-DgW0pzCh4z3Gv3Q__opengraph/img/SIi54gMxNBgLOHCrwISsFfKMuZI=/fit-in/1200x630/filters:strip_icc()/pic4422625.jpg",
        players: "2 Players", duration: "15-30 min", complexity: "Light", rating: "7.4",
        description: "WWII card battle across three theaters! Know when to withdraw.",
        tags: ["Hand Management", "War", "Quick"],
        detailedDescription: "Play cards to three theaters. Win two theaters or strategically withdraw.",
        howToPlay: "Play cards face-up or face-down. Win 2 of 3 theaters or withdraw for fewer points.",
        whyItsGreat: "Knowing when to withdraw creates incredible tension.",
        funFacts: ["18 cards only", "Strategic withdrawal", "Quick and deep"]
    }
];

// Helper function to get games by category
function getGamesByCategory(categoryId) {
    return allGames.filter(game => game.category === categoryId);
}

// Helper function to get a game by ID
function getGameById(id) {
    return allGames.find(game => game.id === id);
}

// Helper function to get category info
function getCategoryById(categoryId) {
    return gameCategories.find(cat => cat.id === categoryId);
}

