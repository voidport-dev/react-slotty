export const getRarityShadowColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "rgba(108, 117, 125, 0.3)";
    case "uncommon":
      return "rgba(40, 167, 69, 0.3)";
    case "rare":
      return "rgba(0, 123, 255, 0.3)";
    case "epic":
      return "rgba(111, 66, 193, 0.3)";
    case "legendary":
      return "rgba(253, 126, 20, 0.3)";
    default:
      return "rgba(108, 117, 125, 0.3)";
  }
};
