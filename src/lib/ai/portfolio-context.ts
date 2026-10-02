import aamnaFacts from "@/data/aamna-facts.json";

export function getPortfolioSystemContext(): string {
  return JSON.stringify(aamnaFacts);
}
