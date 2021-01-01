import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Input } from "antd";

const InputStyled = styled(Input)`
  border: 0;
  outline: 0;
  height: 45px;
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

const TextInput = ({ placeholder, value, action }) => {
  const dispatch = useDispatch();

  return (
    <InputStyled
      placeholder={placeholder}
      allowClear
      value={value}
      onChange={(e) => dispatch(action(e.target.value))}
    />
  );
};

export default TextInput;
