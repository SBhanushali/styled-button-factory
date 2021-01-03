import styled, { css } from "styled-components";
import { Box } from "./index";

const canvasBackgroundSolid = css`
  background-color: ${(props) => props.backgroundColor};
`;
const canvasBackgroundRadial = css`
  background: ${(props) => props.gradientStart};
  background: ${(props) =>
    `radial-gradient(circle, ${props.gradientStart}, ${props.gradientEnd})`};
`;

const canvasBackgroundLinear = css`
  background: ${(props) => props.gradientStart};
  background: ${(props) =>
    `linear-gradient(${props.gradientAngle}deg, ${props.gradientStart}, ${props.gradientEnd})`};
`;

const StyledCanvas = styled(Box)`
  border: 2px solid #f7f7f8;
  border-radius: 10px;
  ${(props) => {
    if (props.backgroundType === "Solid") {
      return canvasBackgroundSolid;
    } else if (props.backgroundType === "Gradient") {
      if (props.gradientType === "Linear") {
        return canvasBackgroundLinear;
      } else {
        return canvasBackgroundRadial;
      }
    }
  }};
`;

export default StyledCanvas;
