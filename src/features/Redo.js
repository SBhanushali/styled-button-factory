import React, { useRef, useCallback, useEffect } from "react";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { typography } from "styled-system";
import { MdRedo } from "react-icons/md";
import { IconContainer } from "../app/components";

const RedoIcon = styled(MdRedo)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Redo = () => {
  const dispatch = useDispatch();
  const redoRef = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const redoPressed = useCallback((e) => {
    console.log(e.key);
    if (
      (e.ctrlKey && e.shiftKey && e.key === "z") ||
      (e.metaKey && e.shiftKey && e.key === "z")
    ) {
      console.log("redo");
      dispatch(ActionCreators.redo());
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", redoPressed);
    return () => {
      document.removeEventListener("keydown", redoPressed);
    };
  }, [redoPressed]);
  return (
    <IconContainer
      tabIndex="0"
      as="button"
      ref={redoRef}
      onClick={() => dispatch(ActionCreators.redo())}
    >
      <RedoIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Redo;
