import styled from "styled-components";
import Box from "./Box";

const IconContainer = styled(Box)`
  text-align: center;
  border: 1px solid #f7f7f8;
  border-radius: 10px;
  outline: none;
  background: transparent;

  &:active {
    box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
      inset 0px 2px 5px rgba(0, 0, 0, 0.15);
  }
`;

export default IconContainer;
