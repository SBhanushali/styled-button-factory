import styled, { css } from "styled-components";
import { space, color, border, layout, flexbox, grid } from "styled-system";

const boundary = css`
  border: 2px solid #f7f7f8;
  border-radius: 10px;
`;

const disabled = css`
  pointer-events: none;
  opacity: 0.4;
`;

const Box = styled.div`
  ${(props) => props.boundary && boundary};
  ${(props) => props.disabled && disabled};
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${grid}
`;
export default Box;
