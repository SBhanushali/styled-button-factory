import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { typography } from "styled-system";
import { VscDebugRestart } from "react-icons/vsc";
import { IconContainer } from "../app/components";
import { resetStore } from "./ResetSlice";

const ResetIcon = styled(VscDebugRestart)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Reset = () => {
  const dispatch = useDispatch();
  return (
    <IconContainer
      as="button"
      tabIndex="0"
      onClick={() => dispatch(resetStore())}
    >
      <ResetIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Reset;
