import styled from "styled-components";
import { layout, space } from "styled-system";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  ${layout}
  ${space}
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 24px;
      height: 24px;
    }
    &::-webkit-color-swatch {
      border: none;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    background-color: #f2f2f2;
    font-size: 1rem;
  }
`;

const ColorPicker = (props) => {
  return (
    <Container>
      <input type="color" {...props} />
      <input type="text" {...props} />
    </Container>
  );
};

export default ColorPicker;
