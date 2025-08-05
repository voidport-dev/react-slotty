export const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "#6c757d";
    case "uncommon":
      return "#28a745";
    case "rare":
      return "#007bff";
    case "epic":
      return "#6f42c1";
    case "legendary":
      return "#fd7e14";
    default:
      return "#6c757d";
  }
};
