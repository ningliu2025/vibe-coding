const games = [
  {
    rank: 1,
    name: "Brass: Birmingham",
    rating: 8.82,
    year: 2018,
    tagline: "Industrial engine-building with delicious economic tension.",
    description:
      "Juggle loans, networks, and market timing in a race to deliver goods through England’s Industrial Revolution.",
    playersLabel: "2–4 players · Best at 3",
    playersRange: [2, 4],
    playtimeLabel: "90–120 min",
    playtimeMinutes: [90, 120],
    highlight: "Dynamic map control and shared markets ensure every move reshapes the table.",
    tags: ["strategy", "economic", "euro"],
  },
  {
    rank: 2,
    name: "Gloomhaven",
    rating: 8.77,
    year: 2017,
    tagline: "Legacy dungeon crawler packed with tactical card play.",
    description:
      "Cooperate through branching scenarios, upgrading characters and unlocking story twists in a sprawling campaign.",
    playersLabel: "1–4 players",
    playersRange: [1, 4],
    playtimeLabel: "60–180 min",
    playtimeMinutes: [60, 180],
    highlight: "Hand management puzzles mean every turn feels like cracking a fresh tactical code.",
    tags: ["strategy", "campaign", "cooperative"],
  },
  {
    rank: 3,
    name: "Pandemic Legacy: Season 1",
    rating: 8.61,
    year: 2015,
    tagline: "Save the world over 12 evolving months.",
    description:
      "Your familiar Pandemic toolkit becomes a dramatic narrative, with permanent map changes and nail-biting twists.",
    playersLabel: "2–4 players",
    playersRange: [2, 4],
    playtimeLabel: "60–90 min",
    playtimeMinutes: [60, 90],
    highlight: "The legacy surprises create fist-pump highs and collective gasps in every session.",
    tags: ["cooperative", "legacy", "campaign"],
  },
  {
    rank: 4,
    name: "Terraforming Mars",
    rating: 8.42,
    year: 2016,
    tagline: "Corporate engine-building on the red planet.",
    description:
      "Draft cards, fund projects, and heat up the planet while balancing resources and milestone races.",
    playersLabel: "1–5 players",
    playersRange: [1, 5],
    playtimeLabel: "120–150 min",
    playtimeMinutes: [120, 150],
    highlight: "Combos cascade beautifully, making every engine feel wildly different.",
    tags: ["strategy", "science", "engine"],
  },
  {
    rank: 5,
    name: "Ark Nova",
    rating: 8.63,
    year: 2021,
    tagline: "Build a modern zoo with conservation at heart.",
    description:
      "Multiplan your zoo, partner with universities, and time powerful card actions to outscore rivals.",
    playersLabel: "1–4 players",
    playersRange: [1, 4],
    playtimeLabel: "120–150 min",
    playtimeMinutes: [120, 150],
    highlight: "The shifting action strength row keeps turns tense and puzzles delicious.",
    tags: ["strategy", "engine", "economic"],
  },
  {
    rank: 6,
    name: "Wingspan",
    rating: 8.13,
    year: 2019,
    tagline: "Relaxed engine-building with gorgeous birds.",
    description:
      "Collect birds with unique powers, trigger habitats, and chase end-of-round goals in a soothing package.",
    playersLabel: "1–5 players",
    playersRange: [1, 5],
    playtimeLabel: "40–70 min",
    playtimeMinutes: [40, 70],
    highlight: "Accessible teach plus satisfying combos make it a gateway hit.",
    tags: ["family", "engine", "relaxing"],
  },
  {
    rank: 7,
    name: "Spirit Island",
    rating: 8.44,
    year: 2017,
    tagline: "Asymmetric spirits defend their island cooperatively.",
    description:
      "Chain powers, manage fear, and coordinate timings to repel invading colonists in escalating waves.",
    playersLabel: "1–4 players",
    playersRange: [1, 4],
    playtimeLabel: "90–120 min",
    playtimeMinutes: [90, 120],
    highlight: "Synergy supernovas when spirits combo, rewarding communication and creativity.",
    tags: ["strategy", "cooperative", "asymmetric"],
  },
  {
    rank: 8,
    name: "Root",
    rating: 8.18,
    year: 2018,
    tagline: "Woodland war with wildly asymmetric factions.",
    description:
      "Every player controls a unique faction with bespoke rules, creating a tug-of-war over forest control.",
    playersLabel: "2–6 players",
    playersRange: [2, 6],
    playtimeLabel: "60–120 min",
    playtimeMinutes: [60, 120],
    highlight: "Storybook art meets razor-sharp strategy for unforgettable tales.",
    tags: ["strategy", "asymmetric", "conflict"],
  },
  {
    rank: 9,
    name: "7 Wonders Duel",
    rating: 8.12,
    year: 2015,
    tagline: "Two-player duel of drafting and tempos.",
    description:
      "Draft pyramid-shaped card layouts, race for science, military, or victory point dominance.",
    playersLabel: "2 players",
    playersRange: [2, 2],
    playtimeLabel: "30–45 min",
    playtimeMinutes: [30, 45],
    highlight: "Taut tempo swings mean every draft feels pivotal.",
    tags: ["twoPlayer", "strategy", "quick"],
  },
  {
    rank: 10,
    name: "Azul",
    rating: 7.99,
    year: 2017,
    tagline: "Draft tiles to craft vibrant palace mosaics.",
    description:
      "Take turns selecting tiles, arranging patterns, and managing negative points in a breezy yet thoughtful puzzle.",
    playersLabel: "2–4 players",
    playersRange: [2, 4],
    playtimeLabel: "30–45 min",
    playtimeMinutes: [30, 45],
    highlight: "It teaches in minutes but reveals clever tile timing the more you play.",
    tags: ["family", "abstract", "gateway"],
  },
];

