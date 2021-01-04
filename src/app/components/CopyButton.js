import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import copy from "copy-to-clipboard";

const Button = styled.button`
  font-size: 18px;
  color: #fdbb2c;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: #ffffff;
  outline: none;
  border: solid #fdbb2c 1px;
  box-shadow: inset 0 0 0 0 #fdbb2c;
  border-radius: 5px;

  ${(props) =>
    props.active &&
    css`
      transition: 1.5s ease-out;
      box-shadow: inset 100px 0 0 0 #fdbb2c;
      color: #fff;
    `}
`;

const CopyButton = ({ text }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const onCopy = useCallback(() => {
    const didCopy = copy(text);
    setHasCopied(didCopy);
  }, [text]);

  useEffect(() => {
    let timeoutId = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, 1500);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [hasCopied]);
  return (
    <Button onClick={onCopy} active={hasCopied}>
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  );
};

export default CopyButton;
