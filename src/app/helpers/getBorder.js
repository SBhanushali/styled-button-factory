const getBorder = (borderType, borderColor, borderWidth) => {
  let border = `\tborder: ${
    borderType || "solid"
  } ${borderColor} ${borderWidth}px;\n`;
  return border;
};

export default getBorder;
