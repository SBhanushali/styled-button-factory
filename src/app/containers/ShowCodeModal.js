import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";
import { Modal } from "../components";
import { CopyButton } from "../components/";
import { createReactComponentGenerator } from '@teleporthq/teleport-component-generator-react'
import { getShadow, getBackground, getBorder, getRandomString } from "../helpers";

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
const generator = createReactComponentGenerator({ variation: 'Styled Components' })

const ShowCodeModal = ({ isOpen, handleOpenModal }) => {
  const buttonDefault = useSelector((state) => state.present.buttonDefault);
  const [code, setCode] = useState(null);
  const buttonBackground = useSelector(
    (state) => state.present.buttonBackground
  );
  const buttonBorder = useSelector((state) => state.present.buttonBorder);
  const buttonShadow = useSelector((state) => state.present.buttonShadow);
  const hoverButtonDefault = useSelector(
    (state) => state.present.hoverButtonDefault
  );
  const hoverButtonBackground = useSelector(
    (state) => state.present.hoverButtonBackground
  );
  const hoverButtonBorder = useSelector(
    (state) => state.present.hoverButtonBorder
  );
  const hoverButtonShadow = useSelector(
    (state) => state.present.hoverButtonShadow
  );

  useEffect(() => {
    setCode(null)
  }, [])

  const generateCode = useCallback(async () => {
    const background = getBackground(
      buttonBackground.backgroundType,
      buttonBackground.backgroundColor,
      buttonBackground.gradientType,
      buttonBackground.gradientStart,
      buttonBackground.gradientEnd,
      buttonBackground.gradientAngle
    )
    
    const style = {
      ...(buttonDefault.font && { 'font-family': buttonDefault.font}),
      'font-size': buttonDefault.fontSize,
      ...buttonDefault.fontWeight && { 'font-weight': buttonDefault.fontWeight},
      color: buttonDefault.textColor,
      ...(buttonDefault.paddingX !== 0 || buttonDefault.paddingY !== 0) & ({padding: `${buttonDefault.paddingY}px ${buttonDefault.paddingX}px`}),
      ...(buttonDefault.cursor && {cursor: buttonDefault.cursor}),
      ...(background && {background}),
      ...(buttonShadow.hasShadow && { 'box-shadow': getShadow(
        buttonShadow.shadowType,
        buttonShadow.horizontalPlacement,
        buttonShadow.verticalPlacement,
        buttonShadow.blur,
        buttonShadow.spread,
        buttonShadow.shadowColor
      )}),
      ...(buttonBorder.hasBorder && { border: getBorder(
        buttonBorder.borderType,
        buttonBorder.borderColor,
        buttonBorder.borderWidth
      )}),
      ...(buttonBorder.hasBorder && { 'border-radius': `${buttonBorder.borderRadius}px`})
    }

    let referencedStyles = {}
    if (hoverButtonDefault.enableHover) {
      const id = getRandomString()
      const hoverBackground = getBackground(
        hoverButtonBackground.backgroundType,
        hoverButtonBackground.backgroundColor,
        hoverButtonBackground.gradientType,
        hoverButtonBackground.gradientStart,
        hoverButtonBackground.gradientEnd,
        hoverButtonBackground.gradientAngle
      )
      referencedStyles = {
        [id]: {
          id,
          type: 'style-map',
          content: {
            mapType: 'inlined',
            conditions: [{ conditionType: 'element-state', content: 'hover'}],
            styles: {
              'font-size': `${hoverButtonDefault.fontSize}px`,
              color: `${hoverButtonDefault.textColor};`,
              ...(hoverBackground && { background: hoverBackground }),
              ...(hoverButtonShadow.hasShadow && { 'box-shadow': getShadow(
                hoverButtonShadow.shadowType,
                hoverButtonShadow.horizontalPlacement,
                hoverButtonShadow.verticalPlacement,
                hoverButtonShadow.blur,
                hoverButtonShadow.spread,
                hoverButtonShadow.shadowColor
              )}),
              ...(hoverButtonBorder.hasBorder && { border: getBorder(
                hoverButtonBorder.borderType,
                hoverButtonBorder.borderColor,
                hoverButtonBorder.borderWidth,
                hoverButtonBorder.borderRadius
              )}),
              ...(hoverButtonBorder.hasBorder && { 'border-radius': `${hoverButtonBorder.borderRadius}px`})
            }
          }
        }
      }
    }

    const uidl = {
      name: 'StyledButton',
      node: {
        type: 'element',
        content: {
          elementType: 'button',
          ...(Object.keys(style || {}).length > 0 && { style }),
          ...(Object.keys(referencedStyles).length > 0 && { referencedStyles}),
          children: [{
            type: 'static',
            content: buttonDefault.buttonText || 'Button'
          }]
        }
      }
    }

    try {
      const { files} = await generator.generateComponent(uidl)
      if (files.length > 0) {
        setCode(files[0].content)
      }
    } catch(e) {
      console.error(e)
    }
    
  }, [
    buttonDefault.buttonText,
    buttonBackground.backgroundColor,
    buttonBackground.backgroundType,
    buttonBackground.gradientAngle,
    buttonBackground.gradientEnd,
    buttonBackground.gradientStart,
    buttonBackground.gradientType,
    buttonBorder.borderColor,
    buttonBorder.borderType,
    buttonBorder.borderWidth,
    buttonBorder.hasBorder,
    buttonBorder.borderRadius,
    buttonDefault.cursor,
    buttonDefault.font,
    buttonDefault.fontSize,
    buttonDefault.fontWeight,
    buttonDefault.paddingX,
    buttonDefault.paddingY,
    buttonDefault.textColor,
    buttonShadow.blur,
    buttonShadow.hasShadow,
    buttonShadow.horizontalPlacement,
    buttonShadow.shadowColor,
    buttonShadow.shadowType,
    buttonShadow.spread,
    buttonShadow.verticalPlacement,
    hoverButtonBackground.backgroundColor,
    hoverButtonBackground.backgroundType,
    hoverButtonBackground.gradientAngle,
    hoverButtonBackground.gradientEnd,
    hoverButtonBackground.gradientStart,
    hoverButtonBackground.gradientType,
    hoverButtonBorder.borderColor,
    hoverButtonBorder.borderRadius,
    hoverButtonBorder.borderType,
    hoverButtonBorder.borderWidth,
    hoverButtonBorder.hasBorder,
    hoverButtonDefault.enableHover,
    hoverButtonDefault.fontSize,
    hoverButtonDefault.textColor,
    hoverButtonShadow.blur,
    hoverButtonShadow.hasShadow,
    hoverButtonShadow.horizontalPlacement,
    hoverButtonShadow.shadowColor,
    hoverButtonShadow.shadowType,
    hoverButtonShadow.spread,
    hoverButtonShadow.verticalPlacement,
  ]);
  useEffect(() => {
    if (isOpen) {
      generateCode()
    }
  }, [generateCode, isOpen]);

  return (
    <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
      <ModalContent>
        {code &&
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            customStyle={{ width: "100%" }}
          >
            {code}
          </SyntaxHighlighter>
        }
        <CopyButton text={code} />
      </ModalContent>
    </Modal>
  );
};

export default ShowCodeModal;
