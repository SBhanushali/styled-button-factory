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
  ColorPicker,
  TextInput,
} from "../components";
import { cursors } from "../constants/Cursors";
import { fonts } from "../constants/Fonts";
import { weights } from "../constants/weights";

const ButtonDefault = () => {
  const defaultState = useSelector((state) => state.present.buttonDefault);
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
        <Col
          width={[1, 1, 1 / 2, 50 / 100]}
          my={["10px", "10px", 0, 0]}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Select Font
          <Select
            width="70%"
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
              min={1}
              max={100}
            />
          </Col>
        </Col>
        <Col
          width={[1, 1, 1 / 2, 50 / 100]}
          my={["10px", "10px", "10px", "10px"]}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Font Weight
          <Select
            width="70%"
            placeholder="Select Font Weight"
            values={weights}
            selected={defaultState.fontWeight}
            action={(value) => dispatch(setFontWeight(value))}
          />
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
          width={[1, 1, 1 / 2, 50 / 100]}
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
          justifyContent="space-between"
        >
          Cursor
          <Select
            width="70%"
            placeholder="Cursor Type"
            values={cursors}
            selected={defaultState.cursor}
            action={(value) => dispatch(setCursor(value))}
          />
        </Col>
        <Col
          width={[1, 1, 1 / 2, 50 / 100]}
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
