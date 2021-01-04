import styled from "styled-components";
const Button = styled.button`
  font-size: 18px;
  color: #fdbb2c;
  padding: 5px 10px;
  cursor: pointer;
  background: #ffffff;
  outline: none;
  border: solid #fdbb2c 1px;
  border-radius: 5px;

  &:active {
    background: #fdbb2c;
    color: #ffffff;
  }
`;

export default Button;
