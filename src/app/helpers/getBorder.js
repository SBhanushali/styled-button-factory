const getBorder = (borderType, borderColor, borderWidth) => {
  let border = `border: ${
    borderType || "solid"
  } ${borderColor} ${borderWidth}px;`;
  return border;
};

export default getBorder;
