import styled from "styled-components";
import { space, color, border, layout, flexbox, grid } from "styled-system";

const Box = styled.div`
  box-shadow: ${(props) =>
    props.shadow ? `0px 2px 10px rgba(0, 0, 0, 0.1);` : ""};
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${grid}
`;
export default Box;
