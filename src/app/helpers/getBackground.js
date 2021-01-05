const getBackground = (
  backgroundType,
  backgroundColor = "",
  gradientType = "",
  gradientStart = "",
  gradientEnd = "",
  gradientAngle = ""
) => {
  if (backgroundType === "Solid") {
    return `\tbackground: ${backgroundColor};\n`;
  } else if (backgroundType === "Gradient") {
    if (gradientType === "Linear") {
      return `\tbackground: linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd});\n`;
    } else {
      return `\tbackground: radial-gradient(circle, ${gradientStart}, ${gradientEnd});\n`;
    }
  }
};

export default getBackground;
