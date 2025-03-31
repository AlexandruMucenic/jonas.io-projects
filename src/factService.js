import { factsData as initialFacts } from "./constants";

let facts = [...initialFacts];

export async function getFacts(category) {
  await new Promise(resolve => setTimeout(resolve, 500));

  const filtered =
    category === "all"
      ? facts
      : facts.filter(fact => fact.category === category);

  return filtered.sort((a, b) => b.votesInteresting - a.votesInteresting);
}

export async function addFact(newFact) {
  newFact.id = Date.now();
  newFact.createdIn = new Date().getFullYear();
  newFact.votesInteresting = 0;
  newFact.votesMindBlowing = 0;
  newFact.votesFalse = 0;

  facts = [newFact, ...facts];

  return newFact;
}

export async function voteFact(id, columnName) {
  facts = facts.map(f =>
    f.id === id ? { ...f, [columnName]: f[columnName] + 1 } : f
  );

  return facts;
}
