import React from "react";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { typography } from "styled-system";
import { MdRedo } from "react-icons/md";
import { IconContainer } from "../../app/components";

const RedoIcon = styled(MdRedo)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Redo = () => {
  const dispatch = useDispatch();
  return (
    <IconContainer
      shadow
      tabIndex="0"
      as="button"
      onClick={() => dispatch(ActionCreators.redo())}
    >
      <RedoIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Redo;
