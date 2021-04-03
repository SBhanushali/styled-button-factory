const getBackground = (
  backgroundType,
  backgroundColor = "",
  gradientType = "",
  gradientStart = "",
  gradientEnd = "",
  gradientAngle = ""
) => {
  if (backgroundType === "Solid") {
    return backgroundColor;
  } else if (backgroundType === "Gradient") {
    if (gradientType === "Linear") {
      return `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`;
    } else {
      return `radial-gradient(circle, ${gradientStart}, ${gradientEnd})`;
    }
  }
};

export default getBackground;
