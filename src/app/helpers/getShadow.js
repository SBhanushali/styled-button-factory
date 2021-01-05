const getShadow = (
  shadowType,
  horizontalPlacement,
  verticalPlacement,
  blur,
  spread,
  shadowColor
) => {
  return `${
    shadowType === "Inset" ? shadowType : ""
  } ${horizontalPlacement}px ${verticalPlacement}px ${blur}px ${spread}px ${shadowColor}`;
};

export default getShadow;
