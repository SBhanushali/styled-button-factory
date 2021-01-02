import React from "react";
import styled from "styled-components";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";
import { typography } from "styled-system";
import { MdUndo } from "react-icons/md";
import { IconContainer } from "../../app/components";

const UndoIcon = styled(MdUndo)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Undo = () => {
  const dispatch = useDispatch();
  return (
    <IconContainer
      as="button"
      shadow
      tabIndex="0"
      onClick={() => dispatch(ActionCreators.undo())}
    >
      <UndoIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Undo;
