import styled, { css } from "styled-components";

const buttonBackgroundSolid = css`
  background-color: ${(props) => props.backgroundColor};
`;
const buttonBackgroundRadial = css`
  background: ${(props) => props.gradientStart};
  background: ${(props) =>
    `radial-gradient(circle, ${props.gradientStart}, ${props.gradientEnd})`};
`;

const buttonBackgroundLinear = css`
  background: ${(props) => props.gradientStart};
  background: ${(props) =>
    `linear-gradient(${props.gradientAngle}deg, ${props.gradientStart}, ${props.gradientEnd})`};
`;

const buttonBorder = css`
  border: ${(props) => {
    return `${props.borderType ? props.borderType : "solid"} ${
      props.borderColor
    } ${props.borderWidth}px`;
  }};
  border-radius: ${(props) => `${props.borderRadius}px`};
`;

const buttonShadow = css`
  box-shadow: ${(props) => {
    return `${props.shadowType === "Inset" ? props.shadowType : ""} ${
      props.horizontalPlacement
    }px ${props.verticalPlacement}px ${props.blur}px ${props.spread}px ${
      props.shadowColor
    }`;
  }};
`;

const hoverButtonBackgroundSolid = css`
  background-color: ${(props) => props.hoverBackgroundColor};
`;
const hoverButtonBackgroundRadial = css`
  background: ${(props) => props.hoverGradientStart};
  background: ${(props) =>
    `radial-gradient(circle, ${props.hoverGradientStart}, ${props.hoverGradientEnd})`};
`;

const hoverButtonBackgroundLinear = css`
  background: ${(props) => props.hoverGradientStart};
  background: ${(props) =>
    `linear-gradient(${props.hoverGradientAngle}deg, ${props.hoverGradientStart}, ${props.hoverGradientEnd})`};
`;

const hoverButtonBorder = css`
  border: ${(props) => {
    return `${props.hoverBorderType ? props.hoverBorderType : "solid"} ${
      props.hoverBorderColor
    } ${props.hoverBorderWidth}px`;
  }};
  border-radius: ${(props) => `${props.hoverBorderRadius}px`};
`;

const hoverButtonShadow = css`
  box-shadow: ${(props) => {
    return `${props.hoverShadowType === "Inset" ? props.hoverShadowType : ""} ${
      props.hoverHorizontalPlacement
    }px ${props.hoverVerticalPlacement}px ${props.hoverBlur}px ${
      props.hoverSpread
    }px ${props.hoverShadowColor}`;
  }};
`;

const StyledButton = styled.button`
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "")};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => `${props.fontWeight}`};
  color: ${(props) => props.color};
  padding: ${(props) => `${props.paddingY}px ${props.paddingX}px`};
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
  ${(props) => {
    if (props.backgroundType === "Solid") {
      return buttonBackgroundSolid;
    } else if (props.backgroundType === "Gradient") {
      if (props.gradientType === "Linear") {
        return buttonBackgroundLinear;
      } else {
        return buttonBackgroundRadial;
      }
    }
  }};
  ${(props) =>
    props.hasBorder
      ? buttonBorder
      : css`
          border: none;
        `};
  ${(props) => (props.hasShadow ? buttonShadow : "")};
  &:hover {
    font-size: ${(props) => `${props.hoverFontSize}px`};
    color: ${(props) => props.hoverColor};
    box-shadow: ${(props) => props.hoverBoxShadow};
    ${(props) => {
      if (props.hoverBackgroundType === "Solid") {
        return hoverButtonBackgroundSolid;
      } else if (props.hoverBackgroundType === "Gradient") {
        if (props.hoverGradientType === "Linear") {
          return hoverButtonBackgroundLinear;
        } else {
          return hoverButtonBackgroundRadial;
        }
      }
    }};
    ${(props) => (props.hoverHasBorder ? hoverButtonBorder : "")};
    ${(props) => (props.hoverHasShadow ? hoverButtonShadow : "")};
  }
`;

export default StyledButton;
