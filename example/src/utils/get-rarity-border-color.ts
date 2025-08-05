export const getRarityBorderColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "#495057";
    case "uncommon":
      return "#1e7e34";
    case "rare":
      return "#0056b3";
    case "epic":
      return "#5a2d82";
    case "legendary":
      return "#e8590c";
    default:
      return "#495057";
  }
};
