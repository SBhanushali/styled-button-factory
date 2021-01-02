import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Col,
  ColorPicker,
  RadioButtonGroup,
  Row,
  Text,
  InputSlider,
  StyledSwitch,
} from "../components";
import { Switch } from "antd";
import {
  setBlur,
  setHasShadow,
  setHorizontalPlacement,
  setShadowColor,
  setShadowType,
  setSpread,
  setVerticalPlacement,
} from "../../features/HoverButtonShadowSlice";

const HoverButtonShadow = () => {
  const shadowState = useSelector((state) => state.hoverButtonShadow);
  const dispatch = useDispatch();
  return (
    <Box shadow p="10px" width="100%" mb="5px" mt="5px">
      <Box display="flex" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="14px">
          Button Shadow
        </Text>
        <StyledSwitch>
          <Switch
            checked={shadowState.hasShadow}
            onChange={() => dispatch(setHasShadow())}
          />
        </StyledSwitch>
      </Box>
      <Box disabled={!shadowState.hasShadow}>
        <Row>
          <Col
            width={[1, 1, 1 / 2, 45 / 100]}
            display="flex"
            alignItems="center"
            mt={["10px", "10px", "10px", "10px"]}
            justifyContent="space-between"
          >
            <Col width="30%">Shadow Type</Col>
            <Col width="60%" mt={[0, 0, 0, "-6px"]}>
              <RadioButtonGroup
                values={["Outset", "Inset"]}
                selected={shadowState.shadowType}
                onChange={(e) => dispatch(setShadowType(e.target.value))}
              />
            </Col>
          </Col>
          <Col
            width={[1, 1, 1 / 2, 45 / 100]}
            display="flex"
            alignItems="center"
            mt={["10px", "10px", "10px", "10px"]}
            justifyContent="space-between"
          >
            <Col width="40%">Box Shadow Color</Col>
            <Col width="50%">
              <ColorPicker
                value={shadowState.shadowColor}
                action={setShadowColor}
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col
            width={[1, 1, 1 / 2, 45 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "10px"]}
          >
            <Col width="30%">Horizontal</Col>
            <Col width="70%" display="flex" justifyContent="space-between">
              <InputSlider
                value={shadowState.horizontalPlacement}
                action={setHorizontalPlacement}
                min={-50}
                max={50}
              />
            </Col>
          </Col>
          <Col
            width={[1, 1, 1 / 2, 45 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "10px"]}
          >
            <Col width="30%">Vertical</Col>
            <Col width="70%" display="flex" justifyContent="space-between">
              <InputSlider
                value={shadowState.verticalPlacement}
                action={setVerticalPlacement}
                min={-50}
                max={50}
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col
            width={[1, 1, 1 / 2, 45 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", 0]}
          >
            <Col width="30%">Blur</Col>
            <Col width="70%" display="flex" justifyContent="space-between">
              <InputSlider
                value={shadowState.blur}
                action={setBlur}
                min={0}
                max={100}
              />
            </Col>
          </Col>
          <Col
            width={[1, 1, 1 / 2, 45 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", 0]}
          >
            <Col width="30%">Spread</Col>
            <Col width="70%" display="flex" justifyContent="space-between">
              <InputSlider
                value={shadowState.spread}
                action={setSpread}
                min={0}
                max={100}
              />
            </Col>
          </Col>
        </Row>
      </Box>
    </Box>
  );
};

export default HoverButtonShadow;
