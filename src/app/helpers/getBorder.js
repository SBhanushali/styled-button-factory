const getBorder = (borderType, borderColor, borderWidth, borderRadius) => {
  return `border: ${borderType || "solid"} ${borderColor} ${borderWidth}px;
      border-radius: ${borderRadius}px;`;
};

export default getBorder;
