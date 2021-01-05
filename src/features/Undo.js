import React, { useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";
import { typography } from "styled-system";
import { MdUndo } from "react-icons/md";
import { IconContainer } from "../app/components";

const UndoIcon = styled(MdUndo)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Undo = () => {
  const dispatch = useDispatch();
  const undoRef = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const undoPressed = useCallback((e) => {
    if (
      (e.ctrlKey && e.key === "z" && !e.shiftKey) ||
      (e.metaKey && e.key === "z" && !e.shiftKey)
    ) {
      dispatch(ActionCreators.undo());
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", undoPressed);
    return () => {
      document.removeEventListener("keydown", undoPressed);
    };
  }, [undoPressed]);
  return (
    <IconContainer
      as="button"
      tabIndex="0"
      ref={undoRef}
      onClick={() => dispatch(ActionCreators.undo())}
    >
      <UndoIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Undo;
