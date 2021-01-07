import styled from "styled-components";
import { Link } from "react-router-dom";

const CTAButton = styled(Link)`
  font-size: 24px;
  color: #ffffff;
  padding: 10px 15px;
  background: #fdbb2c;
  box-shadow: 0px 0px 0px 0px #ffffff;
  border: solid #ffffff 1px;
  border-radius: 5px;
  &:hover {
    font-size: 24px;
    background: #ef8d23;
    color: #ffffff;
    border-radius: 5px;
  }
`;

export default CTAButton;
