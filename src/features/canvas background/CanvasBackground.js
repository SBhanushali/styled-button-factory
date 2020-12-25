import React from "react";
import { BackgroundType, Box, ColorPicker, Text } from "../../app/components";
import GradientType from "../../app/components/GradientType";
import CircularSlider from "@fseehawer/react-circular-slider";

const CanvasBackground = () => {
  return (
    <Box shadow p="10px">
      <Text fontWeight="bold" fontSize="14px">
        Canvas Background
      </Text>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr  1fr 1fr"
        gridGap="0.2rem"
        gridTemplateAreas="
        'BackgroundType GradientSolid GradientSolid .'
        'GradientType LinearSolid LinearSolid .'
        'GradientStart StartColor StartColor Angle'
        'GradientEnd EndColor EndColor Angle'"
      >
        <Box gridArea="BackgroundType" alignSelf="center">
          Background Type
        </Box>
        <Box gridArea="GradientSolid" alignSelf="center">
          <BackgroundType width="max-content" />
        </Box>
        <Box gridArea="GradientType" alignSelf="center">
          Gradient Type
        </Box>
        <Box gridArea="LinearSolid" alignSelf="center">
          <GradientType width="max-content" />
        </Box>
        <Box gridArea="GradientStart" alignSelf="center">
          Gradient Start
        </Box>
        <Box gridArea="StartColor" alignSelf="center">
          <ColorPicker value="#ffffff" />
        </Box>
        <Box gridArea="GradientEnd" alignSelf="center">
          Gradient End
        </Box>
        <Box gridArea="EndColor" alignSelf="center">
          <ColorPicker value="#ffffff" />
        </Box>
        <Box gridArea="Angle" alignSelf="center" justifySelf="center">
          <CircularSlider
            min={0}
            max={360}
            direction={-1}
            dataIndex={50}
            knobPosition="right"
            knobSize={28}
            knobColor="#000000"
            trackColor="#0000000d"
            appendToValue="°"
            label="Angle"
            labelFontSize="0.6rem"
            valueFontSize="0.9rem"
            verticalOffset="1rem"
            progressColorFrom="#d9971c"
            progressColorTo="#d9971c"
            trackSize={4}
            progressSize={4}
            width="70"
            // onChange={(value) => console.log(value)}
          ></CircularSlider>
        </Box>
      </Box>
    </Box>
  );
};

export default CanvasBackground;
