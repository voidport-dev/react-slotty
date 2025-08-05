export interface FruitItem {
  id: string;
  name: string;
  price: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
}
