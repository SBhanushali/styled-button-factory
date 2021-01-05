import React from "react";
import { useSelector } from "react-redux";
import { StyledButton, StyledCanvas } from "../components";

const Playground = () => {
  const canvas = useSelector((state) => state.present.canvas);
  const buttonDefault = useSelector((state) => state.present.buttonDefault);
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
  return (
    <StyledCanvas
      boundary
      height="36vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundType={canvas.backgroundType}
      backgroundColor={canvas.backgroundColor}
      gradientType={canvas.gradientType}
      gradientStart={canvas.gradientStart}
      gradientEnd={canvas.gradientEnd}
      gradientAngle={canvas.gradientAngle}
    >
      <StyledButton
        fontFamily={buttonDefault.font}
        fontSize={buttonDefault.fontSize}
        fontWeight={buttonDefault.fontWeight}
        color={buttonDefault.textColor}
        paddingX={buttonDefault.paddingX}
        paddingY={buttonDefault.paddingY}
        cursor={buttonDefault.cursor}
        backgroundType={buttonBackground.backgroundType}
        backgroundColor={buttonBackground.backgroundColor}
        gradientType={buttonBackground.gradientType}
        gradientStart={buttonBackground.gradientStart}
        gradientEnd={buttonBackground.gradientEnd}
        gradientAngle={buttonBackground.gradientAngle}
        hasShadow={buttonShadow.hasShadow}
        shadowType={buttonShadow.shadowType}
        shadowColor={buttonShadow.shadowColor}
        horizontalPlacement={buttonShadow.horizontalPlacement}
        verticalPlacement={buttonShadow.verticalPlacement}
        blur={buttonShadow.blur}
        spread={buttonShadow.spread}
        hasBorder={buttonBorder.hasBorder}
        borderType={buttonBorder.borderType}
        borderColor={buttonBorder.borderColor}
        borderWidth={buttonBorder.borderWidth}
        borderRadius={buttonBorder.borderRadius}
        enableHover={hoverButtonDefault.enableHover}
        hoverFontSize={hoverButtonDefault.fontSize}
        hoverColor={hoverButtonDefault.textColor}
        hoverBackgroundType={hoverButtonBackground.backgroundType}
        hoverBackgroundColor={hoverButtonBackground.backgroundColor}
        hoverGradientType={hoverButtonBackground.gradientType}
        hoverGradientStart={hoverButtonBackground.gradientStart}
        hoverGradientEnd={hoverButtonBackground.gradientEnd}
        hoverGradientAngle={hoverButtonBackground.gradientAngle}
        hoverHasShadow={hoverButtonShadow.hasShadow}
        hoverShadowType={hoverButtonShadow.shadowType}
        hoverShadowColor={hoverButtonShadow.shadowColor}
        hoverHorizontalPlacement={hoverButtonShadow.horizontalPlacement}
        hoverVerticalPlacement={hoverButtonShadow.verticalPlacement}
        hoverBlur={hoverButtonShadow.blur}
        hoverSpread={hoverButtonShadow.spread}
        hoverHasBorder={hoverButtonBorder.hasBorder}
        hoverBorderType={hoverButtonBorder.borderType}
        hoverBorderColor={hoverButtonBorder.borderColor}
        hoverBorderWidth={hoverButtonBorder.borderWidth}
        hoverBorderRadius={hoverButtonBorder.borderRadius}
      >
        {buttonDefault.buttonText}
      </StyledButton>
    </StyledCanvas>
  );
};

export default Playground;
