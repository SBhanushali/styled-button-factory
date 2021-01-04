const getBackground = (
  backgroundType,
  backgroundColor = "",
  gradientType = "",
  gradientStart = "",
  gradientEnd = "",
  gradientAngle = ""
) => {
  if (backgroundType === "Solid") {
    return `background: ${backgroundColor};`;
  } else if (backgroundType === "Gradient") {
    if (gradientType === "Linear") {
      return `background: linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd});`;
    } else {
      return `background: radial-gradient(circle, ${gradientStart}, ${gradientEnd});`;
    }
  }
};

export default getBackground;
