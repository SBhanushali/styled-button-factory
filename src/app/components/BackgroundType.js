import React from "react";
import { Box, RadioButtonGroup, Text } from ".";

const values = ["Gradient", "Solid"];

const BackgroundType = (props) => {
  return (
    <Box display="grid" alignItems="center">
      <RadioButtonGroup values={values} {...props} />
    </Box>
  );
};

export default BackgroundType;
