import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";
import { MdUndo } from "react-icons/md";
import { IconContainer } from "../../app/components";

const UndoIcon = styled(MdUndo)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Undo = () => {
  return (
    <IconContainer shadow tabIndex="0">
      <UndoIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Undo;
