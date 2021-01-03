import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { useDebouncedEffect } from "../hooks/useDebouncedEffect";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  ${layout}
  ${space}
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 24px;
      height: 24px;
    }
    &::-webkit-color-swatch {
      border: none;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 1rem;
  }
`;

const ColorPicker = ({ value, action }) => {
  const [color, setColor] = useState(value);
  const dispatch = useDispatch();
  useDebouncedEffect(
    () => {
      dispatch(action(color));
    },
    50,
    [color]
  );
  return (
    <Container>
      <input
        type="color"
        value={value}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setColor(e.target.value)}
      />
    </Container>
  );
};

export default React.memo(ColorPicker);
