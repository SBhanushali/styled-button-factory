import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";
import { Modal } from "../components";
import { getShadow, getBackground, getBorder } from "../helpers";

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;

const ShowCodeModal = ({ isOpen, handleOpenModal }) => {
  const buttonDefault = useSelector((state) => state.buttonDefault.present);
  const [code, setCode] = useState("");
  const buttonBackground = useSelector(
    (state) => state.buttonBackground.present
  );
  const buttonBorder = useSelector((state) => state.buttonBorder.present);
  const buttonShadow = useSelector((state) => state.buttonShadow.present);
  const hoverButtonDefault = useSelector(
    (state) => state.hoverButtonDefault.present
  );
  const hoverButtonBackground = useSelector(
    (state) => state.hoverButtonBackground.present
  );
  const hoverButtonBorder = useSelector(
    (state) => state.hoverButtonBorder.present
  );
  const hoverButtonShadow = useSelector(
    (state) => state.hoverButtonShadow.present
  );
  useEffect(() => {
    isOpen && setCode(generateCode());
  }, [isOpen]);
  const generateCode = () => {
    return `
    const styledButton = styled.button\`
          font-family: ${buttonDefault.fontFamily || ""};
          font-size: ${buttonDefault.fontSize}px;
          font-weight: ${buttonDefault.fontWeight || ""};
          color: ${buttonDefault.textColor};
          padding: ${buttonDefault.paddingY}px ${buttonDefault.paddingX}px;
          cursor: ${buttonDefault.cursor || "default"};
          ${getBackground(
            buttonBackground.backgroundType,
            buttonBackground.backgroundColor,
            buttonBackground.gradientType,
            buttonBackground.gradientStart,
            buttonBackground.gradientEnd,
            buttonBackground.gradientAngle
          )}
          box-shadow: ${
            buttonShadow.hasShadow
              ? getShadow(
                  buttonShadow.shadowType,
                  buttonShadow.horizontalPlacement,
                  buttonShadow.verticalPlacement,
                  buttonShadow.blur,
                  buttonShadow.spread,
                  buttonShadow.shadowColor
                )
              : ""
          };
          ${
            buttonBorder.hasBorder
              ? getBorder(
                  buttonBorder.borderType,
                  buttonBorder.borderColor,
                  buttonBorder.borderWidth
                )
              : ""
          }
          ${
            buttonBorder.hasBorder &&
            `border-radius: ${buttonBorder.borderRadius}px;`
          }
          &:hover {
            font-size: ${hoverButtonDefault.fontSize}px;
            color: ${hoverButtonDefault.textColor};
            ${getBackground(
              hoverButtonBackground.backgroundType,
              hoverButtonBackground.backgroundColor,
              hoverButtonBackground.gradientType,
              hoverButtonBackground.gradientStart,
              hoverButtonBackground.gradientEnd,
              hoverButtonBackground.gradientAngle
            )}
            box-shadow: ${
              hoverButtonShadow.hasShadow
                ? getShadow(
                    hoverButtonShadow.shadowType,
                    hoverButtonShadow.horizontalPlacement,
                    hoverButtonShadow.verticalPlacement,
                    hoverButtonShadow.blur,
                    hoverButtonShadow.spread,
                    hoverButtonShadow.shadowColor
                  )
                : ""
            };
            ${
              hoverButtonBorder.hasBorder
                ? getBorder(
                    hoverButtonBorder.borderType,
                    hoverButtonBorder.borderColor,
                    hoverButtonBorder.borderWidth,
                    hoverButtonBorder.borderRadius
                  )
                : ""
            }
            ${
              hoverButtonBorder.hasBorder &&
              `border-radius: ${hoverButtonBorder.borderRadius}px;`
            }
          }
        \`
      `;
  };
  console.log(code);
  return (
    <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
      <ModalContent>
        <SyntaxHighlighter
          language="javascript"
          style={coldarkDark}
          customStyle={{ width: "100%" }}
        >
          {code}
        </SyntaxHighlighter>
      </ModalContent>
    </Modal>
  );
};

export default ShowCodeModal;