const filters = [
  {
    id: "all",
    label: "All vibes",
    emoji: "✨",
    predicate: () => true,
  },
  {
    id: "strategy",
    label: "Strategic feasts",
    emoji: "🧠",
    predicate: (game) => game.tags.includes("strategy"),
  },
  {
    id: "cooperative",
    label: "Team co-ops",
    emoji: "🤝",
    predicate: (game) => game.tags.includes("cooperative"),
  },
  {
    id: "family",
    label: "Family friendly",
    emoji: "😊",
    predicate: (game) => game.tags.some((tag) => ["family", "gateway", "relaxing"].includes(tag)),
  },
  {
    id: "quick",
    label: "Quick plays",
    emoji: "⚡",
    predicate: (game) => averagePlaytime(game) <= 60,
  },
  {
    id: "campaign",
    label: "Campaign sagas",
    emoji: "📖",
    predicate: (game) => game.tags.some((tag) => ["campaign", "legacy"].includes(tag)),
  },
];

const gridEl = document.querySelector("[data-game-grid]");
const filterContainer = document.querySelector("[data-filter-buttons]");
const spotlightContainer = document.querySelector("[data-spotlight]");
const statRatingEl = document.querySelector("[data-stat-rating]");
const statPlaytimeEl = document.querySelector("[data-stat-playtime]");
const statPlayersEl = document.querySelector("[data-stat-players]");
const surpriseBtn = document.querySelector("[data-random-jump]");

let activeFilter = "all";

function averagePlaytime(game) {
  return (game.playtimeMinutes[0] + game.playtimeMinutes[1]) / 2;
}

function renderFilters() {
  const fragment = document.createDocumentFragment();
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter-chip";
    button.type = "button";
    button.dataset.filterId = filter.id;
    button.dataset.active = filter.id === activeFilter;
    button.innerHTML = `<span>${filter.emoji}</span> ${filter.label}`;
    button.addEventListener("click", () => {
      if (activeFilter === filter.id) return;
      activeFilter = filter.id;
      updateFilterState();
      renderGames();
    });
    fragment.appendChild(button);
  });
  filterContainer.appendChild(fragment);
}

function updateFilterState() {
  filterContainer.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.dataset.active = chip.dataset.filterId === activeFilter;
  });
}

