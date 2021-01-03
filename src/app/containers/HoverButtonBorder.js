import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "antd";
import {
  Box,
  Text,
  StyledSwitch,
  Row,
  Col,
  Select,
  InputSlider,
  ColorPicker,
} from "../components";
import {
  setBorderColor,
  setBorderRadius,
  setBorderType,
  setBorderWidth,
  setHasBorder,
} from "../../features/HoverButtonBorderSlice";
import { border } from "../constants/Borders";

const HoverButtonBorder = () => {
  const borderState = useSelector((state) => state.hoverButtonBorder.present);
  const dispatch = useDispatch();
  return (
    <>
      <Box boundary p="10px" width="100%" mb="5px" mt="5px">
        <Box display="flex" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="14px">
            Button Border
          </Text>
          <StyledSwitch>
            <Switch
              checked={borderState.hasBorder}
              onChange={() => dispatch(setHasBorder())}
            />
          </StyledSwitch>
        </Box>
        <Box disabled={!borderState.hasBorder}>
          <Row alignItems="center" my={["10px", "10px", "10px", "10px"]}>
            <Select
              placeholder="Border Type"
              values={border}
              selected={borderState.borderType}
              action={(value) => dispatch(setBorderType(value))}
            />
          </Row>
          <Row alignItems="center">
            <Col width="30%">Border Color</Col>
            <Col width="60%">
              <ColorPicker
                value={borderState.borderColor}
                action={setBorderColor}
              />
            </Col>
          </Row>
          <Row alignItems="center" my={["10px", "10px", "10px", "10px"]}>
            <Col width="30%">Width</Col>
            <Col width="70%" display="flex" justifyContent="space-between">
              <InputSlider
                value={borderState.borderWidth}
                action={setBorderWidth}
                min={1}
                max={100}
              />
            </Col>
          </Row>
          <Row alignItems="center" mb={["10px", "10px", "10px", "10px"]}>
            <Col width="30%">Radius</Col>
            <Col width="70%" display="flex" justifyContent="space-between">
              <InputSlider
                value={borderState.borderRadius}
                action={setBorderRadius}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default HoverButtonBorder;
