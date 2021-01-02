import React from "react";
import { useSelector } from "react-redux";
import {
  setFontSize,
  setTextColor,
} from "../../features/HoverButtonDefaultSlice";
import { Row, Col, InputSlider, ColorPicker } from "../components";

const HoverButtonDefault = () => {
  const defaultState = useSelector((state) => state.hoverButtonDefault.present);
  return (
    <>
      <Row alignItems="center">
        <Col
          width={[1, 1, 1 / 2, 45 / 100]}
          display="flex"
          alignItems="center"
          my={["10px", "10px", "10px", "10px"]}
        >
          <Col width="30%">Font Size</Col>
          <Col width="70%" display="flex" justifyContent="space-between">
            <InputSlider
              value={defaultState.fontSize}
              action={setFontSize}
              min={0}
              max={100}
            />
          </Col>
        </Col>
        <Col
          width={[1, 1, 1 / 2, 45 / 100]}
          display="flex"
          alignItems="center"
          my={["10px", "10px", 0, 0]}
        >
          <Col width="30%">Text Color</Col>
          <Col width="70%">
            <ColorPicker value={defaultState.textColor} action={setTextColor} />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default HoverButtonDefault;
