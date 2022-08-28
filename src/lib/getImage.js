export const getImage = (desc) => {
  if (desc.includes("thunderstorm") || desc.includes("Thunderstorm"))
    return "Thunderstorm";
  if (desc.includes("shower rain")) return "Shower";
  if (desc.includes("snow") || desc.includes("Snow")) return "Snow";
  switch (desc) {
    case "Clear Sky":
      return "Clear";
    case "Sleet":
      return "Sleet";
    case "Few clouds":
      return "LightCloud";
    case "Heavy rain":
      return "HeavyRain";
    case "Light rain":
      return "LightRain";
    case "Shower rain":
      return "Shower";
    case "Moderate rain":
      return "LightRain";
    case "Scattered clouds":
      return "LightCloud";
    case "Overcast clouds":
      return "HeavyCloud";
    case "Broken clouds":
      return "LightCloud";
    case "Snow":
      return "Snow";
    default:
      break;
  }
};
