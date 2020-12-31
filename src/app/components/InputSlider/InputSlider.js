import React, { useState } from "react";
import styled from "styled-components";
import { InputNumber, Slider } from "antd";
import { useDebouncedEffect } from "../../hooks/useDebouncedEffect";
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

const InputSlider = ({ value, action }) => {
  const [range, setRange] = useState(value);
  const dispatch = useDispatch();
  useDebouncedEffect(
    () => {
      dispatch(action(range));
    },
    100,
    [range]
  );
  return (
    <>
      <Slider
        min={0}
        max={100}
        value={typeof range === "number" ? range : 0}
        style={{ width: "55%" }}
        trackStyle={{ backgroundColor: "#fdbb2c" }}
        handleStyle={{ borderColor: "#fdbb2c" }}
        onChange={(val) => setRange(val)}
      />
      <InputNumberStyled
        min={0}
        max={100}
        value={range}
        formatter={(value) => `${value}px`}
        parser={(value) => value.replace("px", "")}
        onChange={(val) => setRange(val)}
      />
    </>
  );
};

export default InputSlider;
