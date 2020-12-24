import React from "react";
import { Box, Text, RadioButtonGroup } from "../../app/components";
const values = ["Default", "Hover", "Active", "Disabled"];
const ButtonStates = () => {
  return (
    <Box shadow borderRadius="10px" p="10px" pb="15px">
      <Box>
        <Text fontWeight="bold" fontSize="14px" mb="2em">
          Button States
        </Text>
        <RadioButtonGroup values={values} />
      </Box>
    </Box>
  );
};

export default ButtonStates;
