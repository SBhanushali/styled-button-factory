import { Box, RadioButtonGroup, Text } from ".";

const values = ["Linear", "Radial"];

const GradientType = (props) => {
  return (
    <Box display="grid" alignItems="center">
      <RadioButtonGroup values={values} {...props} />
    </Box>
  );
};

export default GradientType;
