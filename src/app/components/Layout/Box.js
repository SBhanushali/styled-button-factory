import styled, { css } from "styled-components";
import { space, color, border, layout, flexbox, grid } from "styled-system";

const shadow = css`
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 1),
    0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const disabled = css`
  pointer-events: none;
  opacity: 0.4;
`;

const Box = styled.div`
  ${(props) => props.shadow && shadow};
  ${(props) => props.disabled && disabled};
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${grid}
`;
export default Box;
