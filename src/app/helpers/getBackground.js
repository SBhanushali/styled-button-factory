const getBackground = (
  backgroundType,
  backgroundColor = "",
  gradientType = "",
  gradientStart = "",
  gradientEnd = "",
  gradientAngle = ""
) => {
  if (backgroundType === "Solid") {
    return `background: ${backgroundColor}`;
  } else if (backgroundType === "Gradient") {
    if (gradientType === "Linear") {
      return `background: ${gradientStart} \n background: linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`;
    } else {
      return `background: ${gradientStart} \n background: radial-gradient(circle, ${gradientStart}, ${gradientEnd})`;
    }
  }
};

export default getBackground;
