import styled, { css } from "styled-components";
import { space, color, border, layout, flexbox, grid } from "styled-system";

const shadow = css`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Box = styled.div`
  ${(props) => props.shadow && shadow};
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${grid}
`;
export default Box;