function makeTagLabel(tag) {
  const mapping = {
    strategy: "Strategy",
    cooperative: "Co-op",
    family: "Family",
    gateway: "Gateway",
    relaxing: "Chill",
    quick: "Quick",
    twoPlayer: "2 Player",
    campaign: "Campaign",
    legacy: "Legacy",
    economic: "Economic",
    engine: "Engine",
    science: "Science",
    abstract: "Abstract",
    euro: "Euro",
    conflict: "Conflict",
    asymmetric: "Asymmetric",
  };
  return mapping[tag] || tag;
}

function tagClass(tag) {
  if (tag === "strategy") return "tag tag--strategy";
  if (tag === "cooperative") return "tag tag--cooperative";
  if (tag === "family" || tag === "gateway" || tag === "relaxing") return "tag tag--family";
  return "tag";
}

function getFilteredGames() {
  const filter = filters.find((f) => f.id === activeFilter) || filters[0];
  return games.filter((game) => filter.predicate(game));
}

function renderGames() {
  const filtered = getFilteredGames();
  if (!filtered.length) {
    gridEl.innerHTML = '<div class="empty-state">No games fit that vibe yet. Try another chip! 🎲</div>';
    return;
  }

  const cards = filtered
    .sort((a, b) => a.rank - b.rank)
    .map((game) => {
      const tagsHtml = game.tags
        .map((tag) => `<span class="${tagClass(tag)}">${makeTagLabel(tag)}</span>`) 
        .join("\n");
      return `
        <article class="game-card" data-rank="#${game.rank}" data-tags="${game.tags.join(",")}">
          <div>
            <h3>${game.name}</h3>
            <p class="game-card__tagline">${game.tagline}</p>
          </div>
          <div class="game-card__meta">
            <span class="meta-pill">${game.playersLabel}</span>
            <span class="meta-pill">${game.playtimeLabel}</span>
            <span class="meta-pill">Rating ${game.rating.toFixed(2)}</span>
          </div>
          <p>${game.description}</p>
          <p><strong>Why it shines:</strong> ${game.highlight}</p>
          <div class="game-card__tags">${tagsHtml}</div>
        </article>
      `;
    })
    .join("\n");
  gridEl.innerHTML = cards;
}

function renderSpotlight() {
  const topThree = [...games]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3);
  spotlightContainer.innerHTML = topThree
    .map(
      (game) => `
        <article class="spotlight-card" data-rank="#${game.rank}">
          <h3>${game.name}</h3>
          <p>${game.tagline}</p>
          <p><strong>Rated ${game.rating.toFixed(2)}</strong> · ${game.playersLabel}</p>
        </article>
      `
    )
    .join("\n");
}

function updateHeroStats() {
  const avgRating =
    games.reduce((total, game) => total + game.rating, 0) / games.length;
  statRatingEl.textContent = avgRating.toFixed(2);

  const medianPlaytime = (() => {
    const sorted = games
      .map((game) => averagePlaytime(game))
      .sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
  })();
  statPlaytimeEl.textContent = formatMinutes(medianPlaytime);

  const mostFlexible = games.reduce(
    (best, game) => {
      const spread = game.playersRange[1] - game.playersRange[0];
      if (spread > best.spread) {
        return {
          spread,
          label: `${game.playersRange[0]}–${game.playersRange[1]} players`,
          name: game.name,
        };
      }
      return best;
    },
    { spread: -Infinity, label: "", name: "" }
  );
  statPlayersEl.textContent = mostFlexible.label || "1–6 players";
  statPlayersEl.setAttribute("title", `Most flexible: ${mostFlexible.name}`);
}

function formatMinutes(minutes) {
  if (minutes >= 60) {
    const hrs = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins ? `${hrs}h ${mins}m` : `${hrs}h`;
  }
  return `${Math.round(minutes)} min`;
}

function handleSurpriseMe() {
  const cards = gridEl.querySelectorAll(".game-card");
  if (!cards.length) return;
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  randomCard.classList.add("is-highlighted");
  randomCard.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => randomCard.classList.remove("is-highlighted"), 1600);
}

function attachEvents() {
  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", handleSurpriseMe);
  }
}

function init() {
  renderFilters();
  renderSpotlight();
  renderGames();
  updateHeroStats();
  attachEvents();
}

init();
