import styled from "styled-components";
import { space, color, border, layout, flexbox, grid } from "styled-system";

const Box = styled.div`
  box-shadow: ${(props) =>
    props.shadow ? "0px 0px 10px -3px rgba(0, 0, 0, 0.22)" : ""};
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${grid}
`;
export default Box;
