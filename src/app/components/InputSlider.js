import React from "react";
import styled from "styled-components";
import { InputNumber, Slider } from "antd";
import { useDispatch } from "react-redux";

const InputNumberStyled = styled(InputNumber)`
  border: 0;
  outline: 0;
  width: 35%;
  height: max-content;
  background-color: #f7f7f8;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  appearance: none;
  input {
    background-color: transparent;
  }
`;

const InputSlider = ({ value, action, min, max }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Slider
        min={min}
        max={max}
        value={typeof value === "number" ? value : 0}
        style={{ width: "55%" }}
        trackStyle={{ backgroundColor: "#fdbb2c" }}
        handleStyle={{ borderColor: "#fdbb2c" }}
        onChange={(val) => dispatch(action(val))}
      />
      <InputNumberStyled
        min={min}
        max={max}
        value={value}
        onChange={(val) => dispatch(action(val))}
      />
    </>
  );
};

export default InputSlider;
