import React, { useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import { layout } from "styled-system";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled(motion.div)`
  ${layout}
  height: 75%;
  background-color: #111c27;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;
const CloseButton = styled(FaTimes)`
  width: 20px;
  height: 20px;
  color: white;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" },
};

const Modal = ({ handleClose, children, isOpen }) => {
  const modalRef = useRef();
  const escPressed = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    },
    [isOpen, handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escPressed);
    return () => {
      document.removeEventListener("keydown", escPressed);
    };
  }, [escPressed]);

  const handleOverlayClose = (e) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
          ref={modalRef}
          onClick={handleOverlayClose}
        >
          <ModalContainer
            variants={containerVariant}
            width={[9 / 10, 9 / 10, 9 / 10, 1 / 2]}
          >
            <CloseButton onClick={() => handleClose()} />
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
