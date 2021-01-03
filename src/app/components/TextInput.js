import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Input } from "antd";

const InputStyled = styled(Input)`
  border: 0;
  outline: 0;
  height: 45px;
  background-color: #f7f7f8;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  appearance: none;
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
