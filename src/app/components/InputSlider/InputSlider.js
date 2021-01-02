import React from "react";
import styled from "styled-components";
import { InputNumber, Slider } from "antd";
import { useDispatch } from "react-redux";

const InputNumberStyled = styled(InputNumber)`
  border: 0;
  outline: 0;
  width: 35%;
  height: max-content;
  background-color: #f1f3f7;
  border-radius: 5px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff;
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus-within {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
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
        formatter={(value) => `${value}px`}
        parser={(value) => value.replace("px", "")}
        onChange={(val) => dispatch(action(val))}
      />
    </>
  );
};

export default InputSlider;
