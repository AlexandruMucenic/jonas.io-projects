export const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

export const isValidHttpUrl = string => {
  let url;
  try {
    url = new URL(string);
  } catch {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export const factsData = [
  {
    id: 1,
    text: "React is maintained by Meta.",
    source: "https://reactjs.org",
    category: "technology",
    votesInteresting: 24,
    votesMindBlowing: 9,
    votesFalse: 2,
    createdIn: 2023,
  },
  {
    id: 2,
    text: "Bananas are berries, but strawberries are not.",
    source: "https://example.com/banana",
    category: "science",
    votesInteresting: 12,
    votesMindBlowing: 17,
    votesFalse: 1,
    createdIn: 2024,
  },
  {
    id: 3,
    text: "The first paper money was created in China over 1,000 years ago.",
    source: "https://www.investopedia.com/ask/answers/09/paper-money.asp",
    category: "finance",
    votesInteresting: 19,
    votesMindBlowing: 10,
    votesFalse: 0,
    createdIn: 2024,
  },
  {
    id: 4,
    text: "Sweden has a trash shortage and imports waste from other countries.",
    source: "https://www.weforum.org/agenda/2016/11/sweden-recycles-waste/",
    category: "society",
    votesInteresting: 23,
    votesMindBlowing: 13,
    votesFalse: 1,
    createdIn: 2023,
  },
  {
    id: 5,
    text: "The movie 'Parasite' was the first non-English film to win Best Picture at the Oscars.",
    source: "https://www.oscars.org/oscars/ceremonies/2020",
    category: "entertainment",
    votesInteresting: 26,
    votesMindBlowing: 15,
    votesFalse: 0,
    createdIn: 2020,
  },
  {
    id: 6,
    text: "Laughter can boost your immune system and reduce stress hormones.",
    source:
      "https://www.health.harvard.edu/staying-healthy/laughter-is-the-best-medicine",
    category: "health",
    votesInteresting: 18,
    votesMindBlowing: 8,
    votesFalse: 1,
    createdIn: 2022,
  },
  {
    id: 7,
    text: "The Great Fire of London in 1666 destroyed most of the city but only six people were recorded to have died.",
    source: "https://www.bbc.co.uk/newsround/37222884",
    category: "history",
    votesInteresting: 20,
    votesMindBlowing: 14,
    votesFalse: 2,
    createdIn: 2023,
  },
  {
    id: 8,
    text: "In 2023, AI-generated images won a major photography contest before being revealed as non-human creations.",
    source:
      "https://petapixel.com/2023/04/11/ai-photo-wins-top-prize-in-contest-artist-refuses-award/",
    category: "news",
    votesInteresting: 25,
    votesMindBlowing: 19,
    votesFalse: 3,
    createdIn: 2023,
  },
  {
    id: 9,
    text: "Credit card debt in the U.S. surpassed $1 trillion for the first time in 2023.",
    source:
      "https://www.cnbc.com/2023/08/08/credit-card-debt-hits-1-trillion-for-the-first-time.html",
    category: "finance",
    votesInteresting: 22,
    votesMindBlowing: 11,
    votesFalse: 1,
    createdIn: 2023,
  },
  {
    id: 10,
    text: "Japan has more pets than children.",
    source: "https://www.nippon.com/en/news/yjj2022100200199/",
    category: "society",
    votesInteresting: 27,
    votesMindBlowing: 18,
    votesFalse: 0,
    createdIn: 2022,
  },
  {
    id: 11,
    text: "Beyoncé became the most awarded artist in Grammy history in 2023.",
    source:
      "https://www.grammy.com/news/beyonce-grammys-2023-most-awarded-artist-all-time-32-wins",
    category: "entertainment",
    votesInteresting: 30,
    votesMindBlowing: 16,
    votesFalse: 0,
    createdIn: 2023,
  },
  {
    id: 12,
    text: "Drinking water can temporarily boost your metabolism by up to 30%.",
    source: "https://www.ncbi.nlm.nih.gov/pubmed/14671205",
    category: "health",
    votesInteresting: 21,
    votesMindBlowing: 10,
    votesFalse: 2,
    createdIn: 2021,
  },
  {
    id: 13,
    text: "The Eiffel Tower can grow over 6 inches taller in summer due to heat expansion.",
    source: "https://www.livescience.com/why-eiffel-tower-expands.html",
    category: "history",
    votesInteresting: 24,
    votesMindBlowing: 14,
    votesFalse: 0,
    createdIn: 2023,
  },
  {
    id: 14,
    text: "2024 was the hottest year on record globally, according to climate scientists.",
    source: "https://climate.nasa.gov/news/3250/",
    category: "news",
    votesInteresting: 29,
    votesMindBlowing: 20,
    votesFalse: 3,
    createdIn: 2024,
  },
];
