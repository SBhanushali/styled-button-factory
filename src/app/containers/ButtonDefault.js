import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFontSize,
  setFontWeight,
  setTextColor,
  setPaddingX,
  setPaddingY,
  setCursor,
  setButtonText,
  setFont,
} from "../../features/ButtonDefaultSlice";
import {
  Row,
  Col,
  InputSlider,
  Select,
  InputStyled,
  ColorPicker,
  TextInput,
} from "../components";
import { cursors } from "../constants/Cursors";
import { fonts } from "../constants/Fonts";

const ButtonDefault = () => {
  const defaultState = useSelector((state) => state.buttonDefault);
  const dispatch = useDispatch();
  return (
    <>
      <Row>
        <Col width={[1, 1, 1 / 2, 45 / 100]} my={["10px", "10px", 0, 0]}>
          <TextInput
            placeholder="Button Text"
            value={defaultState.buttonText}
            action={setButtonText}
          />
        </Col>
        <Col width={[1, 1, 1 / 2, 45 / 100]} my={["10px", "10px", 0, 0]}>
          <Select
            placeholder="Select Font"
            values={fonts}
            selected={defaultState.font}
            action={(value) => dispatch(setFont(value))}
          />
        </Col>
      </Row>
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
          my={["10px", "10px", "10px", "10px"]}
        >
          <Col width="30%">Font Weight</Col>
          <Col width="70%" display="flex" justifyContent="space-between">
            <InputSlider
              value={defaultState.fontWeight}
              action={setFontWeight}
              min={0}
              max={100}
            />
          </Col>
        </Col>
      </Row>
      <Row>
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
        <Col
          width={[1, 1, 1 / 2, 45 / 100]}
          display="flex"
          alignItems="center"
          my={["10px", "10px", 0, 0]}
        >
          <Col width="30%">PaddingX</Col>
          <Col width="70%" display="flex" justifyContent="space-between">
            <InputSlider
              value={defaultState.paddingX}
              action={setPaddingX}
              min={0}
              max={100}
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
          <Select
            placeholder="Cursor Type"
            values={cursors}
            selected={defaultState.cursor}
            action={(value) => dispatch(setCursor(value))}
          />
        </Col>
        <Col
          width={[1, 1, 1 / 2, 45 / 100]}
          display="flex"
          alignItems="center"
          my={["10px", "10px", 0, 0]}
        >
          <Col width="30%">PaddingY</Col>
          <Col width="70%" display="flex" justifyContent="space-between">
            <InputSlider
              value={defaultState.paddingY}
              action={setPaddingY}
              min={0}
              max={100}
            />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default ButtonDefault;
